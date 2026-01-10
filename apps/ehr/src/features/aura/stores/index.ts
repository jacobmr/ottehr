/**
 * Aura Zustand Stores
 *
 * Export all Aura state management stores from this barrel file.
 */

// Actions store - AI-generated actions and approval workflow
export { useActionsStore } from './actions.store';

// Synthesis store - Pre-visit AI synthesis
export { useSynthesisStore, selectSynthesisLoading, selectPatientConcerns, selectQualityGaps } from './synthesis.store';

// Care plan store - Longitudinal care plan management
export { useCarePlanStore, selectFilteredCarePlanItems, selectItemsNeedingReview } from './care-plan.store';

// Shared view store - Clinician-patient shared screen mode
export { useSharedViewStore, selectUsePatientLanguage, selectShowSharedBadge } from './shared-view.store';
