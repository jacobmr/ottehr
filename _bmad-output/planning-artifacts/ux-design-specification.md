---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments:
  - /data/dev/aura/planning/prd.md
  - docs/dynamicscribe-ux-analysis.md
  - docs/architecture.md
---

# UX Design Specification - Aura

**Author:** JMR-OTTER
**Date:** 2026-01-08

---

## Executive Summary

### Project Vision

Aura is an AI-native clinical encounter experience layer built on Ottehr that completes the Quadruple-A framework through intelligent action distribution. The core UX thesis: AI prepares clinical actions on a "silver platter" for one-tap physician approval, then automatically routes each action to the right actor (MA, care manager, patient, caregiver).

**Key UX Differentiators:**
- Shared transparency - clinician and patient see the same screen
- Individual as primary key - longitudinal view, not encounter silos
- Actions Panel - the signature interaction that captures the vision
- CDS-compliant patient-facing AI - gathers info, never diagnoses

### Target Users

**Primary Users (Demo Focus):**
- **Dr. Lisa Chen (Physician)** - Burned out, wants joy back. Needs: scan context in 10 seconds, approve actions in 5 seconds, notes done when patient leaves.

**Secondary Users (Phase 1):**
- **Eleanor Vance (Patient)** - Wants to feel heard. Needs: see her priorities on screen, understand her care plan, leave informed.
- **Marcus Williams (MA)** - Underutilized. Needs: clear pre-visit prep, meaningful post-visit tasks, not just routing.

**Phase 2 Users:**
- **Maria Santos (Caregiver)** - Remote daughter. Needs: instant visit summaries, action items, peace of mind.
- **Denise Carter (Care Manager)** - Drowning in spreadsheets. Needs: priority dashboard, suggested outreach, one-tap actions.
- **Eleanor (Async)** - Between visits. Needs: message care team, get help without phone tag.

### Key Design Challenges

1. **Shared View Information Hierarchy** - Same screen serves clinician workflow and patient understanding. Must design layers of detail that work for both.

2. **Actions Panel Scannability** - 5-10 actions with routing destinations, approachable in 5 seconds, without cognitive overload.

3. **CDS Compliance Visual Language** - Patient-facing AI must feel helpful but never appear to diagnose. Visual cues must reinforce the boundary.

4. **Multi-Actor Coherence** - 6 user types with different needs sharing design language. Component system must flex without fragmenting.

5. **Demo-First Polish** - Dr. Chen journey must be production-quality in 4 weeks. Design system must enable this focus.

### Design Opportunities

1. **"Approve All" as Signature Moment** - Single tap that captures Quadruple-A vision. Design for emotional impact.

2. **Visible AI Thinking** - 2-5 second synthesis becomes trust-building transparency, not frustrating wait.

3. **Collaborative Decision Aids** - "Let's look at your options together" moment. Design for screen-sharing between clinician and patient.

4. **Action Routing Visualization** - Show distribution to Marcus, Denise, Eleanor, Maria. Make the innovation visible.

5. **Patient Priorities First** - Eleanor's words on the screen. Design to maximize emotional resonance.

## Core User Experience

### Defining Experience

**Core Interaction:** Dr. Chen views silver-plattered actions → taps "Approve All" → done.

This single interaction captures the Quadruple-A value proposition. Everything else supports this moment:
- Pre-visit synthesis provides context for understanding actions
- Decision aids explain why these specific actions
- Documentation auto-generates from approved actions
- Action routing distributes to the right actors automatically

**Demo Success = This Interaction Works Flawlessly**

### Platform Strategy

| Platform | Use Case | Demo Priority |
|----------|----------|---------------|
| **Desktop Web** | EHR workstation (primary clinical workflow) | Must |
| **Tablet Web** | In-room shared view with patient | Nice |
| **Mobile Web** | Patient/caregiver access | Phase 1 |
| **Telehealth** | Video + clinical tools | Phase 1 |

