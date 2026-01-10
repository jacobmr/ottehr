# Story 1.3: Register FHIR Extensions

Status: done

## Story

As a developer,
I want Aura-specific FHIR extensions registered in the system,
So that I can store Aura-specific metadata on FHIR resources.

## Acceptance Criteria

1. **Given** the Oystehr FHIR API is configured
   **When** the extensions are registered
   **Then** the following extensions are available:

   - `aura-status` with values: active, new, modified, discontinued
   - `aura-source` with values: clinician, ai, patient
   - `aura-routing-actor` with values: physician, ma, careManager, patient, caregiver, external
   - `aura-action-type` with values: prescription, lab, referral, task, notify
   - `aura-approval-status` with values: pending, approved, rejected
   - `aura-ai-confidence` with values: high, medium, low

2. **Given** the extensions are defined
   **When** I import from `packages/utils/lib/aura/fhir`
   **Then** TypeScript types are available for each extension value set

3. **Given** the extension helpers exist
   **When** I call `getAuraExtension(resource, extensionName)`
   **Then** I receive the typed extension value or undefined

4. **Given** the extension helpers exist
   **When** I call `setAuraExtension(resource, extensionName, value)`
   **Then** the extension is added or updated on the resource

## Tasks / Subtasks

- [x] Task 1: Define Aura extension URL constants (AC: #1)

  - [x] Create `packages/utils/lib/aura/fhir/extensions.ts`
  - [x] Define `AURA_EXTENSION_BASE_URL` constant
  - [x] Define `AURA_EXTENSION` object with all 6 extension URLs
  - [x] Export extension URL constants

- [x] Task 2: Create TypeScript types for extension values (AC: #2)

  - [x] Create `packages/utils/lib/aura/types/extensions.types.ts`
  - [x] Define `AuraStatus` type: 'active' | 'new' | 'modified' | 'discontinued'
  - [x] Define `AuraSource` type: 'clinician' | 'ai' | 'patient'
  - [x] Define `AuraRoutingActor` type: 'physician' | 'ma' | 'careManager' | 'patient' | 'caregiver' | 'external'
  - [x] Define `AuraActionType` type: 'prescription' | 'lab' | 'referral' | 'task' | 'notify'
  - [x] Define `AuraApprovalStatus` type: 'pending' | 'approved' | 'rejected'
  - [x] Define `AuraAiConfidence` type: 'high' | 'medium' | 'low'
  - [x] Export all types from barrel file

- [x] Task 3: Create extension helper functions (AC: #3, #4)

  - [x] Create `getAuraExtension<T>(resource, extensionName)` function
  - [x] Create `setAuraExtension(resource, extensionName, value)` function
  - [x] Create `removeAuraExtension(resource, extensionName)` function
  - [x] Create `hasAuraExtension(resource, extensionName)` function
  - [x] Add JSDoc comments with usage examples

- [x] Task 4: Create extension value constants (AC: #1)

  - [x] Create `packages/utils/lib/aura/constants/extension-values.ts`
  - [x] Define `AURA_STATUS_VALUES` array
  - [x] Define `AURA_SOURCE_VALUES` array
  - [x] Define `AURA_ROUTING_ACTOR_VALUES` array
  - [x] Define `AURA_ACTION_TYPE_VALUES` array
  - [x] Define `AURA_APPROVAL_STATUS_VALUES` array
  - [x] Define `AURA_AI_CONFIDENCE_VALUES` array
  - [x] Export from constants barrel

- [x] Task 5: Update barrel exports (AC: #2, #3, #4)

  - [x] Update `packages/utils/lib/aura/fhir/index.ts` with extension exports
  - [x] Update `packages/utils/lib/aura/types/index.ts` with type exports
  - [x] Update `packages/utils/lib/aura/constants/index.ts` with constant exports
  - [x] Update `packages/utils/lib/aura/index.ts` main barrel (already configured)

- [x] Task 6: Verify implementation (AC: #1, #2, #3, #4)
  - [x] Verify TypeScript compilation passes
  - [x] Verify all types are exported correctly
  - [x] Verify helper functions work with FHIR Extension type

## Dev Notes

### Architecture Patterns and Constraints

**FHIR Extension Pattern (from existing Ottehr codebase):**

Follow the established pattern in `packages/utils/lib/fhir/constants.ts`:

```typescript
// Extension URL pattern
const AURA_EXTENSION_BASE_URL = 'https://fhir.ottehr.com/Extension/aura';

// Extension constant structure (mirrors FHIR_EXTENSION pattern)
export const AURA_EXTENSION = {
  status: {
    url: `${AURA_EXTENSION_BASE_URL}-status`,
  },
  source: {
    url: `${AURA_EXTENSION_BASE_URL}-source`,
  },
  routingActor: {
    url: `${AURA_EXTENSION_BASE_URL}-routing-actor`,
  },
  actionType: {
    url: `${AURA_EXTENSION_BASE_URL}-action-type`,
  },
  approvalStatus: {
    url: `${AURA_EXTENSION_BASE_URL}-approval-status`,
  },
  aiConfidence: {
    url: `${AURA_EXTENSION_BASE_URL}-ai-confidence`,
  },
} as const;
```

**Extension Helper Pattern (from `packages/utils/lib/fhir/helpers.ts`):**

```typescript
import { Extension, DomainResource } from 'fhir/r4b';

// Read extension from resource
export function getAuraExtension<T extends string>(
  resource: DomainResource,
  extensionName: keyof typeof AURA_EXTENSION
): T | undefined {
  const url = AURA_EXTENSION[extensionName].url;
  const ext = resource.extension?.find((e) => e.url === url);
  return ext?.valueCode as T | undefined;
}

// Write extension to resource (mutates)
export function setAuraExtension<T extends string>(
  resource: DomainResource,
  extensionName: keyof typeof AURA_EXTENSION,
  value: T
): void {
  const url = AURA_EXTENSION[extensionName].url;
  const newExt: Extension = { url, valueCode: value };

  if (!resource.extension) {
    resource.extension = [newExt];
    return;
  }

  const existingIndex = resource.extension.findIndex((e) => e.url === url);
  if (existingIndex >= 0) {
    resource.extension[existingIndex] = newExt;
  } else {
    resource.extension.push(newExt);
  }
}
```

**Extension Values (Architecture spec):**

| Extension              | Values                                                   | Used For             |
| ---------------------- | -------------------------------------------------------- | -------------------- |
| `aura-status`          | active, new, modified, discontinued                      | Care plan item state |
| `aura-source`          | clinician, ai, patient                                   | Origin of item       |
| `aura-routing-actor`   | physician, ma, careManager, patient, caregiver, external | Action destination   |
| `aura-action-type`     | prescription, lab, referral, task, notify                | Action category      |
| `aura-approval-status` | pending, approved, rejected                              | Approval state       |
| `aura-ai-confidence`   | high, medium, low                                        | AI certainty level   |

### Source Tree Components to Touch

| File                                                    | Action | Purpose                               |
| ------------------------------------------------------- | ------ | ------------------------------------- |
| `packages/utils/lib/aura/fhir/extensions.ts`            | CREATE | Extension URL constants and helpers   |
| `packages/utils/lib/aura/types/extensions.types.ts`     | CREATE | TypeScript types for extension values |
| `packages/utils/lib/aura/constants/extension-values.ts` | CREATE | Extension value arrays                |
| `packages/utils/lib/aura/fhir/index.ts`                 | MODIFY | Export extensions                     |
| `packages/utils/lib/aura/types/index.ts`                | MODIFY | Export types                          |
| `packages/utils/lib/aura/constants/index.ts`            | MODIFY | Export constants                      |
| `packages/utils/lib/aura/index.ts`                      | MODIFY | Re-export all                         |

### Testing Standards Summary

- No unit tests strictly required for type definitions
- Consider adding a simple test file to verify type exports work
- Verification: TypeScript compilation should pass
- Verification: Can import all types and functions from `@aura/fhir`

### Critical Implementation Notes

1. **Use `valueCode` for extension values:**
   Aura extensions use simple code values, not CodeableConcept. Use `valueCode` property.

2. **Follow existing URL pattern:**
   Use `https://fhir.ottehr.com/Extension/aura-{name}` to match Ottehr conventions.

3. **Generic type helpers:**
   Use TypeScript generics to provide type safety:

   ```typescript
   const status = getAuraExtension<AuraStatus>(task, 'status');
   // status is AuraStatus | undefined
   ```

4. **Immutable option:**
   Consider providing both mutating and immutable versions:

   ```typescript
   // Mutating (for zambdas)
   setAuraExtension(resource, 'status', 'active');

   // Immutable (for React state)
   const updated = withAuraExtension(resource, 'status', 'active');
   ```

5. **Type guard functions:**
   Consider adding type guards for validation:
   ```typescript
   export function isAuraStatus(value: string): value is AuraStatus {
     return AURA_STATUS_VALUES.includes(value as AuraStatus);
   }
   ```

### Project Structure Notes

- **Alignment with unified project structure:** Extensions live in `packages/utils/lib/aura/fhir/` as documented in architecture.md
- **Detected conflicts or variances:** None - follows Ottehr FHIR extension patterns exactly
- **Integration point:** These extensions will be used by all Aura zambdas and some frontend components

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#FHIR-Extensions-Defined] - Extension specification table
- [Source: _bmad-output/planning-artifacts/architecture.md#Data-Architecture] - FHIR extension decisions
- [Source: packages/utils/lib/fhir/constants.ts] - Existing FHIR_EXTENSION pattern
- [Source: packages/utils/lib/fhir/helpers.ts] - getExtension() helper pattern
- [Source: packages/utils/lib/fhir/systemUrls.ts] - ottehrExtensionUrl() helper
- [Source: packages/utils/lib/fhir/resourcePatch.ts] - Extension patch operations

### Dependencies

- **Depends on:** Story 1.1 (Create Aura Directory Structure) - COMPLETED
- **Blocks:** Stories 1.4 (AI Client), 1.5 (Audit Logger), 2.2 (Synthesis Zambda), 3.1 (Action Generation)

### Estimated Complexity

- **Complexity:** Low
- **Risk:** Low
- **Scope:** Type definitions, constants, and utility functions only

### Learnings from Previous Stories

From Story 1.1:

- Use `export {};` in empty barrel files to make valid ES modules
- TypeScript paths configured in tsconfig.json for `@aura/*`

From Story 1.2:

- Import type augmentation files to ensure they're loaded
- Use `as const` for literal type inference
- Export types explicitly with `export type { ... }`
- Use consistent patterns from existing codebase (colors used routingColors pattern)

## Change Log

- 2026-01-10: Story created with comprehensive dev notes from architecture and existing FHIR patterns
