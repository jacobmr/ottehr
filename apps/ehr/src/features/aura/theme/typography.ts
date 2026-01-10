/**
 * Aura Typography Configuration
 *
 * Typography variants for Aura components.
 * Extends MUI typography with Aura-specific styles.
 */

/**
 * Font weights used in Aura
 */
export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

/**
 * Aura-specific typography variants
 */
export const auraTypography = {
  /** Section headers in panels */
  sectionHeader: {
    fontSize: '1.125rem', // 18px
    fontWeight: fontWeights.semiBold,
    lineHeight: 1.4,
  },
  /** Card titles */
  cardTitle: {
    fontSize: '1rem', // 16px
    fontWeight: fontWeights.medium,
    lineHeight: 1.5,
  },
  /** Card body text */
  cardBody: {
    fontSize: '0.875rem', // 14px
    fontWeight: fontWeights.regular,
    lineHeight: 1.57,
  },
  /** Small labels and metadata */
  label: {
    fontSize: '0.75rem', // 12px
    fontWeight: fontWeights.medium,
    lineHeight: 1.66,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
  /** Chip text */
  chip: {
    fontSize: '0.8125rem', // 13px
    fontWeight: fontWeights.medium,
    lineHeight: 1.4,
  },
  /** AI-generated content indicator */
  aiIndicator: {
    fontSize: '0.75rem', // 12px
    fontWeight: fontWeights.medium,
    fontStyle: 'italic' as const,
    lineHeight: 1.5,
  },
} as const;

/**
 * Type definitions
 */
export type AuraTypography = typeof auraTypography;
