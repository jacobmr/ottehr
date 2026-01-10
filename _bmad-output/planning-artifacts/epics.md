---
stepsCompleted:
  ['step-01-requirements-extraction', 'step-02-epic-design', 'step-03-create-stories', 'step-04-final-validation']
status: complete
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
---

# Aura - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Aura, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Patient Engagement (FR1-FR10):**

- FR1: Patient can submit pre-visit concerns and questions via text before an appointment
- FR2: Patient can view their Care Plan with current conditions, medications, and active goals
- FR3: Patient can see the same encounter view as the clinician during a visit (shared transparency)
- FR4: Patient can authorize specific caregivers to access their health information
- FR5: Patient can revoke caregiver access at any time
- FR6: Patient can define the scope of information each caregiver can view
- FR7: Patient can send messages to their care team through the platform
- FR8: Patient can respond to AI-initiated information gathering questions
- FR9: Patient can view visit summaries after encounters
- FR10: Patient can see action items assigned to them with clear instructions

**Caregiver Access (FR11-FR15):**

- FR11: Caregiver can view patient information within their authorized scope
- FR12: Caregiver can receive automatic visit summaries when patient authorizes
- FR13: Caregiver can see action items relevant to their caregiving role
- FR14: Caregiver can send reminders to patient (via platform delegation)
- FR15: Caregiver can message the care team on behalf of the patient (when authorized)

**Clinical Encounter (FR16-FR25):**

- FR16: Clinician can view AI-synthesized pre-visit summary including patient concerns, relevant history, and identified gaps
- FR17: Clinician can see patient's stated priorities displayed prominently at encounter start
- FR18: Clinician can access AI-generated decision aids showing treatment options with pros/cons
- FR19: Clinician can capture encounter content via voice (ambient) or typed input
- FR20: Clinician can view real-time transcript of the encounter conversation
- FR21: Clinician can see quality gaps (HEDIS measures) surfaced during the encounter
- FR22: Clinician can view and share the encounter screen with the patient (shared view)
- FR23: Clinician can generate clinical documentation automatically from encounter content
- FR24: Clinician can review and edit AI-generated documentation before finalizing
- FR25: Clinician can see the basis, sources, and limitations for any AI suggestion

**Actions Panel & Workflow (FR26-FR36):**

- FR26: Clinician can view all suggested actions organized in an Actions Panel
- FR27: Clinician can approve individual actions with a single tap
- FR28: Clinician can approve all suggested actions with a single "Approve All" action
- FR29: Clinician can modify suggested actions before approval
- FR30: Clinician can reject suggested actions with optional reason
- FR31: Clinician can see which actor each action will route to (physician, MA, care manager, patient, caregiver)
- FR32: System routes approved actions to the appropriate actor automatically
- FR33: System notifies actors when new actions are assigned to them
- FR34: Actor can view their assigned actions in a role-specific queue
- FR35: Actor can mark actions as completed with documentation
- FR36: System maintains complete audit trail of all actions (suggested, approved, modified, rejected, completed)

**Medical Assistant (MA) Workflow (FR37-FR42):**

- FR37: MA can view pre-visit prep instructions for each patient
- FR38: MA can see standing orders eligible for execution (e.g., vaccines, screenings)
- FR39: MA can execute delegated clinical tasks and document completion
- FR40: MA can perform and document point-of-care tests
- FR41: MA can view post-visit action items assigned to MA role
- FR42: MA can provide patient education and document delivery

**Care Management (FR43-FR50):**

- FR43: Care Manager can view their assigned patient panel with priority stratification
- FR44: Care Manager can see patients flagged by clinical triggers (hospital discharge, lab results, missed appointments)
- FR45: Care Manager can view AI-suggested outreach scripts for each patient
- FR46: Care Manager can initiate outreach via preferred patient channel (call, text, message)
- FR47: Care Manager can document outreach outcomes with structured data capture
- FR48: Care Manager can escalate concerns to a provider with full context
- FR49: Care Manager can view and update patient care plans
- FR50: Care Manager can close care gaps with documentation

**Care Plan Management (FR51-FR56):**

- FR51: System maintains longitudinal Care Plan with individual as primary key (not encounter-based)
- FR52: Care Plan displays current conditions, active medications, and goals
- FR53: Care Plan shows quality gaps (HEDIS measures) with status
- FR54: Care Plan persists across encounters and updates in real-time
- FR55: Care Plan is visible to patient, clinician, and authorized caregivers (appropriate views)
- FR56: System tracks gap closure across the care continuum

**AI & Clinical Intelligence (FR57-FR66):**

- FR57: AI synthesizes patient data into pre-visit summaries
- FR58: AI identifies relevant clinical gaps based on patient conditions and guidelines
- FR59: AI generates treatment option comparisons as decision aids
- FR60: AI generates clinical documentation from encounter content
- FR61: AI suggests actions with routing recommendations
- FR62: AI gathers information from patients without making diagnostic statements (CDS-compliant)
- FR63: AI routes patient-reported symptoms to licensed professionals for clinical guidance
- FR64: AI surfaces relevant context for clinician review (not auto-action)
- FR65: All AI outputs include reasoning transparency (basis, sources, limitations)
- FR66: AI flags uncertainty rather than guessing

**Orders & Prescriptions (FR67-FR71):**

- FR67: Clinician can order medications through integrated eRx
- FR68: Clinician can order lab tests with electronic transmission
- FR69: Clinician can create referrals with relevant clinical context attached
- FR70: Clinician can review drug interactions before prescribing
- FR71: Orders require explicit clinician approval (no autonomous ordering)

**User & Access Management (FR72-FR77):**

- FR72: Practice Admin can create and manage user accounts
- FR73: Practice Admin can assign roles to users
- FR74: Practice Admin can configure practice-level settings
- FR75: System enforces role-based access controls per RBAC matrix
- FR76: System supports composable roles (user can have multiple roles)
- FR77: System logs all user access to PHI with audit trail

**Multi-Tenancy & Organization (FR78-FR81):**

- FR78: System isolates data at the practice level (tenant boundary)
- FR79: System supports multiple providers within a practice
- FR80: System supports cross-practice access for TPO purposes (with appropriate controls)
- FR81: System schema supports future Health System tier (dormant for MVP)

**Compliance & Audit (FR82-FR86):**

- FR82: System maintains complete audit trail of all AI suggestions and clinician responses
- FR83: System logs what was suggested, what was approved/modified/rejected, by whom, when
- FR84: System encrypts all PHI at rest and in transit
- FR85: System enforces minimum necessary access principle
- FR86: System supports HIPAA-required access controls and logging

**Notifications & Communication (FR87-FR90):**

- FR87: System sends notifications to actors when actions are assigned
- FR88: System sends visit summaries to authorized caregivers
- FR89: System sends appointment reminders to patients
- FR90: System supports configurable notification preferences per user

**Total: 90 Functional Requirements**

### NonFunctional Requirements

**Performance (NFR-P1 to NFR-P6):**

- NFR-P1: Standard user actions respond in < 1 second (page loads, form submissions, navigation)
- NFR-P2: AI synthesis operations respond in 2-5 seconds with visible indicator
- NFR-P3: Real-time data sync with < 500ms propagation (care plan updates, action status changes)
- NFR-P4: Voice transcription with < 2 second latency for near real-time display
- NFR-P5: Actions Panel renders in < 1 second after encounter ends
- NFR-P6: Search operations (medication, patient lookup) complete in < 2 seconds

**Security & Compliance (NFR-S1 to NFR-S10):**

- NFR-S1: Encryption at rest using AES-256 for all PHI
- NFR-S2: Encryption in transit using TLS 1.3 minimum for all connections
- NFR-S3: Multi-factor authentication required for clinical users
- NFR-S4: Automatic session timeout after 15 minutes of inactivity
- NFR-S5: 100% of PHI access logged with user, timestamp, and data accessed
- NFR-S6: Immutable, tamper-evident audit logs
- NFR-S7: RBAC enforced at API level, not just UI
- NFR-S8: All vendors processing PHI must have executed BAA
- NFR-S9: Annual third-party penetration testing before production
- NFR-S10: Documented breach notification procedure (HIPAA 60-day rule)

**Scalability (NFR-SC1 to NFR-SC6):**

- NFR-SC1: Support 10 concurrent providers per practice
- NFR-SC2: Support 50 practices without architecture changes
- NFR-SC3: Support 5,000 active patients per practice
- NFR-SC4: Support 200 concurrent encounters system-wide
- NFR-SC5: Stateless services enable horizontal scaling
- NFR-SC6: Tenant isolation supports database sharding if needed

**Reliability & Availability (NFR-R1 to NFR-R8):**

- NFR-R1: 99.5% availability (excludes planned maintenance)
- NFR-R2: Maximum 4 hours/month planned maintenance, scheduled off-peak
- NFR-R3: 99.999% data durability (no data loss)
- NFR-R4: Daily full backups, continuous transaction logs
- NFR-R5: Recovery time objective (RTO) < 4 hours for full system recovery
- NFR-R6: Recovery point objective (RPO) < 1 hour of data loss maximum
- NFR-R7: AI features degrade gracefully; core EHR functions remain available
- NFR-R8: External service failures don't cascade to core functionality (circuit breakers)

**Accessibility (NFR-A1 to NFR-A8):**

- NFR-A1: WCAG 2.1 Level AA compliance for patient-facing interfaces
- NFR-A2: Full screen reader compatibility (NVDA, JAWS, VoiceOver)
- NFR-A3: All functions accessible via keyboard
- NFR-A4: Minimum 4.5:1 color contrast ratio for normal text
- NFR-A5: Support 200% zoom without horizontal scrolling
- NFR-A6: Visible focus state for all interactive elements
- NFR-A7: All form inputs have associated labels
- NFR-A8: Errors clearly identified with suggestions

**Integration (NFR-I1 to NFR-I7):**

- NFR-I1: Full FHIR R4 compatibility via Oystehr
- NFR-I2: Semantic API versioning with 6-month deprecation notice
- NFR-I3: Rate limits per tenant to prevent abuse
- NFR-I4: At-least-once webhook delivery with idempotency support
- NFR-I5: 30-second maximum timeout for external API calls
- NFR-I6: Exponential backoff retry logic for transient failures
- NFR-I7: JSON for APIs, HL7 FHIR for clinical data format standards

**Maintainability (NFR-M1 to NFR-M7):**

