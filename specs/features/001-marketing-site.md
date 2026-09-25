---
id: feat-001
title: "SolArena marketing site"
status: Done
stage: implemented
target_stage: verified
final_result: "Visitors can read the landing page, the explainers, and the library articles."
acceptance:
  - "src/pages includes Landing, Home, HowItWorks, Token, FAQ, Community, and Library."
  - "src/pages/library holds the individual articles."
  - "The README lists logo, socials, a demo video, and a progress tracker."
validation:
  tests: unknown
  manual: unknown
  user_opinion: unknown
  verified_by: null
---

# Feature Spec: SolArena marketing site
- Status: Done
- Owner: SolArena Coming Soon
- Linked ADRs: docs/architecture/decisions/001-keep-temp-landing.md
- Linked AI Log Entries: [docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md](../../docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md)
## 1. Objective
Visitors can read the landing page, the explainers, and the library articles.
## 2. Requirements
### Functional
- src/pages includes Landing, Home, HowItWorks, Token, FAQ, Community, and Library.
- src/pages/library holds the individual articles.
- The README lists logo, socials, a demo video, and a progress tracker.
### Non-Functional
- The GitHub description still says temp landing page.
## 3. Technical Plan
- Affected Files: src/pages, src/components, README.md
- Data Model Changes: Static page components.
- API Changes: None confirmed.
- Steps:
  1. Route the pages.
  2. Render the library.
  3. Leave the chain program in the other repo.
## 4. Verification Plan
No tests. Build script is tsc && vite build. Not run in this pass.
## 5. Content Angle
Hook: the brochure and the program are different repositories on purpose.
## 6. Open Questions
- Which host is live, Vercel or Netlify?
- Is the page still temporary?
