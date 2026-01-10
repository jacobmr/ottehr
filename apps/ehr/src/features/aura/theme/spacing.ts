/**
 * Aura Spacing and Sizing Configuration
 *
 * 8px grid-based spacing system following UX Design Specification.
 */

/**
 * Base spacing unit (8px grid system)
 */
export const SPACING_UNIT = 8;

/**
 * Spacing scale based on 8px grid
 */
export const spacing = {
  /** 0.5x = 4px */
  xs: 4,
  /** 1x = 8px */
  sm: 8,
  /** 2x = 16px */
  md: 16,
  /** 3x = 24px */
  lg: 24,
  /** 4x = 32px */
  xl: 32,
  /** 5x = 40px */
  xxl: 40,
} as const;

/**
 * Touch target sizing for accessibility
 */
export const touchTarget = {
  /** Minimum touch target size (44px per WCAG guidelines) */
  minimum: 44,
  /** Comfortable touch target size */
  comfortable: 48,
} as const;

/**
 * Card styling tokens
 */
export const card = {
  /** Standard card border radius */
  borderRadius: 8,
  /** Default card elevation (MUI elevation value) */
  elevation: 1,
  /** Card padding (internal spacing) */
  padding: 16,
} as const;

/**
 * Border radius tokens
 */
export const borderRadius = {
  /** Small - for chips and small elements */
  sm: 4,
  /** Medium - for cards and containers */
  md: 8,
  /** Large - for modals and dialogs */
  lg: 12,
  /** Full - for circular elements */
  full: 9999,
} as const;

/**
 * Combined spacing configuration
 */
export const auraSpacing = {
  unit: SPACING_UNIT,
  scale: spacing,
  touchTarget,
  card,
  borderRadius,
} as const;

/**
 * Type definitions
 */
export type AuraSpacing = typeof auraSpacing;