- NFR-M1: Minimum 70% unit test coverage for new code
- NFR-M2: API documentation auto-generated and current
- NFR-M3: Structured logging with correlation IDs
- NFR-M4: Centralized error tracking with alerting
- NFR-M5: Zero-downtime deployments
- NFR-M6: Environment-based configuration, no hardcoded secrets
- NFR-M7: Automated security scanning for dependencies

**AI-Specific Quality (NFR-AI1 to NFR-AI7):**

- NFR-AI1: Same input produces semantically consistent output (response consistency)
- NFR-AI2: All AI outputs include basis and limitations (transparency)
- NFR-AI3: AI confidence below threshold triggers explicit flag (uncertainty flagging)
- NFR-AI4: AI service failure falls back to manual workflow (fallback behavior)
- NFR-AI5: AI model versions tracked in audit trail (model versioning)
- NFR-AI6: Prompt templates versioned and auditable (prompt versioning)
- NFR-AI7: AI outputs validated against clinical safety rules (output validation)

**Total: 49 Non-Functional Requirements**

### Additional Requirements

**From Architecture - Technical Foundation:**

- ARCH-1: Brownfield extension on Ottehr - extend `apps/ehr/src/features/aura/` for frontend
- ARCH-2: Backend zambdas created in `packages/zambdas/src/ehr/aura/`
- ARCH-3: Shared utilities in `packages/utils/lib/aura/`
- ARCH-4: Install @anthropic-ai/sdk for AI integration
- ARCH-5: Install @pinecone-database/pinecone for vector DB
- ARCH-6: Feature flag `VITE_APP_AURA_ENABLED` controls Aura visibility

**From Architecture - FHIR Extensions Required:**

- ARCH-7: Register `aura-status` extension (active, new, modified, discontinued)
- ARCH-8: Register `aura-source` extension (clinician, ai, patient)
- ARCH-9: Register `aura-routing-actor` extension (physician, ma, careManager, patient, caregiver, external)
- ARCH-10: Register `aura-action-type` extension (prescription, lab, referral, task, notify)
- ARCH-11: Register `aura-approval-status` extension (pending, approved, rejected)
- ARCH-12: Register `aura-ai-confidence` extension (high, medium, low)

**From Architecture - Zambda Endpoints Required:**

- ARCH-13: `aura-get-synthesis` - http_auth endpoint for pre-visit synthesis
- ARCH-14: `aura-generate-actions` - http_auth endpoint for generating actions from encounter
- ARCH-15: `aura-approve-actions` - http_auth endpoint for batch action approval
- ARCH-16: `aura-get-care-plan` - http_auth endpoint for longitudinal care plan
- ARCH-17: `aura-update-care-plan` - http_auth endpoint for care plan updates
- ARCH-18: `aura-get-decision-aid` - http_auth endpoint for decision aid generation
- ARCH-19: `aura-capture-patient-input` - http_open endpoint for pre-visit concerns
- ARCH-20: `aura-get-action-queue` - http_auth endpoint for role-specific action queues

**From Architecture - Zustand Stores Required:**

- ARCH-21: `useActionsStore` - pendingActions, approvalState management
- ARCH-22: `useSynthesisStore` - synthesis, loading, error state
- ARCH-23: `useCarePlanStore` - carePlanItems, filters
- ARCH-24: `useSharedViewStore` - isShared, patientViewMode

**From Architecture - AI Integration Requirements:**

- ARCH-25: AI client wrapper with Anthropic SDK in `shared/ai-client.ts`
- ARCH-26: AI audit logging to FHIR AuditEvent in `shared/audit-logger.ts`
- ARCH-27: AI error recovery with circuit breaker pattern
- ARCH-28: AI prompts versioned in `shared/ai-prompts.ts`
- ARCH-29: Store `ANTHROPIC_API_KEY` in Oystehr secrets
- ARCH-30: Store `PINECONE_API_KEY` in Oystehr secrets
- ARCH-31: Store `AURA_AI_MODEL` in Oystehr secrets for model version selection

**From UX Design - Component Requirements:**

- UX-1: ActionsPanel component with collapsed/expanded/loading/empty/approving states
- UX-2: ActionCard component with type icon, routing chip, hover actions
- UX-3: ApproveAllButton with animation sequence (press, checkmark, flow, toast)
- UX-4: SynthesisCard with patient concerns, key metrics, quality gaps sections
- UX-5: DecisionAid with pros/cons grid, recommendation highlight
- UX-6: PatientContextBar persistent at top with patient identity and concerns
- UX-7: StatusChip for care plan states (active, new, modified, discontinued, confirmed)
- UX-8: RoutingChip for actor assignment with color-coded actors
- UX-9: ActionQueue for MA/Care Manager role-specific views

**From UX Design - Interaction Requirements:**

- UX-10: One-tap "Approve All" with 5-second undo window
- UX-11: AI thinking indicator (500ms delay before showing, messages at 2-5s)
- UX-12: Optimistic updates with rollback on error
- UX-13: Toast notifications for action feedback (success 4s, info 6s, warning 8s, error persistent)
- UX-14: Inline editing pattern (click to edit, Enter to confirm, Escape to cancel)
- UX-15: Shared view badge indicating patient sees the same screen

**From UX Design - Visual Design Requirements:**

- UX-16: Aura primary color: #0D7377 (Deep Teal)
- UX-17: AI accent color: #7C4DFF (Soft Purple) for AI-generated content
- UX-18: Routing colors: Physician (Teal), MA (Orange), Care Manager (Purple), Patient (Green), Caregiver (Blue)
- UX-19: Status colors: Active (Gray), New (Green), Modified (Amber), Discontinued (Red), Confirmed (Teal)
- UX-20: 44px minimum touch targets for interactive elements
- UX-21: 8px grid spacing system

**From UX Design - Responsive Requirements:**

- UX-22: Desktop (1200px+): Multi-panel layout with docked Actions Panel
- UX-23: Tablet (768-1199px): Drawer Actions Panel with touch gestures
- UX-24: Mobile (320-767px): Full-screen cards with bottom navigation

**From UX Design - Accessibility Requirements:**

- UX-25: WCAG 2.1 AA compliance for all components
- UX-26: Keyboard navigation with visible focus indicators
- UX-27: ARIA labels for all icons and interactive elements
- UX-28: Live regions for dynamic content announcements
- UX-29: Respect `prefers-reduced-motion` setting

**Total: 60 Additional Requirements (31 Architecture + 29 UX)**

### FR Coverage Map

**Patient Engagement (FR1-FR10):**

- FR1: Epic 2 - Pre-visit patient input capture
- FR2: Epic 5, Epic 9 - Care plan view (clinician & patient)
- FR3: Epic 6 - Shared view during encounter
- FR4: Epic 10 - Caregiver authorization
- FR5: Epic 10 - Caregiver access revocation
- FR6: Epic 10 - Caregiver scope definition
- FR7: Epic 12 - Patient messaging
- FR8: Epic 12 - AI information gathering responses
- FR9: Epic 9 - Visit summary view
- FR10: Epic 9 - Patient action items

**Caregiver Access (FR11-FR15):**

- FR11: Epic 10 - Caregiver patient view
- FR12: Epic 10 - Automatic visit summaries
- FR13: Epic 10 - Caregiver action items
- FR14: Epic 10 - Patient reminders via caregiver
- FR15: Epic 10 - Caregiver messaging

**Clinical Encounter (FR16-FR25):**

- FR16: Epic 2 - Pre-visit synthesis view
- FR17: Epic 2 - Patient priorities display
- FR18: Epic 6 - Decision aids
- FR19: Epic 4 - Voice/typed capture
- FR20: Epic 13 - Real-time transcript
- FR21: Epic 5 - HEDIS gaps during encounter
- FR22: Epic 6 - Shared encounter view
- FR23: Epic 4 - Auto-documentation
- FR24: Epic 4 - Documentation editing
- FR25: Epic 6 - AI suggestion transparency

**Actions Panel & Workflow (FR26-FR36):**

- FR26: Epic 3 - Actions Panel view
- FR27: Epic 3 - Individual action approval
- FR28: Epic 3 - Approve All
- FR29: Epic 3 - Action modification
- FR30: Epic 3 - Action rejection
- FR31: Epic 3 - Routing visibility
- FR32: Epic 3, Epic 8 - Automatic routing
- FR33: Epic 8, Epic 14 - Actor notifications
- FR34: Epic 7 - Role-specific queues
- FR35: Epic 7 - Action completion
- FR36: Epic 3 - Action audit trail

**MA Workflow (FR37-FR42):**

- FR37: Epic 7 - Pre-visit prep instructions
- FR38: Epic 7 - Standing orders
- FR39: Epic 7 - Delegated task execution
- FR40: Epic 7 - Point-of-care tests
- FR41: Epic 7 - Post-visit action items
- FR42: Epic 7 - Patient education

**Care Management (FR43-FR50):**

- FR43: Epic 11 - Panel with priority
- FR44: Epic 11 - Clinical trigger flags
- FR45: Epic 11 - AI outreach scripts
- FR46: Epic 11 - Multi-channel outreach
- FR47: Epic 11 - Outreach documentation
- FR48: Epic 11 - Provider escalation
- FR49: Epic 11 - Care plan updates
- FR50: Epic 11 - Gap closure

**Care Plan Management (FR51-FR56):**

- FR51: Epic 5 - Longitudinal care plan
- FR52: Epic 5 - Conditions/meds/goals
- FR53: Epic 5 - HEDIS gaps with status
- FR54: Epic 5 - Real-time persistence
- FR55: Epic 5, Epic 9 - Multi-role visibility
- FR56: Epic 5 - Gap closure tracking

**AI & Clinical Intelligence (FR57-FR66):**

- FR57: Epic 2 - Pre-visit synthesis
- FR58: Epic 2 - Gap identification
- FR59: Epic 6 - Treatment comparisons
- FR60: Epic 3, Epic 4 - Documentation generation
- FR61: Epic 3 - Action suggestions
- FR62: Epic 12 - CDS-compliant gathering
- FR63: Epic 12 - Symptom routing
- FR64: Epic 12 - Context surfacing
- FR65: Epic 3 - Reasoning transparency
- FR66: Epic 3 - Uncertainty flagging

**Orders & Prescriptions (FR67-FR71):**

- FR67: Epic 8 - eRx integration
- FR68: Epic 8 - Lab orders
- FR69: Epic 8 - Referrals
- FR70: Epic 8 - Drug interactions
- FR71: Epic 3 - Clinician approval required

