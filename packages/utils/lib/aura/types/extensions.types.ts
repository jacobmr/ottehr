/**
 * Aura FHIR Extension Types
 *
 * TypeScript types for Aura-specific FHIR extension values.
 * These types ensure type safety when working with Aura extensions on FHIR resources.
 */

/**
 * Care plan item state
 * Used on CarePlan entries to track their lifecycle status
 */
export type AuraStatus = 'active' | 'new' | 'modified' | 'discontinued';

/**
 * Origin of item - who/what created the resource
 * Used to distinguish AI-generated vs clinician-entered vs patient-entered data
 */
export type AuraSource = 'clinician' | 'ai' | 'patient';

/**
 * Action destination - which actor the action routes to
 * Used on Task resources to indicate who should complete the action
 */
export type AuraRoutingActor = 'physician' | 'ma' | 'careManager' | 'patient' | 'caregiver' | 'external';

/**
 * Action category - the type of clinical action
 * Used to categorize actions for filtering and display
 */
export type AuraActionType = 'prescription' | 'lab' | 'referral' | 'task' | 'notify';

/**
 * Approval state - clinician approval status
 * Used to track whether AI suggestions have been reviewed
 */
export type AuraApprovalStatus = 'pending' | 'approved' | 'rejected';

/**
 * AI certainty level - confidence in AI-generated content
 * Used to communicate AI confidence to clinicians
 */
export type AuraAiConfidence = 'high' | 'medium' | 'low';

/**
 * Union type of all Aura extension value types
 */
export type AuraExtensionValue =
  | AuraStatus
  | AuraSource
  | AuraRoutingActor
  | AuraActionType
  | AuraApprovalStatus
  | AuraAiConfidence;

/**
 * Extension name keys for type-safe extension access
 */
export type AuraExtensionName = 'status' | 'source' | 'routingActor' | 'actionType' | 'approvalStatus' | 'aiConfidence';

/**
 * Mapping from extension name to its value type
 */
export interface AuraExtensionValueMap {
  status: AuraStatus;
  source: AuraSource;
  routingActor: AuraRoutingActor;
  actionType: AuraActionType;
  approvalStatus: AuraApprovalStatus;
  aiConfidence: AuraAiConfidence;
}
