---
project_name: 'Aura (on Ottehr)'
user_name: 'JMR-OTTER'
date: '2026-01-08'
sections_completed:
  ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'code_quality', 'aura_critical_rules']
status: 'complete'
rule_count: 42
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

### Core Runtime

- **Node.js**: >=22.0.0 (required)
- **npm**: >=10.0.0 (required)

### Language & Build

- **TypeScript**: 5.8.3 (strict mode)
- **Vite**: 6.3.5 (frontend build)
- **Turbo**: 1.10.16 (monorepo orchestration)
- **esbuild**: 0.25.1 (zambda bundling)

### Frontend Framework

- **React**: 18.2.0
- **MUI (Material-UI)**: 5.14.18
- **React Router**: 6.3.0

### State Management

- **Zustand**: 4.4.6 (client state)
- **TanStack React Query**: 5.83.0 (server state)

### Backend & Data

- **Oystehr SDK**: 4.1.8 (FHIR platform)
- **Zod**: 3.25.67 (runtime validation)
- **FHIR R4**: via Oystehr API

### Aura AI (New)

- **Anthropic SDK**: TBD (AI synthesis)
- **Pinecone**: TBD (vector DB, HIPAA-compliant)

### Testing

- **Vitest**: 3.2.4 (unit/component tests)
- **Playwright**: 1.57.0 (E2E tests)
- **React Testing Library**: 16.3.0

### Code Quality

- **ESLint**: 8.57.0
- **Prettier**: 3.0.0
- **Husky**: 9.0.11 (git hooks)

---

## Critical Implementation Rules

### TypeScript Rules

**Return Types (CRITICAL):**

- ALL functions MUST have explicit return types
- Rule: `@typescript-eslint/explicit-function-return-type: error`
- Only exception: inline arrow function expressions

```typescript
// ✅ Correct
const fetchData = async (id: string): Promise<Patient> => { ... }
function processOrder(order: Order): ProcessedOrder { ... }

// ❌ Wrong - missing return type
const fetchData = async (id: string) => { ... }
```

**Unused Variables:**

- Unused variables/parameters MUST be prefixed with `_`
- Rule: `varsIgnorePattern: '^_'`, `argsIgnorePattern: '^_'`

```typescript
// ✅ Correct
const handleClick = (_event: MouseEvent, data: Data): void => { ... }

// ❌ Wrong - unused without underscore
const handleClick = (event: MouseEvent, data: Data): void => { ... }
```

**Promise Handling (CRITICAL):**

- NO floating promises - all promises must be awaited or handled
- Rule: `@typescript-eslint/no-floating-promises: error`
- Rule: `prefer-promise-reject-errors: error`

```typescript
// ✅ Correct
await savePatient(data);
void logAnalytics(event); // Explicitly ignored

// ❌ Wrong - floating promise
savePatient(data); // Error: Promise must be handled
```

**Import Sorting:**

- Imports sorted by `simple-import-sort` plugin
- Order: polyfills → node: → external packages → internal → relative

```typescript
// ✅ Correct order
import 'polyfills';
import { readFile } from 'node:fs';
import { Box, Button } from '@mui/material';
import { usePatient } from 'utils';
import { ActionCard } from './ActionCard';
```

**Strict Mode Settings:**

- `strict: true` (all strict checks enabled)
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noImplicitReturns: true`

### React & State Management Rules

**React Query (TanStack Query) - CRITICAL:**

- Exhaustive deps REQUIRED: `@tanstack/query/exhaustive-deps: error`
- Must use query object syntax: `@tanstack/query/prefer-query-object-syntax: error`
- Stable query client required: `@tanstack/query/stable-query-client: error`

```typescript
// ✅ Correct - object syntax with all deps
const { data } = useQuery({
  queryKey: ['aura', 'synthesis', patientId],
  queryFn: () => fetchSynthesis(patientId),
  enabled: !!patientId,
});

// ❌ Wrong - missing dep in queryKey
const { data } = useQuery({
  queryKey: ['aura', 'synthesis'], // Missing patientId!
  queryFn: () => fetchSynthesis(patientId),
});
```

**Query Key Convention (Aura):**

```typescript
// All Aura queries use this pattern
const queryKeys = {
  synthesis: {
    all: ['aura', 'synthesis'] as const,
    byPatient: (patientId: string) => ['aura', 'synthesis', patientId] as const,
  },
  actions: {
    all: ['aura', 'actions'] as const,
    byEncounter: (encounterId: string) => ['aura', 'actions', encounterId] as const,
  },
};
```

**Zustand Store Pattern:**

- Use dedicated stores per domain (not one mega-store)
- Store naming: `use{Domain}Store`
- Actions are always verbs

```typescript
// ✅ Correct pattern
interface ActionsState {
  pendingActions: AuraAction[];
  isApproving: boolean;
  approveAction: (id: string) => void;  // verb
  clearActions: () => void;             // verb
}