**Technical Constraints:**
- Built on Ottehr stack (React 18, MUI 5, Zustand, React Query)
- Real-time sync required (sub-500ms propagation)
- No offline requirement for demo
- Must integrate with existing Ottehr patterns

**Input Methods:**
- Desktop: Mouse/keyboard optimized
- Tablet: Touch-friendly for shared decision moments
- Mobile: Touch-first for patient interactions

### Effortless Interactions

**Zero-Thought Design Targets:**

| Interaction | From (Pain) | To (Effortless) |
|-------------|-------------|-----------------|
| Pre-visit prep | 3+ minutes hunting through chart | 10-second AI synthesis scan |
| Approve orders | 15+ clicks across multiple screens | One tap "Approve All" |
| Documentation | 20 minutes after patient leaves | Auto-generated, done at visit end |
| Action routing | Manual orders, faxes, follow-ups | Automatic distribution on approval |
| Know patient priorities | Ask again every visit | Already displayed from pre-visit input |

**Automatic Behaviors:**
- Context appears when encounter starts (no searching)
- Actions pre-populated based on conversation (no building)
- Routing destinations pre-determined by action type (no decisions)
- Note structure determined by encounter content (no template selection)

### Critical Success Moments

| Moment | Experience | Design Implication |
|--------|------------|-------------------|
| **First Scan** | "I know exactly where to start" | Information hierarchy optimized for 10-second comprehension |
| **Approve All** | One tap, everything flows | Button prominence, satisfying feedback, visible downstream effects |
| **Patient Priority** | "My words are on the screen" | Patient input displayed prominently, verbatim when possible |
| **Notes Complete** | "I can walk the patient out" | Auto-generation fast, editing minimal, sign-off simple |
| **Demo Aha** | "This changes everything" | End-to-end flow feels magical, not mechanical |

### Experience Principles

1. **Silver Platter, Not Menu**
   - Present curated decisions, not raw options
   - AI does the cognitive work, clinician validates
   - Default to "approve" not "build from scratch"

2. **5-Second Scan**
   - Any screen comprehensible in 5 seconds
   - Visual hierarchy guides eye immediately to what matters
   - If it takes longer to understand, simplify

3. **One Tap Completes**
   - Minimize clicks for common flows
   - Batch related actions together
   - "Approve All" as the ideal interaction pattern

4. **Visible Distribution**
   - Show where each action routes (Marcus, Denise, Eleanor, Maria)
   - The routing IS the innovation - make it visible
   - Actor icons/names next to each action

5. **Patient Words First**
   - Eleanor's priorities in her language, verbatim
   - Display prominently, not buried in chart
   - Emotional resonance > clinical efficiency

6. **Trust Through Transparency**
   - Show AI reasoning for suggestions
   - "Based on..." visible for each action
   - Don't hide the machine - let clinician verify

## Desired Emotional Response

### Primary Emotional Goals

**Overarching Theme: Restoration**

Aura restores what modern healthcare has taken away:
- **For Clinicians:** Joy in practice, time with patients, work-life balance
- **For Patients:** Feeling heard, partnership in care, understanding
- **For Care Teams:** Purpose, meaningful contribution, professional satisfaction

| User | Primary Emotion | Success Statement |
|------|-----------------|-------------------|
| Dr. Chen (Physician) | Joy / Relief | "I actually enjoyed work today" |
| Eleanor (Patient) | Heard / Partnership | "It was like they actually listened" |
| Maria (Caregiver) | Peace of Mind | "I finally feel like I can help" |
| Marcus (MA) | Valued / Purpose | "The MA who explained everything" |
| Denise (Care Manager) | Effective / Meaning | "The nurse I went to school to be" |

### Emotional Journey Mapping

**Dr. Chen Journey (Demo Focus):**

| Stage | Current State | Aura Target |
|-------|---------------|-------------|
| Pre-visit | Dread | Anticipation |
| First Scan | Anxiety | Confidence |
| During Visit | Distraction | Presence |
| Approve All | Overwhelm | Satisfaction |
| End of Visit | Incomplete | Completion |
| End of Day | Exhaustion | Balance |

