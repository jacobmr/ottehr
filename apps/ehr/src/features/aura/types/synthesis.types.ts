/**
 * Aura Synthesis Types
 *
 * Type definitions for pre-visit synthesis and patient context.
 */

/**
 * Patient concern captured during pre-visit.
 */
export interface PatientConcern {
  /** Unique identifier */
  id: string;
  /** The concern text as stated by patient */
  text: string;
  /** Priority level assigned by patient */
  priority: 'high' | 'medium' | 'low';
  /** Category of concern if determined */
  category?: ConcernCategory;
  /** Timestamp when captured */
  capturedAt: string;
}

/**
 * Categories for patient concerns.
 */
export type ConcernCategory =
  | 'symptom'
  | 'medication'
  | 'lifestyle'
  | 'mental-health'
  | 'preventive-care'
  | 'chronic-condition'
  | 'other';

/**
 * Key metric from patient history.
 */
export interface KeyMetric {
  /** Label for the metric */
  label: string;
  /** Current value */
  value: string;
  /** Unit of measurement */
  unit?: string;
  /** Trend direction if applicable */
  trend?: 'up' | 'down' | 'stable';
  /** Whether this metric needs attention */
  needsAttention?: boolean;
}

/**
 * Quality gap identified for the patient.
 */
export interface QualityGap {
  /** Gap identifier (e.g., HEDIS measure code) */
  id: string;
  /** Human-readable gap description */
  description: string;
  /** HEDIS or other quality measure name */
  measureName?: string;
  /** Due date for closure if applicable */
  dueDate?: string;
  /** Priority level */
  priority: 'high' | 'medium' | 'low';
}

/**
 * Pre-visit synthesis result from AI.
 */
export interface PreVisitSynthesis {
  /** Unique identifier for this synthesis */
  id: string;
  /** Patient reference */
  patientReference: string;
  /** Encounter reference */
  encounterReference: string;
  /** Patient-reported concerns from pre-visit */
  patientConcerns: PatientConcern[];
  /** Key metrics from patient history */
  keyMetrics: KeyMetric[];
  /** Identified quality gaps */
  qualityGaps: QualityGap[];
  /** Brief narrative summary */
  summary: string;
  /** AI model version used */
  modelVersion: string;
  /** Timestamp when synthesis was generated */
  generatedAt: string;
  /** Correlation ID for tracing */
  correlationId: string;
}

/**
 * Loading state for synthesis fetch.
 */
export type SynthesisLoadingState = 'idle' | 'loading' | 'success' | 'error';
