# TechVision marketing site

Marketing site for **TechVision** — a Dhaka-based software firm building mission-critical systems for governments, banks, utilities, hospitals, and major sports franchises.

> Built like a city runs on it.
> On time, on budget, and still running ten years later.

## Two builds in one repo

| Path | What it is | How to run |
|---|---|---|
| `src/`, `index.html`, `vite.config.js` | React + Vite app with hot reload | `npm install && npm run dev` |
| `html/index.html` | Standalone CDN-React build, no build step | Serve repo root with `npx serve .` then open `/html/` |

Both render the same site and share the same design tokens (`src/styles/tokens.css` ↔ `html/tokens.css`).

## Project structure

```
techvision-site/
├── index.html              ← Vite entry
├── package.json
├── vite.config.js
├── public/assets/          ← brand logos (PNG)
├── src/
│   ├── main.jsx, App.jsx
│   ├── styles/
│   │   ├── tokens.css      ← design tokens (colors, type, spacing, shadows)
│   │   └── marketing.css   ← component styles
│   └── components/
│       ├── Header.jsx, Hero.jsx, StatusTicker.jsx
│       ├── WorkGrid.jsx, CaseCard.jsx
│       ├── Capabilities.jsx, ThreeAm.jsx, ProofRow.jsx
│       └── ContactBlock.jsx, Footer.jsx
└── html/                   ← standalone copy
    ├── index.html
    ├── tokens.css
    └── marketing.css
```

## Brand essentials

- **Colors** — `--tv-blue #1B4FB0`, `--tv-navy #0F172A`, `--tv-paper #F6F4EF`, `--tv-action #2D5394`
- **Type** — Geist (sans + mono) via Google Fonts
- **Voice** — confident, specific, never boastful. Sentence case. No emoji. Every claim backed by a named project.

See `src/styles/tokens.css` for the full token system.

## Editing

The Vite dev server has hot module reload — edit any file under `src/` and the browser refreshes instantly. Change `tokens.css` once and the new color/font/spacing propagates everywhere.

## Origin

Generated from a TechVision design-system handoff bundle exported from Claude Design (`claude.ai/design`). The original design package is preserved in spirit; this repo is the production-ready implementation.