**Eleanor Journey:**

| Stage | Current State | Aura Target |
|-------|---------------|-------------|
| Before Visit | Worried (questions on notepad) | Heard (submitted concerns) |
| Arrival | Anxious (will there be time?) | Seen (priorities on screen) |
| During Visit | Passive (doctor types) | Partner (shared decision-making) |
| After Visit | Confused (what happened?) | Informed (clear care plan) |

### Micro-Emotions

**Trust vs. Skepticism**
- AI-assisted clinical decisions require earned trust
- Show reasoning for every suggestion
- Allow easy override without friction
- Never auto-submit clinical orders
- "I trust Aura because I can see why"

**Confidence vs. Confusion**
- First scan must immediately orient
- Clear visual hierarchy, no hunting
- Consistent patterns across screens
- "I know exactly what I'm looking at"

**Accomplishment vs. Frustration**
- "Approve All" must feel satisfying
- Visible progress through encounter
- Clear success states
- "That felt good - everything just worked"

**Connection vs. Isolation**
- Shared view creates partnership
- Patient words visible to both parties
- Collaborative decision moments
- "We're doing this together"

**Emotions to Avoid:**
- **Surveillance:** AI as partner, not monitor
- **Incompetence:** Suggestions augment, not replace clinical judgment
- **Depersonalization:** Patient as partner, not data point
- **Overwhelm:** Information density calibrated for scan speed

### Design Implications

| Target Emotion | Design Approach |
|----------------|-----------------|
| **Joy** | Reduce clicks aggressively, auto-complete routine tasks, show time saved |
| **Trust** | Transparent AI reasoning, easy edit/override, no forced acceptance |
| **Heard** | Patient words verbatim, priorities displayed first, not buried in chart |
| **Confidence** | Strong visual hierarchy, consistent patterns, 5-second comprehension |
| **Satisfaction** | Prominent "Approve All", satisfying micro-animation, clear success state |
| **Connection** | Same screen composition for patient and clinician, shared decision aid views |
| **Purpose** | Role-specific queues, meaningful task descriptions, visible impact on outcomes |

### Emotional Design Principles

1. **Restoration Over Optimization**
   - Not about doing more faster
   - About reclaiming what was lost: presence, partnership, purpose

2. **Earned Trust**
   - Every AI suggestion must show reasoning
   - Trust is built incrementally, not assumed
   - Easy escape hatches preserve autonomy

3. **Visible Care**
   - Patient sees they matter (priorities displayed)
   - Clinician sees impact (quality gaps closed)
   - Care team sees contribution (actions completed)

4. **Satisfying Moments**
   - "Approve All" should feel like checking off a big list
   - Completion states should provide closure
   - End of day should feel earned, not escaped

5. **No Surveillance Feeling**
   - AI is colleague, not supervisor
   - Suggestions, not mandates
   - Clinician remains the decision-maker

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**Primary Reference: DynamicScribe Prototype**

Direct UX patterns to adopt from the existing prototype:

| Component | Pattern | Adoption Strategy |
|-----------|---------|-------------------|
| ActionsPanel | Collapsible panel with badge count | Adopt directly, add routing indicators |
| CarePlan | Status chips (active/new/modified/discontinued) | Adopt, enhance with FHIR status mapping |
| DecisionAid | Pros/cons grid with recommendation highlight | Adopt for shared decision moments |
| Transcript | Speaker avatars, inline AI insights | Adapt for Phase 2 (demo uses simulated) |
| Agenda | Three-source visual distinction | Adopt for multi-priority tracking |

**Secondary Inspirations:**

| Product Category | Inspiration Source | Pattern to Extract |
|------------------|-------------------|-------------------|
| Task Management | Todoist, Things 3 | One-tap complete, batch operations, satisfying animations |
| Collaboration | Figma, Notion | Real-time presence, progressive disclosure, clean density |
| AI Assistants | Claude, ChatGPT | "Thinking" indicators, streaming output, edit/regenerate |
| Healthcare | MyChart, athena | What NOT to do - see anti-patterns |

