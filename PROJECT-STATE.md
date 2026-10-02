# PROJECT-STATE — solarenacomingsoon

Audit date: 2026-10-01. Source of truth: the tree on `main` at `2caf922`, plus the GitHub repo description read the same day. Nothing in this file was executed in a browser. `npm install`, `npm run dev`, and `npm run build` were not run. Weight is how much the next change should care. Confidence is how sure the fact is from the files.

## Identity

| Item | Fact | Evidence | Weight | Confidence |
|---|---|---|---|---|
| Repo | `tobidontplay/solarenacomingsoon` | `gh repo view`; `project.yaml` | [HIGH] | high |
| GitHub description | `temp landing page` | GitHub API, 2026-10-01 | [HIGH] | high |
| Visibility | Public. Default branch `main`. Homepage URL empty | GitHub API | [HIGH] | high |
| Package name | `solarena-landing` `1.0.0` | `package.json` | [MED] | high |
| Product name in the UI | SOLARENA | `index.html`, `src/pages/Home.tsx` | [MED] | high |
| What this repo is | A Vite React marketing site: explainers, a token section, a library, a partner form | `src/App.tsx`, `specs/project-brief.md` | [HIGH] | high |
| What this repo is not | The on-chain program. ADR 001 names that as `tobidontplay/SOLArena` | `docs/architecture/decisions/001-keep-temp-landing.md` | [HIGH] | high |
| Commits | 21. App work ends 2025-11-12. Docs-only onboard 2026-09-25 and merge 2026-09-26 | `git log` | [MED] | high |
| App author recorded in git | `Tobi Aribo` on the 2025-11 commits. GitHub account `tobidontplay` | `git log` | [LOW] | high |
| License file | Absent. README says MIT and points at a different repository | `README.md`; no `LICENSE` | [LOW] | high |
| CI | Absent. No `.github/`. `project.yaml` `github.ci` is `null` | tree; `project.yaml` | [MED] | high |
| Lockfile | Absent. No `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` | tree | [MED] | high |

## Stack

| Layer | Choice | Evidence | Weight | Confidence |
|---|---|---|---|---|
| Language | TypeScript, `strict`, `noUnusedLocals`, `noUnusedParameters`, `noEmit` | `tsconfig.json` | [MED] | high |
| UI | React 18.3, `react-dom` 18.3 | `package.json`, `src/main.tsx` | [HIGH] | high |
| Bundler | Vite 5.4. `build.outDir` is `dist`. Alias `@` → `src` | `vite.config.ts`, `package.json` | [HIGH] | high |
| Router | wouter 3.3.5. No `<Router>` wrapper. Default browser location | `src/App.tsx`, `package.json` | [HIGH] | high |
| Style | Tailwind CSS 3.4, Typography plugin, `tailwindcss-animate`, PostCSS, Autoprefixer | `tailwind.config.ts`, `postcss.config.js` | [MED] | high |
| Primitives | Radix slot, toast, tooltip. `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` | `package.json`, `src/components/ui/` | [LOW] | high |
| Theme | Class strategy `dark` on `document.documentElement`. Preference key `theme` in `localStorage` | `tailwind.config.ts`, `src/components/ThemeToggle.tsx` | [MED] | high |
| Fonts named | Rajdhani, Orbitron, Space Mono | `tailwind.config.ts`, `src/index.css` | [MED] | high |
| Fonts loaded | None. No `<link>`, no `@import`, no `@font-face` | `index.html`, `src/index.css` | [MED] | high |
| Host files | `netlify.toml` build `npm run build`, publish `dist`, SPA redirect. `public/_redirects` is the same redirect. README also documents Vercel. No `vercel.json` | `netlify.toml`, `public/_redirects`, `README.md` | [HIGH] | high |
| Dev port | Not set. Vite's own default is outside this repo. `project.yaml` `port` is `null` | `vite.config.ts`, `project.yaml` | [LOW] | high |
| Scripts | `dev` = `vite`. `build` = `tsc && vite build`. `preview` = `vite preview`. No `test`. No `lint` | `package.json` | [HIGH] | high |

## Components

