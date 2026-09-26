# System Architecture Overview
## 1. Purpose
Marketing site for SolArena. Landing, explainers, a token section, and a library of articles. The GitHub description says temp landing page.
## 2. High-Level Diagram
```mermaid
graph TD
    Visitor --> Landing[src/pages/Landing.tsx]\n    Visitor --> Library[src/pages/library]\n    Visitor --> Partner[src/components/PartnerForm.tsx]
```
## 3. Components
| Component | Responsibility | Tech | Location |
|---|---|---|---|
| Landing | Home and marketing pages | React, wouter | src/pages/Landing.tsx, Home.tsx, HowItWorks.tsx, Token.tsx |
| Library | Long-form articles | React | src/pages/library/ |
| Partner form | Partner signup UI | React | src/components/PartnerForm.tsx |
| Host | SPA fallback | Netlify | netlify.toml |
## 4. Data Flow
1. Vite serves the React app.
2. wouter switches landing, FAQ, community, token, and library articles.
3. Netlify redirects keep the SPA on one index. The form's destination was not traced.
## 5. Key Decisions
- Keep this repo even though the description says temporary, because you asked for the whole table. See ADR 001.
## 6. Future Considerations
- Exclude it from Ariadne if the temp description is still true.
- Point the enter-the-arena button at a URL you still own.