### Transferable UX Patterns

**Navigation Patterns:**

| Pattern | Source | Aura Application |
|---------|--------|------------------|
| Persistent context bar | Figma | Patient summary always visible at top |
| Role-based views | Slack | Same data, different layouts per user type |
| Progressive disclosure | Apple | Summary first, expand for clinical detail |

**Interaction Patterns:**

| Pattern | Source | Aura Application |
|---------|--------|------------------|
| Batch approval | Gmail | "Approve All" actions in one tap |
| Swipe gestures | Mobile patterns | Fast triage on tablet (approve/reject) |
| Inline editing | Notion | Edit AI-generated text without modal |
| Drag-to-assign | Trello | Manual routing override (Phase 2) |

**Visual Patterns:**

| Pattern | Source | Aura Application |
|---------|--------|------------------|
| Status chips | GitHub | Action status, care plan item state |
| Card-based layout | Notion | Scannable, expandable content units |
| Timeline view | Git history | Longitudinal care plan changes |
| Presence indicators | Figma | Show shared view (Eleanor sees this too) |

**AI-Specific Patterns:**

| Pattern | Source | Aura Application |
|---------|--------|------------------|
| Streaming output | Claude | Real-time synthesis feel |
| Source attribution | Perplexity | "Based on A1C of 6.8%" citations |
| Confidence indicator | ML tools | Visual flagging of uncertainty |
| Regenerate option | ChatGPT | Clinician can request alternative |

### Anti-Patterns to Avoid

**Traditional EHR Anti-Patterns:**

| Anti-Pattern | Problem | Aura Alternative |
|--------------|---------|------------------|
| Click-heavy workflows | 15+ clicks per order | One-tap batch approval |
| Modal overload | Constant flow interruption | Inline actions, minimal modals |
| Dense text walls | Can't scan in 5 seconds | Cards, chips, visual hierarchy |
| Hidden information | Hunt through tabs | Single-view encounter context |
| Generic alerts | Alert fatigue, ignored | Contextual, actionable-only notifications |
| Encounter-centric silos | Longitudinal context lost | Individual as primary key |

**Ambient Scribe Anti-Patterns:**

| Anti-Pattern | Problem | Aura Alternative |
|--------------|---------|------------------|
| Documentation-only | Stops at Aggregate step | Complete Quadruple-A (Act) |
| Post-visit review | Notes after patient leaves | Real-time, done at encounter end |
| Black-box AI | No reasoning visible | Transparent "based on..." citations |
| Physician dumping | All actions to MD | Intelligent routing to right actor |

### Design Inspiration Strategy

**Adopt Directly:**
- DynamicScribe ActionsPanel component structure
- DynamicScribe CarePlan status chip system
- DecisionAid pros/cons grid layout
- One-tap batch approval pattern
- Streaming AI output visualization

**Adapt for Aura:**
- Figma presence indicators → "Eleanor sees this view" badge
- Notion progressive disclosure → Clinical detail expansion
- Claude source citations → FHIR-sourced "Based on..." references
- Todoist completion animations → "Approve All" satisfaction moment

**Avoid Completely:**
- Modal-heavy interaction flows
- Post-visit documentation review
- Hidden AI reasoning
- Click-intensive order entry
- Generic, non-actionable alerts
- Encounter-centric information silos

## Design System Foundation

### Design System Choice

**Selected:** MUI 5 (Material UI) with custom Aura theme

**Decision Type:** Constrained choice (brownfield on Ottehr)

Aura is built on the Ottehr codebase, which standardizes on MUI 5. This is not a recommendation - it's a requirement for:
- Consistency with existing Ottehr UI patterns
- Leverage of existing component library (`packages/ui-components`)
- Developer familiarity and velocity
- Reduced maintenance burden

### Rationale for Selection