| Component | Role | Mounted by the router | Weight | Confidence |
|---|---|---|---|---|
| `src/main.tsx` | `createRoot` on `#root`, React `StrictMode` | Yes, from `index.html` | [HIGH] | high |
| `src/App.tsx` | wouter `Switch`, join modal, partner modal, toaster | Yes | [HIGH] | high |
| `src/components/Layout.tsx` | Header, six nav links, footer, legal line, mobile bottom nav, scroll-to-top | Yes, wraps every route | [HIGH] | high |
| `src/components/ThemeToggle.tsx` | Light/dark toggle | Yes, in the header | [MED] | high |
| `src/components/PartnerForm.tsx` | Modal form. POST to Web3Forms | Yes, only after Community sets state | [HIGH] | high |
| `src/components/ArticleLayout.tsx` | Article chrome and "Back to Library" | Yes, every library article | [MED] | high |
| `src/pages/Home.tsx` | Hero, three-step explainer, trust row, CTA | Route `/` | [HIGH] | high |
| `src/pages/HowItWorks.tsx` | YES/NO explainer, fee copy, oracle vs arbiter | Route `/how-it-works` | [HIGH] | high |
| `src/pages/Token.tsx` | Arena Points and $ARENA copy | Route `/token` | [HIGH] | high |
| `src/pages/Community.tsx` | Titans pitch, opens the partner form | Route `/community` | [HIGH] | high |
| `src/pages/FAQ.tsx` | Thirteen static Q&A blocks. Not an accordion | Route `/faq` | [MED] | high |
| `src/pages/Library.tsx` | Index of 20 articles in 7 groups | Route `/library` | [HIGH] | high |
| `src/pages/library/*.tsx` | Twenty article components. One route each in `App.tsx` | Yes. Count matches the index | [HIGH] | high |
| `src/pages/Landing.tsx` | Old single-page site: video, checklist, join modal | No import anywhere | [HIGH] | high |
| `src/pages/Landing.tsx.backup` | Older single-page snapshot | Not a `.tsx` module. Not imported | [MED] | high |
| `src/components/ui/button.tsx` | Button. `asChild` exists. No caller passes it | Yes | [LOW] | high |
| `src/components/ui/toaster.tsx` + `toast.tsx` + `use-toast.ts` | shadcn toast store. `toast()` has no caller | Mounted, unused | [LOW] | high |
| `src/components/ui/tooltip.tsx` | Provider wraps the app. Trigger and content have no caller. File starts with `"use client"` | Provider only | [LOW] | high |
| `src/lib/utils.ts` | `cn()` | Used by button, toast, tooltip | [LOW] | high |

## Capabilities

Status is about this repository only. Marketing sentences about Solana programs are not capabilities of this tree.

| Capability | Status | What the tree actually does | Weight | Confidence |
|---|---|---|---|---|
| Multi-page shell | done | Six top-level routes plus twenty library routes in `src/App.tsx` | [HIGH] | high |
| Shared layout and legal footer | done | `Layout.tsx` disclaimer: peer-to-peer prediction protocol, not a bookmaker | [HIGH] | high |
| Mobile bottom nav | done | Six columns under `md`. Main has `pb-20` so the bar does not cover the footer content on small screens | [MED] | high |
| Join-the-arena modal | done | Telegram, Discord, X, X Community. No app URL | [HIGH] | high |
| Theme persistence | partial | `localStorage` after mount. First paint uses light `:root` until the effect adds `.dark` | [MED] | high |
| Brand fonts | broken | Names exist in Tailwind. No font file or stylesheet request | [MED] | high |
| Library index and articles | done | 20 slugs in `Library.tsx` match 20 `<Route>`s | [HIGH] | high |
| Interactive YES/NO explainer | done | Local React state on How It Works. No chain call | [MED] | high |
| Partner form UI | done | Required: name, email, community, message. Optional: twitter, discord, members | [HIGH] | high |
| Partner form delivery | partial | POST `https://api.web3forms.com/submit` with a hardcoded access key. Inbox receipt not checked. `FORM_SETUP.md` still says the key is the placeholder | [HIGH] | high |
| Demo video on the live home | absent | `public/demo-video.mp4` (7.2 MB) is referenced only by unmounted `Landing.tsx` and the backup | [MED] | high |
| Public progress checklist | absent | Checklist lives only in unmounted `Landing.tsx` (8/13 complete in that file, 61%) and the backup | [MED] | high |
| Wallet connect | absent | No wallet package. FAQ and Quick Start tell the visitor to connect Phantom, Backpack, or Solflare | [HIGH] | high |
| Prediction markets | absent | No program, no RPC, no market state | [HIGH] | high |
| Arena Points ledger | absent | Copy only | [HIGH] | high |
| $ARENA token | absent | `ArenaToken.tsx` says the token is not live | [HIGH] | high |
| Unknown-route page | absent | `Switch` returns null. Header and footer remain. Empty main | [MED] | high |
| SPA refresh fallback | partial | Netlify files only. No `vercel.json`. Which host is live is not in the repo | [HIGH] | high |
| Search | absent | No search UI | [LOW] | high |
| Auth | absent | No auth library. Dead `Landing.tsx` checklist mentions Clerk. This repo does not use it | [MED] | high |
| Tests | absent | No test files, no test script. Brief lists a test suite as out of scope | [HIGH] | high |
| Recorded verification | absent | `docs/verification.md` table has no data rows. Both feature specs have `verified_by: null` | [HIGH] | high |
| Toasts as a product signal | absent | `<Toaster />` is mounted. Nothing calls `toast()` | [LOW] | high |

