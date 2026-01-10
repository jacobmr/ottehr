# Story 1.5: Create AI Audit Logger

Status: done

## Story

As a compliance officer,
I want all AI interactions logged to FHIR AuditEvent,
So that we have complete traceability of AI suggestions and clinician responses.

## Acceptance Criteria

1. **Given** an AI request is made
   **When** the AI client processes the request
   **Then** a FHIR AuditEvent is created with:

   - `type`: "aura-ai-interaction"
   - `action`: "E" (Execute)
   - `outcome`: "0" (Success) or "4" (Minor failure) or "8" (Serious failure)
   - `agent.who`: Reference to the user who triggered the request
   - `source.observer`: Reference to the Aura system
   - `entity[0]`: The input data (patient reference, prompt hash)
   - `entity[1]`: The output data (response hash, token count)

2. **Given** audit events are created
   **When** they include AI-specific metadata
   **Then** the audit event includes extensions for:

   - Model version used
   - Prompt template version
   - Confidence score
   - Response time in milliseconds

3. **Given** audit events exist
   **When** attempting to modify them
   **Then** audit logs are immutable (no updates, only creates)

## Tasks / Subtasks

- [x] Task 1: Create audit event types (AC: #1, #2)

  - [x] Create types for AI audit event input
  - [x] Create types for AI audit metadata
  - [x] Define constants for audit event coding

- [x] Task 2: Implement audit logger (AC: #1, #2, #3)

  - [x] Create `logAiInteraction` function
  - [x] Build FHIR AuditEvent resource structure
  - [x] Add AI-specific extensions
  - [x] Implement hash functions for input/output

- [x] Task 3: Export from barrel file (AC: #1)
  - [x] Update shared/index.ts with audit logger exports

## Dev Notes

### Architecture Pattern

The AI audit logger goes in `packages/zambdas/src/ehr/aura/shared/audit-logger.ts` and creates FHIR AuditEvent resources.

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#AI-Integration-Requirements]
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.5]

## Change Log

- 2026-01-10: Story created for Ralph Loop POC implementation
- 2026-01-10: Story completed - implemented FHIR AuditEvent logging with AI-specific extensions
