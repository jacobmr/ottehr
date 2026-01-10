# Story 1.4: Create AI Client Infrastructure

Status: done

## Story

As a developer,
I want an AI client wrapper for Anthropic Claude integration,
So that I can make AI calls with proper error handling, retries, and auditing.

## Acceptance Criteria

1. **Given** the `@anthropic-ai/sdk` package is installed
   **When** I import the AI client from `packages/zambdas/src/ehr/aura/shared/ai-client.ts`
   **Then** I can call `generateCompletion(prompt, options)` which:

   - Uses the model specified in `AURA_AI_MODEL` secret
   - Has configurable temperature and max tokens
   - Returns structured response with usage metrics

2. **Given** the AI client is configured
   **When** making requests
   **Then** circuit breaker pattern is implemented:

   - Opens after 5 consecutive failures
   - Stays open for 30 seconds
   - Half-open state tests with single request

3. **Given** the AI client encounters errors
   **When** a request fails
   **Then** retry logic uses exponential backoff (max 3 retries)

4. **Given** the AI client is used
   **When** requests are made
   **Then** all requests are logged with correlation IDs

5. **Given** the circuit breaker is open
   **When** a request is attempted
   **Then** the client throws `AiUnavailableError`

## Tasks / Subtasks

- [x] Task 1: Create AI client types (AC: #1)

  - [x] Create types for AI completion options
  - [x] Create types for AI response structure
  - [x] Create AiUnavailableError class

- [x] Task 2: Implement circuit breaker (AC: #2)

  - [x] Create CircuitBreaker class
  - [x] Implement open/closed/half-open states
  - [x] Configure thresholds (5 failures, 30s timeout)

- [x] Task 3: Implement AI client (AC: #1, #3, #4)

  - [x] Create generateCompletion function
  - [x] Implement exponential backoff retry
  - [x] Add correlation ID logging
  - [x] Read model from AURA_AI_MODEL secret

- [x] Task 4: Export from barrel file (AC: #1)
  - [x] Update shared/index.ts with exports

## Dev Notes

### Architecture Pattern

The AI client goes in `packages/zambdas/src/ehr/aura/shared/ai-client.ts` and wraps the Anthropic SDK.

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#AI-Integration-Requirements]

## Change Log

- 2026-01-10: Story created for Ralph Loop POC implementation
- 2026-01-10: Story completed - implemented AI client with circuit breaker, retry logic, and correlation ID logging