**Technical Alignment:**
- Ottehr uses React 18 + MUI 5 + Zustand + React Query
- Established theming infrastructure exists
- Component patterns documented in development guide
- Accessibility compliance (WCAG 2.1 AA) built-in

**Pattern Support:**

| Aura Pattern Need | MUI 5 Solution |
|-------------------|----------------|
| Status chips | `<Chip>` with color variants |
| Card-based layout | `<Card>`, `<CardContent>`, `<CardActions>` |
| Progressive disclosure | `<Accordion>`, `<Collapse>` |
| Batch operations | Checkbox patterns, SelectAll |
| Visual hierarchy | Typography scale, consistent spacing |

**DynamicScribe Translation:**
DynamicScribe's Tailwind/Radix patterns will be re-implemented in MUI:
- Conceptual patterns adopted (ActionsPanel, CarePlan, DecisionAid)
- Visual implementation translated to MUI components
- Interaction behaviors preserved

### Implementation Approach

**Theme Architecture:**

```
ottehr/
├── packages/ui-components/       # Shared components (existing)
├── apps/ehr/
│   └── src/
│       └── features/
│           └── aura/            # Aura feature module
│               ├── theme/       # Aura theme extensions
│               │   ├── palette.ts
│               │   ├── typography.ts
│               │   └── components.ts
│               └── components/  # Aura-specific components
│                   ├── ActionsPanel/
│                   ├── CarePlanCard/
│                   ├── DecisionAid/
│                   └── DocumentationReview/
```

**Theme Extension Strategy:**
- Extend Ottehr's existing theme (don't replace)
- Add Aura-specific palette colors (AI accent, status colors)
- Create component variants for clinical context
- Maintain consistency with Ottehr base patterns

### Customization Strategy

**Palette Extensions:**

| Token | Purpose | Example Use |
|-------|---------|-------------|
| `aura.aiAccent` | AI-generated content indicator | Synthesis cards, suggestions |
| `aura.approve` | Positive action | Approve buttons, success states |
| `aura.reject` | Negative action | Reject/dismiss actions |
| `aura.routing.ma` | MA routing indicator | Action assignments |
| `aura.routing.careManager` | Care manager routing | Action assignments |
| `aura.routing.patient` | Patient routing | Action assignments |

**Component Variants:**

| Base Component | Aura Variant | Purpose |
|----------------|--------------|---------|
| `Chip` | `StatusChip` | Care plan item status (active/new/modified/discontinued) |
| `Chip` | `ActionChip` | Action type indicator (prescribe/order/referral) |
| `Chip` | `RoutingChip` | Actor assignment (MA/Care Manager/Patient) |
| `Card` | `ActionCard` | Individual action in ActionsPanel |
| `Card` | `CarePlanItemCard` | Care plan item with status and metrics |
| `Button` | `ApproveAllButton` | Primary batch approval action |

**Typography Adjustments:**
- Increase body text size for scan readability
- Stronger heading hierarchy for 5-second comprehension
- Monospace option for clinical values (A1C: 6.8%)

**Spacing Adjustments:**
- Generous touch targets (minimum 44px) for tablet use
- Card padding optimized for information density
- Consistent 8px grid system

## Defining Experience

### The Core Interaction

**Defining Experience:** "Silver-platter actions, one-tap approve, everything flows"

This is Aura's signature moment - the interaction that captures the entire Quadruple-A value proposition in a single tap. Users will describe it as:

> "The AI prepares everything, I tap once, and it all just happens - prescriptions sent, orders placed, patient notified, notes done."

**Why This Defines Aura:**
- Completes Quadruple-A framework (Act step) in one interaction
- Differentiates from ambient scribes (they stop at documentation)
- Delivers emotional promise (joy restored, time reclaimed)
- Makes innovation visible (action routing to multiple actors)

### User Mental Model

**Current Mental Model (EHR users):**
- "I decide, then I execute each decision separately"
- "Orders are individual tasks I complete one by one"
- "AI might help me write notes, but I still do the work"
- "Post-visit inbox work is inevitable"