**User & Access Management (FR72-FR77):**

- FR72: Epic 15 - User management
- FR73: Epic 15 - Role assignment
- FR74: Epic 15 - Practice settings
- FR75: Epic 15 - RBAC enforcement
- FR76: Epic 15 - Composable roles
- FR77: Epic 15, Epic 16 - PHI access logging

**Multi-Tenancy (FR78-FR81):**

- FR78: Epic 15 - Practice isolation
- FR79: Epic 15 - Multi-provider support
- FR80: Epic 15 - TPO cross-practice
- FR81: Epic 15 - Health system tier

**Compliance & Audit (FR82-FR86):**

- FR82: Epic 16 - AI audit trail
- FR83: Epic 16 - Action logging
- FR84: Epic 16 - PHI encryption
- FR85: Epic 16 - Minimum necessary
- FR86: Epic 16 - HIPAA controls

**Notifications (FR87-FR90):**

- FR87: Epic 14 - Action notifications
- FR88: Epic 10 - Caregiver summaries
- FR89: Epic 14 - Appointment reminders
- FR90: Epic 14 - Notification preferences

## Epic List

### Epic 1: Foundation & Project Setup

Development team can build Aura features on the Ottehr platform with AI capabilities enabled.
**Requirements covered:** ARCH-1 to ARCH-12, ARCH-25 to ARCH-31, UX-16 to UX-21

### Epic 2: Pre-Visit Patient Input & Care Context

Patients can submit concerns before visits, and clinicians see AI-synthesized context when opening a chart.
**FRs covered:** FR1, FR16, FR17, FR57, FR58
**Additional:** ARCH-13, ARCH-19, ARCH-22, UX-4, UX-6, UX-11

### Epic 3: Actions Panel & Clinician Approval

Clinicians can view AI-suggested actions and approve them with a single tap, completing the Quadruple-A framework.
**FRs covered:** FR26, FR27, FR28, FR29, FR30, FR31, FR32, FR36, FR60, FR61, FR65, FR66, FR71
**Additional:** ARCH-14, ARCH-15, ARCH-21, UX-1, UX-2, UX-3, UX-8, UX-10, UX-12, UX-13

### Epic 4: Clinical Documentation Generation

Clinicians have notes auto-generated from encounters and can review/edit before finalizing.
**FRs covered:** FR19, FR23, FR24, FR60
**Additional:** UX-14

### Epic 5: Care Plan Management

Clinicians and patients can view longitudinal care plans with conditions, medications, goals, and quality gaps.
**FRs covered:** FR2, FR21, FR51, FR52, FR53, FR54, FR55, FR56
**Additional:** ARCH-16, ARCH-17, ARCH-23, UX-7

### Epic 6: Decision Aids & Shared Decision-Making

Clinicians and patients can view treatment options together with pros/cons for collaborative decisions.
**FRs covered:** FR3, FR18, FR22, FR25, FR59
**Additional:** ARCH-18, UX-5, UX-15

### Epic 7: MA Workflow & Action Queues

MAs can view pre-visit prep instructions and post-visit tasks in role-specific queues.
**FRs covered:** FR34, FR35, FR37, FR38, FR39, FR40, FR41, FR42
**Additional:** ARCH-20, UX-9

### Epic 8: Orders, Prescriptions & Referrals

Clinicians can order medications, labs, and referrals through the Actions Panel with eRx integration.
**FRs covered:** FR32, FR33, FR67, FR68, FR69, FR70

### Epic 9: Patient Portal & Post-Visit Access

Patients can view visit summaries, care plans, and assigned action items after encounters.
**FRs covered:** FR2, FR9, FR10, FR55

### Epic 10: Caregiver Access & Notifications

Authorized caregivers can view patient information, receive visit summaries, and see relevant action items.
**FRs covered:** FR4, FR5, FR6, FR11, FR12, FR13, FR14, FR15, FR88

### Epic 11: Care Manager Panel & Outreach

Care managers can view prioritized patient panels and execute AI-suggested outreach.
**FRs covered:** FR43, FR44, FR45, FR46, FR47, FR48, FR49, FR50

### Epic 12: Patient Messaging & Async Engagement

Patients can message care teams and respond to AI-initiated information gathering (CDS-compliant).
**FRs covered:** FR7, FR8, FR62, FR63, FR64

### Epic 13: Real-Time Transcript

Clinicians can view real-time transcript of encounter conversations with speaker identification.
**FRs covered:** FR20

### Epic 14: Notifications & Communication Preferences

All actors receive appropriate notifications and can configure their preferences.
**FRs covered:** FR33, FR87, FR89, FR90

### Epic 15: Administration & Access Management

Practice admins can manage users, roles, and practice settings with full RBAC.
**FRs covered:** FR72, FR73, FR74, FR75, FR76, FR77, FR78, FR79, FR80, FR81

### Epic 16: Compliance, Audit & Security

System maintains complete audit trails and meets all HIPAA security requirements.
**FRs covered:** FR77, FR82, FR83, FR84, FR85, FR86
**NFRs addressed:** NFR-S1 to NFR-S10, NFR-AI5, NFR-AI6

---

## Epic 1: Foundation & Project Setup

Development team can build Aura features on the Ottehr platform with AI capabilities enabled.

### Story 1.1: Create Aura Directory Structure

As a developer,
I want the Aura directory structure created in the Ottehr codebase,
So that I have organized locations for all Aura components, zambdas, and utilities.

**Acceptance Criteria:**

**Given** the Ottehr monorepo exists
**When** I run the project setup
**Then** the following directories are created:

- `apps/ehr/src/features/aura/components/`
- `apps/ehr/src/features/aura/theme/`
- `apps/ehr/src/features/aura/stores/`
- `apps/ehr/src/features/aura/hooks/`
- `apps/ehr/src/features/aura/types/`
- `packages/zambdas/src/ehr/aura/`
- `packages/utils/lib/aura/`
  **And** each directory contains an `index.ts` barrel export file
  **And** TypeScript paths are configured in `tsconfig.json` for `@aura/*` imports

---

### Story 1.2: Configure Aura Theme Extensions

As a developer,
I want an Aura theme that extends the Ottehr MUI theme,
So that all Aura components have consistent, brand-aligned styling.

**Acceptance Criteria:**

**Given** the Aura theme directory exists
**When** I import the Aura theme
**Then** I have access to these palette tokens:

- `aura.primary`: #0D7377 (Deep Teal)
- `aura.primaryLight`: #14A3A8
- `aura.primaryDark`: #0A5C5E
- `aura.aiAccent`: #7C4DFF (Soft Purple)
- `aura.aiBackground`: #F3E5F5
  **And** routing colors are available:
- `routing.physician`: #0D7377
- `routing.ma`: #F57C00
- `routing.careManager`: #7B1FA2
- `routing.patient`: #388E3C
- `routing.caregiver`: #1976D2
- `routing.external`: #616161
  **And** status colors are available:
- `status.active`: #757575
- `status.new`: #4CAF50
- `status.modified`: #FFC107
- `status.discontinued`: #EF5350
- `status.confirmed`: #0D7377
  **And** the theme uses 8px grid spacing
  **And** minimum touch target is set to 44px

---

### Story 1.3: Register FHIR Extensions

As a developer,
I want Aura-specific FHIR extensions registered in the system,
So that I can store Aura-specific metadata on FHIR resources.

**Acceptance Criteria:**

**Given** the Oystehr FHIR API is configured
**When** the extensions are registered
**Then** the following extensions are available:

- `aura-status` with values: active, new, modified, discontinued
- `aura-source` with values: clinician, ai, patient
- `aura-routing-actor` with values: physician, ma, careManager, patient, caregiver, external
- `aura-action-type` with values: prescription, lab, referral, task, notify
- `aura-approval-status` with values: pending, approved, rejected
- `aura-ai-confidence` with values: high, medium, low
  **And** TypeScript types are created for each extension
  **And** helper functions exist to read/write extensions on FHIR resources

---

### Story 1.4: Create AI Client Infrastructure

As a developer,
I want an AI client wrapper for Anthropic Claude integration,
So that I can make AI calls with proper error handling, retries, and auditing.

**Acceptance Criteria:**

**Given** the `@anthropic-ai/sdk` package is installed
**When** I import the AI client from `packages/zambdas/src/ehr/aura/shared/ai-client.ts`
**Then** I can call `generateCompletion(prompt, options)` which:

- Uses the model specified in `AURA_AI_MODEL` secret
- Has configurable temperature and max tokens
- Returns structured response with usage metrics
  **And** circuit breaker pattern is implemented:
- Opens after 5 consecutive failures
- Stays open for 30 seconds
- Half-open state tests with single request
  **And** retry logic uses exponential backoff (max 3 retries)
  **And** all requests are logged with correlation IDs
  **And** the client throws `AiUnavailableError` when circuit is open

---

### Story 1.5: Create AI Audit Logger

As a compliance officer,
I want all AI interactions logged to FHIR AuditEvent,
So that we have complete traceability of AI suggestions and clinician responses.

**Acceptance Criteria:**

**Given** an AI request is made
**When** the AI client processes the request
**Then** a FHIR AuditEvent is created with:

- `type`: "aura-ai-interaction"
- `action`: "E" (Execute)
- `outcome`: "0" (Success) or "4" (Minor failure) or "8" (Serious failure)
- `agent.who`: Reference to the user who triggered the request
- `source.observer`: Reference to the Aura system
- `entity[0]`: The input data (patient reference, prompt hash)
- `entity[1]`: The output data (response hash, token count)
  **And** the audit event includes extension for:
- Model version used
- Prompt template version
- Confidence score
- Response time in milliseconds
  **And** audit logs are immutable (no updates, only creates)

---

### Story 1.6: Create Zustand Store Scaffolds

As a developer,
I want Zustand stores scaffolded for Aura state management,
So that I have typed, reactive state management for Aura features.

**Acceptance Criteria:**

**Given** the Aura stores directory exists
**When** I import the stores
**Then** `useActionsStore` is available with:

- `pendingActions: AuraAction[]`
- `approvalState: 'idle' | 'approving' | 'success' | 'error'`
- `addAction(action: AuraAction): void`
- `removeAction(actionId: string): void`
- `approveAll(): Promise<void>`
- `approveOne(actionId: string): Promise<void>`
- `rejectOne(actionId: string, reason?: string): Promise<void>`
  **And** `useSynthesisStore` is available with:
- `synthesis: PreVisitSynthesis | null`
- `loading: boolean`
- `error: Error | null`
- `fetchSynthesis(encounterId: string): Promise<void>`
  **And** `useCarePlanStore` is available with:
- `carePlanItems: CarePlanItem[]`
- `filters: CarePlanFilters`
- `setFilters(filters: Partial<CarePlanFilters>): void`
- `fetchCarePlan(patientId: string): Promise<void>`
  **And** `useSharedViewStore` is available with:
- `isShared: boolean`
- `patientViewMode: boolean`
- `toggleShared(): void`
- `setPatientViewMode(mode: boolean): void`

---

### Story 1.7: Implement Feature Flag

As a product manager,
I want Aura features gated behind a feature flag,
So that we can enable/disable Aura without code deployment.

**Acceptance Criteria:**

**Given** the EHR application loads
**When** `VITE_APP_AURA_ENABLED` is set to `"true"`
**Then** Aura navigation items appear in the EHR sidebar
**And** Aura routes are registered and accessible
**And** Aura components render in encounters

**Given** `VITE_APP_AURA_ENABLED` is not set or set to `"false"`
**When** the EHR application loads
**Then** Aura navigation items are hidden
**And** Aura routes return 404
**And** no Aura components render

**And** the feature flag is documented in `apps/ehr/src/constants/feature-flags.ts`
**And** a React hook `useAuraEnabled()` returns the flag value

---

## Epic 2: Pre-Visit Patient Input & Care Context

Patients can submit concerns before visits, and clinicians see AI-synthesized context when opening a chart.

### Story 2.1: Create Patient Pre-Visit Input Endpoint

As a patient,
I want to submit my concerns before a visit via text,
So that my doctor knows what's on my mind before I arrive.

**Acceptance Criteria:**

**Given** I have an upcoming appointment
**When** I send a text message with my concerns
**Then** the `aura-capture-patient-input` zambda receives and stores my input
**And** the input is stored as a FHIR Communication resource linked to:

- The Patient reference
- The upcoming Appointment reference
  **And** the Communication has `aura-source` extension set to "patient"
  **And** a confirmation is sent back to me: "Got it, Dr. [Name] will see this"
  **And** the endpoint is `http_open` (no auth required for patient text input)

---

### Story 2.2: Create Pre-Visit Synthesis Zambda

As a clinician,
I want an AI-synthesized summary of patient context before seeing them,
So that I can scan key information in 10 seconds instead of hunting through the chart.

**Acceptance Criteria:**

**Given** an encounter is about to begin
**When** I call `aura-get-synthesis` with the encounter ID
**Then** the AI generates a synthesis containing:

- Patient's stated concerns (from pre-visit input)
- Relevant clinical history (conditions, recent visits)
- Current medications
- Key metrics (A1C, BP, etc.) with trends
- Identified quality gaps (HEDIS measures)
  **And** the response includes `basis` field citing which FHIR resources were used
  **And** the response time is < 5 seconds
  **And** if AI is unavailable, a fallback response returns raw patient data
  **And** the synthesis is cached for the encounter duration

---

### Story 2.3: Create SynthesisCard Component

As a clinician,
I want to see the pre-visit synthesis in a scannable card format,
So that I can quickly orient myself before entering the room.

**Acceptance Criteria:**

**Given** I open a patient's encounter view
**When** the SynthesisCard renders
**Then** I see sections for:

- Patient Concerns (verbatim quotes, with clinical interpretation)
- Key Metrics (with trend arrows and reference ranges)
- Quality Gaps (HEDIS measures with status)
  **And** the card has purple AI accent border indicating AI-generated content
  **And** an "expand" option shows full citations ("Based on...")
  **And** a loading state shows skeleton with "Synthesizing..." text
  **And** an error state shows "Unable to synthesize - manual review needed"

---

### Story 2.4: Create PatientContextBar Component

As a clinician,
I want persistent patient context visible at the top of the screen,
So that I never lose track of who I'm treating and their primary concern.

**Acceptance Criteria:**

**Given** I am in an encounter view
**When** the PatientContextBar renders
**Then** I see:

- Patient avatar (or initials placeholder)
- Patient name and age
- Primary conditions (max 3, as chips)
- Current stated concern (from pre-visit input, in quotes)
  **And** the bar is fixed at the top and doesn't scroll away
  **And** the bar has a compact mode when screen space is limited
  **And** clicking the patient name navigates to full patient chart

---

### Story 2.5: Display Patient Priorities Prominently

As a clinician,
I want to see patient's stated priorities in their own words,
So that I can acknowledge what matters to them and build connection.

**Acceptance Criteria:**

**Given** a patient submitted pre-visit concerns
**When** I view the SynthesisCard
**Then** the patient's exact words appear in a highlighted section
**And** quotes are displayed verbatim with quotation marks
**And** the section header is "What Eleanor wants to discuss"
**And** this section appears before clinical metrics
**And** if no pre-visit input exists, the section shows "No concerns submitted"

---

### Story 2.6: Implement AI Thinking Indicator

As a clinician,
I want visual feedback when AI is processing,
So that I know the system is working and I should wait briefly.

**Acceptance Criteria:**

**Given** an AI operation is in progress
**When** the operation takes > 500ms
**Then** a subtle pulse animation appears on the AI-accent border
**When** the operation takes > 2 seconds
**Then** "Synthesizing..." text appears with animated dots
**When** the operation takes > 5 seconds
**Then** "Taking longer than usual" message appears
**And** all animations respect `prefers-reduced-motion`
**And** screen readers announce "AI is processing" via aria-live region

---

## Epic 3: Actions Panel & Clinician Approval

Clinicians can view AI-suggested actions and approve them with a single tap, completing the Quadruple-A framework.

### Story 3.1: Create Action Generation Zambda

As a clinician,
I want AI to suggest clinical actions based on the encounter,
So that I don't have to manually create each order and task.

**Acceptance Criteria:**

**Given** an encounter is in progress
**When** I call `aura-generate-actions` with encounter context
**Then** the AI returns suggested actions including:

- Prescriptions (medication changes)
- Lab orders
- Referrals
- Tasks (for MA, care manager, or self)
- Patient notifications
  **And** each action includes:
- `actionType`: prescription | lab | referral | task | notify
- `routingActor`: physician | ma | careManager | patient | caregiver | external
- `title`: Human-readable action title
- `details`: Specific parameters (medication dose, lab name, etc.)
- `basis`: Why this action was suggested
- `confidence`: high | medium | low
  **And** the action is stored as FHIR Task with `aura-approval-status` = "pending"
  **And** the response time is < 3 seconds for action generation

---

### Story 3.2: Create ActionCard Component

As a clinician,
I want to see each suggested action in a scannable card format,
So that I can quickly understand what's being proposed.

**Acceptance Criteria:**

**Given** an action is displayed
**When** the ActionCard renders
**Then** I see:

- Type icon (pill for Rx, flask for lab, clipboard for referral, check for task, bell for notify)
- Action title (bold)
- Action subtitle (details)
- RoutingChip showing destination actor (color-coded)
  **And** on hover, Edit and Reject buttons appear
  **And** the card is color-coded by action type border
  **And** low-confidence actions have a warning indicator
  **And** keyboard focus shows visible ring around the card
  **And** `aria-label` describes the full action

---

### Story 3.3: Create RoutingChip Component

As a clinician,
I want to see where each action will be routed,
So that I know who will receive and execute each task.

**Acceptance Criteria:**

**Given** an action has a routing actor assigned
**When** the RoutingChip renders
**Then** I see:

- Actor icon (stethoscope for physician, clipboard for MA, heart for care manager, person for patient, people for caregiver, arrow for external)
- Actor label (can include name: "→ Marcus")
- Color matching the actor type
  **And** the chip has tooltip explaining the routing
  **And** sizes are available: small (in cards) and medium (standalone)

---

### Story 3.4: Create StatusChip Component

As a clinician,
I want to see the status of care plan items at a glance,
So that I can quickly identify what's changed or needs attention.

**Acceptance Criteria:**

**Given** a care plan item has a status
**When** the StatusChip renders
**Then** the chip displays:

- "Active" in gray for ongoing items
- "New" in green for newly added items
- "Modified" in amber for changed items
- "Discontinued" in red for stopped items
- "Confirmed" in teal for verified items
  **And** sizes are available: small and medium
  **And** the chip is accessible with appropriate color contrast

---

### Story 3.5: Create ActionsPanel Component

As a clinician,
I want all suggested actions organized in a panel,
So that I can review and approve them efficiently.

**Acceptance Criteria:**

**Given** an encounter has pending actions
**When** the ActionsPanel renders
**Then** I see:

- Header with "Actions (N)" showing count
- Collapse/expand toggle
- List of ActionCards
- ApproveAllButton at the bottom
  **And** the panel supports these states:
- `collapsed`: Badge shows count, panel minimized
- `expanded`: Full panel with all cards
- `loading`: Skeleton cards during AI processing
- `empty`: "All actions completed" with checkmark
- `approving`: Animation state during batch approval
  **And** the panel is docked on the right side on desktop
  **And** the panel is a drawer overlay on tablet/mobile

---

### Story 3.6: Create ApproveAllButton Component

As a clinician,
I want to approve all actions with a single tap,
So that I can complete my workflow in one satisfying interaction.

**Acceptance Criteria:**

**Given** there are pending actions in the ActionsPanel
**When** the ApproveAllButton renders
**Then** I see a prominent teal button reading "Approve All (N)"
**And** on tap/click:

1. Button compresses slightly (50ms)
2. Checkmark appears with ripple effect (100ms)
3. Actions animate toward their routing icons (300ms)
4. Button transitions to "Approved" state (200ms)
5. Toast appears with details and 5-second undo option
   **And** keyboard shortcut Shift+Enter triggers approval when panel is focused
   **And** the button is disabled when no actions are pending
   **And** `aria-label` reads "Approve all N pending actions"

---

### Story 3.7: Implement Individual Action Approval

As a clinician,
I want to approve individual actions one at a time,
So that I can selectively process actions when needed.

**Acceptance Criteria:**

**Given** I am viewing an ActionCard
**When** I click the approve button (or press Enter when focused)
**Then** the action is approved immediately
**And** the card animates out toward the routing destination
**And** a brief toast confirms: "Approved: [Action title]"
**And** the ActionsPanel count updates
**And** the action's FHIR Task is updated with `aura-approval-status` = "approved"

