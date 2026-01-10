/**
 * Aura Actions Store
 *
 * Zustand store for managing AI-generated actions and approval workflow.
 */

import { create } from 'zustand';
import type { ApprovalState, AuraAction, UndoContext } from '../types';

/**
 * Undo window duration in milliseconds (5 seconds per UX spec).
 */
const UNDO_WINDOW_MS = 5000;

/**
 * Actions store state.
 */
interface ActionsState {
  /** List of pending actions awaiting approval */
  pendingActions: AuraAction[];
  /** Current approval workflow state */
  approvalState: ApprovalState;
  /** Error message if approval failed */
  approvalError: string | null;
  /** Undo context for batch approvals */
  undoContext: UndoContext | null;
  /** Loading state for fetching actions */
  loading: boolean;
}

/**
 * Actions store actions (methods).
 */
interface ActionsActions {
  /** Add a new action to pending list */
  addAction: (action: AuraAction) => void;
  /** Remove an action by ID */
  removeAction: (actionId: string) => void;
  /** Update an existing action */
  updateAction: (actionId: string, updates: Partial<AuraAction>) => void;
  /** Set the list of pending actions */
  setActions: (actions: AuraAction[]) => void;
  /** Approve all pending actions */
  approveAll: () => Promise<void>;
  /** Approve a single action */
  approveOne: (actionId: string) => Promise<void>;
  /** Reject a single action */
  rejectOne: (actionId: string, reason?: string) => Promise<void>;
  /** Undo the last batch approval */
  undoApproval: () => Promise<void>;
  /** Clear the undo context */
  clearUndo: () => void;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
  /** Reset store to initial state */
  reset: () => void;
}

/**
 * Initial state for the actions store.
 */
const initialState: ActionsState = {
  pendingActions: [],
  approvalState: 'idle',
  approvalError: null,
  undoContext: null,
  loading: false,
};

/**
 * Actions store for managing AI-generated actions.
 *
 * @example
 * ```typescript
 * const { pendingActions, approveAll, approvalState } = useActionsStore();
 *
 * // Approve all actions
 * await approveAll();
 *
 * // Check state
 * if (approvalState === 'success') {
 *   // Show success toast
 * }
 * ```
 */
export const useActionsStore = create<ActionsState & ActionsActions>()((set, get) => ({
  ...initialState,

  addAction: (action) => {
    set((state) => ({
      pendingActions: [...state.pendingActions, action],
    }));
  },

  removeAction: (actionId) => {
    set((state) => ({
      pendingActions: state.pendingActions.filter((a) => a.id !== actionId),
    }));
  },

  updateAction: (actionId, updates) => {
    set((state) => ({
      pendingActions: state.pendingActions.map((a) => (a.id === actionId ? { ...a, ...updates } : a)),
    }));
  },

  setActions: (actions) => {
    set({ pendingActions: actions });
  },

  approveAll: async () => {
    const { pendingActions } = get();
    if (pendingActions.length === 0) return;

    set({ approvalState: 'approving', approvalError: null });

    try {
      // TODO: Call zambda to approve actions
      // await auraApproveActions(pendingActions.map(a => a.id));

      const approvedIds = pendingActions.map((a) => a.id);

      // Create undo context
      set({
        approvalState: 'success',
        pendingActions: [],
        undoContext: {
          approvedActionIds: approvedIds,
          approvedAt: Date.now(),
          canUndo: true,
        },
      });

      // Start undo window timer
      setTimeout(() => {
        const { undoContext } = get();
        if (undoContext && undoContext.approvedAt === Date.now() - UNDO_WINDOW_MS) {
          set({
            undoContext: { ...undoContext, canUndo: false },
          });
        }
      }, UNDO_WINDOW_MS);
    } catch (error) {
      set({
        approvalState: 'error',
        approvalError: error instanceof Error ? error.message : 'Failed to approve actions',
      });
    }
  },

  approveOne: async (actionId) => {
    set({ approvalState: 'approving', approvalError: null });

    try {
      // TODO: Call zambda to approve single action
      // await auraApproveAction(actionId);

      set((state) => ({
        approvalState: 'success',
        pendingActions: state.pendingActions.filter((a) => a.id !== actionId),
      }));
    } catch (error) {
      set({
        approvalState: 'error',
        approvalError: error instanceof Error ? error.message : 'Failed to approve action',
      });
    }
  },

  rejectOne: async (actionId, _reason) => {
    set({ approvalState: 'approving', approvalError: null });

    try {
      // TODO: Call zambda to reject action
      // await auraRejectAction(actionId, reason);

      set((state) => ({
        approvalState: 'idle',
        pendingActions: state.pendingActions.filter((a) => a.id !== actionId),
      }));
    } catch (error) {
      set({
        approvalState: 'error',
        approvalError: error instanceof Error ? error.message : 'Failed to reject action',
      });
    }
  },

  undoApproval: async () => {
    const { undoContext } = get();
    if (!undoContext || !undoContext.canUndo) return;

    try {
      // TODO: Call zambda to undo approval
      // await auraUndoApproval(undoContext.approvedActionIds);

      set({
        undoContext: null,
        approvalState: 'idle',
      });
    } catch (error) {
      console.error('Failed to undo approval:', error);
    }
  },

  clearUndo: () => {
    set({ undoContext: null });
  },

  setLoading: (loading) => {
    set({ loading });
  },

  reset: () => {
    set(initialState);
  },
}));
