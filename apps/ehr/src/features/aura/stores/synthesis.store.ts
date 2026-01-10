/**
 * Aura Synthesis Store
 *
 * Zustand store for managing pre-visit synthesis state.
 */

import { create } from 'zustand';
import type { PreVisitSynthesis, SynthesisLoadingState } from '../types';

/**
 * Synthesis store state.
 */
interface SynthesisState {
  /** Current pre-visit synthesis data */
  synthesis: PreVisitSynthesis | null;
  /** Loading state */
  loadingState: SynthesisLoadingState;
  /** Error if fetch failed */
  error: Error | null;
}

/**
 * Synthesis store actions (methods).
 */
interface SynthesisActions {
  /** Fetch synthesis for an encounter */
  fetchSynthesis: (encounterId: string) => Promise<void>;
  /** Set synthesis data directly */
  setSynthesis: (synthesis: PreVisitSynthesis | null) => void;
  /** Clear synthesis and reset state */
  clear: () => void;
  /** Reset store to initial state */
  reset: () => void;
}

/**
 * Initial state for the synthesis store.
 */
const initialState: SynthesisState = {
  synthesis: null,
  loadingState: 'idle',
  error: null,
};

/**
 * Synthesis store for managing pre-visit AI synthesis.
 *
 * @example
 * ```typescript
 * const { synthesis, fetchSynthesis, loadingState } = useSynthesisStore();
 *
 * // Fetch synthesis for encounter
 * await fetchSynthesis('encounter-123');
 *
 * // Access data
 * if (synthesis) {
 *   console.log(synthesis.patientConcerns);
 * }
 * ```
 */
export const useSynthesisStore = create<SynthesisState & SynthesisActions>()((set) => ({
  ...initialState,

  fetchSynthesis: async (encounterId) => {
    set({ loadingState: 'loading', error: null });

    try {
      // TODO: Call zambda to get synthesis
      // const response = await auraGetSynthesis(encounterId);

      // Placeholder - will be replaced with actual API call
      console.log(`[SynthesisStore] Fetching synthesis for encounter: ${encounterId}`);

      // For now, just simulate completion
      set({
        loadingState: 'success',
        synthesis: null, // Will be populated from API
      });
    } catch (error) {
      set({
        loadingState: 'error',
        error: error instanceof Error ? error : new Error('Failed to fetch synthesis'),
      });
    }
  },

  setSynthesis: (synthesis) => {
    set({ synthesis, loadingState: synthesis ? 'success' : 'idle' });
  },

  clear: () => {
    set({ synthesis: null, loadingState: 'idle', error: null });
  },

  reset: () => {
    set(initialState);
  },
}));

/**
 * Selector for checking if synthesis is loading.
 */
export const selectSynthesisLoading = (state: SynthesisState): boolean => state.loadingState === 'loading';

/**
 * Selector for getting patient concerns.
 */
export const selectPatientConcerns = (state: SynthesisState): PreVisitSynthesis['patientConcerns'] =>
  state.synthesis?.patientConcerns ?? [];

/**
 * Selector for getting quality gaps.
 */
export const selectQualityGaps = (state: SynthesisState): PreVisitSynthesis['qualityGaps'] =>
  state.synthesis?.qualityGaps ?? [];