---

### Story 3.8: Implement Action Modification

As a clinician,
I want to edit an action before approving it,
So that I can adjust AI suggestions to match my clinical judgment.

**Acceptance Criteria:**

**Given** I am viewing an ActionCard
**When** I click the Edit button
**Then** the card expands to show editable fields:

- For Rx: medication, dose, frequency, duration
- For Lab: test name, urgency, instructions
- For Referral: specialty, reason, urgency
- For Task: description, assignee, due date
  **And** I can modify any field inline
  **And** pressing Enter saves changes
  **And** pressing Escape cancels editing
  **And** the modified action retains its original basis but adds "Modified by clinician" note

---

### Story 3.9: Implement Action Rejection

As a clinician,
I want to reject an action I don't agree with,
So that inappropriate suggestions don't get executed.

**Acceptance Criteria:**

**Given** I am viewing an ActionCard
**When** I click the Reject button
**Then** a small form appears asking for optional rejection reason
**And** I can select from common reasons: "Not clinically appropriate", "Patient declined", "Already addressed", "Other"
**And** clicking "Confirm Reject" removes the action from the panel
**And** the action's FHIR Task is updated with `aura-approval-status` = "rejected"
**And** the rejection reason is stored in the Task.statusReason

---

### Story 3.10: Implement Batch Approval Zambda

As a clinician,
I want my approved actions to be processed and routed automatically,
So that I don't have to manually dispatch each one.

**Acceptance Criteria:**

**Given** I tap "Approve All"
**When** the `aura-approve-actions` zambda is called
**Then** each action is processed based on its type:

- Prescriptions: Created as MedicationRequest, marked for eRx transmission
- Labs: Created as ServiceRequest, marked for lab transmission
- Referrals: Created as ServiceRequest with referral category
- Tasks: Updated with assignee and due date
- Notifications: Queued for delivery to patient/caregiver
  **And** each FHIR resource includes `aura-routing-actor` extension
  **And** all actions are processed transactionally (all succeed or all fail)
  **And** an audit event logs the batch approval

---

### Story 3.11: Implement Undo for Batch Approval

As a clinician,
I want to undo an accidental batch approval within 5 seconds,
So that I can recover from mistakes quickly.

**Acceptance Criteria:**

**Given** I just approved actions
**When** a toast appears with "Approved N actions - Undo"
**Then** clicking "Undo" within 5 seconds:

- Reverts all actions to pending status
- Restores the ActionsPanel to pre-approval state
- Shows confirmation: "Approval undone"
  **And** after 5 seconds, the undo option disappears
  **And** undone actions are logged as "approval-reverted" in audit

---

### Story 3.12: Display AI Reasoning Transparency

As a clinician,
I want to see why the AI suggested each action,
So that I can verify the reasoning before approving.

**Acceptance Criteria:**

**Given** an ActionCard is displayed
**When** I expand the card or click "Why this action?"
**Then** I see the AI's reasoning:

- "Based on: A1C of 6.8%, current Metformin prescription"
- "Guideline reference: ADA Standards of Care 2024"
- Confidence level with explanation if medium/low
  **And** low-confidence actions are flagged: "Review suggested - AI uncertain"
  **And** the basis references specific FHIR resources where possible

---

### Story 3.13: Implement Action Audit Trail

As a compliance officer,
I want complete audit trails of all action suggestions and responses,
So that we can demonstrate clinical oversight of AI suggestions.

**Acceptance Criteria:**

**Given** actions are suggested, approved, modified, or rejected
**When** the action lifecycle completes
**Then** FHIR AuditEvent records are created capturing:

- Original AI suggestion (what was proposed)
- Clinician response (approved/modified/rejected)
- Modification details (if edited)
- Rejection reason (if rejected)
- Timestamp and user reference
- Downstream execution status
  **And** audit events link to the original Task resource
  **And** audit events are immutable

---

## Epic 4: Clinical Documentation Generation

Clinicians have notes auto-generated from encounters and can review/edit before finalizing.

### Story 4.1: Create Documentation Generation Zambda

As a clinician,
I want clinical documentation auto-generated from the encounter,
So that I don't have to write notes after the patient leaves.

**Acceptance Criteria:**

**Given** an encounter has been conducted
**When** I request documentation generation
**Then** the AI generates a clinical note including:

- Chief complaint (from patient concerns)
- History of present illness (synthesized from conversation/inputs)
- Review of systems (if captured)
- Assessment and plan (based on approved actions)
- Care plan updates
  **And** the note follows standard SOAP format
  **And** the generation completes in < 5 seconds
  **And** the note is stored as a draft DocumentReference in FHIR

---

### Story 4.2: Create Documentation Review Component

As a clinician,
I want to review AI-generated documentation before finalizing,
So that I can ensure accuracy and add clinical nuance.

**Acceptance Criteria:**

**Given** documentation has been generated
**When** the DocumentationReview component renders
**Then** I see the full note text in an editable format
**And** AI-generated sections are marked with purple accent
**And** I can edit any text inline
**And** character/word count is visible
**And** sections can be collapsed/expanded

---

### Story 4.3: Implement Inline Note Editing

As a clinician,
I want to edit generated notes with minimal friction,
So that I can make quick corrections without disrupting flow.

**Acceptance Criteria:**

**Given** I am viewing the DocumentationReview
**When** I click on any text
**Then** that section becomes editable inline
**And** pressing Enter saves and moves to next section
**And** pressing Escape cancels changes to that section
**And** auto-save triggers after 2 seconds of no typing
**And** edited sections show "Edited" badge

---

### Story 4.4: Implement Note Finalization

As a clinician,
I want to sign off on documentation when complete,
So that the note is finalized and ready for billing/records.

**Acceptance Criteria:**

**Given** I have reviewed the documentation
**When** I click "Sign and Complete"
**Then** the DocumentReference status changes to "current"
**And** the note is signed with my provider reference
**And** a timestamp records the signing
**And** the note becomes read-only
**And** I see confirmation: "Note signed and completed"
**And** I can proceed to walk the patient out

---

### Story 4.5: Create Encounter Input Capture (Typed)

As a clinician,
I want to capture encounter content via typed input for the demo,
So that documentation can be generated from structured notes.

**Acceptance Criteria:**

**Given** I am in an active encounter
**When** I type notes in the encounter input area
**Then** my text is saved as encounter context
**And** the AI uses this input for documentation generation
**And** the input area supports markdown formatting
**And** auto-save occurs every 5 seconds
**And** character count is visible
**And** this serves as the demo input method (voice is Phase 2)

---

## Epic 5: Care Plan Management

Clinicians and patients can view longitudinal care plans with conditions, medications, goals, and quality gaps.

### Story 5.1: Create Care Plan Retrieval Zambda

As a clinician,
I want to retrieve a patient's longitudinal care plan,
So that I can see their full health picture across encounters.

**Acceptance Criteria:**

**Given** I request a care plan for a patient
**When** I call `aura-get-care-plan` with patient ID
**Then** I receive a care plan containing:

- Active conditions (from Condition resources)
- Current medications (from MedicationStatement)
- Active goals (from Goal resources)
- Quality gaps (HEDIS measures from detected gaps)
- Recent encounters (last 3-6 months)
  **And** each item includes `aura-status` extension
  **And** items are sorted by clinical priority
  **And** the response time is < 2 seconds

---

### Story 5.2: Create CarePlanCard Component

As a clinician,
I want to view care plan items in organized cards,
So that I can quickly scan the patient's longitudinal health status.

**Acceptance Criteria:**

**Given** a care plan has been retrieved
**When** the CarePlanCard renders
**Then** I see sections for:

- Conditions (with StatusChip for each)
- Medications (with dose, frequency)
- Goals (with progress indicators)
- Quality Gaps (with measure name and status)
  **And** each item can be expanded for details
  **And** items with `status: "new"` or `status: "modified"` are highlighted
  **And** clicking an item opens detailed view

---

### Story 5.3: Create Care Plan Update Zambda

As a clinician,
I want to update care plan items during an encounter,
So that the longitudinal record reflects today's decisions.

**Acceptance Criteria:**

**Given** I am in an active encounter
**When** I call `aura-update-care-plan` with updates
**Then** the care plan is updated:

- New conditions can be added
- Existing conditions can be modified or discontinued
- Medications can be added, modified, or stopped
- Goals can be added or updated
  **And** each change is tagged with `aura-status` = "modified"
  **And** changes are associated with the current encounter
  **And** changes sync in real-time to other viewers

---

### Story 5.4: Display HEDIS Quality Gaps

As a clinician,
I want to see quality gaps during the encounter,
So that I can address preventive care needs while the patient is present.

**Acceptance Criteria:**

**Given** a patient has quality gaps
**When** the care plan displays quality gaps
**Then** I see each gap with:

- Measure name (e.g., "Annual Diabetic Eye Exam")
- Status: "Open", "Ordered", "Closed"
- Last action date if any
  **And** clicking a gap shows how to close it
  **And** closing a gap (e.g., ordering the exam) updates status to "Ordered"
  **And** completed measures show "Closed" with completion date

---

### Story 5.5: Implement Real-Time Care Plan Sync

As a clinician,
I want care plan updates to sync in real-time,
So that all viewers see the same current information.

**Acceptance Criteria:**

**Given** multiple users are viewing a patient's care plan
**When** one user makes an update
**Then** the change propagates to all viewers within 500ms
**And** updated items briefly highlight to show the change
**And** sync uses FHIR subscriptions or polling fallback
**And** offline changes queue and sync when reconnected

---

### Story 5.6: Implement Gap Closure Tracking

As a quality manager,
I want to track gap closure across the care continuum,
So that I can measure and improve population health outcomes.

**Acceptance Criteria:**

**Given** a quality gap exists for a patient
**When** an action closes the gap (order, result, attestation)
**Then** the gap status updates to reflect progress:

- "Open" → "Ordered" (when service ordered)
- "Ordered" → "Completed" (when result received)
- "Completed" → "Closed" (when meets quality criteria)
  **And** gap closure history is maintained
  **And** population-level gap reports can be generated

---

## Epic 6: Decision Aids & Shared Decision-Making

Clinicians and patients can view treatment options together with pros/cons for collaborative decisions.

### Story 6.1: Create Decision Aid Generation Zambda

