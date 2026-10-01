# PROJECT-GOALS — solarenacomingsoon

Audit date: 2026-10-01. "Stated" means a sentence already in the repo or on the GitHub description. "Inferred" means a goal that follows from the tree but that no file sets as the target. Do not upgrade an inferred goal into a requirement.

## Stage

| Label | Value | Why |
|---|---|---|
| GitHub description | Temporary landing page | Live description, read 2026-10-01 |
| ADR 001 | Keep documenting it. Do not call it the product. Status stays temporary until the owner says otherwise | `docs/architecture/decisions/001-keep-temp-landing.md` |
| Feature stages | feat-001 `implemented` and status `Done`. feat-002 `in_progress` | Spec frontmatter. Neither is `verified` or accepted. `verified_by` is null on both |
| This audit's stage word | `temporary-brochure` | The pages exist. The protocol they describe does not live here. The owner has not closed the "keep or archive" question in `TODO.md` |
| This audit's maturity word | `content-complete-unverified` | Routes and articles are written. Build, host, and form delivery have no row in `docs/verification.md` |

## Target user

| User | Stated or inferred | Evidence | Weight |
|---|---|---|---|
| A visitor deciding whether to follow SolArena | Stated | `specs/project-brief.md` | [HIGH] |
| A partner submitting the partner form | Stated | `specs/project-brief.md`, `src/pages/Community.tsx` | [HIGH] |
| A future reader of the protocol (press, Titan, someone checking fees and risk) | Inferred | Library sections for press, legal, Titans, and technical docs | [MED] |
| The owner, learning to talk about this repo precisely | Inferred | `AGENTS.md` persona and the learning docs. Not a product requirement | [LOW] |
| A trader who can connect a wallet on this origin and stake SOL | Not a user this repo can serve | FAQ and Quick Start describe that person. The code does not | [HIGH] |

## Stated goals

| ID | Goal | Source | Success looks like | Weight |
|---|---|---|---|---|
| G1 | Explain the arena, the token, and the rules before the app is the main surface | `specs/project-brief.md` | A visitor can read the landing page and a library article | [HIGH] |
| G2 | Keep this repo as the brochure and leave the program in SOLArena | ADR 001 | Docs do not move these pages into the product repo | [HIGH] |
| G3 | A partner can submit the form | `specs/features/002-partner-form.md` | A submission arrives somewhere the owner can read. The spec says that place is not confirmed | [HIGH] |
| G4 | Speak as a prediction protocol, not a gambling site | Commit `d0b2d6f` (2025-11-12) and the footer disclaimer | Live pages avoid bookmaker wording. The HTML description still does not | [HIGH] |
| G5 | Offer a library of pre-launch articles | Commit `00ceb0b` | Twenty articles routed under `/library/...` | [MED] |
| G6 | Survive a refresh on a static host | Commits `c1cbe5f` and `5333439` | Deep links return the SPA shell. Implemented for Netlify only | [HIGH] |
| G7 | Either keep the site or archive it. The docs do not decide | `specs/project-brief.md`, `TODO.md` | The owner answers. Still open | [HIGH] |
| G8 | A test suite is out of scope for the brief | `specs/project-brief.md` Out of Scope | No tests is consistent with the brief. It conflicts with `specs/agent-rules.md`, which asks for tests on new logic | [MED] |

## Inferred goals

| ID | Goal | Why it is only inferred | Weight |
|---|---|---|---|
| I1 | Send "Join the Arena" to a social cluster, not to a product URL | The modal links are social. The removed "Enter The Arena" button and the README `/dashboard` line are older. No file says "socials are the product CTA" as a decision | [HIGH] |
| I2 | Collect ten Founding Titan applications in confidence | Community page and `FoundingTitans.tsx` say ten slots and confidential applications. No slot counter exists in code | [MED] |
| I3 | Look finished on a phone | Commit `b8ec938` and the 44px touch rule in `src/index.css`. No device lab note | [MED] |
| I4 | Let the reader pick light or dark and keep it | `ThemeToggle.tsx`. No written product goal | [LOW] |
| I5 | Stay deployable on whichever host was used in November 2025 | Both Vercel (README and commit `823680b`) and Netlify (the last app commits) are present. Neither is marked current | [HIGH] |

## Success criteria

| Criterion | Source | Met in the tree | Proven | Weight |
|---|---|---|---|---|
| `npm run dev` renders the landing and a library article | `specs/project-brief.md` | Routes exist | No. Not run. Verification log empty | [HIGH] |
| Owner keeps the site or archives the repo | `specs/project-brief.md` | Unanswered | No | [HIGH] |
| Pages for Home, How It Works, Token, FAQ, Community, Library exist | feat-001 acceptance | Yes | File presence only | [MED] |
| README lists logo, socials, a demo video, and a progress tracker | feat-001 acceptance | The README still says that | The routed home does not show the video or the tracker | [HIGH] |
| Partner form component and `FORM_SETUP.md` exist | feat-002 acceptance | Yes | Delivery unconfirmed, and the setup doc is stale | [HIGH] |
| Footer states the legal position | Commit `d0b2d6f` | Yes, in `Layout.tsx` | Copy review only. Not legal advice | [MED] |
| Build `tsc && vite build` succeeds | `project.yaml`, `package.json` | Script exists | Not run in this audit | [HIGH] |

## Non-goals

| Non-goal | Where it is stated | Weight |
|---|---|---|
| Building or deploying the Solana program | `specs/project-brief.md`, ADR 001 | [HIGH] |
| A test suite, according to the brief | `specs/project-brief.md` | [MED] |
| Moving these files into SOLArena | ADR 001 alternatives | [MED] |
| Deciding the host inside the docs | `docs/architecture/deployment.md` names both and picks neither | [HIGH] |
| Marking a feature accepted without the owner | `AGENTS.md` section 10 | [MED] |
| A wallet, a market board, points math, or a token mint in this repo | Not stated as a non-goal in one line. The absence is total. Treat implementation of those as a new product, not a bugfix | [HIGH] |

## Questions for the user

Answer these before an agent edits application code. The audit did not guess.

| # | Question | Why it blocks | Weight |
|---|---|---|---|
| 1 | Is this still a temporary page, or the public site you will maintain? | ADR 001 and `TODO.md` leave the repo in limbo. Archive versus invest is the first fork | [HIGH] |
| 2 | What is the production URL, and is the live host Netlify or Vercel? | Refresh behavior and the README disagree until you name the host | [HIGH] |
| 3 | Should "Join the Arena" stay a social modal, or open a product URL you still control? | The README still mentions `/dashboard`. The modal does not | [HIGH] |
| 4 | Did a Web3Forms submission reach an inbox you read? Should that access key be rotated? | The key is in client source. `FORM_SETUP.md` describes a placeholder that is gone. This audit did not submit the form | [HIGH] |
| 5 | Which launch claims are still true in October 2026: testnet audited, Phase 1 live, Q1 2025 mainnet? | Live pages disagree with each other, and the quarters are in the past | [HIGH] |
| 6 | Do you want the unmounted `Landing.tsx`, the `.backup` file, and the 7.2 MB video deleted? | They contradict the legal rewrite and the router. Deleting them is a product choice | [MED] |
| 7 | Do you want the brief's "no test suite" line to stay, or should feat-001 stay `implemented` until a build row exists? | Agent rules and the brief disagree. Verification is empty either way | [MED] |
| 8 | Should `index.html` drop the words "betting" and "wager"? | The body was rewritten. The head was not | [MED] |