export const useActionsStore = create<ActionsState>()((set) => ({
  pendingActions: [],
  isApproving: false,
  approveAction: (id) => set((state) => ({ ... })),
  clearActions: () => set({ pendingActions: [] }),
}));
```

**MUI Component Patterns:**

- Use `sx` prop for one-off styles (not inline style)
- Use `styled()` for reusable styled components
- Theme extensions in `src/theme/` directory

```typescript
// ✅ Correct - sx prop
<Box sx={{ display: 'flex', gap: 2, p: 2 }}>

// ❌ Wrong - inline style object
<Box style={{ display: 'flex', gap: '16px', padding: '16px' }}>
```

**Component File Structure:**

- Components in PascalCase directories: `ActionsPanel/ActionsPanel.tsx`
- Tests co-located: `ActionsPanel/ActionsPanel.test.tsx`
- Barrel exports: `ActionsPanel/index.ts`

### Testing Rules

**Test Framework Usage:**

- **Unit/Component tests**: Vitest + React Testing Library
- **E2E tests**: Playwright
- **Coverage target**: 70% minimum (existing Ottehr rule)

**Test File Organization:**

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx    # Unit tests co-located
└── index.ts

apps/ehr/e2e/
├── aura/                     # Aura E2E tests
│   ├── actions-panel.spec.ts
│   └── synthesis.spec.ts
└── specs/                    # Existing EHR E2E
```

**Unit Test Pattern:**

```typescript
// ✅ Correct - descriptive, focused tests
describe('ActionsPanel', () => {
  it('should display pending actions count', () => { ... });
  it('should call approveAll when button clicked', () => { ... });
  it('should show loading state during approval', () => { ... });
});
```

**Zambda Test Requirements:**

- Every zambda MUST have tests: `index.test.ts`
- Minimum: happy path + error case
- Use Vitest mocks for external services

```typescript
// packages/zambdas/src/ehr/aura/aura-get-synthesis/index.test.ts
describe('aura-get-synthesis', () => {
  it('should return synthesis for valid patient', async () => { ... });
  it('should return 404 for unknown patient', async () => { ... });
  it('should handle AI service errors gracefully', async () => { ... });
});
```

**E2E Test Pattern (Playwright):**

```typescript
// apps/ehr/e2e/aura/actions-panel.spec.ts
test.describe('Actions Panel', () => {
  test('physician can approve all actions', async ({ page }) => {
    // Arrange
    await page.goto('/patient/123/encounter/456');

    // Act
    await page.getByRole('button', { name: 'Approve All' }).click();

    // Assert
    await expect(page.getByText('Approved')).toBeVisible();
  });
});
```

**Mock Patterns:**

- Mock external services (Anthropic, Oystehr) in tests
- Never mock internal utilities unless necessary
- Use MSW for API mocking in component tests

### Code Quality & Style Rules

**Naming Conventions:**

| Element             | Convention                 | Example                             |
| ------------------- | -------------------------- | ----------------------------------- |
| Variables/Functions | camelCase                  | `patientId`, `getActions()`         |
| React Components    | PascalCase                 | `ActionsPanel`, `SynthesisCard`     |
| Types/Interfaces    | PascalCase                 | `AuraAction`, `SynthesisResult`     |
| Constants           | SCREAMING_SNAKE            | `MAX_ACTIONS`, `AI_TIMEOUT_MS`      |
| Files (components)  | PascalCase                 | `ActionsPanel.tsx`                  |
| Files (utilities)   | kebab-case                 | `action-helpers.ts`                 |
| Directories         | kebab-case                 | `features/aura/`                    |
| Zambdas             | `aura-{action}-{resource}` | `aura-get-synthesis`                |
| FHIR Extensions     | `aura-{purpose}`           | `aura-status`, `aura-routing-actor` |

**File Organization (Aura Feature):**

```
apps/ehr/src/features/aura/
├── components/          # UI components
├── hooks/              # Custom React hooks
├── stores/             # Zustand stores
├── types/              # TypeScript types
├── api/                # React Query hooks + API calls
├── utils/              # Helper functions
├── constants/          # Constants and enums
└── index.ts            # Barrel export
```

