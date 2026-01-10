/**
 * Aura Component Style Overrides
 *
 * MUI component customizations for Aura context.
 * These can be applied to create an Aura-themed variant of MUI components.
 */

import { auraPalette, routingColors, statusColors } from './palette';
import { borderRadius, card, touchTarget } from './spacing';

/**
 * Card component overrides for Aura action cards
 */
export const auraCardStyles = {
  root: {
    borderRadius: borderRadius.md,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.08)',
    '&:hover': {
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.12)',
    },
  },
  content: {
    padding: card.padding,
    '&:last-child': {
      paddingBottom: card.padding,
    },
  },
} as const;

/**
 * Chip component overrides for routing and status chips
 */
export const auraChipStyles = {
  root: {
    borderRadius: borderRadius.sm,
    fontWeight: 500,
    minHeight: 24,
  },
  /** Routing chip variants by actor */
  routing: {
    physician: {
      backgroundColor: `${routingColors.physician}15`,
      color: routingColors.physician,
      borderColor: routingColors.physician,
    },
    ma: {
      backgroundColor: `${routingColors.ma}15`,
      color: routingColors.ma,
      borderColor: routingColors.ma,
    },
    careManager: {
      backgroundColor: `${routingColors.careManager}15`,
      color: routingColors.careManager,
      borderColor: routingColors.careManager,
    },
    patient: {
      backgroundColor: `${routingColors.patient}15`,
      color: routingColors.patient,
      borderColor: routingColors.patient,
    },
    caregiver: {
      backgroundColor: `${routingColors.caregiver}15`,
      color: routingColors.caregiver,
      borderColor: routingColors.caregiver,
    },
    external: {
      backgroundColor: `${routingColors.external}15`,
      color: routingColors.external,
      borderColor: routingColors.external,
    },
  },
  /** Status chip variants */
  status: {
    active: {
      backgroundColor: `${statusColors.active}15`,
      color: statusColors.active,
    },
    new: {
      backgroundColor: `${statusColors.new}15`,
      color: statusColors.new,
    },
    modified: {
      backgroundColor: `${statusColors.modified}15`,
      color: statusColors.modified,
    },
    discontinued: {
      backgroundColor: `${statusColors.discontinued}15`,
      color: statusColors.discontinued,
    },
    confirmed: {
      backgroundColor: `${statusColors.confirmed}15`,
      color: statusColors.confirmed,
    },
  },
} as const;

/**
 * Button component overrides for Aura actions
 */
export const auraButtonStyles = {
  root: {
    minHeight: touchTarget.minimum,
    borderRadius: borderRadius.sm,
    textTransform: 'none' as const,
    fontWeight: 500,
  },
  /** Primary action button (Approve All, etc.) */
  primary: {
    backgroundColor: auraPalette.primary,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: auraPalette.primaryDark,
    },
  },
  /** AI-related action button */
  aiAccent: {
    backgroundColor: auraPalette.aiAccent,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: auraPalette.aiAccentDark,
    },
  },
} as const;

/**
 * Panel/container styles for Aura sections
 */
export const auraPanelStyles = {
  root: {
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.md,
    border: '1px solid #E0E0E0',
  },
  header: {
    padding: '12px 16px',
    borderBottom: '1px solid #E0E0E0',
    backgroundColor: '#FAFAFA',
  },
  content: {
    padding: card.padding,
  },
} as const;

/**
 * Combined component overrides
 */
export const auraComponents = {
  card: auraCardStyles,
  chip: auraChipStyles,
  button: auraButtonStyles,
  panel: auraPanelStyles,
} as const;

/**
 * Type definitions
 */
export type AuraComponents = typeof auraComponents;