As a clinician,
I want AI-generated decision aids for treatment options,
So that I can discuss alternatives with my patient objectively.

**Acceptance Criteria:**

**Given** a decision point is identified (e.g., medication choice)
**When** I call `aura-get-decision-aid` with context
**Then** I receive a decision aid with:

- List of treatment options (2-4 choices)
- Comparison criteria (efficacy, side effects, cost, administration)
- Patient-specific recommendation with rationale
- Confidence level for the recommendation
  **And** the comparison is objective and evidence-based
  **And** the response time is < 3 seconds

---

### Story 6.2: Create DecisionAid Component

As a clinician,
I want to display decision aids in a visual comparison format,
So that patients can understand their options clearly.

**Acceptance Criteria:**

**Given** a decision aid has been generated
**When** the DecisionAid component renders
**Then** I see:

- Grid comparing options across criteria
- Recommendation highlighted with star icon
- Patient-specific factors listed below
- "Best for Eleanor" label on recommended option
  **And** the layout is designed for shared viewing with patient
  **And** technical terms have patient-friendly tooltips
  **And** clicking an option shows detailed information

---

### Story 6.3: Implement Shared View Mode

As a clinician,
I want to share my screen view with the patient,
So that we can look at information together during the visit.

**Acceptance Criteria:**

**Given** I am in an encounter
**When** I enable shared view mode
**Then** a badge appears: "Eleanor sees this view"
**And** sensitive information is appropriately filtered
**And** the patient's device (if connected) shows the same view
**And** I can toggle shared view on/off at any time
**And** the state is stored in useSharedViewStore

---

### Story 6.4: Display AI Suggestion Transparency

As a clinician,
I want to see why the AI recommends a specific option,
So that I can explain the reasoning to my patient.

**Acceptance Criteria:**

**Given** a decision aid shows a recommendation
**When** I click "Why this recommendation?"
**Then** I see:

- Patient factors used (A1C level, kidney function, etc.)
- Guideline citations supporting the choice
- Contraindications ruled out
- Alternative reasoning for other options
  **And** the language is suitable for patient explanation
  **And** references are linkable to source documents

---

### Story 6.5: Implement Decision Capture

As a clinician,
I want to record which option the patient chose,
So that the decision is documented in the care record.

**Acceptance Criteria:**

**Given** we discussed options using a decision aid
**When** I select the chosen option
**Then** the decision is recorded:

- Selected option stored as a Procedure or CarePlan update
- Decision aid reference linked
- "Shared decision-making" flag set
- Timestamp and participants recorded
  **And** the approved actions update to reflect the choice
  **And** the documentation includes the decision

---

## Epic 7: MA Workflow & Action Queues

MAs can view pre-visit prep instructions and post-visit tasks in role-specific queues.

### Story 7.1: Create Action Queue Retrieval Zambda

As an MA,
I want to retrieve my assigned action queue,
So that I can see all tasks I need to complete today.

**Acceptance Criteria:**

**Given** I am logged in as an MA
**When** I call `aura-get-action-queue` with my user ID and role
**Then** I receive my action queue containing:

- Pre-visit prep tasks (before provider sees patient)
- Standing order actions (vaccines, screenings I can execute)
- Post-visit tasks (after provider approval)
  **And** tasks are grouped by priority: Critical, Before Provider, Standing Order, Post-Visit
  **And** each task shows patient name, action description, and due time
  **And** the response time is < 1 second

---

### Story 7.2: Create ActionQueue Component

As an MA,
I want to view my action queue in an organized list,
So that I can efficiently work through my tasks.

**Acceptance Criteria:**

**Given** my action queue has tasks
**When** the ActionQueue component renders
**Then** I see:

- Section headers for each priority level
- Task cards with patient name, action, timing
- Color-coded urgency indicators
- Completion checkboxes
  **And** clicking a task expands to show full details
  **And** an empty state shows "All caught up!" with checkmark
  **And** the queue auto-updates when new tasks are assigned

---

### Story 7.3: Display Pre-Visit Prep Instructions

As an MA,
I want to see specific prep instructions for each patient,
So that I can complete everything before the provider arrives.

**Acceptance Criteria:**

**Given** a patient is on today's schedule
**When** I view their prep instructions
**Then** I see:

- Vitals to collect
- Point-of-care tests to perform (if any)
- Standing orders eligible for execution
- Quality gaps I can address (e.g., foot exam for diabetic)
- Patient concerns to confirm
  **And** instructions come from AI synthesis and standing order rules
  **And** I can mark items complete as I do them

---

### Story 7.4: Implement Standing Order Execution

As an MA,
I want to execute standing orders I'm authorized for,
So that patients get preventive care without waiting for provider approval.

**Acceptance Criteria:**

**Given** a patient is eligible for a standing order (e.g., flu vaccine)
**When** I execute the standing order
**Then** I see the administration form for that order
**And** I document the administration (lot number, site, etc.)
**And** the order is recorded in FHIR as completed
**And** the quality gap is updated to "Completed"
**And** the action is audit-logged as MA-executed standing order

---

### Story 7.5: Implement Post-Visit Task Completion

As an MA,
I want to complete post-visit tasks assigned to me,
So that patient care continues after the encounter ends.

**Acceptance Criteria:**

**Given** a provider approved actions routed to MA
**When** I view my post-visit queue
**Then** I see tasks such as:

- Patient education to deliver
- Medication instructions to review
- Follow-up scheduling to complete
- Lab paperwork to provide
  **And** I can mark each task complete with documentation
  **And** completion updates the FHIR Task status
  **And** patient receives confirmation of completed items

---

### Story 7.6: Implement Patient Education Documentation

As an MA,
I want to document patient education I provided,
So that there's a record of counseling for billing and compliance.

**Acceptance Criteria:**

**Given** I provided patient education
**When** I document the education
**Then** I can record:

- Topic covered (medication, lifestyle, self-care)
- Materials provided (handouts, videos)
- Patient understanding confirmation
- Time spent
  **And** the documentation creates a Procedure resource
  **And** appropriate billing codes are associated
  **And** the documentation is linked to the encounter

---

## Epic 8: Orders, Prescriptions & Referrals

Clinicians can order medications, labs, and referrals through the Actions Panel with eRx integration.

### Story 8.1: Integrate eRx for Prescriptions

As a clinician,
I want prescriptions sent electronically to the pharmacy,
So that patients can pick up medications without paper prescriptions.

**Acceptance Criteria:**

**Given** I approve a prescription action
**When** the action is processed
**Then** the MedicationRequest is created in FHIR
**And** the prescription is transmitted via Oystehr eRx integration
**And** I receive confirmation: "Rx sent to [Pharmacy Name]"
**And** transmission failures show clear error with retry option
**And** controlled substance prescriptions follow EPCS requirements

---

### Story 8.2: Implement Lab Order Transmission

As a clinician,
I want lab orders sent electronically to the lab,
So that patients can go directly to the lab without paperwork.

**Acceptance Criteria:**

**Given** I approve a lab order action
**When** the action is processed
**Then** a ServiceRequest is created in FHIR
**And** the order is transmitted to the configured lab (Quest, LabCorp, etc.)
**And** I receive confirmation: "Lab order sent to [Lab Name]"
**And** the patient receives instructions for the lab visit
**And** results will flow back via lab integration

---

### Story 8.3: Create Referral with Clinical Context

As a clinician,
I want referrals to include relevant clinical context,
So that specialists have the information they need.

**Acceptance Criteria:**

**Given** I approve a referral action
**When** the action is processed
**Then** a ServiceRequest is created with:

- Reason for referral
- Relevant diagnoses
- Recent labs/vitals pertinent to referral
- Specific questions for specialist
  **And** the referral can be faxed or sent via Direct messaging
  **And** the patient receives referral instructions
  **And** the referral is tracked for completion

---

### Story 8.4: Implement Drug Interaction Check

As a clinician,
I want to see drug interactions before prescribing,
So that I can avoid harmful medication combinations.

**Acceptance Criteria:**

**Given** I am reviewing a prescription action
**When** the medication is checked against current prescriptions
**Then** interactions are displayed with severity:

- Severe: Red warning, requires acknowledgment
- Moderate: Amber warning, informational
- Minor: Gray informational note
  **And** I can acknowledge and proceed or cancel the prescription
  **And** acknowledgment is audit-logged

---

### Story 8.5: Implement Pharmacy Selection

As a patient,
I want my prescriptions sent to my preferred pharmacy,
So that I can pick them up where it's convenient.

**Acceptance Criteria:**

**Given** a prescription is being processed
**When** the system checks patient preference
**Then** the prescription routes to the patient's preferred pharmacy
**And** if no preference, I can search and select a pharmacy
**And** the selection can be saved as the new default
**And** the pharmacy address and phone are shown for confirmation

---

## Epic 9: Patient Portal & Post-Visit Access

Patients can view visit summaries, care plans, and assigned action items after encounters.

### Story 9.1: Create Patient Visit Summary View

As a patient,
I want to see a summary of my visit,
So that I remember what was discussed and what I need to do.

**Acceptance Criteria:**

**Given** my visit has concluded
**When** I view the visit summary in the patient portal
**Then** I see:

- What we discussed (chief complaint, key points)
- What changed (new medications, stopped medications)
- What to do next (action items assigned to me)
- When to follow up (next appointment, lab timeline)
  **And** the summary is in patient-friendly language
  **And** I can download or print the summary

---

### Story 9.2: Create Patient Care Plan View

As a patient,
I want to view my care plan,
So that I understand my health conditions and treatment plan.

**Acceptance Criteria:**

**Given** I am logged into the patient portal
**When** I navigate to My Care Plan
**Then** I see:

- My conditions (with patient-friendly descriptions)
- My medications (with purpose and instructions)
- My goals (with progress if measurable)
- Upcoming preventive care (screenings, vaccines due)
  **And** clicking any item shows more detail
  **And** the view is simplified compared to clinician view
  **And** sensitive diagnoses are appropriately handled

---

### Story 9.3: Display Patient Action Items

As a patient,
I want to see actions assigned to me,
So that I know what I need to do for my health.

**Acceptance Criteria:**

**Given** actions were routed to me during my visit
**When** I view My Action Items
**Then** I see:

- Lab tests to complete (with lab locations)
- Medications to pick up
- Appointments to schedule
- Lifestyle recommendations
  **And** each item has clear instructions
  **And** I can mark items as completed
  **And** reminders are sent for incomplete items

---

