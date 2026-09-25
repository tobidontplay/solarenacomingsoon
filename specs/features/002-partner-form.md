---
id: feat-002
title: "Partner form"
status: In Progress
stage: in_progress
target_stage: verified
final_result: "A partner can submit the form. Where it is delivered is not confirmed."
acceptance:
  - "src/components/PartnerForm.tsx exists."
  - "FORM_SETUP.md exists."
  - "The destination was not traced in this pass."
validation:
  tests: unknown
  manual: unknown
  user_opinion: unknown
  verified_by: null
---

# Feature Spec: Partner form
- Status: In Progress
- Owner: SolArena Coming Soon
- Linked ADRs: none yet
- Linked AI Log Entries: [docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md](../../docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md)
## 1. Objective
A partner can submit the form. Where it is delivered is not confirmed.
## 2. Requirements
### Functional
- src/components/PartnerForm.tsx exists.
- FORM_SETUP.md exists.
- The destination was not traced in this pass.
### Non-Functional
- No secrets copied into these docs.
## 3. Technical Plan
- Affected Files: src/components/PartnerForm.tsx, FORM_SETUP.md
- Data Model Changes: Unknown until the form handler is confirmed.
- API Changes: Unknown.
- Steps:
  1. Render the form.
  2. Submit to the handler named in FORM_SETUP.md.
  3. Confirm a row or an email.
## 4. Verification Plan
Manual once the destination is known. Not run.
## 5. Content Angle
Hook: a form component is not a submission until you name the inbox.
## 6. Open Questions
- Where does PartnerForm submit?
