# Story 1.2: Configure Aura Theme Extensions

Status: done

## Story

As a developer,
I want Aura-specific theme tokens configured in the MUI theme,
So that all Aura components have consistent styling following the UX design specification.

## Acceptance Criteria

1. **Given** the MUI theme is extended
   **When** I import theme tokens
   **Then** `aura.primary` returns `#0D7377` (Deep Teal)

2. **Given** the theme extension exists
   **When** I access routing colors
   **Then** I can use `routing.physician`, `routing.ma`, `routing.careManager`, `routing.patient`, `routing.caregiver`, `routing.external`

3. **Given** the theme extension exists
   **When** I access status colors
   **Then** I can use `status.active`, `status.new`, `status.modified`, `status.discontinued`, `status.confirmed`

4. **Given** a developer imports from `@aura/theme`
   **When** the import resolves
   **Then** Vite correctly resolves the `@aura/*` path alias

## Tasks / Subtasks

- [x] Task 1: Create Aura palette configuration (AC: #1, #2, #3)
  - [x] Create `apps/ehr/src/features/aura/theme/palette.ts`
  - [x] Define `auraPalette` with primary colors (#0D7377, #14A3A8, #0A5C5E)
  - [x] Define `aiAccent` colors (#7C4DFF, #F3E5F5)
  - [x] Define `routingColors` object with all 6 actor colors
  - [x] Define `statusColors` object with all 5 status colors
  - [x] Export typed palette object

- [x] Task 2: Create Aura spacing and sizing configuration (AC: #1)
  - [x] Create `apps/ehr/src/features/aura/theme/spacing.ts`
  - [x] Define 8px grid spacing constants
  - [x] Define 44px minimum touch target constant
  - [x] Define card elevation and border radius tokens
  - [x] Export spacing object

- [x] Task 3: Create Aura typography configuration (AC: #1)
  - [x] Create `apps/ehr/src/features/aura/theme/typography.ts`
  - [x] Define typography variants for Aura components
  - [x] Export typography object

- [x] Task 4: Create Aura component overrides (AC: #1)
  - [x] Create `apps/ehr/src/features/aura/theme/components.ts`
  - [x] Define MUI component style overrides for Aura context
  - [x] Export components object

- [x] Task 5: Create theme extension entry point (AC: #1, #2, #3)
  - [x] Update `apps/ehr/src/features/aura/theme/index.ts`
  - [x] Export all theme tokens from barrel file
  - [x] Create `createAuraTheme` helper function (optional - skipped, not needed yet)

- [x] Task 6: Configure Vite path alias (AC: #4)
  - [x] Update `apps/ehr/vite.config.ts` to add `@aura` resolve alias
  - [x] Verify alias resolves to `src/features/aura`

- [x] Task 7: Add TypeScript module augmentation (AC: #1, #2, #3)
  - [x] Create `apps/ehr/src/features/aura/theme/theme.d.ts`
  - [x] Augment MUI Theme interface with Aura tokens
  - [x] Ensure type safety for custom palette properties

- [x] Task 8: Verify configuration (AC: #1, #2, #3, #4)
  - [x] Verify TypeScript compilation passes (no Aura-specific errors)
  - [x] Verify Vite dev server resolves @aura/\* imports
  - [x] Verify all color tokens are accessible

## Dev Notes

### Architecture Patterns and Constraints

**Theme Extension Pattern (from Architecture doc):**

The Aura theme extends the existing Ottehr MUI theme rather than replacing it. Theme tokens are organized in the `apps/ehr/src/features/aura/theme/` directory.

**Color Palette (from UX Design Specification):**

```typescript
// Primary Colors
aura: {
  primary: '#0D7377',      // Deep Teal - primary brand
  primaryLight: '#14A3A8', // Lighter teal for hover states
  primaryDark: '#0A5C5E',  // Darker teal for active states
  aiAccent: '#7C4DFF',     // Purple - AI-generated content indicator
  aiBackground: '#F3E5F5', // Light purple background for AI elements
}

// Routing Colors - Actor identification
routing: {
  physician: '#0D7377',    // Deep Teal
  ma: '#F57C00',           // Orange
  careManager: '#7B1FA2',  // Purple
  patient: '#388E3C',      // Green
  caregiver: '#1976D2',    // Blue
  external: '#616161',     // Gray
}

// Status Colors - Action states
status: {
  active: '#757575',       // Gray - pending/active
  new: '#4CAF50',          // Green - newly created
  modified: '#FFC107',     // Amber - edited by clinician
  discontinued: '#EF5350', // Red - discontinued/rejected
  confirmed: '#0D7377',    // Teal - approved/confirmed
}
```

**Spacing Constants (from UX Design Specification):**

```typescript
// 8px Grid System
spacing: {
  unit: 8,                 // Base unit
  xs: 4,                   // 0.5x
  sm: 8,                   // 1x
  md: 16,                  // 2x
  lg: 24,                  // 3x
  xl: 32,                  // 4x
}

// Touch Targets
touchTarget: {
  minimum: 44,             // 44px minimum for accessibility
}

// Card Styling
card: {
  borderRadius: 8,         // Rounded corners
  elevation: 1,            // Subtle shadow
}
```

**Existing Ottehr Theme Pattern (from colors.ts):**

```typescript
// Reference: apps/ehr/src/themes/ottehr/colors.ts
export const palette = {
  background: { default: '#F9FAFB', paper: '#FFFFFF' },
  primary: { main: '#2169F5', light: '#2169F5', dark: '#0F347C', contrast: '#FFFFFF' },
  secondary: { main: '#43A047' },
  // ...
};

export const otherColors = {
  apptHover: '#F4F6F8',
  // Custom colors outside standard MUI palette
};
```

**Vite Alias Pattern (from vite.config.ts):**

```typescript
// Reference: apps/ehr/vite.config.ts
resolve: {
  alias: {
    '@ehrTheme': path.resolve(__dirname, env.THEME_PATH || 'src/themes/ottehr'),
    '@ehrDefaultTheme': path.resolve(__dirname, 'src/themes/ottehr'),
    // Add:
    '@aura': path.resolve(__dirname, 'src/features/aura'),
  },
},
```

### Source Tree Components to Touch

| File                                             | Action | Purpose                   |
| ------------------------------------------------ | ------ | ------------------------- |
| `apps/ehr/src/features/aura/theme/palette.ts`    | CREATE | Aura color palette tokens |
| `apps/ehr/src/features/aura/theme/spacing.ts`    | CREATE | Spacing and sizing tokens |
| `apps/ehr/src/features/aura/theme/typography.ts` | CREATE | Typography variants       |
| `apps/ehr/src/features/aura/theme/components.ts` | CREATE | MUI component overrides   |
| `apps/ehr/src/features/aura/theme/theme.d.ts`    | CREATE | TypeScript augmentation   |
| `apps/ehr/src/features/aura/theme/index.ts`      | MODIFY | Export all theme modules  |
| `apps/ehr/vite.config.ts`                        | MODIFY | Add @aura path alias      |

### Testing Standards Summary

- No unit tests required for theme configuration
- Verification: TypeScript compilation should pass
- Verification: Vite dev server should resolve @aura/\* imports
- Verification: Theme tokens should be accessible in components

### Critical Implementation Notes

1. **MUI Theme Augmentation Pattern:**

   ```typescript
   // apps/ehr/src/features/aura/theme/theme.d.ts
   import '@mui/material/styles';

   declare module '@mui/material/styles' {
     interface Palette {
       aura: {
         primary: string;
         primaryLight: string;
         primaryDark: string;
         aiAccent: string;
         aiBackground: string;
       };
       routing: {
         physician: string;
         ma: string;
         careManager: string;
         patient: string;
         caregiver: string;
         external: string;
       };
       status: {
         active: string;
         new: string;
         modified: string;
         discontinued: string;
         confirmed: string;
       };
     }
     interface PaletteOptions {
       aura?: Palette['aura'];
       routing?: Palette['routing'];
       status?: Palette['status'];
     }
   }
   ```

2. **Palette Export Pattern:**

   ```typescript
   // apps/ehr/src/features/aura/theme/palette.ts
   export const auraPalette = {
     primary: '#0D7377',
     primaryLight: '#14A3A8',
     primaryDark: '#0A5C5E',
     aiAccent: '#7C4DFF',
     aiBackground: '#F3E5F5',
   } as const;

   export const routingColors = {
     physician: '#0D7377',
     ma: '#F57C00',
     careManager: '#7B1FA2',
     patient: '#388E3C',
     caregiver: '#1976D2',
     external: '#616161',
   } as const;

   export const statusColors = {
     active: '#757575',
     new: '#4CAF50',
     modified: '#FFC107',
     discontinued: '#EF5350',
     confirmed: '#0D7377',
   } as const;
   ```

3. **Barrel Export Pattern:**

   ```typescript
   // apps/ehr/src/features/aura/theme/index.ts
   export * from './palette';
   export * from './spacing';
   export * from './typography';
   export * from './components';
   ```

### Project Structure Notes

- **Alignment with unified project structure:** Theme tokens live in `apps/ehr/src/features/aura/theme/` as documented in architecture.md
- **Detected conflicts or variances:** None - follows Ottehr theming patterns
- **Integration point:** These tokens will be consumed by Aura components starting in Epic 2

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Theme-Extension] - Theme architecture
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Color-Palette] - Complete color specification
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Spacing-Grid] - 8px grid system
- [Source: apps/ehr/src/themes/ottehr/colors.ts] - Existing Ottehr theme pattern
- [Source: apps/ehr/vite.config.ts] - Vite alias configuration

### Dependencies

- **Depends on:** Story 1.1 (Create Aura Directory Structure) - COMPLETED
- **Blocks:** Stories 2.3, 2.4, 2.6, 3.2, 3.3, 3.4 (all components using Aura theme)

### Estimated Complexity

- **Complexity:** Low
- **Risk:** Low
- **Scope:** Configuration files and type definitions only

### Learnings from Previous Stories

From Story 1.1:

- Use `export {};` in empty barrel files to make valid ES modules
- Vite path alias was deferred to this story (Task 6)
- TypeScript paths already configured in tsconfig.json for `@aura/*`

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- TypeScript compilation verified: no Aura-specific errors found
- Pre-existing TypeScript errors in codebase (missing @types packages) do not affect Aura theme files

### Completion Notes List

- Created 5 new theme configuration files in `apps/ehr/src/features/aura/theme/`
- Updated barrel export to properly export all theme modules
- Added Vite path alias `@aura` pointing to `src/features/aura`
- Created MUI theme augmentation for type-safe access to aura, routing, and status colors
- All acceptance criteria satisfied:
  - AC1: `auraPalette.primary` returns `#0D7377`
  - AC2: `routingColors` provides all 6 actor colors
  - AC3: `statusColors` provides all 5 status colors
  - AC4: `@aura/*` path alias configured in Vite

## File List

**Created:**

- apps/ehr/src/features/aura/theme/palette.ts
- apps/ehr/src/features/aura/theme/spacing.ts
- apps/ehr/src/features/aura/theme/typography.ts
- apps/ehr/src/features/aura/theme/components.ts
- apps/ehr/src/features/aura/theme/theme.d.ts

**Modified:**

- apps/ehr/src/features/aura/theme/index.ts (added exports for all theme modules)
- apps/ehr/vite.config.ts (added @aura path alias)

## Senior Developer Review

### Review Date: 2026-01-10

### Reviewer: Claude Opus 4.5 (code-review workflow)

### Issues Found: 0 High, 4 Medium, 2 Low

### Issues Fixed:

1. **[MEDIUM][FIXED]** Hardcoded colors in components.ts routing chip styles - Replaced with `routingColors.*` imports
2. **[MEDIUM][FIXED]** Hardcoded hover color for AI button - Added `aiAccentDark` to palette, used in components.ts
3. **[MEDIUM][FIXED]** theme.d.ts types not exported from barrel - Added `export type { RoutingActor, ActionStatus }` to index.ts
4. **[MEDIUM][FIXED]** theme.d.ts not imported to ensure augmentation loads - Added `import './theme.d'` to index.ts

### Low Issues (Not Fixed - Acceptable):

5. **[LOW]** Missing 'unit' key in direct spacing export - Available via `auraSpacing.unit`, acceptable pattern
6. **[LOW]** Inconsistent alpha transparency notation - 8-digit hex is valid CSS, documented in code comments

### Review Outcome: PASSED

All acceptance criteria verified. All medium issues fixed. Story marked done.

## Change Log

- 2026-01-09: Story created with comprehensive dev notes from architecture and UX specification
- 2026-01-10: Story implemented - created Aura theme configuration with palette, spacing, typography, components, and TypeScript augmentation
- 2026-01-10: Code review completed - fixed 4 medium issues (hardcoded colors, missing exports, theme augmentation import)
