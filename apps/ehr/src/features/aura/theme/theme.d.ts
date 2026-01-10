/**
 * Aura MUI Theme Augmentation
 *
 * Extends the MUI Theme and Palette interfaces with Aura-specific tokens.
 * This provides type safety when accessing aura, routing, and status colors.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  /**
   * Extended Palette interface with Aura color tokens
   */
  interface Palette {
    /** Aura primary brand colors */
    aura: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      aiAccent: string;
      aiAccentDark: string;
      aiBackground: string;
    };
    /** Routing actor colors for action assignment */
    routing: {
      physician: string;
      ma: string;
      careManager: string;
      patient: string;
      caregiver: string;
      external: string;
    };
    /** Status colors for action states */
    status: {
      active: string;
      new: string;
      modified: string;
      discontinued: string;
      confirmed: string;
    };
  }

  /**
   * Extended PaletteOptions for theme creation
   */
  interface PaletteOptions {
    aura?: {
      primary?: string;
      primaryLight?: string;
      primaryDark?: string;
      aiAccent?: string;
      aiAccentDark?: string;
      aiBackground?: string;
    };
    routing?: {
      physician?: string;
      ma?: string;
      careManager?: string;
      patient?: string;
      caregiver?: string;
      external?: string;
    };
    status?: {
      active?: string;
      new?: string;
      modified?: string;
      discontinued?: string;
      confirmed?: string;
    };
  }
}

/**
 * Routing actor type for type-safe routing color access
 */
export type RoutingActor = 'physician' | 'ma' | 'careManager' | 'patient' | 'caregiver' | 'external';

/**
 * Action status type for type-safe status color access
 */
export type ActionStatus = 'active' | 'new' | 'modified' | 'discontinued' | 'confirmed';