**Zambda File Structure:**

```
packages/zambdas/src/ehr/aura/aura-get-synthesis/
├── index.ts            # Handler entry point
├── types.ts            # Request/response types
├── validation.ts       # Zod schemas
├── helpers.ts          # Business logic
└── index.test.ts       # Unit tests
```

**API Response Format (Ottehr Standard):**

```typescript
// Success
{ statusCode: 200, body: JSON.stringify({ data }) }

// Error
{ statusCode: 4xx|5xx, body: JSON.stringify({ message, code, details? }) }
```

**Date/Time Format:**

- All dates: ISO 8601 strings (`2026-01-08T10:30:00.000Z`)
- API always uses UTC
- Display formatting done on frontend only

### Aura-Specific Critical Rules

**AI Audit Logging (MANDATORY):**

- EVERY AI interaction MUST be logged to FHIR AuditEvent
- Log: request, response, model version, clinician action

```typescript
// ✅ REQUIRED for all AI zambdas
await auditLogger.logAiInteraction({
  type: 'synthesis' | 'action-generation' | 'decision-aid',
  patientId,
  encounterId,
  modelVersion: 'claude-3-5-sonnet-20241022',
  request: sanitizedPrompt,
  response: aiResponse,
  clinicianAction: 'pending' | 'approved' | 'rejected',
});
```

**AI Error Handling (CRITICAL):**

- AI failures must NEVER break core EHR functionality
- Always provide graceful fallback to manual workflow

```typescript
// ✅ Correct - graceful degradation
try {
  const synthesis = await aiClient.synthesize(data);
  return { synthesis };
} catch (error) {
  await auditLogger.logAiError(error, 'synthesis');
  return {
    synthesis: null,
    fallbackMode: true,
    message: 'AI assistance temporarily unavailable',
  };
}

// ❌ Wrong - AI error breaks the UI
if (aiError) throw aiError;
```

**AI Loading States:**

```typescript
// Standard timing for AI operations
const AI_LOADING_DELAY_MS = 500; // Wait before showing indicator
const AI_TIMEOUT_MS = 30000; // Max wait before error
```

**FHIR Extension Usage:**

- All Aura data uses FHIR resources with extensions
- Extension URL pattern: `aura-{purpose}`

| Extension              | Values                                         |
| ---------------------- | ---------------------------------------------- |
| `aura-status`          | active, new, modified, discontinued            |
| `aura-source`          | clinician, ai, patient                         |
| `aura-routing-actor`   | physician, ma, careManager, patient, caregiver |
| `aura-approval-status` | pending, approved, rejected                    |
| `aura-ai-confidence`   | high, medium, low                              |

**CDS Compliance (Patient-Facing AI):**

- Patient-facing AI outputs MUST be routed through clinician approval
- Never display AI-generated clinical recommendations directly to patients without clinician review

**Optimistic Updates Pattern:**

```typescript
// ✅ Correct - optimistic update with rollback
const approveAction = async (actionId: string): Promise<void> => {
  // 1. Optimistic update
  queryClient.setQueryData(['aura', 'actions'], (old) =>
    old.map((a) => (a.id === actionId ? { ...a, status: 'approved' } : a))
  );

  try {
    await api.approveAction(actionId);
  } catch (error) {
    // 2. Rollback on error
    queryClient.invalidateQueries(['aura', 'actions']);
    throw error;
  }
};
```

**Anti-Patterns to AVOID:**

```typescript
// ❌ NEVER: Direct fetch instead of React Query
useEffect(() => { fetch('/api/...').then(setData); }, []);

// ❌ NEVER: AI call without audit logging
const result = await aiClient.generate(prompt);

// ❌ NEVER: Snake_case variables
const patient_id = '123';

// ❌ NEVER: Missing return type
const processData = (data) => { ... };

// ❌ NEVER: any type without justification
const handle = (data: any) => { ... };

// ❌ NEVER: Floating promise
savePatient(data);
```

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Refer to `_bmad-output/planning-artifacts/architecture.md` for detailed architectural decisions

**For Humans:**

- Keep this file lean and focused on agent needs
- Update when technology stack changes
- Review quarterly for outdated rules
- Remove rules that become obvious over time

**Related Documents:**

- Architecture: `_bmad-output/planning-artifacts/architecture.md`
- PRD: `_bmad-output/planning-artifacts/prd.md`
- UX Design: `_bmad-output/planning-artifacts/ux-design-specification.md`

---

_Last Updated: 2026-01-08_
