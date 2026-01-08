---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
status: complete
completedDate: "2026-01-08"
inputDocuments:
  - docs/index.md
  - docs/architecture.md
  - docs/development-guide.md
  - docs/dynamicscribe-ux-analysis.md
  - docs/api-contracts.md
  - docs/source-tree-analysis.md
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 6
workflowType: 'prd'
lastStep: 0
fieldType: 'brownfield'
---

# Product Requirements Document - Aura

**Author:** JMR-OTTER
**Date:** 2026-01-08

## Executive Summary

**Aura** is an AI-native clinical encounter experience layer built on the Ottehr headless EHR framework. It transforms clinical encounters from documentation burdens into collaborative care moments where clinicians and patients work together with intelligent assistance.

### Vision

Most clinical AI tools stop at the "Analyze" step of the Quadruple-A framework (Acquire → Aggregate → Analyze → Act), leaving physicians with heavy cognitive load and a pile of suggestions they must manually execute. Aura completes the loop by focusing on **intelligent action distribution** - ensuring each clinical action reaches the right actor: nurse, care manager, patient, caregiver, or physician.

Aura treats the **individual as the primary key**, not the encounter. This patient-centric architecture enables longitudinal care management rather than episodic documentation, supporting value-based care models and quality measure optimization (HEDIS) from day one.

### What Makes Aura Special

1. **Quadruple-A Completion** - Intelligent action distribution to the right actor, reducing physician cognitive load
2. **Patient-Centric Architecture** - Individual as primary key, enabling longitudinal care across encounters
3. **Shared Transparency** - Clinician and patient see the same view, enabling collaborative decision-making
4. **Value-Based Care Native** - HEDIS measures and care plans integrated from the start
5. **Neuro-Symbolic AI Roadmap** - Deliberate path toward symbolic reasoning with medical knowledge, not just LLM pattern matching
6. **Headless EHR Foundation** - Built on Ottehr's proven FHIR R4 backbone and 119+ API endpoints

### Phasing

| Phase | Components | Timeline |
|-------|------------|----------|
| **Phase 1** | Care Plan, Actions, Documentation Generation | 0-6 months |
| **Phase 2** | Transcript, Agenda | 6-12 months |
| **Demo** | Demonstrable prototype | ~4 weeks |
| **Beta** | Production-ready beta | 6-12 months |

### Scope

- **Encounter Modes**: Telehealth and in-person from start
- **User Experience**: Shared clinician + patient view from start
- **AI Strategy**: Begin with Anthropic/OpenAI, rapidly incorporate neuro-symbolic components
- **Data Architecture**: FHIR-first with vector DB semantic layer for AI retrieval

## Project Classification

| Attribute | Value |
|-----------|-------|
| **Technical Type** | Web Application (SaaS B2B) |
| **Domain** | Healthcare |
| **Complexity** | High |
| **Project Context** | Brownfield - extending Ottehr headless EHR |
| **Regulatory Considerations** | HIPAA, clinical validation, patient safety |
| **Quality Framework** | HEDIS measures, value-based care alignment |

## Success Criteria

### User Success

#### Clinician Success
- **Mental alignment**: AI thinks like the clinician - no cognitive translation required
- **Busywork elimination**: Frees clinicians for "real doctor work" - thinking and listening to patients
- **Silver-plattered workflow**: Work batched and organized, ready to act with minimal friction
- **Day-one impact**: Clinicians go home early with zero leftover work
- **Async-first engagement**: Encounters aren't the only touchpoint - AI-assisted asynchronous engagement is normalized
- **Confidence in care**: Walk away knowing patients received excellent service

#### Patient Success
- **Feeling heard**: Patient priorities explicitly visible and incorporated into care plans
- **Immediate impact**: First interaction demonstrates the difference
- **Active partnership**: Patients are participants in their care, not passive recipients

### Business Success

| Milestone | Success Metric |
|-----------|----------------|
| **4 weeks (Demo)** | Full Quadruple-A workflow demonstrated end-to-end: Acquire → Aggregate → Analyze → Act with actions deployed to right actors |
| **6 months (Early Beta)** | 5-10 physicians actively using Aura, break-even on current compensation model |
| **12 months (Beta)** | Physicians work less and earn more. Daily "gosh, that's amazing" moments. Enthusiastic disciples who champion the platform. |
| **Revenue Model** | Dual-track: Value-based care quality capture + Fee-for-service efficiency gains. "Ride both horses." |

### Technical Success

| Requirement | Target |
|-------------|--------|
| **Data flow** | Seamless integration with Ottehr FHIR backend |
| **Real-time sync** | All data synchronized in real-time |
| **Zero redundancy** | System NEVER asks for data it already has |
| **AI autonomy** | Full autonomy after training, except orders/prescriptions require batched approval |
| **Approval UX** | Actions batched with sufficient context, single approval for action sets |
| **Error tolerance** | Zero tolerance for AI errors |
| **Latency (normal)** | Sub-second response |
| **Latency (AI thinking)** | 2-5 seconds acceptable with visible thinking indicator |
| **HIPAA** | Required for all phases |
| **SOC 2** | Optional for beta |
| **Audit trails** | Complete logging of every AI decision and action |

### Measurable Outcomes

| Metric | 6-Month Target | 12-Month Target |
|--------|----------------|-----------------|
| Clinician time savings | Break-even with current workflow | Net positive (work less) |
| Clinician earnings | Break-even with current compensation | Net positive (earn more) |
| Clinician satisfaction | Willing to continue using | Active champions ("disciples") |
| Patient engagement | Patients report feeling heard | Patients actively use shared view |
| AI accuracy | Zero errors reaching patients | Zero errors reaching patients |
| Action routing accuracy | Actions reach correct actor 95%+ | Actions reach correct actor 99%+ |

## Product Scope

### MVP - Minimum Viable Product (4 weeks → 6 months)

**Core Components (Phase 1):**
- Care Plan display with patient-centric context
- Actions Panel with intelligent actor routing (nurse, care manager, patient, caregiver, physician)
- Documentation generation from clinical encounters
- Telehealth and in-person encounter modes
- Shared clinician + patient view

**Technical Foundation:**
- FHIR-first integration with Ottehr backend
- Basic LLM integration (Anthropic/OpenAI) with clinical guardrails
- Real-time data synchronization
- Complete audit trail logging
- HIPAA-compliant architecture

**Key Constraint:** Never ask for redundant data

### Growth Features (6-12 months)

**Phase 2 Components:**
- Real-time Transcript with speaker identification
- Dynamic Agenda with multi-source tracking (patient, provider, insurance)

**Intelligence Expansion:**
- HEDIS measure integration and quality gap surfacing
- Initial neuro-symbolic AI components
- External data assimilation, parsing, and normalization
- Predictive action suggestions

**Revenue Optimization:**
- Value-based care quality capture automation
- Fee-for-service efficiency optimization

### Vision (Beyond Beta)

- Full neuro-symbolic AI with medical knowledge graphs and symbolic reasoning
- Multi-payer optimization engine
- Predictive care gap identification before they occur
- Cross-population health insights
- Autonomous care coordination across the full care team

## User Journeys