## Endpoints

| Kind | Target | In this repo | Status | Weight | Confidence |
|---|---|---|---|---|---|
| First-party HTTP API | none | No server, no functions directory | absent | [HIGH] | high |
| Partner submit | `POST https://api.web3forms.com/submit` | `src/components/PartnerForm.tsx` | partial | [HIGH] | high |
| Static logo | `GET /fulllogo.png`, `GET /logo.png`, `GET /favicon.png` | `public/` | done | [LOW] | high |
| Demo video | `GET /demo-video.mp4` | File present. No mounted page requests it | partial | [MED] | high |
| Netlify SPA | `/*` → `/index.html` status 200 | `netlify.toml` and `public/_redirects` | partial | [HIGH] | high |
| Vercel SPA | none | README tells you to run `vercel`. No `vercel.json` | absent | [HIGH] | high |
| Social links | Discord `discord.gg/GmG6xrnUm8`, X `x.com/SOLArenaLabs`, Telegram `t.me/+a8QoNIahl5Q5MTEx`, X community `x.com/i/communities/1986456387635806219` | `Layout.tsx`, `App.tsx` | done | [MED] | high |
| Mail links in copy | `security@solarenalabs.com`, `press@solarenalabs.com` | Library articles only. Not a form action | planned | [LOW] | high |

## External Dependencies

| Dependency | How the site uses it | Runtime call from this repo | Weight | Confidence |
|---|---|---|---|---|
| Web3Forms | Partner applications | Yes, on submit | [HIGH] | high |
| Discord, X, Telegram | Outbound links | Browser navigation only | [MED] | high |
| Solana RPC | Named in copy | No | [HIGH] | high |
| Pyth | Named in copy | No | [HIGH] | high |
| Phantom, Backpack, Solflare | Named in FAQ and Quick Start | No | [HIGH] | high |
| Google or other font host | Named families only | No | [MED] | high |
| npm packages | See Stack. Every runtime dependency is imported | Build time | [LOW] | high |
| Clerk, Supabase | Named only inside unmounted `Landing.tsx` checklist | No | [MED] | high |

## Data Model

| Entity | Where it lives | Fields | Weight | Confidence |
|---|---|---|---|---|
| Page copy | React components under `src/pages` | JSX. Not Markdown, not a CMS | [HIGH] | high |
| Theme | `localStorage` key `theme` | `light` or `dark` | [LOW] | high |
| Partner draft | Component `useState` until submit | `name`, `email`, `community`, `twitter`, `discord`, `members`, `message` | [HIGH] | high |
| Partner payload extras | Appended in `handleSubmit` | `access_key`, `subject`, `from_name` | [HIGH] | high |
| Toast list | Module variable in `use-toast.ts` | Unused by pages | [LOW] | high |
| User, wallet, market, pool, points, token balance | Not in this repo | null | [HIGH] | high |
| Database client | None | null | [HIGH] | high |

`public/favicon.png` and `public/logo.png` are the same bytes (SHA-256 `1a9ad90706e7377a09012e5d54b539ff2685698c7b8183aa5b85fe82cbf4a4e9`, 349×349). `public/fulllogo.png` is a different 1024×1024 image.

## Tests

| Check | Present | Result in this audit | Weight | Confidence |
|---|---|---|---|---|
| Unit or integration tests | No | null | [HIGH] | high |
| End-to-end tests | No | null | [HIGH] | high |
| Lint script | No | null | [MED] | high |
| `tsc` as part of `build` | Script exists | Not run | [HIGH] | high |
| `docs/verification.md` | Header and empty table | No pass/fail row | [HIGH] | high |
| feat-001 frontmatter | `status: Done`, `stage: implemented`, `validation.tests/manual/user_opinion: unknown`, `verified_by: null` | Docs say Done. Proof does not | [HIGH] | high |
| feat-002 frontmatter | `status: In Progress`, `stage: in_progress`, same unknown validation | Matches "delivery not confirmed" | [HIGH] | high |

