/**
 * Aura AI Client
 *
 * Wrapper around the Anthropic Claude SDK with:
 * - Circuit breaker protection
 * - Exponential backoff retry
 * - Correlation ID logging
 * - Usage metrics tracking
 */

import Anthropic from '@anthropic-ai/sdk';
import { uuid } from 'short-uuid';
import { getSecret, Secrets, SecretsKeys } from 'utils';
import type { AiCompletionOptions, AiCompletionResponse } from './ai-client.types';
import { getAiCircuitBreaker } from './circuit-breaker';

/**
 * Default AI completion options.
 */
const DEFAULT_OPTIONS: Required<Omit<AiCompletionOptions, 'systemPrompt'>> = {
  temperature: 0,
  maxTokens: 4096,
  correlationId: '', // Will be generated if not provided
};

/**
 * Retry configuration for exponential backoff.
 */
const RETRY_CONFIG = {
  maxRetries: 3,
  baseDelayMs: 1000,
  maxDelayMs: 10000,
};

/**
 * Secrets key for the Aura AI model configuration.
 * Falls back to a default model if not set.
 */
const AURA_AI_MODEL_KEY = 'AURA_AI_MODEL';
const DEFAULT_AI_MODEL = 'claude-sonnet-4-20250514';

/**
 * Get the configured AI model from secrets or fall back to default.
 */
function getAiModel(secrets: Secrets | null): string {
  try {
    return getSecret(AURA_AI_MODEL_KEY, secrets);
  } catch {
    // Fall back to default model if AURA_AI_MODEL not configured
    console.log(`[AiClient] AURA_AI_MODEL not set, using default: ${DEFAULT_AI_MODEL}`);
    return DEFAULT_AI_MODEL;
  }
}

/**
 * Create an Anthropic client instance.
 */
function createAnthropicClient(secrets: Secrets | null): Anthropic {
  const apiKey = getSecret(SecretsKeys.ANTHROPIC_API_KEY, secrets);
  return new Anthropic({ apiKey });
}

/**
 * Calculate delay for exponential backoff with jitter.
 * @param attempt The current attempt number (0-indexed)
 * @returns Delay in milliseconds
 */
function calculateBackoffDelay(attempt: number): number {
  const exponentialDelay = RETRY_CONFIG.baseDelayMs * Math.pow(2, attempt);
  const cappedDelay = Math.min(exponentialDelay, RETRY_CONFIG.maxDelayMs);
  // Add jitter (±10%)
  const jitter = cappedDelay * 0.1 * (Math.random() * 2 - 1);
  return Math.round(cappedDelay + jitter);
}

/**
 * Sleep for the specified duration.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if an error is retryable (rate limit, server error, network error).
 */
function isRetryableError(error: unknown): boolean {
  if (error instanceof Anthropic.RateLimitError) {
    return true;
  }
  if (error instanceof Anthropic.InternalServerError) {
    return true;
  }
  if (error instanceof Anthropic.APIConnectionError) {
    return true;
  }
  // Network errors
  if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
    return true;
  }
  return false;
}

/**
 * Generate an AI completion with circuit breaker protection and retry logic.
 *
 * @param prompt The user prompt to send to the AI
 * @param secrets Oystehr secrets containing API keys
 * @param options Optional configuration for the request
 * @returns Structured response with content and usage metrics
 * @throws AiUnavailableError if circuit breaker is open
 * @throws Error for non-retryable failures after max retries
 *
 * @example
 * ```typescript
 * const response = await generateCompletion(
 *   'Summarize this patient visit',
 *   secrets,
 *   { temperature: 0.3, maxTokens: 2048 }
 * );
 * console.log(response.content);
 * console.log(`Tokens used: ${response.usage.totalTokens}`);
 * ```
 */
export async function generateCompletion(
  prompt: string,
  secrets: Secrets | null,
  options: AiCompletionOptions = {}
): Promise<AiCompletionResponse> {
  const correlationId = options.correlationId || uuid();
  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    correlationId,
  };

  const circuitBreaker = getAiCircuitBreaker();
  const startTime = Date.now();

  // Check circuit breaker before attempting request
  circuitBreaker.ensureAllowed();

  const client = createAnthropicClient(secrets);
  const model = getAiModel(secrets);

  console.log(`[AiClient] [${correlationId}] Starting completion request`, {
    model,
    temperature: mergedOptions.temperature,
    maxTokens: mergedOptions.maxTokens,
    hasSystemPrompt: !!options.systemPrompt,
  });

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      if (attempt > 0) {
        const delay = calculateBackoffDelay(attempt - 1);
        console.log(
          `[AiClient] [${correlationId}] Retry attempt ${attempt}/${RETRY_CONFIG.maxRetries}, waiting ${delay}ms`
        );
        await sleep(delay);
      }

      const response = await client.messages.create({
        model,
        max_tokens: mergedOptions.maxTokens,
        temperature: mergedOptions.temperature,
        ...(options.systemPrompt && { system: options.systemPrompt }),
        messages: [{ role: 'user', content: prompt }],
      });

      // Extract text content from response
      const textContent = response.content.find((block) => block.type === 'text');
      const content = textContent && 'text' in textContent ? textContent.text : '';

      const durationMs = Date.now() - startTime;

      // Record success with circuit breaker
      circuitBreaker.recordSuccess();

      const result: AiCompletionResponse = {
        content,
        usage: {
          inputTokens: response.usage.input_tokens,
          outputTokens: response.usage.output_tokens,
          totalTokens: response.usage.input_tokens + response.usage.output_tokens,
        },
        modelVersion: response.model,
        correlationId,
        durationMs,
        stopReason: response.stop_reason,
      };

      console.log(`[AiClient] [${correlationId}] Completion successful`, {
        durationMs,
        inputTokens: result.usage.inputTokens,
        outputTokens: result.usage.outputTokens,
        stopReason: result.stopReason,
      });

      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      console.error(`[AiClient] [${correlationId}] Request failed (attempt ${attempt + 1})`, {
        error: lastError.message,
        isRetryable: isRetryableError(error),
      });

      // Don't retry if it's not a retryable error or we've exhausted retries
      if (!isRetryableError(error) || attempt === RETRY_CONFIG.maxRetries) {
        circuitBreaker.recordFailure();
        throw lastError;
      }
    }
  }

  // Should never reach here, but TypeScript needs this
  circuitBreaker.recordFailure();
  throw lastError ?? new Error('Unknown error in AI completion');
}

/**
 * Check if the AI service is currently available (circuit breaker not open).
 * Does not make an actual API call.
 */
export function isAiServiceAvailable(): boolean {
  return getAiCircuitBreaker().isAllowed();
}

/**
 * Get the current AI circuit breaker state for monitoring.
 */
export function getAiServiceStatus(): {
  available: boolean;
  state: string;
  failureCount: number;
  nextRetryTime: Date | null;
} {
  const breaker = getAiCircuitBreaker();
  const info = breaker.getStateInfo();
  return {
    available: breaker.isAllowed(),
    state: info.state,
    failureCount: info.failureCount,
    nextRetryTime: info.nextAttemptTime,
  };
}

// Re-export types for convenience
export { AiCompletionOptions, AiCompletionResponse, AiUnavailableError } from './ai-client.types';
