/**
 * Aura Theme Extensions
 *
 * Export Aura-specific theme tokens, colors, spacing, typography, and component styles.
 * These tokens extend the existing Ottehr MUI theme.
 */

// Import theme augmentation to ensure MUI types are extended
import './theme.d';

// Color palette exports
export {
  auraPalette,
  routingColors,
  statusColors,
  auraColors,
  type AuraPalette,
  type RoutingColors,
  type StatusColors,
} from './palette';

// Spacing and sizing exports
export { SPACING_UNIT, spacing, touchTarget, card, borderRadius, auraSpacing, type AuraSpacing } from './spacing';

// Typography exports
export { fontWeights, auraTypography, type AuraTypography } from './typography';

// Component style exports
export {
  auraCardStyles,
  auraChipStyles,
  auraButtonStyles,
  auraPanelStyles,
  auraComponents,
  type AuraComponents,
} from './components';

// Type exports from theme augmentation
export type { RoutingActor, ActionStatus } from './theme.d';
