/**
 * Aura Shared View Store
 *
 * Zustand store for managing shared view state (clinician-patient shared screen).
 */

import { create } from 'zustand';

/**
 * Shared view store state.
 */
interface SharedViewState {
  /** Whether the shared view mode is active */
  isShared: boolean;
  /** Whether to show patient-friendly view */
  patientViewMode: boolean;
  /** Currently focused element for shared attention */
  focusedElementId: string | null;
}

/**
 * Shared view store actions (methods).
 */
interface SharedViewActions {
  /** Toggle shared view mode */
  toggleShared: () => void;
  /** Set shared view mode explicitly */
  setShared: (isShared: boolean) => void;
  /** Set patient view mode */
  setPatientViewMode: (mode: boolean) => void;
  /** Set the focused element for shared attention */
  setFocusedElement: (elementId: string | null) => void;
  /** Reset store to initial state */
  reset: () => void;
}

/**
 * Initial state for the shared view store.
 */
const initialState: SharedViewState = {
  isShared: false,
  patientViewMode: false,
  focusedElementId: null,
};

/**
 * Shared view store for clinician-patient shared screen mode.
 *
 * When shared view is enabled, the clinician and patient see the same screen,
 * and certain UI elements are adapted for patient comprehension.
 *
 * @example
 * ```typescript
 * const { isShared, toggleShared, patientViewMode } = useSharedViewStore();
 *
 * // Toggle shared view
 * toggleShared();
 *
 * // Check if in shared mode
 * if (isShared) {
 *   // Show shared view badge
 * }
 * ```
 */
export const useSharedViewStore = create<SharedViewState & SharedViewActions>()((set) => ({
  ...initialState,

  toggleShared: () => {
    set((state) => ({
      isShared: !state.isShared,
      // When entering shared mode, enable patient view by default
      patientViewMode: !state.isShared ? true : state.patientViewMode,
    }));
  },

  setShared: (isShared) => {
    set({
      isShared,
      // When entering shared mode, enable patient view by default
      patientViewMode: isShared ? true : false,
    });
  },

  setPatientViewMode: (mode) => {
    set({ patientViewMode: mode });
  },

  setFocusedElement: (elementId) => {
    set({ focusedElementId: elementId });
  },

  reset: () => {
    set(initialState);
  },
}));

/**
 * Selector for determining if patient-friendly language should be used.
 */
export const selectUsePatientLanguage = (state: SharedViewState): boolean => state.isShared && state.patientViewMode;

/**
 * Selector for the shared view badge visibility.
 */
export const selectShowSharedBadge = (state: SharedViewState): boolean => state.isShared;