### Story 9.4: Integrate with Patient Portal (Intake App)

As a patient,
I want to access Aura features from the existing patient portal,
So that I have one place for all my health information.

**Acceptance Criteria:**

**Given** Aura is enabled for my practice
**When** I log into the patient portal (apps/intake)
**Then** I see new navigation for:

- Visit Summaries
- My Care Plan
- My Action Items
  **And** the navigation appears only if I have Aura content
  **And** the styling matches the existing portal theme
  **And** the experience works on mobile devices

---

## Epic 10: Caregiver Access & Notifications

Authorized caregivers can view patient information, receive visit summaries, and see relevant action items.

### Story 10.1: Implement Caregiver Authorization

As a patient,
I want to authorize family members to see my health information,
So that they can help me manage my care.

**Acceptance Criteria:**

**Given** I am logged into the patient portal
**When** I navigate to Caregiver Access
**Then** I can:

- Add a caregiver by email or phone
- Select information scope: Full, Summary Only, or Limited
- Specify what they can see (conditions, medications, visits, etc.)
  **And** the caregiver receives an invitation to create an account
  **And** the authorization is stored as RelatedPerson in FHIR
  **And** I can view and modify authorizations at any time

---

### Story 10.2: Implement Caregiver Access Revocation

As a patient,
I want to revoke a caregiver's access,
So that I maintain control over who sees my information.

**Acceptance Criteria:**

**Given** I have authorized caregivers
**When** I click "Remove Access" on a caregiver
**Then** I see a confirmation dialog
**And** upon confirmation, their access is immediately revoked
**And** the RelatedPerson is marked as inactive
**And** the caregiver is notified that access was removed
**And** they can no longer view my information

---

### Story 10.3: Create Caregiver Dashboard

As a caregiver,
I want to see information for patients I care for,
So that I can stay informed about their health.

**Acceptance Criteria:**

**Given** I am an authorized caregiver
**When** I log into my caregiver portal
**Then** I see:

- List of patients I care for
- Recent visit summaries for each (within my scope)
- Action items relevant to my role
- Upcoming appointments
  **And** I only see information within my authorized scope
  **And** sensitive information is filtered appropriately

---

### Story 10.4: Send Visit Summaries to Caregivers

As a caregiver,
I want to receive visit summaries automatically,
So that I'm informed after my loved one's appointments.

**Acceptance Criteria:**

**Given** a patient has authorized me for visit summaries
**When** their visit concludes
**Then** I receive:

- Push notification: "[Patient] had a visit today"
- Summary within my authorized scope
- Action items relevant to my caregiving role
  **And** the summary is delivered via my preferred channel (app, email, SMS)
  **And** I can view the full summary in the caregiver portal

---

### Story 10.5: Display Caregiver Action Items

As a caregiver,
I want to see actions I can help with,
So that I can actively support my loved one's care.

**Acceptance Criteria:**

**Given** actions are relevant to caregiver support
**When** I view my caregiver dashboard
**Then** I see action items such as:

- "Remind Mom about lab appointment Thursday"
- "Pick up new prescription at Walgreens"
- "Help with blood pressure monitoring"
  **And** I can mark items as done
  **And** completion notifies the care team

---

### Story 10.6: Implement Caregiver Messaging

As a caregiver,
I want to message the care team on behalf of my patient,
So that I can ask questions and report concerns.

**Acceptance Criteria:**

**Given** I am authorized for messaging
**When** I send a message through the caregiver portal
**Then** the message is sent to the care team
**And** the message is marked as "From: [Caregiver Name] on behalf of [Patient Name]"
**And** the care team can respond to me directly
**And** a copy is visible in the patient's communication history

---

## Epic 11: Care Manager Panel & Outreach

Care managers can view prioritized patient panels and execute AI-suggested outreach.

### Story 11.1: Create Priority Dashboard View

As a care manager,
I want to see my patient panel prioritized by urgency,
So that I can focus on patients who need immediate attention.

**Acceptance Criteria:**

**Given** I am logged in as a care manager
**When** I view my priority dashboard
**Then** I see patients stratified by:

- Critical (red): Hospital discharge, critical lab, safety concern
- High (amber): Rising A1C, missed appointments, recent med change
- Routine (green): Wellness gaps, scheduled check-ins
  **And** each patient card shows key context at a glance
  **And** the count of patients in each tier is displayed
  **And** I can filter and sort the view

---

### Story 11.2: Display Clinical Trigger Flags

As a care manager,
I want to see patients flagged by clinical triggers,
So that I can proactively reach out before problems escalate.

**Acceptance Criteria:**

**Given** clinical events occur for my patients
**When** I view my dashboard
**Then** I see flags for:

- Hospital/ED discharge (from ADT feeds)
- Critical lab results
- Missed appointments
- Medication non-adherence signals
- Declining quality metrics
  **And** each flag shows the trigger date and details
  **And** I can click to see full context
  **And** flags are prioritized by clinical urgency

---

### Story 11.3: Generate AI Outreach Suggestions

As a care manager,
I want AI-suggested outreach scripts for each patient,
So that I can have focused, efficient conversations.

**Acceptance Criteria:**

**Given** I am about to contact a patient
**When** I view their outreach suggestion
**Then** I see:

- Reason for outreach (trigger event)
- Suggested talking points
- Questions to ask
- Potential actions to discuss
  **And** the script is tailored to the patient's situation
  **And** I can customize the script before calling
  **And** AI indicates confidence in the suggestions

---

### Story 11.4: Implement Multi-Channel Outreach

As a care manager,
I want to reach patients via their preferred channel,
So that I can maximize successful contact.

**Acceptance Criteria:**

**Given** I need to contact a patient
**When** I initiate outreach
**Then** I can select:

- Phone call (with click-to-dial)
- Text message (with template)
- Secure message (in-app)
  **And** patient preference is shown if available
  **And** the communication is logged in FHIR as Communication resource
  **And** response/outcome is tracked

---

### Story 11.5: Document Outreach Outcomes

As a care manager,
I want to document what happened during outreach,
So that the care team knows what was discussed and decided.

**Acceptance Criteria:**

**Given** I completed patient outreach
**When** I document the outcome
**Then** I can record:

- Contact status (reached, voicemail, no answer)
- Conversation summary
- Patient concerns raised
- Actions taken or scheduled
- Follow-up needed
  **And** the documentation creates a Communication resource
  **And** related Tasks are updated based on outcome
  **And** escalations are triggered if concerning findings

---

### Story 11.6: Implement Provider Escalation

As a care manager,
I want to escalate concerns to a provider,
So that clinical issues get appropriate attention.

**Acceptance Criteria:**

**Given** I identified a clinical concern during outreach
**When** I escalate to a provider
**Then** I can:

- Select the escalation urgency (routine, urgent, emergent)
- Write a summary of the concern
- Attach relevant context (recent labs, patient statement)
- Select the receiving provider
  **And** the provider receives an alert based on urgency
  **And** the escalation is tracked for response
  **And** I'm notified when the provider responds

---

### Story 11.7: Update Care Plans from Outreach

As a care manager,
I want to update patient care plans based on outreach findings,
So that the longitudinal record stays current.

**Acceptance Criteria:**

**Given** outreach revealed care plan changes needed
**When** I update the care plan
**Then** I can:

- Add new goals identified in conversation
- Update goal progress
- Note barriers to care
- Document patient preferences
  **And** changes are tagged with my signature
  **And** the provider is notified of significant changes
  **And** the patient can see appropriate updates

---

### Story 11.8: Close Care Gaps via Outreach

As a care manager,
I want to close care gaps through patient contact,
So that quality metrics improve without requiring visits.

**Acceptance Criteria:**

**Given** a patient has open care gaps
**When** I address gaps during outreach
**Then** I can:

- Schedule overdue screenings
- Verify completed activities not yet recorded
- Document patient refusals with reason
- Order tests within my scope (with provider protocol)
  **And** gap status updates in real-time
  **And** gap closure is attributed to care management
  **And** population metrics reflect the improvement

---

## Epic 12: Patient Messaging & Async Engagement

Patients can message care teams and respond to AI-initiated information gathering (CDS-compliant).

### Story 12.1: Create Patient Messaging Interface

As a patient,
I want to message my care team,
So that I can ask questions without calling.

**Acceptance Criteria:**

**Given** I am logged into the patient portal
**When** I navigate to Messages
**Then** I can:

- Start a new message to my care team
- View message history
- See status of sent messages (sent, read, replied)
- Receive notifications of new responses
  **And** messages are stored as FHIR Communication resources
  **And** response time expectations are displayed

---

### Story 12.2: Implement AI Information Gathering

As a patient,
I want the system to help me describe my symptoms,
So that the care team gets complete information.

**Acceptance Criteria:**

**Given** I report a symptom (e.g., "I felt dizzy")
**When** the AI responds
**Then** I see follow-up questions such as:

- "Did you eat breakfast?"
- "How much water have you had?"
- "Has this happened before?"
- "Any other symptoms?"
  **And** the AI NEVER makes diagnostic statements
  **And** the AI NEVER recommends treatments
  **And** collected information is packaged for clinical review
  **And** a disclaimer states "A nurse will review this information"

---

### Story 12.3: Route Symptoms to Licensed Professionals

As a care manager,
I want patient-reported symptoms routed to me,
So that I can provide appropriate clinical guidance.

**Acceptance Criteria:**

**Given** a patient reported symptoms through messaging
**When** the AI packages the information
**Then** I receive a notification with:

- Patient name and brief summary
- AI-collected symptom details
- AI triage suggestion (low/medium/high acuity)
- Patient's communication history
  **And** I can review in < 30 seconds
  **And** I can respond with clinical guidance
  **And** the response is sent through the patient's channel

---

### Story 12.4: Implement CDS-Compliant Response Templates

As a care team member,
I want pre-approved response templates,
So that I can quickly send appropriate guidance.

**Acceptance Criteria:**

**Given** I am responding to a patient message
**When** I select a response template
**Then** I see templates for common situations:

- "Monitor at home" with instructions
- "Schedule appointment" with scheduling link
- "Go to urgent care/ED" with criteria
- "Call 911" for emergencies
  **And** templates are clinically reviewed and approved
  **And** I can customize before sending
  **And** template usage is tracked for quality

---

### Story 12.5: Implement Follow-Up Automation

As a patient,
I want follow-up check-ins after I report an issue,
So that the care team knows if I'm better.

