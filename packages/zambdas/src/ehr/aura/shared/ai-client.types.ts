/**
 * Aura AI Client Types
 *
 * Types for AI completion requests and responses, including error handling.
 */

/**
 * Options for AI completion requests.
 */
export interface AiCompletionOptions {
  /** Temperature for response randomness (0-1). Lower = more deterministic. Default: 0 */
  temperature?: number;
  /** Maximum tokens in the response. Default: 4096 */
  maxTokens?: number;
  /** System prompt to set AI behavior. Optional. */
  systemPrompt?: string;
  /** Correlation ID for request tracing. Auto-generated if not provided. */
  correlationId?: string;
}

/**
 * Usage metrics from an AI completion request.
 */
export interface AiUsageMetrics {
  /** Tokens used in the input prompt */
  inputTokens: number;
  /** Tokens generated in the response */
  outputTokens: number;
  /** Total tokens (input + output) */
  totalTokens: number;
}

/**
 * Structured response from an AI completion request.
 */
export interface AiCompletionResponse {
  /** The generated text content */
  content: string;
  /** Usage metrics for the request */
  usage: AiUsageMetrics;
  /** Model version used for the request */
  modelVersion: string;
  /** Correlation ID for request tracing */
  correlationId: string;
  /** Request duration in milliseconds */
  durationMs: number;
  /** Stop reason from the model (e.g., 'end_turn', 'max_tokens') */
  stopReason: string | null;
}

/**
 * Error thrown when the AI service is unavailable due to circuit breaker open.
 */
export class AiUnavailableError extends Error {
  /** Error code for programmatic handling */
  readonly code = 'AI_UNAVAILABLE';
  /** Whether this error is recoverable (circuit breaker will eventually close) */
  readonly recoverable = true;
  /** Timestamp when the circuit breaker will attempt to close */
  readonly retryAfter: Date;

  constructor(retryAfter: Date, message?: string) {
    super(message ?? `AI service unavailable. Retry after ${retryAfter.toISOString()}`);
    this.name = 'AiUnavailableError';
    this.retryAfter = retryAfter;
    // Maintain proper stack trace in V8 environments
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AiUnavailableError);
    }
  }
}

/**
 * Circuit breaker state.
 */
export type CircuitBreakerState = 'closed' | 'open' | 'half-open';

/**
 * Configuration for the circuit breaker.
 */
export interface CircuitBreakerConfig {
  /** Number of consecutive failures before opening the circuit. Default: 5 */
  failureThreshold: number;
  /** Time in milliseconds to wait before transitioning from open to half-open. Default: 30000 */
  resetTimeoutMs: number;
}

/**
 * Internal state tracking for the circuit breaker.
 */
export interface CircuitBreakerStateData {
  state: CircuitBreakerState;
  failureCount: number;
  lastFailureTime: Date | null;
  nextAttemptTime: Date | null;
}
