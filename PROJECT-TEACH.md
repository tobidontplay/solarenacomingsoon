# PROJECT-TEACH — solarenacomingsoon

Audit date: 2026-10-01. Audience: the owner learning to describe this repo the way a senior would, a later agent about to edit it, and a tutor writing quizzes. Every claim below is tied to a file, a commit, or a library source that was read. If a sentence needs a running browser, it is not here.

## Mental model

This repository is a brochure that talks about a protocol. The protocol is not in the brochure.

A visitor loads one HTML file. Vite, at dev time, or a static host, in production, serves `index.html`. That file mounts `src/main.tsx`, which mounts `src/App.tsx`. wouter looks at the path and picks one page component. The page is a function that returns markup. There is no database, no API route, and no Solana client in `package.json`.

The only write this origin performs is the partner form. On submit, the browser POSTs `FormData` to `https://api.web3forms.com/submit`. Everything else is reading.

Two trees are easy to confuse:

| Tree | What it is | How you know |
|---|---|---|
| Routed app | `Home`, `HowItWorks`, `Token`, `Community`, `FAQ`, `Library`, twenty articles | `src/App.tsx` `<Route>` list |
| Unmounted draft | `src/pages/Landing.tsx` and `src/pages/Landing.tsx.backup` | Nothing imports them |

The README, the architecture diagram, and feat-001's acceptance line describe the unmounted draft. The site people would see describes the routed app. When you talk about "the landing page," name the file.

A senior sentence: "The public site is a static React SPA with 26 routes. The arena program is a different repo. This one can explain, and it can POST a partner form. It cannot take a stake."

## Architecture

```text
index.html
  └── src/main.tsx
        └── src/App.tsx
              ├── TooltipProvider
              ├── Layout
              │     ├── header nav (wouter Link)
              │     ├── <main>{Switch}</main>
              │     ├── footer + disclaimer
              │     └── mobile nav
              ├── PartnerForm   (only if showPartnerForm)
              ├── Join modal    (only if showJoinModal)
              └── Toaster       (mounted, never fed)
```

State lives in three places:

| State | Holder | Lifetime |
|---|---|---|
| Which modal is open | `useState` in `App` | Until refresh |
| Which pool button is highlighted | `useState` in `HowItWorks` | Until refresh |
| Theme | `localStorage` key `theme`, then a class on `<html>` | Across reloads, after the effect runs |
| Form fields | `useState` in `PartnerForm` | Until close or refresh |
| Toasts | Module-level `memoryState` in `use-toast.ts` | Tab lifetime. Unused |

Routing is a list, not a data file. `Library.tsx` has its own list of slugs. `App.tsx` repeats them as `<Route path=...>`. They match on this date: 20 articles. There is no catch-all route. wouter's `Switch` returns `null` when nothing matches, so a typo still shows the header and footer and an empty main. That is in the wouter 3.3.5 `Switch` source: if no child matches, it returns `null`.

`Link` in that same version renders an `<a>` unless you pass `asChild`. This codebase never passes `asChild`. Several links are written as `<Link><a>...</a></Link>` or `<Link><Button>...</Button></Link>`. The DOM that produces is an anchor wrapped around another anchor, or an anchor wrapped around a button. HTML does not allow that. Whether a click still navigates was not executed. Do not claim the nav is broken in the browser. Do claim the markup is invalid, and cite wouter's `createElement("a", ...)` path.

Scroll: `Layout` runs `window.scrollTo` when `useLocation()` changes. That is why commit `dfb34bf` exists.

Host: production is "whatever uploaded `dist`." `netlify.toml` knows how to build and how to rewrite every path to `index.html`. `public/_redirects` repeats that rewrite for Netlify. README also says to deploy with the Vercel CLI. There is no `vercel.json`. A refresh on `/library/terms` works on Netlify because of the rewrite. On a host that serves files literally, that path 404s, which is why commits `c1cbe5f` and `5333439` exist. The repo does not record which host is current. `project.yaml` leaves `port` and `github.ci` null on purpose.

## Key decisions

