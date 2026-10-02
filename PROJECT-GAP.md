# PROJECT-GAP — solarenacomingsoon

Audit date: 2026-10-01. Every capability from `PROJECT-STATE.md` has one row. Gap means the distance between what a careful reader of the live pages would think exists and what this repository contains. Desired state is the smallest honest version, not a new product.

## Gap table

| Capability | Now | Desired if the brochure stays | Gap | Weight |
|---|---|---|---|---|
| Multi-page shell | done | Keep the 26 routes | None in source. Unproven in a browser | [MED] |
| Shared layout and legal footer | done | Footer matches the `<head>` description | Head still says betting. Footer does not | [HIGH] |
| Mobile bottom nav | done | Same six links usable at 320px width | Not observed on a device | [LOW] |
| Join modal | done as social links | Either label it "Join the community" or point it at a real app | Copy says "enter the Colosseum". Code opens chats | [HIGH] |
| Theme persistence | partial | No light flash before the saved theme applies | Effect runs after first paint. No inline script in `index.html` | [MED] |
| Brand fonts | broken | Load Rajdhani, Orbitron, and Space Mono, or stop naming them | Named only | [MED] |
| Library | done | Keep slug list and routes in one structure so they cannot drift | Two hand-maintained lists. They match today | [LOW] |
| YES/NO explainer | done | Keep it labeled as an explanation | None | [LOW] |
| Partner form UI | done | Keep fields | None | [LOW] |
| Partner form delivery | partial | One named inbox, one current setup doc, one successful test row | Key is hardcoded. Setup doc is stale. Receipt unknown | [HIGH] |
| Demo video | absent on live routes | Show it on Home, or delete the 7.2 MB file | Asset is orphaned | [MED] |
| Progress checklist | absent on live routes | Publish a checklist you still believe, or delete it from the dead page and the README | README and `Landing.tsx` still advertise it | [MED] |
| Wallet connect | absent | Remove the instructions, or add a link to the app that has the button | FAQ and Quick Start teach a control that is not here | [HIGH] |
| Prediction markets | absent | Stay absent in this repo. Say so in the quick start | Articles describe creating a market as a current step | [HIGH] |
| Arena Points ledger | absent | Stay absent. Mark point rules as design, not a live score | Earn page says "Live on Phase 1" | [HIGH] |
| $ARENA token | absent, and the token article says not live | Keep that banner. Align Home and Token page with it | Token page still sells an upcoming airdrop as the reason to join | [MED] |
| Unknown-route page | absent | A small not-found view inside `Switch` | Bad URLs look like an empty page | [MED] |
| SPA refresh fallback | partial, Netlify only | One host, one config, one recorded check | Vercel is documented and has no SPA file | [HIGH] |
| Search | absent | Stay absent unless the library grows past what the index can scan | None required | [LOW] |
| Auth | absent | Stay absent. Delete Clerk from the dead checklist so agents do not "finish" it here | Dead file mentions Clerk and Supabase | [MED] |
| Tests | absent, and the brief says a suite is out of scope | Either keep that non-goal or add one smoke test and a verification row | Process docs disagree. There is still zero proof | [HIGH] |
| Recorded verification | absent | One row: build command, result, date | `docs/verification.md` is an empty table. feat-001 says Done | [HIGH] |
| Toasts | absent in behavior | Remove the unused toaster, or use it for form errors | Form uses its own status text. Toaster never fires | [LOW] |

## Three biggest gaps

### 1. The next step the site teaches is not in the site

[HIGH] FAQ answer "How do I get started?" says: connect a Solana wallet, browse or create a market, stake SOL. Quick Start repeats that, including a "Connect Wallet" button in the top right. `src/App.tsx` has no wallet, no market list, and no outbound product URL. "Join the Arena" opens Telegram, Discord, X, and an X community. README still says the call to action goes to `/dashboard`. There is no `/dashboard` route.

This is the gap between a brochure and a product. Closing it is either a sentence change ("join the socials; the app is not on this origin") or a link you name. It is not a widget to invent inside this repo. ADR 001 already put the program in another repository.

### 2. The trust copy disagrees with itself

[HIGH] A visitor can read all of these without leaving the routed pages:

- Home: "Testnet audited; mainnet audit planned."
- FAQ: funds "are held in audited smart contracts" and, later, contracts "will be" open-sourced and audited before mainnet.
- `SecurityAudits.tsx`: "Pre-mainnet audits in progress."
- `EarnArenaPoints.tsx`: "Live on Phase 1."
- `QuickStart.tsx`: the guide will be updated on mainnet launch.
- `Roadmap.tsx` and `PressOverview.tsx`: Phase 1 is Q1 2025. Today in this audit is 2026-10-01.
- `index.html`: "trustless betting protocol" and "verifiable wager", which the 2025-11-12 rewrite removed from the body.

No audit PDF, program id, or deployment URL is in the tree. The gap is not "write a better audit." The gap is that the brochure asserts facts the brochure cannot show, and some of those facts contradict each other.

### 3. The map an agent would follow describes a different app

[HIGH] `README.md` structure is a single `Landing.tsx` with a video and a checklist. `docs/architecture/overview.md` draws the visitor into `src/pages/Landing.tsx`. feat-001 acceptance treats that README as a requirement. `FORM_SETUP.md` says the access key is still the placeholder `YOUR_WEB3FORMS_ACCESS_KEY`. The router mounts `Home.tsx`. The form posts to Web3Forms with a key already in source. `docs/verification.md` has no data rows, and this audit did not run the build.

An agent that "finishes the README" will edit the wrong page, or will mark the form done because the component exists.

## Blocking gap

The blocking gap is gap 1: there is no true next action from this origin into the protocol the pages describe.

Until "Join" and the getting-started articles either open a product you still run, or stop telling people to connect a wallet on this site, the brochure fails its own stated job. `specs/project-brief.md` says the site should explain the arena before the app is the main surface. Explanation can be true. Instructions that point at controls which are not here cannot.

Gap 2 makes that failure worse, because a careful reader cannot tell which launch sentence to believe. Gap 3 will send the next agent at the wrong file. Neither of those is the blocker. You can fix the docs and the contradictions and still leave visitors at a social modal. You cannot call the primary call to action honest until gap 1 is closed one way or the other.

Host choice (Netlify versus Vercel) blocks a production refresh check. It does not block local reading of the pages. Form delivery blocks feat-002, not the reading goal in the brief.
