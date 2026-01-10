/**
 * Aura AI Audit Logger Types
 *
 * Types for AI interaction auditing via FHIR AuditEvent resources.
 */

/**
 * Outcome codes for FHIR AuditEvent.
 * @see https://www.hl7.org/fhir/valueset-audit-event-outcome.html
 */
export type AuditEventOutcome = '0' | '4' | '8' | '12';

/**
 * Outcome code meanings:
 * - '0' = Success
 * - '4' = Minor failure
 * - '8' = Serious failure
 * - '12' = Major failure
 */
export const AUDIT_OUTCOME = {
  SUCCESS: '0' as const,
  MINOR_FAILURE: '4' as const,
  SERIOUS_FAILURE: '8' as const,
  MAJOR_FAILURE: '12' as const,
};

/**
 * Input data for logging an AI interaction.
 */
export interface AiAuditInput {
  /** The user who triggered the AI request (Practitioner, User ID) */
  actorReference: string;
  /** The patient this AI interaction is about (optional) */
  patientReference?: string;
  /** The encounter context (optional) */
  encounterReference?: string;
  /** The type of AI operation being performed */
  operationType: AiOperationType;
  /** The prompt sent to the AI (will be hashed for privacy) */
  prompt: string;
  /** The model version used */
  modelVersion: string;
  /** The prompt template version if applicable */
  promptTemplateVersion?: string;
}

/**
 * Output data for completing an AI audit log.
 */
export interface AiAuditOutput {
  /** The AI response text (will be hashed for privacy) */
  response: string;
  /** Token count for input */
  inputTokens: number;
  /** Token count for output */
  outputTokens: number;
  /** Response time in milliseconds */
  durationMs: number;
  /** AI confidence score (0-1) */
  confidenceScore?: number;
  /** The outcome of the AI call */
  outcome: AuditEventOutcome;
  /** Error message if outcome is not success */
  errorMessage?: string;
}

/**
 * Complete AI audit data combining input and output.
 */
export interface AiAuditData extends AiAuditInput, AiAuditOutput {
  /** Correlation ID for request tracing */
  correlationId: string;
}

/**
 * Types of AI operations that can be audited.
 */
export type AiOperationType =
  | 'pre-visit-synthesis'
  | 'action-generation'
  | 'documentation-generation'
  | 'care-plan-analysis'
  | 'decision-aid'
  | 'other';

/**
 * Extension URLs for AI audit metadata.
 */
export const AI_AUDIT_EXTENSION = {
  modelVersion: 'https://fhir.ottehr.com/Extension/aura-ai-model-version',
  promptTemplateVersion: 'https://fhir.ottehr.com/Extension/aura-ai-prompt-template-version',
  confidenceScore: 'https://fhir.ottehr.com/Extension/aura-ai-confidence-score',
  responseTimeMs: 'https://fhir.ottehr.com/Extension/aura-ai-response-time-ms',
  correlationId: 'https://fhir.ottehr.com/Extension/aura-ai-correlation-id',
  inputTokens: 'https://fhir.ottehr.com/Extension/aura-ai-input-tokens',
  outputTokens: 'https://fhir.ottehr.com/Extension/aura-ai-output-tokens',
} as const;

/**
 * Coding system for Aura AI audit events.
 */
export const AURA_AUDIT_EVENT_TYPE = {
  system: 'https://fhir.ottehr.com/CodeSystem/aura-audit-event-type',
  code: 'aura-ai-interaction',
  display: 'Aura AI Interaction',
} as const;

/**
 * Coding system for AI operation subtypes.
 */
export const AI_OPERATION_CODING: Record<AiOperationType, { code: string; display: string }> = {
  'pre-visit-synthesis': { code: 'pre-visit-synthesis', display: 'Pre-Visit Synthesis' },
  'action-generation': { code: 'action-generation', display: 'Action Generation' },
  'documentation-generation': { code: 'documentation-generation', display: 'Documentation Generation' },
  'care-plan-analysis': { code: 'care-plan-analysis', display: 'Care Plan Analysis' },
  'decision-aid': { code: 'decision-aid', display: 'Decision Aid' },
  other: { code: 'other', display: 'Other AI Operation' },
};