## Dead code

| Path | Why it is dead | Weight | Confidence |
|---|---|---|---|
| `src/pages/Landing.tsx` | No importer. Still typechecked because it is `.tsx` under `src` | [HIGH] | high |
| `src/pages/Landing.tsx.backup` | Extension is `.backup`, so `tsc` does not treat it as TypeScript. Unused imports would not fail the build for that reason. Not executed to confirm | [MED] | medium |
| `public/demo-video.mp4` | Only referenced by the two Landing files above | [MED] | high |
| `toast()` export | No caller outside `use-toast.ts` | [LOW] | high |
| `Tooltip`, `TooltipTrigger`, `TooltipContent` | Exported. Never used | [LOW] | high |
| Tailwind accordion, chart, sidebar tokens | Declared in `tailwind.config.ts`. No accordion or sidebar component | [LOW] | high |
| `FORM_SETUP.md` placeholder instructions | Code no longer contains `YOUR_WEB3FORMS_ACCESS_KEY` | [HIGH] | high |

## What works E2E

No row below was clicked. "Source-wired" means the code path exists. It is not a test result.

| Flow | Result | Weight | Confidence |
|---|---|---|---|
| Install, dev server, production build | Not run | [HIGH] | high |
| Open `/` and read the hero | Source-wired to `Home` | [HIGH] | medium |
| Open each library slug | Source-wired. 20 routes match 20 index links | [HIGH] | medium |
| Toggle theme and reload | Source-wired to `localStorage`. First paint not observed | [MED] | medium |
| Open Join modal and leave to Telegram, Discord, or X | Source-wired. Remote sites not fetched | [MED] | medium |
| Submit the partner form and receive mail | Not run. Do not treat the key as proof of an inbox | [HIGH] | high |
| Refresh a deep link on the live host | Unknown. Netlify config would serve `index.html`. Vercel config is absent. Live host unknown | [HIGH] | high |
| Connect a wallet and place a prediction | Cannot. Those controls are not in the tree | [HIGH] | high |

## What is broken

| Defect | Why it is a defect | Weight | Confidence |
|---|---|---|---|
| FAQ "How do I get started?" and Quick Start tell the visitor to connect a wallet and use a dashboard | This repo has no wallet button and no dashboard route | [HIGH] | high |
| `index.html` description still says "trustless betting protocol" and "verifiable wager" | Live pages were rewritten on 2025-11-12 to drop gambling wording. The document head was not | [HIGH] | high |
| Home says "Testnet audited". FAQ says funds "are held in audited smart contracts" and also that contracts "will be" audited before mainnet. Security article says pre-mainnet audits are in progress | Three live pages disagree. This repo contains no audit report | [HIGH] | high |
| Earn Arena Points says "Live on Phase 1". Quick Start says the guide will be updated at mainnet launch | Same library, opposite launch status | [MED] | high |
| Roadmap and press articles still say Q1–Q4 2025 | Analysis date is 2026-10-01. Commit `069081b` said dated references were removed. That commit predates the library | [MED] | high |
| wouter `Link` renders an `<a>` unless `asChild` | Confirmed in wouter 3.3.5. This repo never passes `asChild`. `Layout`, `Library`, `ArticleLayout`, and `Home` put an `<a>` or a `<button>` inside `Link`. Invalid HTML. Clicks were not executed | [MED] | high |
| Display font never loads | `font-display` is Orbitron. The browser falls back | [MED] | high |
| README, architecture overview, and feat-001 acceptance describe `Landing.tsx`, a video, and a progress tracker as the site | The router mounts `Home.tsx`. Overview diagram points at `Landing.tsx` | [HIGH] | high |
| `FORM_SETUP.md` says line 23 is still `YOUR_WEB3FORMS_ACCESS_KEY` | `PartnerForm.tsx` posts a real access key to Web3Forms. The key is not repeated in this audit | [HIGH] | high |
| No not-found route | A bad path renders a blank main inside the chrome | [MED] | high |
| `Library.tsx` builds classes with ``bg-${section.color}/20`` | Tailwind does not see dynamic strings. The two colors used (`neon-cyan`, `neon-purple`) also appear as full strings elsewhere, so the utilities may already be generated. Generated CSS was not inspected | [LOW] | medium |
