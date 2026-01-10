/**
 * Aura Extension Value Constants
 *
 * Arrays of valid values for each Aura FHIR extension.
 * Used for validation and iteration over possible values.
 */

import type {
  AuraActionType,
  AuraAiConfidence,
  AuraApprovalStatus,
  AuraRoutingActor,
  AuraSource,
  AuraStatus,
} from '../types/extensions.types';

/**
 * Valid values for aura-status extension
 * Care plan item lifecycle states
 */
export const AURA_STATUS_VALUES: readonly AuraStatus[] = ['active', 'new', 'modified', 'discontinued'] as const;

/**
 * Valid values for aura-source extension
 * Origin of the item
 */
export const AURA_SOURCE_VALUES: readonly AuraSource[] = ['clinician', 'ai', 'patient'] as const;

/**
 * Valid values for aura-routing-actor extension
 * Action destination actors
 */
export const AURA_ROUTING_ACTOR_VALUES: readonly AuraRoutingActor[] = [
  'physician',
  'ma',
  'careManager',
  'patient',
  'caregiver',
  'external',
] as const;

/**
 * Valid values for aura-action-type extension
 * Action categories
 */
export const AURA_ACTION_TYPE_VALUES: readonly AuraActionType[] = [
  'prescription',
  'lab',
  'referral',
  'task',
  'notify',
] as const;

/**
 * Valid values for aura-approval-status extension
 * Clinician approval states
 */
export const AURA_APPROVAL_STATUS_VALUES: readonly AuraApprovalStatus[] = ['pending', 'approved', 'rejected'] as const;

/**
 * Valid values for aura-ai-confidence extension
 * AI certainty levels
 */
export const AURA_AI_CONFIDENCE_VALUES: readonly AuraAiConfidence[] = ['high', 'medium', 'low'] as const;

/**
 * Type guard: Check if a value is a valid AuraStatus
 */
export function isAuraStatus(value: string): value is AuraStatus {
  return AURA_STATUS_VALUES.includes(value as AuraStatus);
}

/**
 * Type guard: Check if a value is a valid AuraSource
 */
export function isAuraSource(value: string): value is AuraSource {
  return AURA_SOURCE_VALUES.includes(value as AuraSource);
}

/**
 * Type guard: Check if a value is a valid AuraRoutingActor
 */
export function isAuraRoutingActor(value: string): value is AuraRoutingActor {
  return AURA_ROUTING_ACTOR_VALUES.includes(value as AuraRoutingActor);
}

/**
 * Type guard: Check if a value is a valid AuraActionType
 */
export function isAuraActionType(value: string): value is AuraActionType {
  return AURA_ACTION_TYPE_VALUES.includes(value as AuraActionType);
}

/**
 * Type guard: Check if a value is a valid AuraApprovalStatus
 */
export function isAuraApprovalStatus(value: string): value is AuraApprovalStatus {
  return AURA_APPROVAL_STATUS_VALUES.includes(value as AuraApprovalStatus);
}

/**
 * Type guard: Check if a value is a valid AuraAiConfidence
 */
export function isAuraAiConfidence(value: string): value is AuraAiConfidence {
  return AURA_AI_CONFIDENCE_VALUES.includes(value as AuraAiConfidence);
}
