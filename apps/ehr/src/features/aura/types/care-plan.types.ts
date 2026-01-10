/**
 * Aura Care Plan Types
 *
 * Type definitions for longitudinal care plan management.
 */

import type { AuraSource, AuraStatus } from 'utils';

/**
 * A single item in the care plan.
 */
export interface CarePlanItem {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** Detailed description */
  description?: string;
  /** Category of care plan item */
  category: CarePlanCategory;
  /** Current status */
  status: AuraStatus;
  /** Source of the item */
  source: AuraSource;
  /** Date when item was added */
  addedAt: string;
  /** Date when item was last modified */
  modifiedAt?: string;
  /** Date when item should be reviewed */
  reviewDate?: string;
  /** Associated diagnoses (ICD-10 codes) */
  diagnoses?: string[];
  /** Associated goals */
  goals?: CarePlanGoal[];
  /** FHIR resource reference if backed by FHIR */
  fhirReference?: string;
}

/**
 * Categories for care plan items.
 */
export type CarePlanCategory =
  | 'diagnosis'
  | 'medication'
  | 'allergy'
  | 'procedure'
  | 'lab-monitoring'
  | 'lifestyle'
  | 'preventive-care'
  | 'referral'
  | 'other';

/**
 * Goal associated with a care plan item.
 */
export interface CarePlanGoal {
  /** Goal identifier */
  id: string;
  /** Goal description */
  description: string;
  /** Target value if measurable */
  target?: string;
  /** Current progress if measurable */
  current?: string;
  /** Status of the goal */
  status: 'active' | 'achieved' | 'cancelled';
}

/**
 * Filters for care plan display.
 */
export interface CarePlanFilters {
  /** Filter by status */
  status?: AuraStatus[];
  /** Filter by category */
  category?: CarePlanCategory[];
  /** Filter by source */
  source?: AuraSource[];
  /** Search text */
  searchText?: string;
  /** Show only items needing review */
  needsReviewOnly?: boolean;
}

/**
 * Default empty filters.
 */
export const DEFAULT_CARE_PLAN_FILTERS: CarePlanFilters = {
  status: undefined,
  category: undefined,
  source: undefined,
  searchText: undefined,
  needsReviewOnly: false,
};