**Acceptance Criteria:**

**Given** I reported a symptom
**When** the clinical guidance is sent
**Then** a follow-up is automatically scheduled:

- 24-48 hours for symptom check-ins
- 1 week for medication changes
- Custom interval for specific situations
  **And** the follow-up sends me a message: "How are you feeling?"
  **And** my response triggers clinical review if concerning
  **And** positive responses can auto-close the conversation

---

## Epic 13: Real-Time Transcript

Clinicians can view real-time transcript of encounter conversations with speaker identification.

### Story 13.1: Integrate Voice Transcription Service

As a clinician,
I want encounter audio transcribed in real-time,
So that I can capture conversations without typing.

**Acceptance Criteria:**

**Given** an encounter with voice capture enabled
**When** I start the encounter
**Then** audio is captured and transcribed
**And** transcription appears with < 2 second latency
**And** the service identifies different speakers
**And** transcription continues until I stop it
**And** the audio is not stored (only transcript)

---

### Story 13.2: Create Transcript Display Component

As a clinician,
I want to see the real-time transcript during the encounter,
So that I can verify capture and reference what was said.

**Acceptance Criteria:**

**Given** voice transcription is active
**When** the transcript component renders
**Then** I see:

- Speaker labels (Dr. Chen, Eleanor)
- Speaker avatars for visual distinction
- Scrolling text as transcription appears
- Timestamp markers
  **And** I can scroll back to review earlier content
  **And** new content auto-scrolls unless I've scrolled up
  **And** I can pause/resume transcription

---

### Story 13.3: Link Transcript to Documentation

As a clinician,
I want the transcript to inform documentation generation,
So that notes accurately reflect the conversation.

**Acceptance Criteria:**

**Given** a transcript was captured during the encounter
**When** documentation is generated
**Then** the AI uses transcript content to:

- Extract chief complaint in patient's words
- Identify symptoms discussed
- Note patient questions and concerns
- Capture assessment and plan discussion
  **And** the documentation cites relevant transcript sections
  **And** I can click citations to see original transcript

---

## Epic 14: Notifications & Communication Preferences

All actors receive appropriate notifications and can configure their preferences.

### Story 14.1: Send Action Assignment Notifications

As an MA or care manager,
I want to be notified when actions are assigned to me,
So that I can complete tasks promptly.

**Acceptance Criteria:**

**Given** a provider approves actions routed to me
**When** the actions are processed
**Then** I receive a notification:

- In-app badge and alert
- Push notification (if enabled)
- Count of new tasks
  **And** clicking the notification opens my action queue
  **And** notifications group if multiple actions assigned together

---

### Story 14.2: Send Appointment Reminders

As a patient,
I want reminders before my appointments,
So that I don't miss my visits.

**Acceptance Criteria:**

**Given** I have an upcoming appointment
**When** the reminder schedule triggers
**Then** I receive reminders:

- 1 week before (if scheduled > 1 week out)
- 1 day before
- 2 hours before
  **And** reminders include date, time, location, provider
  **And** I can confirm or reschedule from the reminder
  **And** channel matches my preference (SMS, email, push)

---

### Story 14.3: Configure Notification Preferences

As a user,
I want to control my notification settings,
So that I'm not overwhelmed by alerts.

**Acceptance Criteria:**

**Given** I navigate to notification settings
**When** I configure my preferences
**Then** I can control:

- Channels enabled (in-app, push, SMS, email)
- Notification types (appointments, messages, tasks)
- Quiet hours (no notifications during these times)
- Frequency (immediate, digest, daily summary)
  **And** preferences are saved per user
  **And** critical notifications override quiet hours

---

### Story 14.4: Implement Multi-Channel Delivery

As a system administrator,
I want notifications delivered via multiple channels,
So that users receive messages where they prefer.

**Acceptance Criteria:**

**Given** a notification needs to be sent
**When** the notification service processes it
**Then** the notification is delivered via:

- In-app notification center
- Push notification (iOS/Android if app installed)
- SMS (via Oystehr/ClickSend integration)
- Email (for non-urgent notifications)
  **And** delivery is logged for audit
  **And** failed deliveries are retried with backoff
  **And** user preference determines channel priority

---

## Epic 15: Administration & Access Management

Practice admins can manage users, roles, and practice settings with full RBAC.

### Story 15.1: Create User Management Interface

As a practice admin,
I want to manage user accounts,
So that I can control who has access to the system.

**Acceptance Criteria:**

**Given** I am logged in as a practice admin
**When** I navigate to User Management
**Then** I can:

- View all users in my practice
- Add new users with email invitation
- Edit user details (name, email, contact)
- Deactivate users (no delete, for audit)
- Reset user passwords
  **And** changes are audit-logged
  **And** deactivated users cannot log in

---

### Story 15.2: Implement Role Assignment

As a practice admin,
I want to assign roles to users,
So that they have appropriate permissions.

**Acceptance Criteria:**

**Given** I am editing a user
**When** I assign roles
**Then** I can:

- Select from available roles (Physician, MA, Care Manager, Admin, etc.)
- Assign multiple roles to one user (composable)
- View what permissions each role grants
- Set role effective dates if needed
  **And** role changes take effect immediately
  **And** users see navigation based on their roles

---

### Story 15.3: Configure Practice Settings

As a practice admin,
I want to configure practice-level settings,
So that Aura works for our workflow.

**Acceptance Criteria:**

**Given** I navigate to Practice Settings
**When** I configure settings
**Then** I can control:

- Default notification preferences
- eRx pharmacy preferences
- Lab vendor configuration
- Working hours and scheduling
- AI feature toggles
  **And** settings apply to all users in the practice
  **And** users can override some settings in their profiles

---

### Story 15.4: Implement RBAC Enforcement

As a security administrator,
I want RBAC enforced at the API level,
So that users cannot bypass UI restrictions.

**Acceptance Criteria:**

**Given** a user makes an API request
**When** the zambda processes the request
**Then** the user's roles are checked against required permissions
**And** unauthorized requests return 403 Forbidden
**And** the check happens before any data access
**And** enforcement is consistent across all endpoints
**And** RBAC rules are defined in a central configuration

---

### Story 15.5: Implement Data Isolation

As a practice admin,
I want my practice's data isolated from others,
So that patient information is secure.

**Acceptance Criteria:**

**Given** multiple practices use the system
**When** any data query executes
**Then** results are filtered to the user's practice
**And** cross-practice access is impossible without explicit TPO authorization
**And** practice ID is verified on every FHIR operation
**And** audit logs capture practice context
**And** data leakage tests pass security review

---

### Story 15.6: Support Multi-Provider Practices

As a practice admin,
I want to manage multiple providers,
So that patients can see any provider in our practice.

**Acceptance Criteria:**

**Given** a practice has multiple providers
**When** scheduling or viewing data
**Then** patients can be scheduled with any provider
**And** providers can view each other's patients (with appropriate access)
**And** action routing respects provider assignments
**And** practice-level dashboards show all providers

---

## Epic 16: Compliance, Audit & Security

System maintains complete audit trails and meets all HIPAA security requirements.

### Story 16.1: Implement PHI Access Logging

As a compliance officer,
I want all PHI access logged,
So that we can audit who accessed what and when.

**Acceptance Criteria:**

**Given** any user accesses patient data
**When** the access occurs
**Then** an audit log is created with:

- User ID and role
- Patient ID accessed
- Data elements viewed/modified
- Timestamp
- IP address and session ID
- Action type (view, create, update, delete)
  **And** logs are immutable (no modification or deletion)
  **And** logs are retained for 7 years minimum
  **And** log queries are performant for compliance reviews

---

### Story 16.2: Implement AI Suggestion Audit Trail

As a compliance officer,
I want complete audit trails of AI suggestions,
So that we can demonstrate clinical oversight.

**Acceptance Criteria:**

**Given** AI generates suggestions during care
**When** the interaction completes
**Then** the audit trail includes:

- Original AI prompt (hashed for privacy)
- AI response received
- Model version and prompt version used
- Clinician action (approved/modified/rejected)
- Modification details if edited
- Rejection reason if rejected
- Time between suggestion and action
  **And** audit trail links AI suggestions to clinical outcomes
  **And** reports can be generated for quality review

---

### Story 16.3: Implement Encryption at Rest

As a security administrator,
I want all PHI encrypted at rest,
So that data breaches don't expose readable information.

**Acceptance Criteria:**

**Given** PHI is stored in the database
**When** the data is at rest
**Then** encryption uses AES-256 standard
**And** encryption keys are managed securely (not in code)
**And** key rotation is supported
**And** decryption only occurs for authorized access
**And** encryption status is verifiable

---

### Story 16.4: Implement Encryption in Transit

As a security administrator,
I want all data encrypted in transit,
So that network interception cannot expose information.

**Acceptance Criteria:**

**Given** data is transmitted between client and server
**When** the transmission occurs
**Then** TLS 1.3 minimum is enforced
**And** certificates are valid and current
**And** HTTP connections redirect to HTTPS
**And** internal service communication is also encrypted
**And** certificate expiration is monitored

---

### Story 16.5: Implement Minimum Necessary Access

As a compliance officer,
I want access limited to minimum necessary,
So that users only see what they need for their role.

**Acceptance Criteria:**

**Given** a user with a specific role accesses data
**When** the data is retrieved
**Then** only fields necessary for their role are returned
**And** sensitive fields are masked appropriately
**And** break-the-glass access is available for emergencies
**And** break-the-glass access requires justification
**And** access patterns are monitored for anomalies

---

### Story 16.6: Implement Session Security

As a security administrator,
I want secure session management,
So that unauthorized access is prevented.

**Acceptance Criteria:**

**Given** a user logs in
**When** the session is established
**Then** MFA is required for clinical users
**And** sessions timeout after 15 minutes of inactivity
**And** sessions are invalidated on logout
**And** concurrent session limits are enforced
**And** session tokens are securely generated
**And** token refresh follows security best practices

---

### Story 16.7: Implement Breach Notification Preparation

As a compliance officer,
I want breach notification procedures documented,
So that we can respond within HIPAA's 60-day requirement.

**Acceptance Criteria:**

**Given** a potential breach is identified
**When** the incident response process activates
**Then** the system supports:

- Incident logging and tracking
- Affected patient identification
- Communication template generation
- Notification tracking and confirmation
- Remediation documentation
  **And** procedures are documented and tested
  **And** contact lists are maintained current
