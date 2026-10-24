# my-portfolio — Adekoya Gbolahan

Personal portfolio. Next.js 14 (App Router) + TypeScript + Tailwind + framer-motion.
Content lives in one file; the design tokens live in another. No CMS, no database.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things are

| Path | What it holds |
|---|---|
| `src/data/portfolio.ts` | **All content** — identity, links, stack, method, track record, and the four case studies (summary, spec, metrics, problem/built/outcome) |
| `src/app/globals.css` | Design tokens (paper/ink/rule/accent) and component classes: `.display`, `.eyebrow`, `.mono`, `.plate-*`, `.ledger-*`, `.btn`, `.chip` |
| `src/app/page.tsx` | Home: hero → stack strip → ledger → method → track record → elsewhere → footer |
| `src/app/work/[slug]/page.tsx` | Case-study template, prerendered for each slug in the data file |
| `src/components/ledger.tsx` | The four case studies as an index that opens in place (client component) |
| `src/components/plate.tsx` | A "plate": framed screenshot, or a typographic spec sheet when there is no public UI to show |
| `src/components/sections.tsx` | Stack strip, method, track record, elsewhere |
| `src/components/site-chrome.tsx` | Header + dark footer |
| `src/app/fonts/` | Self-hosted woff2 — Faculty Glyphic (display), Inter (body), IBM Plex Mono (labels) |

Adding a case study = appending one object to `caseStudies`; the home row, the
`/work/<slug>` page and the prerendered route all follow automatically.

## Design notes

- Fonts are self-hosted via `next/font/local`, so the build never calls a font CDN.
- One accent colour (brand indigo `#1b09a2`), one signal colour (brand green, availability dots only).
- Screenshots sit desaturated and return to full colour on hover (`.shot`).
- Motion respects `prefers-reduced-motion`; the stack marquee pauses on hover.

## Deploy

Fully static — `next build` already produces prerendered HTML.

**Node version:** `package.json` pins `engines.node` to `24.x` (and `.nvmrc` says 24).
Vercel's `engines` field overrides the Project Settings dropdown, and Node 20 was
disabled for new Vercel deployments on 2026-10-01 — do not remove this pin.

**Canonical origin:** `src/lib/site-url.ts` resolves the site URL in this order:
`NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → localhost.
Nothing is hard-coded. Once a custom domain exists, set `NEXT_PUBLIC_SITE_URL` in
Vercel → Settings → Environment Variables so canonical URLs and OG tags use it.

**Vercel:** import the repo and deploy as-is. No environment variables are required
to build; the fonts are committed and served locally, not fetched from a CDN.

**Hostinger / cPanel (no Node):** add `output: 'export'` to `next.config.mjs`,
run `npm run build`, upload the generated `out/` folder. `images.unoptimized` is
already set, which is what a static export requires.

**Share card:** `public/og.png` is generated, not hand-drawn — `scripts/make-og.py`
rebuilds it in the site's own type (`scripts/og-fonts/`) with
`uv run --with pillow python scripts/make-og.py`.

## Known gaps

- `public/adekoya-gbolahan-cv.pdf` is a copy of the current CV — replace it when the CV changes.
- Education is listed as B.Sc Microbiology (McPherson University) on purpose: the
  site treats the non-CS background as part of the story, not something to hide.
- No contact form — contact is mailto/phone by choice, so there is nothing to spam.
