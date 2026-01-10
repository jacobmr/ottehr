/**
 * Aura Color Palette
 *
 * Color tokens for the Aura AI-native clinical experience.
 * Based on UX Design Specification color palette.
 */

/**
 * Primary Aura colors - Deep Teal brand palette
 */
export const auraPalette = {
  /** Deep Teal - primary brand color */
  primary: '#0D7377',
  /** Lighter teal for hover states */
  primaryLight: '#14A3A8',
  /** Darker teal for active/pressed states */
  primaryDark: '#0A5C5E',
  /** Purple - AI-generated content indicator */
  aiAccent: '#7C4DFF',
  /** Darker purple for AI element hover states */
  aiAccentDark: '#6930C3',
  /** Light purple background for AI elements */
  aiBackground: '#F3E5F5',
} as const;

/**
 * Routing colors - Actor identification palette
 * Used for routing chips and action assignment indicators
 */
export const routingColors = {
  /** Physician - Deep Teal */
  physician: '#0D7377',
  /** Medical Assistant - Orange */
  ma: '#F57C00',
  /** Care Manager - Purple */
  careManager: '#7B1FA2',
  /** Patient - Green */
  patient: '#388E3C',
  /** Caregiver - Blue */
  caregiver: '#1976D2',
  /** External - Gray */
  external: '#616161',
} as const;

/**
 * Status colors - Action state indicators
 * Used for action cards, status chips, and state indicators
 */
export const statusColors = {
  /** Gray - pending/active state */
  active: '#757575',
  /** Green - newly created */
  new: '#4CAF50',
  /** Amber - edited by clinician */
  modified: '#FFC107',
  /** Red - discontinued/rejected */
  discontinued: '#EF5350',
  /** Teal - approved/confirmed */
  confirmed: '#0D7377',
} as const;

/**
 * Type definitions for color palettes
 */
export type AuraPalette = typeof auraPalette;
export type RoutingColors = typeof routingColors;
export type StatusColors = typeof statusColors;

/**
 * Combined palette for MUI theme extension
 */
export const auraColors = {
  aura: auraPalette,
  routing: routingColors,
  status: statusColors,
} as const;
