/**
 * Aura Care Plan Store
 *
 * Zustand store for managing longitudinal care plan state.
 */

import { create } from 'zustand';
import type { CarePlanFilters, CarePlanItem } from '../types';
import { DEFAULT_CARE_PLAN_FILTERS } from '../types';

/**
 * Care plan store state.
 */
interface CarePlanState {
  /** List of care plan items */
  carePlanItems: CarePlanItem[];
  /** Current filters */
  filters: CarePlanFilters;
  /** Loading state */
  loading: boolean;
  /** Error if fetch failed */
  error: Error | null;
}

/**
 * Care plan store actions (methods).
 */
interface CarePlanActions {
  /** Fetch care plan for a patient */
  fetchCarePlan: (patientId: string) => Promise<void>;
  /** Set care plan items directly */
  setCarePlanItems: (items: CarePlanItem[]) => void;
  /** Update filters */
  setFilters: (filters: Partial<CarePlanFilters>) => void;
  /** Reset filters to defaults */
  resetFilters: () => void;
  /** Add a care plan item */
  addItem: (item: CarePlanItem) => void;
  /** Update a care plan item */
  updateItem: (itemId: string, updates: Partial<CarePlanItem>) => void;
  /** Remove a care plan item */
  removeItem: (itemId: string) => void;
  /** Reset store to initial state */
  reset: () => void;
}

/**
 * Initial state for the care plan store.
 */
const initialState: CarePlanState = {
  carePlanItems: [],
  filters: DEFAULT_CARE_PLAN_FILTERS,
  loading: false,
  error: null,
};

/**
 * Care plan store for managing longitudinal care plan.
 *
 * @example
 * ```typescript
 * const { carePlanItems, fetchCarePlan, setFilters } = useCarePlanStore();
 *
 * // Fetch care plan
 * await fetchCarePlan('patient-123');
 *
 * // Filter by status
 * setFilters({ status: ['active', 'new'] });
 * ```
 */
export const useCarePlanStore = create<CarePlanState & CarePlanActions>()((set) => ({
  ...initialState,

  fetchCarePlan: async (patientId) => {
    set({ loading: true, error: null });

    try {
      // TODO: Call zambda to get care plan
      // const response = await auraGetCarePlan(patientId);

      // Placeholder - will be replaced with actual API call
      console.log(`[CarePlanStore] Fetching care plan for patient: ${patientId}`);

      set({
        loading: false,
        carePlanItems: [], // Will be populated from API
      });
    } catch (error) {
      set({
        loading: false,
        error: error instanceof Error ? error : new Error('Failed to fetch care plan'),
      });
    }
  },

  setCarePlanItems: (items) => {
    set({ carePlanItems: items });
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  resetFilters: () => {
    set({ filters: DEFAULT_CARE_PLAN_FILTERS });
  },

  addItem: (item) => {
    set((state) => ({
      carePlanItems: [...state.carePlanItems, item],
    }));
  },

  updateItem: (itemId, updates) => {
    set((state) => ({
      carePlanItems: state.carePlanItems.map((item) => (item.id === itemId ? { ...item, ...updates } : item)),
    }));
  },

  removeItem: (itemId) => {
    set((state) => ({
      carePlanItems: state.carePlanItems.filter((item) => item.id !== itemId),
    }));
  },

  reset: () => {
    set(initialState);
  },
}));

/**
 * Selector for filtered care plan items.
 */
export const selectFilteredCarePlanItems = (state: CarePlanState): CarePlanItem[] => {
  const { carePlanItems, filters } = state;

  return carePlanItems.filter((item) => {
    // Filter by status
    if (filters.status && filters.status.length > 0 && !filters.status.includes(item.status)) {
      return false;
    }

    // Filter by category
    if (filters.category && filters.category.length > 0 && !filters.category.includes(item.category)) {
      return false;
    }

    // Filter by source
    if (filters.source && filters.source.length > 0 && !filters.source.includes(item.source)) {
      return false;
    }

    // Filter by search text
    if (filters.searchText) {
      const searchLower = filters.searchText.toLowerCase();
      const matchesTitle = item.title.toLowerCase().includes(searchLower);
      const matchesDescription = item.description?.toLowerCase().includes(searchLower);
      if (!matchesTitle && !matchesDescription) {
        return false;
      }
    }

    // Filter by needs review
    if (filters.needsReviewOnly && item.reviewDate) {
      const reviewDate = new Date(item.reviewDate);
      const now = new Date();
      if (reviewDate > now) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Selector for items needing review.
 */
export const selectItemsNeedingReview = (state: CarePlanState): CarePlanItem[] => {
  const now = new Date();
  return state.carePlanItems.filter((item) => {
    if (!item.reviewDate) return false;
    const reviewDate = new Date(item.reviewDate);
    return reviewDate <= now;
  });
};