| Decision | Evidence | What it costs |
|---|---|---|
| Keep this repo separate from the program | ADR 001, 2026-09-25, status Accepted | Two places to update a claim. One place that cannot drift into chain code by accident |
| Stay temporary until the owner says otherwise | GitHub description `temp landing page`; ADR 001 | Agents must not "promote" it to the product in prose |
| Client router is wouter, not React Router | `package.json`, commit `069081b` | Small dependency. You must learn its `Link` actually emits `<a>` |
| Theme is a class plus `localStorage`, defaulting through an effect | `ThemeToggle.tsx` | No flash-prevention script. First paint follows `:root`, which is the light palette |
| Partner mail goes through Web3Forms from the browser | `PartnerForm.tsx` | No server to operate. The access key ships in the bundle. Web3Forms is designed that way. The setup doc was not updated when the key was pasted |
| Legal voice is "prediction protocol," not "betting" | Commit `d0b2d6f` on the live pages | `index.html` and the unmounted `Landing.tsx` still use the old words. The rewrite was not repo-wide |
| Articles are React components, not Markdown | `src/pages/library/*.tsx` | No CMS. A typo is a code change. Tailwind Typography is loaded so `prose` classes work |
| Netlify got the SPA rule after a Vercel redeploy commit | `823680b` then `c1cbe5f` and `5333439` | Two host stories. Only one has a config file |
| Tests are out of scope in the brief, and required by the agent rules | `specs/project-brief.md`, `specs/agent-rules.md` | "No tests" is not automatically a bug. "Done" without a verification row is still unsupported |
| feat-001 may say Done while validation is unknown | Spec frontmatter | Status in prose and status in the verification log are different systems. `AGENTS.md` says the frontmatter wins for stage, and it also says not to mark accepted without the user. `implemented` is not `verified` |

## Technologies

Short definitions, then why this repo uses them.

| Term | Plain meaning | Why it is here |
|---|---|---|
| SPA | Single-page app. One HTML file. JavaScript swaps the view | The whole site is one `index.html` |
| Vite | Dev server and bundler. Serves source during `npm run dev`. Writes `dist/` during build | `package.json` scripts |
| `tsc` | TypeScript compiler. Here `noEmit` is true, so it only typechecks. Vite emits the JavaScript | `build` is `tsc && vite build` |
| wouter | A small React router. `Route` matches a path. `Link` changes it without a full reload | Chosen in the multi-page commit |
| Tailwind | Utility CSS. Class names in JSX become CSS at build time, but only if the scanner sees the full string | Dynamic ``bg-${color}`` is the classic miss |
| Radix | Unstyled accessible primitives. This repo uses slot, toast, and tooltip | Mostly copied shadcn pieces |
| shadcn-style UI | Components you own in `src/components/ui`, not a runtime library | `button.tsx`, `toast.tsx`, `tooltip.tsx`. `tooltip.tsx` still has `"use client"`, a Next.js directive. Vite ignores it |
| `localStorage` | Browser key-value store that survives reload | Theme only |
| SPA fallback | The host returns `index.html` for unknown paths so the client router can run | `netlify.toml` `status = 200` |
| Access key | A public client token for Web3Forms. Anyone who can read the bundle can POST to it | `PartnerForm.tsx`. Not repeated here |
| Anchor, Pyth, SPL | Solana program framework, a price oracle, and Solana's token standard | Named in articles. Not dependencies of this package |
| Brochure repo | A marketing checkout that sits beside the product checkout | ADR 001. Ariadne monitors this repo through `project.yaml` |

Font fact you can defend: `tailwind.config.ts` sets `fontFamily.display` to Orbitron and `sans` to Rajdhani. `index.html` does not request those families. `src/index.css` does not. The computed font will be the browser's generic sans-serif unless the user already has the family installed.

Asset fact you can defend: `favicon.png` and `logo.png` hash to the same SHA-256. `fulllogo.png` does not. The header uses `fulllogo.png`. The footer uses `logo.png`.

## Failure modes

