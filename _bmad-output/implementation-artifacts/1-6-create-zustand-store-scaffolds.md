# Story 1.6: Create Zustand Store Scaffolds

Status: done

## Story

As a developer,
I want Zustand stores scaffolded for Aura state management,
So that I have typed, reactive state management for Aura features.

## Acceptance Criteria

1. **Given** the Aura stores directory exists
   **When** I import the stores
   **Then** `useActionsStore` is available with:

   - `pendingActions: AuraAction[]`
   - `approvalState: 'idle' | 'approving' | 'success' | 'error'`
   - `addAction(action: AuraAction): void`
   - `removeAction(actionId: string): void`
   - `approveAll(): Promise<void>`
   - `approveOne(actionId: string): Promise<void>`
   - `rejectOne(actionId: string, reason?: string): Promise<void>`

2. **Given** stores are available
   **When** I import from stores
   **Then** `useSynthesisStore` is available with:

   - `synthesis: PreVisitSynthesis | null`
   - `loadingState: SynthesisLoadingState`
   - `error: Error | null`
   - `fetchSynthesis(encounterId: string): Promise<void>`

3. **Given** stores are available
   **When** I import from stores
   **Then** `useCarePlanStore` is available with:

   - `carePlanItems: CarePlanItem[]`
   - `filters: CarePlanFilters`
   - `setFilters(filters: Partial<CarePlanFilters>): void`
   - `fetchCarePlan(patientId: string): Promise<void>`

4. **Given** stores are available
   **When** I import from stores
   **Then** `useSharedViewStore` is available with:
   - `isShared: boolean`
   - `patientViewMode: boolean`
   - `toggleShared(): void`
   - `setPatientViewMode(mode: boolean): void`

## Tasks / Subtasks

- [x] Task 1: Create Aura domain types (AC: #1, #2, #3)

  - [x] Create action.types.ts with AuraAction, ActionPayload types
  - [x] Create synthesis.types.ts with PreVisitSynthesis types
  - [x] Create care-plan.types.ts with CarePlanItem, CarePlanFilters types
  - [x] Update types/index.ts barrel file

- [x] Task 2: Create useActionsStore (AC: #1)

  - [x] Create actions.store.ts
  - [x] Implement pendingActions, approvalState
  - [x] Implement addAction, removeAction, updateAction
  - [x] Implement approveAll, approveOne, rejectOne with TODO for zambda calls
  - [x] Implement undo functionality with 5-second window

- [x] Task 3: Create useSynthesisStore (AC: #2)

  - [x] Create synthesis.store.ts
  - [x] Implement synthesis, loadingState, error
  - [x] Implement fetchSynthesis with TODO for zambda call
  - [x] Add selectors for common queries

- [x] Task 4: Create useCarePlanStore (AC: #3)

  - [x] Create care-plan.store.ts
  - [x] Implement carePlanItems, filters
  - [x] Implement setFilters, fetchCarePlan
  - [x] Add filtering selector

- [x] Task 5: Create useSharedViewStore (AC: #4)

  - [x] Create shared-view.store.ts
  - [x] Implement isShared, patientViewMode
  - [x] Implement toggleShared, setPatientViewMode

- [x] Task 6: Update barrel exports (AC: #1-4)
  - [x] Update stores/index.ts with all store exports

## Dev Notes

### Architecture Pattern

Zustand stores are located in `apps/ehr/src/features/aura/stores/` following the existing Ottehr pattern.

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Zustand-Stores-Required]
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.6]

## Change Log

- 2026-01-10: Story created for Ralph Loop POC implementation
- 2026-01-10: Story completed - created 4 Zustand stores with full type definitions
