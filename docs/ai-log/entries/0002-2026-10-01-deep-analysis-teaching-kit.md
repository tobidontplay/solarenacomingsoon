# Entry 0002 — Deep analysis and teaching kit
- Date: 2026-10-01
- Agent: Cursor
- Model: Grok 4.7
- Session Goal: Write a layered audit of solarenacomingsoon for the owner, a future agent, and a tutor, without changing application code.
- Duration: one cloud-agent session
## Prompt(s) Sent
> 1. TASK: Deep analysis and teaching kit for one project. Senior audit of solarenacomingsoon. Output is documentation only. Produce PROJECT-STATE.md, PROJECT-GOALS.md, PROJECT-GAP.md, PROJECT-TEACH.md, and PROJECT-CONTEXT.yaml at the repo root. Append a Project Analysis Artifacts section to AGENTS.md. Create an ai-log entry and update the index. Read every file and git log --oneline -100. Do not modify application code, delete, reorganize, add dependencies, start servers, or touch Ariadne. Commit message: docs: deep analysis and teaching kit for solarenacomingsoon.
## Reply Summary
> The routed site is a static React brochure with 26 wouter routes. The Solana program is not in this repo. Landing.tsx is unmounted. The partner form POSTs to Web3Forms. Fonts are named and not loaded. Tests, CI, lockfile, and verification rows are absent. The blocking gap is that getting-started copy tells visitors to connect a wallet on an origin that cannot do that.
## Full Reply / Key Excerpts
> Five root files plus an AGENTS.md section. PROJECT-STATE.md is tables. PROJECT-CONTEXT.yaml is analysis_version 1 with nulls where the host, homepage, build result, and form receipt are unknown. No application file was edited. npm install and the dev server were not started, because the task forbade servers and new dependencies.
## Considerations
- The project brief lists a test suite as out of scope, while agent rules ask for tests. The gap file records that tension instead of calling "no tests" the blocker.
- The Web3Forms access key is already in PartnerForm.tsx. It is not copied into the new docs.
- feat-001 says Done with verified_by null. The audit does not change that frontmatter. Ariadne files, including project.yaml, were not edited.
- Library dynamic Tailwind classes and nested-link click behavior are marked low or unexecuted. They were not "fixed" in prose as proven bugs in the browser.
## Alternatives Considered
- Alternative A: Run `npm install` and `npm run build`, then click the routes. Rejected because the task said not to add dependencies or start servers. Build success stays null.
- Alternative B: Correct README, the architecture overview, and FORM_SETUP.md in this pass. Rejected because the allowed change set is the analysis kit plus the log. Those files are evidence of drift, not files to silently rewrite.
- Alternative C: Treat Landing.tsx as the live home because the README says so. Rejected because App.tsx never imports it.
## Learning Notes (For the Human)
- Concept introduced: an unmounted module. A file can sit in `src`, typecheck, and still be invisible to users because nothing imports it.
- Why it matters: a senior describes the route table, not the most famous filename. Here the famous filename is the one the router does not use.
- Where to read more: PROJECT-TEACH.md, src/App.tsx, src/pages/Landing.tsx.
## Content Angles
> At least one. This feeds /docs/content/ideas.md.
- Type: mistake
- Idea: The README still documents a landing file the router never mounts.
- Hook: Your docs can describe a page the user cannot open, and the site will still look finished.
## Files Changed
- PROJECT-STATE.md — identity, stack, capabilities, endpoints, dead code, broken items
- PROJECT-GOALS.md — stated and inferred goals, non-goals, questions
- PROJECT-GAP.md — gap per capability, three biggest gaps, blocking gap
- PROJECT-TEACH.md — mental model and defendable claims
- PROJECT-CONTEXT.yaml — analysis_version 1
- AGENTS.md — section 11, Project Analysis Artifacts
- docs/ai-log/entries/0002-2026-10-01-deep-analysis-teaching-kit.md — this entry
- docs/ai-log/index.md — row 0002
- docs/content/ideas.md — one teaching row
- docs/learning/concepts.md — unmounted module, SPA fallback, nested anchor
- docs/workflow/cost-log.md — subscription cost unknown, not flagged over $1
## Verification
> No app server. No test suite exists to run. Checked: GitHub description is `temp landing page`; wouter 3.3.5 Link renders an anchor unless `asChild`; favicon.png and logo.png share one SHA-256; library route count matches the index (20); YAML parsed with Python. Application paths were not modified (`git diff` limited to docs).
## Follow-ups / Open Questions
- [ ] Owner: keep or archive?
- [ ] Owner: Netlify or Vercel, and what is the production URL?
- [ ] Owner: did the partner form reach an inbox, and should the key rotate?
- [ ] Owner: which October 2026 launch claims are still true?
- [ ] A later pass may record `npm run build` in docs/verification.md after the owner asks for it.
