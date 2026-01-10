/**
 * Aura Feature Flag Hook
 *
 * Returns whether Aura AI assistant features are enabled.
 */

import { FEATURE_FLAGS } from '../../../constants/feature-flags';

/**
 * Hook to check if Aura AI assistant features are enabled.
 *
 * This hook reads the VITE_APP_AURA_ENABLED environment variable
 * and returns whether Aura features should be shown in the UI.
 *
 * @returns true if Aura is enabled, false otherwise
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isAuraEnabled = useAuraEnabled();
 *
 *   if (!isAuraEnabled) {
 *     return null;
 *   }
 *
 *   return <AuraPanel />;
 * }
 * ```
 */
export function useAuraEnabled(): boolean {
  return FEATURE_FLAGS.AURA_ENABLED;
}
