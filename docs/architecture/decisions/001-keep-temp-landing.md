# ADR 001: Document the temp landing page without calling it the product
- Date: 2026-09-25
- Status: Accepted
## Context
The GitHub description is temp landing page. The tree is a large marketing site. The bet program lives in tobidontplay/SOLArena.
## Decision
Give it a project.yaml and specs for the pages that exist. Status in the brief stays temporary until you say otherwise.
## Consequences
- Positive: Ariadne can see it. The product repo is not confused with the brochure.
- Negative: A temp repo now has a full doc set you may not want to maintain.
- Neutral: Excluding it later is a one-line decision.
## Alternatives Considered
- Alternative A: Skip the repo. Rejected because the follow-up said to make all the repos in the table ready.
- Alternative B: Merge these docs into SOLArena. Rejected because this pass does not reorganize folders or move files across repos.
