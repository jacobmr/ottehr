/**
 * Aura Circuit Breaker
 *
 * Implements the circuit breaker pattern for AI service calls to prevent
 * cascading failures when the AI service is experiencing issues.
 *
 * States:
 * - CLOSED: Normal operation, requests flow through
 * - OPEN: Failures exceeded threshold, requests are blocked
 * - HALF-OPEN: Testing if service has recovered with a single request
 */

import {
  AiUnavailableError,
  CircuitBreakerConfig,
  CircuitBreakerState,
  CircuitBreakerStateData,
} from './ai-client.types';

/**
 * Default circuit breaker configuration per architecture spec.
 */
const DEFAULT_CONFIG: CircuitBreakerConfig = {
  failureThreshold: 5, // Opens after 5 consecutive failures
  resetTimeoutMs: 30000, // Stays open for 30 seconds
};

/**
 * Circuit breaker implementation for protecting AI service calls.
 *
 * Usage:
 * ```typescript
 * const breaker = new CircuitBreaker();
 *
 * async function callAI() {
 *   breaker.ensureAllowed(); // Throws if circuit is open
 *   try {
 *     const result = await aiService.call();
 *     breaker.recordSuccess();
 *     return result;
 *   } catch (error) {
 *     breaker.recordFailure();
 *     throw error;
 *   }
 * }
 * ```
 */
export class CircuitBreaker {
  private config: CircuitBreakerConfig;
  private stateData: CircuitBreakerStateData;

  constructor(config: Partial<CircuitBreakerConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.stateData = {
      state: 'closed',
      failureCount: 0,
      lastFailureTime: null,
      nextAttemptTime: null,
    };
  }

  /**
   * Get the current circuit breaker state.
   */
  get state(): CircuitBreakerState {
    return this.stateData.state;
  }

  /**
   * Get the current failure count.
   */
  get failureCount(): number {
    return this.stateData.failureCount;
  }

  /**
   * Check if a request is currently allowed.
   * Does not throw - use ensureAllowed() for that.
   */
  isAllowed(): boolean {
    this.maybeTransitionToHalfOpen();
    return this.stateData.state !== 'open';
  }

  /**
   * Ensure a request is allowed, throwing AiUnavailableError if circuit is open.
   * Call this before making an AI request.
   *
   * @throws AiUnavailableError if circuit is open
   */
  ensureAllowed(): void {
    this.maybeTransitionToHalfOpen();

    if (this.stateData.state === 'open') {
      throw new AiUnavailableError(
        this.stateData.nextAttemptTime!,
        `AI service circuit breaker is open. ${this.stateData.failureCount} consecutive failures recorded.`
      );
    }
  }

  /**
   * Record a successful request. Resets the circuit breaker to closed state.
   * Call this after a successful AI request.
   */
  recordSuccess(): void {
    const previousState = this.stateData.state;
    this.stateData = {
      state: 'closed',
      failureCount: 0,
      lastFailureTime: null,
      nextAttemptTime: null,
    };

    if (previousState === 'half-open') {
      console.log('[CircuitBreaker] Service recovered, circuit closed');
    }
  }

  /**
   * Record a failed request. May transition to open state if threshold exceeded.
   * Call this after a failed AI request.
   */
  recordFailure(): void {
    const now = new Date();
    this.stateData.failureCount++;
    this.stateData.lastFailureTime = now;

    if (this.stateData.state === 'half-open') {
      // Half-open test failed, re-open the circuit
      this.transitionToOpen(now);
      console.log('[CircuitBreaker] Half-open test failed, circuit re-opened');
    } else if (this.stateData.failureCount >= this.config.failureThreshold) {
      // Threshold exceeded, open the circuit
      this.transitionToOpen(now);
      console.log(`[CircuitBreaker] Failure threshold (${this.config.failureThreshold}) exceeded, circuit opened`);
    } else {
      console.log(`[CircuitBreaker] Failure ${this.stateData.failureCount}/${this.config.failureThreshold}`);
    }
  }

  /**
   * Manually reset the circuit breaker to closed state.
   * Use with caution - typically for testing or manual intervention.
   */
  reset(): void {
    this.stateData = {
      state: 'closed',
      failureCount: 0,
      lastFailureTime: null,
      nextAttemptTime: null,
    };
    console.log('[CircuitBreaker] Manually reset to closed state');
  }

  /**
   * Get detailed state information for monitoring/debugging.
   */
  getStateInfo(): Readonly<CircuitBreakerStateData & { config: CircuitBreakerConfig }> {
    return {
      ...this.stateData,
      config: { ...this.config },
    };
  }

  /**
   * Transition to open state.
   */
  private transitionToOpen(now: Date): void {
    this.stateData.state = 'open';
    this.stateData.nextAttemptTime = new Date(now.getTime() + this.config.resetTimeoutMs);
  }

  /**
   * Check if we should transition from open to half-open based on timeout.
   */
  private maybeTransitionToHalfOpen(): void {
    if (this.stateData.state === 'open' && this.stateData.nextAttemptTime) {
      const now = new Date();
      if (now >= this.stateData.nextAttemptTime) {
        this.stateData.state = 'half-open';
        console.log('[CircuitBreaker] Reset timeout elapsed, transitioning to half-open');
      }
    }
  }
}

// Singleton instance for the AI client circuit breaker
// Using a module-level singleton allows state to persist across requests
// within the same zambda instance while allowing the instance to be
// garbage collected when the zambda is cold-started
let aiCircuitBreakerInstance: CircuitBreaker | null = null;

/**
 * Get the shared circuit breaker instance for AI service calls.
 * Creates a new instance if one doesn't exist.
 */
export function getAiCircuitBreaker(): CircuitBreaker {
  if (!aiCircuitBreakerInstance) {
    aiCircuitBreakerInstance = new CircuitBreaker();
  }
  return aiCircuitBreakerInstance;
}

/**
 * Reset the shared circuit breaker instance.
 * Primarily for testing purposes.
 */
export function resetAiCircuitBreaker(): void {
  aiCircuitBreakerInstance = null;
}
