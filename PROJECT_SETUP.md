# PROJECT_SETUP.md — Tower & Internet Infrastructure Website

Setup guide for the marketing and lead-generation site. Read `DESIGN.md` first: it is the source of truth for tokens, components and accessibility rules. This file covers how to build and ship it.

**Stack:** Astro, React islands (only where needed), Tailwind CSS (token-driven), Astro Content Collections, MapLibre GL, Cloudflare Pages (hosting and forms function).

---

## 1. Prerequisites

| Tool | Version | Check |
|---|---|---|
| Node.js | current LTS (20 or newer) | `node -v` |
| npm (or pnpm) | bundled with Node | `npm -v` |
| Git | any recent | `git --version` |
| Code editor | VS Code with the Astro, ESLint, Prettier and Tailwind CSS IntelliSense extensions | |

Accounts you will need: GitHub (code), Cloudflare (hosting, Turnstile spam protection), an email service for the RFQ form (for example Resend).

---

## 2. Create the project

```bash
npm create astro@latest tower-site
# Integrations
npx astro add react
npx astro add tailwind

# Libraries
npm install maplibre-gl
npm install @fontsource-variable/archivo @fontsource/jetbrains-mono
```

---

## 3. Folder structure

```
tower-site/
├─ DESIGN.md
├─ PROJECT_SETUP.md
├─ astro.config.mjs
├─ package.json
├─ .env.example
├─ functions/
│  └─ api/
│     └─ rfq.ts                 # Cloudflare Pages Function (RFQ endpoint)
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ docs/                     # capability statement, datasheets (PDF)
├─ src/
│  ├─ assets/
│  │  ├─ photos/                # halftone / real site photos
│  │  └─ drawings/              # SVG line art (tower elevations, RF rings)
│  ├─ components/               # .astro components (no JS)
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ Button.astro
│  │  ├─ ProjectCard.astro
│  │  ├─ SpecTable.astro
│  │  ├─ StatsBand.astro
│  │  ├─ ProcessStepper.astro
│  │  └─ SkipLink.astro
│  ├─ islands/                  # React components (interactive only)
│  │  ├─ RFQForm.tsx
│  │  ├─ CoverageMap.tsx
│  │  └─ StatusTiles.tsx
│  ├─ content/
│  │  ├─ projects/              # one .md per project
│  │  ├─ services/              # one .md per service
│  │  └─ careers/               # one .md per role
│  ├─ content.config.ts         # collection schemas
│  ├─ layouts/
│  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ services/[slug].astro
│  │  ├─ projects/index.astro
│  │  ├─ projects/[slug].astro
│  │  ├─ coverage.astro
│  │  ├─ safety.astro
│  │  ├─ careers.astro
│  │  ├─ support.astro
│  │  ├─ contact.astro          # RFQ
│  │  └─ 404.astro
│  └─ styles/
│     ├─ tokens.css             # design tokens from DESIGN.md
│     └─ global.css             # base styles, focus, reduced motion
└─ tests/
   ├─ a11y.spec.ts
   └─ rfq.spec.ts
```

---

## 4. Working agreements
- **Tokens first.** If a color, size or spacing value is not in `tokens.css`, add it to `DESIGN.md` and the tokens file before using it.
- **No raw values** in components.
- **Components** are `.astro` by default. A React island needs a reason in the pull request description.
- **Content** must be real, dated and sourced.
