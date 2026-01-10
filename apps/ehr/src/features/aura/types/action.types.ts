/**
 * Aura Action Types
 *
 * Type definitions for AI-generated actions and clinician approvals.
 */

import type { AuraActionType, AuraAiConfidence, AuraApprovalStatus, AuraRoutingActor } from 'utils';

/**
 * Represents an AI-generated or clinician-created action.
 */
export interface AuraAction {
  /** Unique identifier for the action */
  id: string;
  /** Type of action (prescription, lab, referral, task, notify) */
  type: AuraActionType;
  /** Display title for the action */
  title: string;
  /** Detailed description */
  description?: string;
  /** Who should handle this action */
  routingActor: AuraRoutingActor;
  /** Current approval status */
  approvalStatus: AuraApprovalStatus;
  /** AI confidence level if AI-generated */
  aiConfidence?: AuraAiConfidence;
  /** AI reasoning for the recommendation */
  aiReasoning?: string;
  /** Source of the action (ai, clinician, patient) */
  source: 'ai' | 'clinician' | 'patient';
  /** Timestamp when the action was created */
  createdAt: string;
  /** Timestamp when the action was last modified */
  modifiedAt?: string;
  /** Reference to the patient this action is for */
  patientReference: string;
  /** Reference to the encounter context */
  encounterReference?: string;
  /** Additional structured data depending on action type */
  payload?: ActionPayload;
}

/**
 * Type-specific payload data for actions.
 */
export type ActionPayload = PrescriptionPayload | LabPayload | ReferralPayload | TaskPayload | NotifyPayload;

/**
 * Payload for prescription actions.
 */
export interface PrescriptionPayload {
  type: 'prescription';
  medicationName: string;
  dosage?: string;
  frequency?: string;
  duration?: string;
  instructions?: string;
}

/**
 * Payload for lab order actions.
 */
export interface LabPayload {
  type: 'lab';
  testName: string;
  testCode?: string;
  urgency?: 'routine' | 'urgent' | 'stat';
  instructions?: string;
}

/**
 * Payload for referral actions.
 */
export interface ReferralPayload {
  type: 'referral';
  specialtyType: string;
  reason: string;
  urgency?: 'routine' | 'urgent';
  preferredProvider?: string;
}

/**
 * Payload for task actions.
 */
export interface TaskPayload {
  type: 'task';
  taskDescription: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
}

/**
 * Payload for notification actions.
 */
export interface NotifyPayload {
  type: 'notify';
  recipient: 'patient' | 'caregiver' | 'provider' | 'external';
  channel?: 'sms' | 'email' | 'portal' | 'phone';
  message: string;
}

/**
 * State of the approval process.
 */
export type ApprovalState = 'idle' | 'approving' | 'success' | 'error';

/**
 * Undo context for batch approvals.
 */
export interface UndoContext {
  /** Actions that were approved */
  approvedActionIds: string[];
  /** Timestamp when approval occurred */
  approvedAt: number;
  /** Whether undo is still available */
  canUndo: boolean;
}