### Journey 1: Eleanor Vance - Finally Feeling Heard

**Eleanor Vance, 58, Type 2 Diabetes**

Eleanor has been managing her diabetes for seven years. She's a retired school librarian who now helps with her grandchildren three days a week. Lately, she's noticed tingling in her legs at night - it keeps her awake, and she's worried. She Googled it (she knows she shouldn't have) and now fears the worst.

Her last few doctor visits felt rushed. She'd write down her questions on a notepad, but by the time the doctor finished reviewing her chart and asking about medications, there was never time for her real concerns. She'd leave with a prescription refill and a "see you in three months" - her notepad questions still unanswered.

**The Aura Experience:**

Two days before her appointment, Eleanor receives a text: *"Hi Eleanor, Dr. Chen would like to know what's on your mind for Thursday's visit. What would you like to discuss?"*

She types back: *"The tingling in my legs is getting worse. Also, my Metformin is making me nauseous and I want to talk about it. And I'm worried about my A1C."*

When she arrives Thursday, something is different. Dr. Chen greets her and says, "Eleanor, I saw your message about the leg tingling - that's our first priority today. I've also already reviewed your latest A1C - it's actually stable at 6.8%, so I have good news there. Let's talk about what you're experiencing."

For the first time, Eleanor sees her concerns listed on the screen - right next to the doctor's clinical items and even the insurance-required foot exam. *Her priorities are visible. Her words are on the screen.*

As they talk, she watches items get checked off. When she mentions the Metformin nausea, Dr. Chen pulls up a visual showing three alternatives with pros and cons. They decide together to try Jardiance. Eleanor understands *why* - not just *what*.

At the end, Dr. Chen says, "Let me show you what we accomplished today." The screen displays:
- New prescription: Jardiance (replacing Metformin)
- Referral: Podiatrist for neuropathy evaluation
- Lab order: Kidney function check in 2 weeks
- Follow-up: Eleanor will message in 1 week about how Jardiance is working

Eleanor doesn't have to remember any of this. It's already in her phone. Her daughter Maria (her caregiver contact) gets a summary too.

**The transformation:** Eleanor walks out knowing exactly what's happening with her care, feeling like a partner rather than a passenger. She tells her friend at bridge club, "It was like they actually *listened* this time."

---

### Journey 2: Maria Santos - The Long-Distance Daughter

**Maria Santos, 34, Eleanor's daughter**

Maria lives two hours away with her own family - a husband and two young kids. She loves her mom fiercely but can't be at every appointment. She's the family "medical coordinator" by default - her brother lives across the country and her mom sometimes forgets details.

Her current reality: After every appointment, she calls her mom. "What did the doctor say?" Her mom gives a partial answer. "Did they change any medications?" Her mom isn't sure. Maria spends her lunch break calling the clinic, waiting on hold, leaving messages. Sometimes she finds out about important changes a week later when her mom mentions "that new pill."

She feels guilty she can't be there, anxious she's missing something important, and frustrated with a system that treats her like an outsider to her own mother's care.

**The Aura Experience:**

Maria's phone buzzes at 11:47 AM - right when her mom's appointment ends.

*"Eleanor's visit summary is ready. Tap to view."*

She opens it and sees:

**Today's Visit - Dr. Chen**
- ✅ Discussed leg tingling - referral to podiatrist scheduled
- ✅ Switched from Metformin to Jardiance (nausea issues)
- ✅ A1C stable at 6.8% - great news!

**Action Items:**
- 🏥 Podiatrist appointment: Jan 22 at 2pm (Dr. Patel)
- 💊 New prescription: Jardiance - pick up at Walgreens tomorrow
- 🩸 Lab work needed in 2 weeks
- 📱 Mom will message Dr. Chen in 1 week re: how new med is working

**Your role:**
- Remind mom about the lab work (she tends to forget)
- Watch for signs of low blood sugar with new medication

Maria screenshots it and texts her brother: "Mom's appointment went well - here's what happened." Done in 30 seconds.

Two weeks later, Maria gets a gentle nudge: *"Eleanor's lab work is due this week. Would you like to send her a reminder?"* She taps yes. Her mom gets a text that feels like it came from Maria.

**The transformation:** Maria goes from anxious outsider to informed partner. She's in the loop instantly, knows exactly what she needs to do, and can support her mom without the phone tag. She tells her husband, "I finally feel like I can help without being there."

---

### Journey 3: Dr. Lisa Chen - The Physician Who Got Her Joy Back

**Dr. Lisa Chen, 44, Internal Medicine**

Dr. Chen went into medicine to help people. Twenty years later, she spends more time clicking than connecting. She sees 22 patients a day, stays two hours late finishing notes, and dreams about the days when she actually *talked* to patients instead of typing while they talked.

Her current reality: Before each visit, she scrambles through the chart - hunting for the last A1C, checking which meds need refills, remembering what they discussed last time. During the visit, she's half-listening while documenting. After, she places orders one by one, writes the note, sends referrals, updates the care plan. Every patient is 15 minutes of face time and 20 minutes of administrative aftermath.

She's burned out. She forgot why she became a doctor.

**The Aura Experience:**

Dr. Chen walks into Exam Room 3. Eleanor is already seated, and the Aura display shows:

**Eleanor Vance - Ready for Visit**

