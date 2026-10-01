# Concepts Learned
Running glossary. Every new concept gets a row.
Mastery starts at 0 until a quiz in docs/learning/quiz-log.jsonl raises it.

| Concept | Plain-English | Why It Matters | Date | Mastery | Last Reviewed | Next Review | Related Files |
|---|---|---|---|---|---|---|---|
| Brochure repo | A marketing site can live beside the product repo. | Pointing Ariadne at the wrong one monitors the wrong process. | 2026-09-25 | 0 | null | null | README.md |
| Unmounted module | A file under `src` that nothing imports. | Editing it does not change the site. `Landing.tsx` is the example. | 2026-10-01 | 0 | null | null | PROJECT-TEACH.md |
| SPA fallback | The host returns `index.html` for unknown paths so the client router can run. | Without it, refresh on `/library/terms` 404s. This repo configures that for Netlify only. | 2026-10-01 | 0 | null | null | netlify.toml |
| Nested anchor | An `<a>` inside the `<a>` that `Link` already renders. | HTML forbids it. wouter renders the outer anchor unless `asChild` is set. | 2026-10-01 | 0 | null | null | src/components/Layout.tsx |