| Mode | What you will see | Cause in this repo | Weight |
|---|---|---|---|
| Agent edits `Landing.tsx` and the site does not change | Live `/` still shows `Home.tsx` | No import of `Landing.tsx` | [HIGH] |
| Deep link 404 in production | Host shows its own 404 | Live host is not Netlify, or the publish directory is not `dist` | [HIGH] |
| Form "works" in the UI and nobody gets mail | Success depends on `data.success` from Web3Forms | Key revoked, quota, or the inbox is not the one you think. Not tested here | [HIGH] |
| Visitor follows Quick Start and finds no wallet button | Confusion, or a claim that the app is "broken" | The button was never on this origin | [HIGH] |
| Light flash, then dark | First paint is `:root`. Effect adds `.dark` | `ThemeToggle` initial state is unused for the first HTML paint | [MED] |
| Headlines look like a system font | Orbitron never downloaded | No font stylesheet | [MED] |
| Library icon box has no tint | Tailwind dropped the dynamic class | Only if the full class is not present elsewhere. Both colors are written out in other files. CSS output was not checked | [LOW] |
| `tsc` fails on a future edit | `noUnusedLocals` | Unused imports fail the build. The `.backup` file is not in that check because its extension is `.backup` | [MED] |
| Someone treats feat-001 Done as shipped | They skip a build | `docs/verification.md` is empty. Frontmatter `verified_by` is null | [HIGH] |
| Copy-paste of Clerk or Supabase from the checklist | New services in the wrong repo | Those names exist only in the dead landing checklist | [MED] |
| Legal review reads only `index.html` | Old "betting" description | Head was not in the rewrite commit | [HIGH] |
| Dates used in a talk | "Phase 1 is Q1 2025" | `Roadmap.tsx`. That quarter is over as of this audit | [MED] |

Toast side note, for the tutor: `use-toast.ts` runs `setTimeout` inside the reducer on dismiss, and `TOAST_REMOVE_DELAY` is `1000000` milliseconds. That is the upstream shadcn pattern. Nothing in the pages calls `toast()`, so the timer never starts. Do not describe toasts as part of the form.

## Conventions

| Convention | Where it shows up | How to follow it |
|---|---|---|
| Path alias `@/` | `tsconfig.json` `paths`, Vite `resolve.alias` | Import shared UI as `@/components/...` |
| Pages are default-exported functions | `src/pages` | One component per file. Articles take no props |
| Modals are booleans in `App` | `showJoinModal`, `showPartnerForm` | Pass a function down. Do not add a router query for them unless you mean to |
| Nav list is data | `navLinks` in `Layout.tsx` | Add a page in three places: the array, a `<Route>`, and the page file. Library articles need a fourth: the section list in `Library.tsx` |
| Styling | Tailwind utilities plus CSS variables in `src/index.css` | Neon colors are `hsl(var(--neon-purple))` tokens, not raw hex, in components |
| Copy tone on live pages | "prediction", "stake", "peer-to-peer" | Do not restore "bet" or "wager" on a mounted page. The dead landing still has them |
| Feature work | `specs/features/NNN-*.md` before code | `AGENTS.md`. This audit did not add a feature |
| Stage | Frontmatter, not a second status paragraph | Do not mark `accepted` or fill `verified_by` without the owner |
| Secrets in docs | `docs/architecture/security.md` | Do not paste the Web3Forms key into new markdown |
| Logging | `docs/ai-log/entries/` | Next number after `0001` |

`Landing.tsx.backup` is a bad convention. It looks like source. It is a leftover. Do not add another `.backup` file.

## Open questions

These are unanswered by the files. A quiz should accept "not in the repo" as the right answer.

| Question | Best current answer |
|---|---|
| Is the page still temporary? | The GitHub description says yes. The owner has not confirmed it in `TODO.md` |
| Which host is live? | Not recorded. Netlify is the one with config |
| Does the form reach a human? | Unknown. The POST URL is known |
| Is there a production domain? | GitHub homepage is empty |
| Did a testnet audit happen? | This repo does not contain the report. The pages disagree |
| Would `npm run build` pass today? | Unknown. Not run |
| Do nested links still navigate? | Unknown. Markup is invalid. Behavior not executed |
| Are dynamic Tailwind classes present in the built CSS? | Unknown. The full strings exist elsewhere in source |
| Is the Web3Forms key still valid? | Unknown. It was not called |
| Should the video and the dead landing stay? | Owner decision. See `PROJECT-GOALS.md` |

## What a senior would not claim

- That the site is "70% complete" or "61% complete." Those numbers are a hardcoded checklist in a file the router does not mount. Eight of thirteen items in `Landing.tsx` are marked complete inside that file. That is arithmetic, not a measurement of this repository.
- That funds are safe because the FAQ says audited. The FAQ also says the audit is still in the future. There is no report here.
- That Phase 1 is live because one article says so. The quick start on the next card says the opposite, and this package has no chain client.
- That the partner form is finished because the modal closes. Closing means the JSON body had `success: true`. This audit never saw that response.
- That feat-001 is verified. The frontmatter says `implemented` and leaves every validation field `unknown`.
- That Vercel and Netlify are both correctly configured. Only Netlify has a config file.
- A personal legal conclusion about prediction markets. The pages state a position. That is copy, not a ruling.