**Aura Mental Model Shift:**
- "I review and approve, AI executes"
- "Decisions are batched and approved together"
- "AI did the work, I verify and release"
- "Visit is complete when I walk the patient out"

**Potential Confusion Points:**

| Confusion | Design Mitigation |
|-----------|-------------------|
| "Did it really send?" | Clear confirmation with specifics |
| "What did I approve?" | Expandable audit trail |
| "What if I want to change one?" | Granular edit/reject on each action |
| "Can I undo?" | 5-second undo window |

### Success Criteria

| Criterion | Target | Measurement |
|-----------|--------|-------------|
| Speed | View → Approved in 5 seconds | Usability testing timer |
| Confidence | No hesitation on tap | Eye tracking, hesitation analysis |
| Comprehension | Can recall what was approved | Post-action recall test |
| Trust | Would use again | Repeat usage rate |
| Satisfaction | Feels good | NPS, qualitative feedback |

**Success Indicators:**
- Scans Actions Panel in under 5 seconds
- Taps "Approve All" without reviewing each item individually
- Can accurately recall approved actions afterward
- Doesn't feel need to verify in EHR after

### Novel UX Patterns

**Pattern Type:** Novel in healthcare, adapted from consumer patterns

**Novel Elements for Healthcare:**
- AI-curated action suggestions (not template order sets)
- Batch approval of mixed action types (Rx + lab + referral + task)
- Visible routing to different actors (not just "to pharmacy")
- One-tap completion of entire visit's clinical actions

**Familiar Pattern Adaptations:**

| Source Pattern | Aura Adaptation |
|----------------|-----------------|
| Email "Archive All" | Batch clear actions with one tap |
| Shopping cart checkout | Review items, one-tap complete |
| Code review "Approve PR" | Review AI suggestions, approve with one action |
| Notification "Clear All" | Dismiss/complete multiple items instantly |

**Teaching the Pattern:**
1. **First use:** Guided walkthrough showing what happens on approval
2. **Animation:** Actions visually flow to their routing destinations
3. **Confirmation:** Specific feedback: "3 to Marcus, 2 to Eleanor, 1 to pharmacy"
4. **Undo window:** 5-second recovery option for accidental approval

### Experience Mechanics

**1. Initiation**

| Stage | Design |
|-------|--------|
| Passive state | Actions Panel visible but collapsed, badge shows action count |
| During encounter | Panel updates as conversation progresses |
| Ready state | At wrap-up, panel auto-expands with "Ready to approve" |
| Trigger | Visible "Approve All (7)" button invites action |

**2. Interaction**

| Element | Design |
|---------|--------|
| Layout | Vertical list of ActionCards |
| ActionCard | Type icon + Title + Routing chip + Actions |
| Scanning | Color-coded by type (Rx=blue, Lab=purple, Referral=green) |
| Routing visibility | Chip shows "→ Marcus" or "→ Eleanor" on each card |
| Granular control | Hover reveals Edit/Reject on individual actions |
| Primary CTA | Large "Approve All (N)" button, prominent position |
| One-tap | Single click/tap triggers approval of all actions |

**3. Feedback**

| Timing | Feedback |
|--------|----------|
| Immediate (0ms) | Button state change, ripple animation |
| Progress (0-500ms) | Actions animate outward toward routing icons |
| Confirmation (500ms) | Toast: "Approved 7 actions" |
| Details | Expandable in toast: "Rx to pharmacy, Lab to Quest..." |
| Undo (0-5s) | "Undo" link in toast for 5 seconds |
| Settled (5s+) | Toast dismisses, actions are final |

**4. Completion**

| Element | Design |
|---------|--------|
| Empty state | Actions Panel shows "All actions completed" with checkmark |
| Audit access | "View approved actions" link for review |
| Next step | Documentation Review auto-surfaces as next focus |
| Visit status | "Visit complete" indicator visible |
| Confidence | Dr. Chen can walk Eleanor out knowing everything is done |
