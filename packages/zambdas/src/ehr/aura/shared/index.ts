/**
 * Aura Zambda Shared Utilities
 *
 * Export shared infrastructure for Aura zambdas from this barrel file.
 */

// AI Client - completion API with circuit breaker and retry
export {
  generateCompletion,
  isAiServiceAvailable,
  getAiServiceStatus,
  AiCompletionOptions,
  AiCompletionResponse,
  AiUnavailableError,
} from './ai-client';

// AI Client Types
export type { AiUsageMetrics, CircuitBreakerState, CircuitBreakerConfig } from './ai-client.types';

// Circuit Breaker - for advanced use cases
export { CircuitBreaker, getAiCircuitBreaker, resetAiCircuitBreaker } from './circuit-breaker';

// AI Audit Logger - FHIR AuditEvent creation for AI interactions
export { logAiInteraction, logAiSuccess, logAiFailure } from './audit-logger';

// Audit Logger Types
export type {
  AiAuditData,
  AiAuditInput,
  AiAuditOutput,
  AiOperationType,
  AuditEventOutcome,
} from './audit-logger.types';

// Audit Logger Constants
export { AUDIT_OUTCOME, AI_AUDIT_EXTENSION, AURA_AUDIT_EVENT_TYPE, AI_OPERATION_CODING } from './audit-logger.types';

// Placeholder exports for future stories:
// export { handleAiError } from './error-handler';