📋 **Pre-Visit Input** (Eleanor's words):
- "Tingling in my legs is getting worse" ← *flagged: neuropathy screening*
- "Metformin making me nauseous" ← *alternatives prepared*
- "Worried about my A1C" ← *latest result loaded: 6.8% stable*

📊 **Aura Analysis:**
- A1C: 6.8% (stable, within target)
- eGFR: 78 (mild decrease - monitor)
- Gaps: Annual foot exam overdue (HEDIS), neuropathy assessment indicated
- Insurance: Foot exam required for quality measure

Dr. Chen doesn't hunt. She scans for 10 seconds and knows exactly where to start.

"Eleanor, I saw your message about the tingling. Tell me more about that."

She *listens*. Actually listens. No clicking. Aura captures the conversation - voice recognition transcribing in the background, AI identifying clinical signals.

When Eleanor mentions the Metformin nausea, Aura silently surfaces the Decision Aid: three alternatives with pros, cons, and Eleanor's specific factors (kidney function, cost, weight goals). Dr. Chen turns the screen toward Eleanor. "Let's look at your options together."

They choose Jardiance. Dr. Chen doesn't write anything. She just agrees.

As they discuss the leg tingling, Aura has already identified: this warrants podiatry referral + consideration for gabapentin if symptoms persist. It's queued in the Actions Panel.

At the end of the 15-minute visit, Dr. Chen glances at the Actions Panel:

**Ready for Approval:**
- ✓ Rx: Jardiance 10mg daily (replacing Metformin)
- ✓ Referral: Podiatry - Dr. Patel (neuropathy eval)
- ✓ Lab: BMP in 2 weeks (kidney function check)
- ✓ Follow-up: Patient message in 1 week
- ✓ Notify: Maria Santos (caregiver) - visit summary

Dr. Chen reviews for 5 seconds. Everything is right. She taps **"Approve All."**

Done. Note generated. Orders sent. Referral transmitted. Caregiver notified. HEDIS measure captured.

She looks at Eleanor. "Any other questions?" She has *time* to ask that now.

**The transformation:** Dr. Chen goes home at 5:30 PM. Her notes are done. She spent her day listening to patients and making decisions - the work she trained for. She texts her husband: "I actually enjoyed work today."

After a month with Aura, she sees the same 22 patients but finishes on time. Her satisfaction scores are up. Her quality metrics are up. She stopped thinking about early retirement.

---

### Journey 4: Marcus Williams - The MA Who Became Essential

**Marcus Williams, 28, Medical Assistant**

Marcus has worked at the clinic for three years. He's smart, capable, and deeply underutilized. His days are filled with rooming patients, taking vitals, and relaying messages between doctors and patients - essentially a human router.

His current reality: He rooms Eleanor, takes her vitals, asks "what brings you in today?" and types her answer into a box the doctor will re-ask about anyway. After the visit, he waits for Dr. Chen to finish her note, then manually processes orders - printing lab slips, faxing referrals, calling pharmacies when e-prescribe fails. He spends 30% of his time on hold.

He knows he could do more. He's trained to give injections, do point-of-care testing, counsel on medications. But the system doesn't trust him with decisions, just tasks.

**The Aura Experience:**

Marcus starts his shift and opens his Aura queue:

**Your Actions - Morning**

| Patient | Action | Priority | Status |
|---------|--------|----------|--------|
| Eleanor Vance | Foot exam (monofilament) | 🟡 Before provider | Ready |
| James Morton | Flu vaccine | 🟢 Standing order | Ready |
| Patricia Liu | BP recheck | 🟢 Standing order | Ready |
| Robert Kim | Diabetes education | 🟡 Post-visit | Pending |

Before Eleanor even sees Dr. Chen, Marcus has clear instructions:

**Eleanor Vance - Pre-Visit Prep**
- ✅ Vitals (standard)
- ✅ Monofilament foot exam (HEDIS gap - overdue)
- ✅ Confirm: still experiencing leg tingling? (pre-visit input flag)
- 📋 Context: Patient mentioned nausea with Metformin - expect med change discussion

Marcus does the foot exam - something he's trained for but rarely got to do because no one remembered to order it. He documents the result in 10 seconds. The HEDIS gap closes automatically.

He tells Eleanor, "Dr. Chen saw your message about the tingling - she's going to prioritize that today." Eleanor feels heard before the doctor even walks in.

After the visit, Marcus's queue updates:

**Eleanor Vance - Post-Visit Actions**

| Action | Details | Your Role |
|--------|---------|-----------|
| Rx: Jardiance | Sent to Walgreens | ✅ Auto-complete |
| Referral: Podiatry | Dr. Patel, Jan 22 | ✅ Auto-scheduled |
| Lab: BMP | 2 weeks | Print slip if patient wants |
| Education: Jardiance | New medication | 🟡 **You: Counsel patient** |

Marcus walks Eleanor out and spends 3 minutes explaining Jardiance - what to expect, when to take it, signs of low blood sugar. He's *teaching*, not just handing over a printout.

"The pharmacy will have it ready tomorrow. Dr. Patel's office will call to confirm your podiatry appointment. Any questions?"

Eleanor leaves fully informed. Marcus documented the counseling with one tap.

**The transformation:** Marcus goes from human router to clinical team member. He does meaningful work that uses his training. He's no longer on hold with pharmacies - the system handles transmission. He sees his impact on quality scores and feels ownership.

At his annual review, the practice manager notes: "Patient satisfaction scores mention you by name, Marcus. 'The MA who explained everything.'"

---

### Journey 5: Denise Carter - The Care Manager Who Can Finally Manage Care

**Denise Carter, 52, RN Care Manager**

Denise has 340 patients in her panel - all complex, all high-risk, all needing coordination. She's an experienced nurse who moved into care management because she wanted to keep people healthy, not just treat them when they're sick.

Her current reality: She spends her mornings pulling reports - who missed their diabetic eye exam, whose A1C is overdue, who was discharged from the hospital last week. She manually cross-references three different systems. By 10 AM, she has a list. By noon, she's made 15 phone calls - 12 went to voicemail. She leaves messages, makes notes, sets reminders to follow up. She's drowning in spreadsheets and sticky notes.

She knows which patients need her most, but she can't reach them. She's a care manager who spends 80% of her time on administrative archaeology instead of actually managing care.

**The Aura Experience:**

Denise opens Aura at 8 AM:

**Your Panel - Priority Dashboard**

| Priority | Patient | Trigger | Action Needed |
|----------|---------|---------|---------------|
| 🔴 Critical | Robert Kim | Hospital discharge yesterday | Transition call today |
| 🔴 Critical | Eleanor Vance | New neuropathy dx + med change | Check-in in 5 days |
| 🟡 High | Margaret Thompson | A1C 9.2 (rising) | Care plan review |
| 🟡 High | William Davis | Missed podiatry appt x2 | Barrier assessment |
| 🟢 Routine | 12 patients | Annual wellness gaps | Outreach batch |

She didn't build this list. Aura built it from real-time signals - hospital ADT feeds, lab results, appointment no-shows, care plan milestones.

She taps **Robert Kim**:

**Robert Kim - Post-Discharge Transition**

📋 **Context:**
- Discharged: Community Hospital, yesterday
- Reason: CHF exacerbation
- New meds: Lasix increased to 40mg, added potassium
- PCP follow-up: Scheduled Jan 15 (6 days out)
- Risk: High readmission risk (CHF + lives alone)

📞 **Suggested Outreach:**
- Call script prepared (medication reconciliation focus)
- Questions to ask: daily weights? Scale at home? Understanding of fluid restriction?

🎯 **Actions if concerning:**
- Escalate to provider (one tap)
- Schedule home health eval (one tap)
- Move up PCP appointment (one tap)

Denise calls Robert. The conversation is focused - she knows exactly what to ask. He mentions he doesn't have a scale. One tap: home health ordered for weight monitoring. Documented automatically.

She moves to Eleanor Vance. Aura shows:

**Eleanor Vance - Care Plan Update**

- Dr. Chen visit: 3 days ago
- Med change: Metformin → Jardiance (GI intolerance)
- New dx: Peripheral neuropathy evaluation pending
- Caregiver: Maria Santos (active, engaged)
- Next touch: Check-in due in 2 days (auto-scheduled)

📱 **Suggested outreach method:** Text (patient preference)
- "Hi Eleanor, how are you feeling on the new medication? Any dizziness or nausea?"

Denise reviews the suggested message, tweaks one word, sends. Eleanor will respond when convenient. No phone tag.

By noon, Denise has completed meaningful touches with 18 patients. Not 15 voicemails. Actual care management.

**The transformation:** Denise's panel outcomes improve - fewer readmissions, better quality scores, more closed care gaps. But more importantly, she goes home feeling like she made a difference. She's managing care, not managing spreadsheets.

She tells a colleague, "I finally feel like the nurse I went to school to be."

---

### Journey 6: Eleanor Between Visits - The Async Relationship

**Eleanor Vance, 58 - Two weeks after her appointment**

Eleanor's been on Jardiance for 10 days. Overall, she feels better - no more nausea. But this morning, she felt lightheaded when she stood up from the couch. She's not sure if it's the new medication or just that she didn't eat breakfast.

Her old reality: She'd worry about it all day. Maybe call the office, wait on hold, leave a message. The nurse would call back hours later, ask a bunch of questions, and say "if it gets worse, go to the ER." No real answer. Or she'd just ignore it and hope it goes away - the kind of thing that turns into a preventable hospitalization.

**The Aura Experience (CDS-Compliant):**

Eleanor opens the Aura app on her phone. She sees her Care Plan with the recent changes highlighted. There's a button: **"Message your care team."**

She types: *"I felt dizzy when I stood up this morning. Is this from the new medicine?"*

Within seconds, Aura responds - **gathering information, not diagnosing**:

> *"Thanks for letting us know, Eleanor. I'll share this with your care team right away. To help them understand what's happening, a few quick questions:*
> - *Did you eat breakfast this morning?*
> - *How much water have you had today?*
> - *Is the dizziness happening every time you stand, or just that once?*
> - *Any chest pain, shortness of breath, or other symptoms?"*

Eleanor replies: *"I skipped breakfast. I've only had one cup of coffee. It just happened the one time. No other symptoms."*

**Behind the scenes:** Aura has already flagged this for Denise (care manager) with full context:
- Patient: Eleanor Vance, 58
- Recent change: Metformin → Jardiance (10 days ago)
- Symptom: Orthostatic dizziness, single episode
- Context gathered: Skipped breakfast, low fluid intake, no red flags
- AI triage: Low acuity - suggest nurse callback within 2 hours
- Reference: Jardiance prescribing info notes orthostatic hypotension risk

Denise sees the alert, reviews the AI-prepared context in 10 seconds, and sends a response **through Aura** (the clinical guidance comes from a licensed professional, not the AI):

> *"Hi Eleanor, this is Denise from Dr. Chen's office. Thanks for letting us know about the dizziness. Based on what you've shared, this is likely related to not eating with your new medication and being a bit dehydrated. Here's what we recommend:*
>
> *✓ Eat a small snack now*
> *✓ Drink a full glass of water*
> *✓ Always take Jardiance with food*
>
> *If it happens again after eating, or if you feel chest pain or severe dizziness, call us right away or dial 911.*
>
> *I'll check back with you tomorrow. Feel free to message anytime."*

Eleanor feels reassured. The guidance came from a real nurse, in minutes instead of hours.

Two days later, Aura sends a **pre-approved follow-up** (templated, not AI-generated medical advice):

> *"Hi Eleanor - just checking in. How are you feeling since you messaged us about the dizziness? Any more episodes?"*

Eleanor responds: *"All better! I've been eating breakfast and drinking more water."*

Denise sees the positive response, closes the loop with one tap, and Aura confirms:

> *"Great to hear! We've noted this in your chart. Your next check-in is in 2 weeks for your lab work reminder."*

**The transformation:** Eleanor feels cared for *between* visits. She got helpful guidance from a real nurse in minutes, not hours. The AI handled the information gathering and routing - the clinical judgment came from Denise. Everyone stayed on the right side of FDA regulations.

She tells her daughter Maria: "It's like having the clinic in my pocket - I actually talked to a nurse within 10 minutes."

**CDS Compliance Note:** In this journey, Aura:
- ✅ Gathered and organized patient information
- ✅ Routed to licensed healthcare professional for clinical guidance
- ✅ Presented context to help clinician make independent decision
- ✅ Used pre-approved templates for non-clinical follow-ups
- ❌ Did NOT make diagnostic statements to patient
- ❌ Did NOT provide personalized medical recommendations directly

---

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|---------------------------|
| **Eleanor (Patient - Encounter)** | Pre-visit input, visible agenda, shared decision-making, care plan updates, caregiver notification |
| **Maria (Caregiver)** | Role designation, automatic summaries, caregiver-specific actions, reminder delegation |
| **Dr. Chen (Physician)** | Pre-visit synthesis, ambient voice capture, decision aids, silver-plattered actions, one-tap approval, auto-documentation |
| **Marcus (MA)** | Role-based action queues, pre-visit prep, standing orders, education prompts, one-tap documentation |
| **Denise (Care Manager)** | Priority stratification, ADT feeds, suggested outreach, one-tap escalation, panel analytics |
| **Eleanor (Async)** | Patient messaging, AI triage/gather (NOT diagnose), context preparation for clinician, licensed professional response, templated follow-ups, CDS-compliant design |

## Domain-Specific Requirements

### Healthcare Regulatory Overview

Aura operates in a high-complexity regulatory environment requiring careful attention to FDA classification, HIPAA compliance, clinical validation, and liability management.

### FDA Classification: Clinical Decision Support (CDS)

**Regulatory Status:** CDS Exempt (per FDA 2026 Guidance)

Aura qualifies for CDS exemption by meeting all four criteria:

| Criterion | Aura Compliance |
|-----------|-----------------|
| **Data Types** | Uses interpreted clinical data (diagnoses, lab results, guidelines) - not raw images/signals |
| **Processing** | Displays, summarizes, matches, compares - does not generate new findings from raw data |
| **Intended User** | Licensed healthcare professionals (clinician-facing AI) |
| **Transparency** | Shows reasoning, inputs, sources, limitations; clinician independently evaluates |

**Critical Design Constraints:**
- Clinician-facing: AI suggests, clinician approves ("silver platter" model)
- Patient-facing: AI gathers information and routes to licensed professional - NO diagnostic statements to patients
- Time-critical alerts route to humans, not auto-action
- Never output single definitive diagnoses - present options with context
- All suggestions must include basis, sources, and limitations

**Reference:** FDA Guidance on Clinical Decision Support Software (2026)

### HIPAA Compliance

**Strategy:** HIPAA-compliant cloud APIs with Business Associate Agreements

| Component | Compliance Approach |
|-----------|---------------------|
| **AI Provider** | Anthropic HIPAA-eligible API with BAA |
| **Vector DB** | HIPAA-compliant vendor (Pinecone) with BAA |
| **Data Storage** | Oystehr platform (HIPAA-compliant) |
| **Caregiver Access** | Requires explicit patient authorization |

**Technical Requirements:**
- Encryption at rest and in transit (AES-256, TLS 1.3)
- Role-based access controls
- Complete audit trails for all PHI access
- Minimum necessary access principle enforced
- BAAs executed before any PHI flows through vendor systems

### Clinical Validation & Patient Safety

**Error Handling Philosophy:** Flag uncertainty but present options - let clinician decide

**Pre-Deployment Validation (Sequential):**

| Phase | Activity | Gate Criteria |
|-------|----------|---------------|
| **1. Chart Review** | Clinicians review AI suggestions against real charts | Primary gate - must pass before go-live |
| **2. Parallel Running** | AI suggests alongside clinician's independent decision | Measure agreement rate, identify edge cases |
| **3. Formal Pilot** | Limited deployment with safety monitoring | Defined success metrics before expansion |

**Post-Deployment Monitoring (Ongoing):**

| Activity | Frequency | Owner |
|----------|-----------|-------|
| **Human Sample Review** | Continuous (primary) | Clinical leadership |
| **Near-Miss Reporting** | As-needed | All users |
| **Accuracy Audits** | Monthly/Quarterly | Quality team |

### Liability Management

**Strategy:** Legal review before beta deployment

**Requirements:**
- Malpractice coverage confirmation for AI-assisted CDS
- Terms of service language for AI assistance disclosure
- Patient consent/notification approach defined
- Documentation requirements validated by legal counsel

**Audit Trail Requirements:**
- What AI suggested (with reasoning)
- What clinician approved/modified/rejected
- Timestamp and user identity
- Evidence of independent clinician evaluation

### Implementation Considerations

**Before 4-Week Demo:**
- Anthropic BAA executed
- Basic audit logging in place
- CDS-compliant UX patterns established

**Before 6-Month Beta:**
- All BAAs executed (Anthropic, Pinecone, any others)
- Chart review validation complete
- Legal review complete
- HIPAA security assessment passed
- Parallel running data collected

**Before 12-Month Production:**
- Formal pilot completed with documented outcomes
- Ongoing monitoring systems operational
- Near-miss reporting workflow established
- Regular audit cadence defined

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Quadruple-A Completion**

Most clinical AI tools follow a truncated framework: Acquire → Aggregate → Analyze → (stop). They analyze data but dump suggestions on physicians, who must manually execute every action. Aura's innovation is completing the "Act" step through intelligent action distribution.

| Traditional AI | Aura Innovation |
|----------------|-----------------|
| Presents analysis to physician | Distributes actions to appropriate actors |
| Physician executes everything | Nurse, care manager, patient, caregiver each receive relevant actions |
| Creates cognitive load | Reduces cognitive load |
| Encounter-centric output | Patient-centric workflow |

**2. Individual as Primary Key**

Traditional EHRs organize around encounters - each visit is a discrete event. Aura challenges this fundamental assumption by treating the individual as the primary key, enabling:
- Longitudinal care view that spans encounters
- Quality gaps that persist until closed (not just flagged per visit)
- Caregiver relationships that transcend individual appointments
- Care plans that evolve continuously, not episodically

**3. Shared Transparency Model**

Existing clinical systems maintain separate views - clinicians see one thing, patients another. Aura's shared transparency means clinician and patient literally see the same screen, establishing:
- Trust through visibility (patient sees their priorities listed)
- Collaborative decision-making (shared decision aids)
- Reduced information asymmetry
- Patient as partner, not subject

**4. CDS-Compliant Patient-Facing AI**

Most AI health assistants either avoid patient interaction entirely or risk FDA classification as medical devices. Aura threads the needle with a novel approach:
- AI gathers information from patients (compliant)
- AI routes to licensed professionals (compliant)
- Licensed professional provides clinical guidance (compliant)
- Pre-approved templates for non-clinical follow-ups (compliant)
- Never: AI makes diagnostic statements to patients directly

This enables async patient engagement while remaining CDS-exempt.

### Market Context & Competitive Landscape

**Current Market Gap:**
- Ambient scribes focus on documentation (Acquire/Aggregate), not action
- Care management platforms lack AI-driven prioritization
- Patient portals are passive record viewers, not engagement tools
- No existing solution completes Quadruple-A with multi-actor distribution

**Adjacent Solutions:**
- Nuance DAX / Abridge / Nabla: Ambient documentation only
- HealthChampion / Wellframe: Care management without AI synthesis
- Epic MyChart: Patient portal without shared real-time view

**Competitive Moat:**
- Built on proven FHIR R4 backbone (Ottehr/Oystehr)
- Brownfield advantage - existing 119+ API endpoints
- Neuro-symbolic roadmap differentiates from pure LLM competitors

### Validation Approach

| Innovation | Validation Method |
|------------|-------------------|
| **Quadruple-A Completion** | Demo: Show action distribution to 4+ actor types from single encounter |
| **Individual as Primary Key** | Measure: Longitudinal gap closure rate vs. encounter-based systems |
| **Shared Transparency** | User testing: Patient comprehension scores, trust ratings |
| **CDS-Compliant Patient AI** | Legal review + FDA guidance alignment checklist |
| **Action Routing Accuracy** | Metric: % of actions reaching correct actor (target: 95% at 6mo, 99% at 12mo) |

### Risk Mitigation

| Innovation Risk | Mitigation Strategy |
|-----------------|---------------------|
| **Quadruple-A over-automation** | Clinician approval gate for orders/prescriptions; "silver platter" model preserves autonomy |
| **Primary key migration** | Brownfield on Ottehr - FHIR Patient resource already supports individual-centric design |
| **Shared view privacy concerns** | Patient controls what caregivers see; clear authorization workflows |
| **CDS boundary creep** | Explicit design constraints documented; regular legal review; CDS compliance checklist |
| **Neuro-symbolic complexity** | Start with LLM, add symbolic components incrementally; fallback to LLM-only if delays |

**Fallback Positions:**
- If full Quadruple-A is too complex: Ship documentation + single-actor actions first
- If shared view causes friction: Offer "professional view" toggle
- If neuro-symbolic is delayed: LLM-only approach still provides significant value

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

**Model:** Three-tier hierarchy (design for scale, ship for today)

| Tier | Entity | MVP Status |
|------|--------|------------|
| **Level 1** | Health System | Schema exists, dormant |
| **Level 2** | Practice | Active tenant boundary |
| **Level 3** | Provider | Active |

**Design Decisions:**
- Practice is the active tenant boundary for MVP
- Health System tier built into data model but UI/features dormant
- Avoids migration pain when first health system customer arrives
- Data isolation enforced at Practice level
- Cross-practice access supported via TPO permissions (HIPAA-compliant)

### Role-Based Access Control (RBAC)

**Role Matrix:**

| Category | Role | Core Permissions |
|----------|------|------------------|
| **Clinical** | Physician | Approve orders, full clinical access, supervision |
| | MA | Execute delegated tasks, document, rooming |
| | Care Manager (RN) | Panel management, outreach, care coordination |
| | Nurse (RN/LPN) | Clinical tasks, triage, patient communication |
| **Patient-Side** | Patient | Own data, messaging, care plan view |
| | Caregiver | Delegated patient view (patient-authorized) |
| **Administrative** | Practice Admin | Practice-level configuration, reporting |
| | Billing / RCM | Claims, coding, payment posting, denials |
| | Quality Reporting | HEDIS dashboards, gap reports, attestation |
| | Scheduling | Appointment management, provider calendars |
| **IT / Technical** | User Admin | User creation, role assignment, deactivation |
| | Integration Admin | API keys, external system connections |
| | Interface Admin | HL7/FHIR interface setup, mapping, monitoring |

**Role Design Principles:**
- Roles are composable (one person can hold multiple roles)
- Small practice: Office Manager = Practice Admin + Scheduling + User Admin
- Large practice: Dedicated personnel per role
- All roles inherit from base authenticated user

**Caregiver Authorization Model:**
- Patient-controlled (not practice-controlled)
- Patient explicitly grants access to specific caregivers
- Patient defines scope of access (full vs. limited)
- Patient can revoke at any time
- Complete audit trail of caregiver access

### Subscription & Pricing Model

**MVP Pricing:**
- Model: Per-provider/month
- Includes: All supporting roles under that provider (MA, care manager access bundled)
- Billing: Practice-level invoice

**Future Pricing Options:**
- Per-attributed-patient/month (VBC-aligned)
- Hybrid: Base platform fee + per-provider or per-patient
- Volume discounts for health systems (when Level 1 activates)

### Integration Architecture

**MVP Integration Scope:**

| System | Integration | Priority | Notes |
|--------|-------------|----------|-------|
| **Oystehr/Ottehr** | FHIR R4 native | Core | Foundation platform |
| **Anthropic** | REST API + BAA | Core | AI services |
| **Pinecone** | REST API + BAA | Core | Vector DB for semantic retrieval |
| **eRx** | Via Oystehr SDK | Core | Already built into Ottehr |

**Growth Integration Roadmap:**

| Category | Systems | Standard | Phase |
|----------|---------|----------|-------|
| **EHR Interop** | Epic, Cerner, athena | FHIR R4, HL7v2 | Growth |
| **HIE** | Carequality, CommonWell | IHE profiles | Growth |
| **Hospital** | ADT feeds, discharge summaries | HL7v2 ADT | Growth |
| **ACO/VBC** | Population health platforms | FHIR Bulk Data | Growth |
| **Labs** | Quest, Labcorp | HL7v2 ORU | Growth |

**Interoperability Principles:**
- FHIR-first architecture (Ottehr foundation)
- Support both push (send data out) and pull (query external sources)
- Patient record aggregation with provenance tracking
- TPO-compliant cross-practice access without explicit patient consent
- Bidirectional data flow with ACOs, HIEs, hospital systems

### eRx Integration (Inherited from Ottehr)

**Status:** Production-ready, inherited from Ottehr/Oystehr

| Capability | Available |
|------------|-----------|
| Medication search | ✅ Via Oystehr SDK |
| Drug interaction checking | ✅ Via Oystehr SDK |
| Practitioner enrollment | ✅ SSO-based workflow |
| Patient sync to eRx network | ✅ Automatic |
| Prescription transmission | ✅ NCPDP SCRIPT via Oystehr |
| Pharmacy selection | ✅ Built into UI |

**Vendor Note:** Oystehr abstracts eRx vendor selection. Confirm Photon availability with Oystehr team if preferred over default vendor.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP - Deliver the Quadruple-A experience through Dr. Chen's journey

The demo proves the core thesis: AI can silver-platter clinical actions for one-tap approval, routing work to the right actor and eliminating physician busywork. Everything else builds on this foundation.

**Core Differentiator to Prove:** Actions Panel with intelligent routing + one-tap "Approve All"

### Demo Scope (4 Weeks)

**Target Journey:** Dr. Chen (Physician) - end-to-end encounter flow

| Capability | Implementation | Priority |
|------------|----------------|----------|
| Pre-visit patient input | Real (text-based) | Must |
| AI synthesis & analysis | Real (Anthropic API) | Must |
| Gap identification (HEDIS) | Real | Must |
| Decision aids | Real (AI-generated) | Must |
| Actions Panel | Real (core UX) | Must |
| One-tap "Approve All" | Real (core UX) | Must |
| Auto-documentation | Real (AI-generated) | Must |
| Voice/ambient capture | Simulated (typed/pre-recorded) | Nice |
| Action routing visualization | Visual demo | Must |
| FHIR persistence | Mocked | Acceptable |
| eRx transmission | UI only (no live transmission) | Acceptable |
| Caregiver notification | Simulated (show mock) | Nice |

**Demo Constraints:**
- Single practice, single provider, single patient scenario
- Focus on flow and UX, not backend completeness
- "Wizard of Oz" acceptable for non-core features

**Demo Success Criteria:**
- Viewer says "I get it - this changes how clinical work happens"
- End-to-end flow completes in under 5 minutes
- Actions Panel clearly shows routing to multiple actors
- Documentation generates automatically and looks production-quality

### Phase 1: Production Foundation (0-6 Months)

**Goal:** Real clinical use with 5-10 physicians

**Journeys Supported:**
- Dr. Chen (Physician) - Full production implementation
- Marcus (MA) - Pre-visit prep, delegated tasks, documentation
- Eleanor (Patient - Encounter) - Pre-visit input, shared view, care plan

**Core Capabilities:**

| Category | Capabilities |
|----------|--------------|
| **Care Plan** | FHIR-persisted, patient-visible, longitudinal view |
| **Actions Panel** | Full routing to Physician, MA; notifications |
| **Documentation** | Production-quality AI notes, customizable templates |
| **Voice Capture** | Real ambient transcription (with typed fallback) |
| **eRx** | Live prescribing via Oystehr SDK |
| **Orders/Referrals** | Real transmission to labs, specialists |

**Technical Foundation:**

| Component | Status |
|-----------|--------|
| FHIR persistence | Full (Oystehr) |
| HIPAA compliance | Complete (BAAs executed) |
| Multi-tenancy | Practice-level active |
| RBAC | Physician, MA, Patient roles |
| Audit trails | Complete logging |
| AI integration | Anthropic with BAA |

**Phase 1 Success Criteria:**
- Physicians complete notes before leaving office
- Zero AI errors reaching patients
- MA workflow integrated (not parallel system)
- Patient sees care plan in real-time

### Phase 2: Full Care Team (6-12 Months)

**Goal:** Complete Quadruple-A action distribution ecosystem

**Additional Journeys:**
- Denise (Care Manager) - Panel dashboard, priority stratification, outreach
- Maria (Caregiver) - Patient-authorized access, summaries, reminders
- Eleanor (Async) - CDS-compliant messaging, AI triage routing

**New Capabilities:**

| Category | Capabilities |
|----------|--------------|
| **Transcript** | Real-time display, speaker identification |
| **Agenda** | Multi-source tracking (patient, provider, insurance items) |
| **Care Manager Panel** | Priority dashboard, ADT feeds, suggested outreach |
| **Caregiver Portal** | Authorized view, action items, messaging |
| **Async Engagement** | Patient messaging, AI information gathering, clinician routing |
| **Quality Dashboards** | HEDIS gap tracking, measure capture, attestation |

**Additional Roles Activated:**
- Care Manager (RN)
- Caregiver
- Quality Reporting
- Billing/RCM (basic)

**Phase 2 Success Criteria:**
- Actions reach correct actor 95%+ of the time
- Care managers manage panels, not spreadsheets
- Caregivers informed automatically
- Async patient engagement reduces phone tag

### Vision: Intelligence at Scale (12+ Months)

**Expansion Capabilities:**
- Neuro-symbolic AI with medical knowledge graphs
- Health System tier activation (Level 1 multi-tenancy)
- HIE connectivity (Carequality, CommonWell, TEFCA readiness)
- Predictive care gap identification
- Multi-payer VBC optimization engine
- Cross-population health insights

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| AI accuracy insufficient | Medium | High | Physician approval gate; extensive chart review validation; start narrow |
| Voice capture quality issues | Medium | Medium | Typed fallback always available; voice is enhancement not requirement |
| FHIR integration complexity | Low | Medium | Built on proven Ottehr foundation; leverage existing 119+ endpoints |
| Latency exceeds targets | Medium | Medium | Async patterns; visible "thinking" indicators; optimize critical path |

**Market Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Physician resistance to AI | Medium | High | Demo with friendlies; emphasize physician control; "silver platter" not "autopilot" |
| Workflow disruption concerns | Medium | Medium | Parallel running phase; gradual adoption; easy rollback |
| Competitive response | Low | Medium | Speed to market; focus on Quadruple-A differentiation |

**Regulatory Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| CDS boundary violation | Low | Critical | Legal review before beta; explicit constraints; regular audits |
| HIPAA breach | Low | Critical | BAAs in place; encryption; access controls; audit trails |
| Liability exposure | Medium | High | Legal review; clear ToS; documentation of clinician approval |

**Resource Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| 4-week demo timeline | Medium | Medium | Ruthless scope control; mocked backends acceptable |
| Team bandwidth | Medium | Medium | Phase 1 can ship with 3 journeys, not all 6 |
| Funding gap | Low | High | Demo designed to attract investment; revenue at 6 months |

## Functional Requirements

### Patient Engagement

- **FR1:** Patient can submit pre-visit concerns and questions via text before an appointment
- **FR2:** Patient can view their Care Plan with current conditions, medications, and active goals
- **FR3:** Patient can see the same encounter view as the clinician during a visit (shared transparency)
- **FR4:** Patient can authorize specific caregivers to access their health information
- **FR5:** Patient can revoke caregiver access at any time
- **FR6:** Patient can define the scope of information each caregiver can view
- **FR7:** Patient can send messages to their care team through the platform
- **FR8:** Patient can respond to AI-initiated information gathering questions
- **FR9:** Patient can view visit summaries after encounters
- **FR10:** Patient can see action items assigned to them with clear instructions

### Caregiver Access

- **FR11:** Caregiver can view patient information within their authorized scope
- **FR12:** Caregiver can receive automatic visit summaries when patient authorizes
- **FR13:** Caregiver can see action items relevant to their caregiving role
- **FR14:** Caregiver can send reminders to patient (via platform delegation)
- **FR15:** Caregiver can message the care team on behalf of the patient (when authorized)

### Clinical Encounter

- **FR16:** Clinician can view AI-synthesized pre-visit summary including patient concerns, relevant history, and identified gaps
- **FR17:** Clinician can see patient's stated priorities displayed prominently at encounter start
- **FR18:** Clinician can access AI-generated decision aids showing treatment options with pros/cons
- **FR19:** Clinician can capture encounter content via voice (ambient) or typed input
- **FR20:** Clinician can view real-time transcript of the encounter conversation
- **FR21:** Clinician can see quality gaps (HEDIS measures) surfaced during the encounter
- **FR22:** Clinician can view and share the encounter screen with the patient (shared view)
- **FR23:** Clinician can generate clinical documentation automatically from encounter content
- **FR24:** Clinician can review and edit AI-generated documentation before finalizing
- **FR25:** Clinician can see the basis, sources, and limitations for any AI suggestion

### Actions Panel & Workflow

- **FR26:** Clinician can view all suggested actions organized in an Actions Panel
- **FR27:** Clinician can approve individual actions with a single tap
- **FR28:** Clinician can approve all suggested actions with a single "Approve All" action
- **FR29:** Clinician can modify suggested actions before approval
- **FR30:** Clinician can reject suggested actions with optional reason
- **FR31:** Clinician can see which actor each action will route to (physician, MA, care manager, patient, caregiver)
- **FR32:** System routes approved actions to the appropriate actor automatically
- **FR33:** System notifies actors when new actions are assigned to them
- **FR34:** Actor can view their assigned actions in a role-specific queue
- **FR35:** Actor can mark actions as completed with documentation
- **FR36:** System maintains complete audit trail of all actions (suggested, approved, modified, rejected, completed)

### Medical Assistant (MA) Workflow

- **FR37:** MA can view pre-visit prep instructions for each patient
- **FR38:** MA can see standing orders eligible for execution (e.g., vaccines, screenings)
- **FR39:** MA can execute delegated clinical tasks and document completion
- **FR40:** MA can perform and document point-of-care tests
- **FR41:** MA can view post-visit action items assigned to MA role
- **FR42:** MA can provide patient education and document delivery

### Care Management

- **FR43:** Care Manager can view their assigned patient panel with priority stratification
- **FR44:** Care Manager can see patients flagged by clinical triggers (hospital discharge, lab results, missed appointments)
- **FR45:** Care Manager can view AI-suggested outreach scripts for each patient
- **FR46:** Care Manager can initiate outreach via preferred patient channel (call, text, message)
- **FR47:** Care Manager can document outreach outcomes with structured data capture
- **FR48:** Care Manager can escalate concerns to a provider with full context
- **FR49:** Care Manager can view and update patient care plans
- **FR50:** Care Manager can close care gaps with documentation

### Care Plan Management

- **FR51:** System maintains longitudinal Care Plan with individual as primary key (not encounter-based)
- **FR52:** Care Plan displays current conditions, active medications, and goals
- **FR53:** Care Plan shows quality gaps (HEDIS measures) with status
- **FR54:** Care Plan persists across encounters and updates in real-time
- **FR55:** Care Plan is visible to patient, clinician, and authorized caregivers (appropriate views)
- **FR56:** System tracks gap closure across the care continuum

### AI & Clinical Intelligence

- **FR57:** AI synthesizes patient data into pre-visit summaries
- **FR58:** AI identifies relevant clinical gaps based on patient conditions and guidelines
- **FR59:** AI generates treatment option comparisons as decision aids
- **FR60:** AI generates clinical documentation from encounter content
- **FR61:** AI suggests actions with routing recommendations
- **FR62:** AI gathers information from patients without making diagnostic statements (CDS-compliant)
- **FR63:** AI routes patient-reported symptoms to licensed professionals for clinical guidance
- **FR64:** AI surfaces relevant context for clinician review (not auto-action)
- **FR65:** All AI outputs include reasoning transparency (basis, sources, limitations)
- **FR66:** AI flags uncertainty rather than guessing

### Orders & Prescriptions

- **FR67:** Clinician can order medications through integrated eRx
- **FR68:** Clinician can order lab tests with electronic transmission
- **FR69:** Clinician can create referrals with relevant clinical context attached
- **FR70:** Clinician can review drug interactions before prescribing
- **FR71:** Orders require explicit clinician approval (no autonomous ordering)

### User & Access Management

- **FR72:** Practice Admin can create and manage user accounts
- **FR73:** Practice Admin can assign roles to users
- **FR74:** Practice Admin can configure practice-level settings
- **FR75:** System enforces role-based access controls per RBAC matrix
- **FR76:** System supports composable roles (user can have multiple roles)
- **FR77:** System logs all user access to PHI with audit trail

### Multi-Tenancy & Organization

- **FR78:** System isolates data at the practice level (tenant boundary)
- **FR79:** System supports multiple providers within a practice
- **FR80:** System supports cross-practice access for TPO purposes (with appropriate controls)
- **FR81:** System schema supports future Health System tier (dormant for MVP)

### Compliance & Audit

- **FR82:** System maintains complete audit trail of all AI suggestions and clinician responses
- **FR83:** System logs what was suggested, what was approved/modified/rejected, by whom, when
- **FR84:** System encrypts all PHI at rest and in transit
- **FR85:** System enforces minimum necessary access principle
- **FR86:** System supports HIPAA-required access controls and logging

### Notifications & Communication

- **FR87:** System sends notifications to actors when actions are assigned
- **FR88:** System sends visit summaries to authorized caregivers
- **FR89:** System sends appointment reminders to patients
- **FR90:** System supports configurable notification preferences per user

## Non-Functional Requirements

### Performance

| Requirement | Target | Context |
|-------------|--------|---------|
| **NFR-P1:** Standard user actions | < 1 second response | Page loads, form submissions, navigation |
| **NFR-P2:** AI synthesis operations | 2-5 seconds with visible indicator | Pre-visit summary, decision aids, documentation generation |
| **NFR-P3:** Real-time data sync | < 500ms propagation | Care plan updates, action status changes |
| **NFR-P4:** Voice transcription | < 2 second latency | Near real-time transcript display during encounter |
| **NFR-P5:** Actions Panel render | < 1 second | Silver-plattered actions available immediately at encounter end |
| **NFR-P6:** Search operations | < 2 seconds | Medication search, patient lookup |

**Rationale:** Clinical workflows require responsiveness. Slow AI operations are acceptable with clear feedback; slow UI operations disrupt care.

### Security & Compliance

| Requirement | Specification |
|-------------|---------------|
| **NFR-S1:** Encryption at rest | AES-256 for all PHI |
| **NFR-S2:** Encryption in transit | TLS 1.3 minimum for all connections |
| **NFR-S3:** Authentication | Multi-factor authentication for clinical users |
| **NFR-S4:** Session management | Automatic timeout after 15 minutes of inactivity |
| **NFR-S5:** Access logging | 100% of PHI access logged with user, timestamp, data accessed |
| **NFR-S6:** Audit trail integrity | Immutable audit logs, tamper-evident |
| **NFR-S7:** Role enforcement | RBAC enforced at API level, not just UI |
| **NFR-S8:** BAA coverage | All vendors processing PHI must have executed BAA |
| **NFR-S9:** Penetration testing | Annual third-party security assessment before production |
| **NFR-S10:** Incident response | Documented breach notification procedure (HIPAA 60-day rule) |

**Compliance Framework:** HIPAA Security Rule, HIPAA Privacy Rule

### Scalability

| Requirement | Specification |
|-------------|---------------|
| **NFR-SC1:** Initial capacity | Support 10 concurrent providers per practice |
| **NFR-SC2:** Practice growth | Support 50 practices without architecture changes |
| **NFR-SC3:** Patient volume | Support 5,000 active patients per practice |
| **NFR-SC4:** Encounter throughput | Support 200 concurrent encounters system-wide |
| **NFR-SC5:** Horizontal scaling | Stateless services enable horizontal scaling |
| **NFR-SC6:** Database scaling | Tenant isolation supports database sharding if needed |

**Growth Path:** Demo (1 practice) → Phase 1 (5-10 practices) → Phase 2 (50+ practices) → Vision (health systems)

### Reliability & Availability

| Requirement | Specification |
|-------------|---------------|
| **NFR-R1:** Uptime target | 99.5% availability (excludes planned maintenance) |
| **NFR-R2:** Planned maintenance | Maximum 4 hours/month, scheduled off-peak |
| **NFR-R3:** Data durability | 99.999% (no data loss) |
| **NFR-R4:** Backup frequency | Daily full backups, continuous transaction logs |
| **NFR-R5:** Recovery time objective (RTO) | < 4 hours for full system recovery |
| **NFR-R6:** Recovery point objective (RPO) | < 1 hour of data loss maximum |
| **NFR-R7:** Graceful degradation | AI features degrade gracefully; core EHR functions remain available |
| **NFR-R8:** Circuit breakers | External service failures don't cascade to core functionality |

**Rationale:** Clinical systems require high reliability but not 99.99% uptime (cost prohibitive for MVP). Graceful degradation ensures core care continues if AI services fail.

### Accessibility

| Requirement | Specification |
|-------------|---------------|
| **NFR-A1:** Standard compliance | WCAG 2.1 Level AA for patient-facing interfaces |
| **NFR-A2:** Screen reader support | Full compatibility with NVDA, JAWS, VoiceOver |
| **NFR-A3:** Keyboard navigation | All functions accessible via keyboard |
| **NFR-A4:** Color contrast | Minimum 4.5:1 ratio for normal text |
| **NFR-A5:** Text scaling | Support 200% zoom without horizontal scrolling |
| **NFR-A6:** Focus indicators | Visible focus state for all interactive elements |
| **NFR-A7:** Form labels | All form inputs have associated labels |
| **NFR-A8:** Error identification | Errors clearly identified with suggestions |

**Rationale:** Patients include elderly and those with disabilities. Healthcare accessibility is both ethical and increasingly regulated.

### Integration

| Requirement | Specification |
|-------------|---------------|
| **NFR-I1:** FHIR compliance | Full FHIR R4 compatibility via Oystehr |
| **NFR-I2:** API versioning | Semantic versioning with 6-month deprecation notice |
| **NFR-I3:** API rate limiting | Rate limits per tenant to prevent abuse |
| **NFR-I4:** Webhook reliability | At-least-once delivery with idempotency support |
| **NFR-I5:** External service timeout | 30-second maximum for external API calls |
| **NFR-I6:** Retry logic | Exponential backoff for transient failures |
| **NFR-I7:** Data format standards | JSON for APIs, HL7 FHIR for clinical data |

### Maintainability

| Requirement | Specification |
|-------------|---------------|
| **NFR-M1:** Code coverage | Minimum 70% unit test coverage for new code |
| **NFR-M2:** Documentation | API documentation auto-generated and current |
| **NFR-M3:** Logging standards | Structured logging with correlation IDs |
| **NFR-M4:** Error reporting | Centralized error tracking with alerting |
| **NFR-M5:** Deployment | Zero-downtime deployments |
| **NFR-M6:** Configuration | Environment-based configuration, no hardcoded secrets |
| **NFR-M7:** Dependency management | Automated security scanning for dependencies |

### AI-Specific Quality

| Requirement | Specification |
|-------------|---------------|
| **NFR-AI1:** Response consistency | Same input produces semantically consistent output |
| **NFR-AI2:** Transparency | All AI outputs include basis and limitations |
| **NFR-AI3:** Uncertainty flagging | AI confidence below threshold triggers explicit flag |
| **NFR-AI4:** Fallback behavior | AI service failure falls back to manual workflow |
| **NFR-AI5:** Model versioning | AI model versions tracked in audit trail |
| **NFR-AI6:** Prompt versioning | Prompt templates versioned and auditable |
| **NFR-AI7:** Output validation | AI outputs validated against clinical safety rules |

