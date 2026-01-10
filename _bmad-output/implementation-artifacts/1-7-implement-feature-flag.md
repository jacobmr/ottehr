# Story 1.7: Implement Feature Flag

Status: done

## Story

As a product manager,
I want Aura features gated behind a feature flag,
So that we can enable/disable Aura without code deployment.

## Acceptance Criteria

1. **Given** the EHR application loads
   **When** `VITE_APP_AURA_ENABLED` is set to `"true"`
   **Then** Aura navigation items appear in the EHR sidebar
   **And** Aura routes are registered and accessible
   **And** Aura components render in encounters

2. **Given** `VITE_APP_AURA_ENABLED` is not set or set to `"false"`
   **When** the EHR application loads
   **Then** Aura navigation items are hidden
   **And** Aura routes return 404
   **And** no Aura components render

3. **Given** the feature flag is documented
   **When** developers check feature-flags.ts
   **Then** AURA_ENABLED is documented with JSDoc

4. **Given** the hook exists
   **When** I call `useAuraEnabled()`
   **Then** it returns the flag value

## Tasks / Subtasks

- [x] Task 1: Add AURA_ENABLED to feature flags (AC: #1, #2, #3)

  - [x] Add AURA_ENABLED to FEATURE_FLAGS constant
  - [x] Add JSDoc documentation
  - [x] Use VITE_APP_AURA_ENABLED environment variable

- [x] Task 2: Create useAuraEnabled hook (AC: #4)
  - [x] Create useAuraEnabled.ts in hooks directory
  - [x] Export from hooks barrel file

## Dev Notes

### Architecture Pattern

Feature flag follows the existing Ottehr pattern in `apps/ehr/src/constants/feature-flags.ts`.

### Environment Variable

Set `VITE_APP_AURA_ENABLED=true` in the environment to enable Aura features.

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#ARCH-6]
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.7]

## Change Log

- 2026-01-10: Story created for Ralph Loop POC implementation
- 2026-01-10: Story completed - added feature flag and useAuraEnabled hook
