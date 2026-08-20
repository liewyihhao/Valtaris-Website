# Valtaris — AI Data & Human Intelligence Website

Premium, enterprise-grade marketing site for **Valtaris**, an AI data / data
labelling / human intelligence company. Positioning: **human intelligence
powering better AI** — the human-data layer for reliable AI.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, with
`framer-motion` for restrained motion and `lucide-react` for icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx         Root layout, fonts, SEO metadata, Organization schema
  page.tsx           Home (12 sections)
  services/          Services (12 categories, grouped)
  industries/        Industries (10, challenge → solution)
  solutions/         Solutions (problem-led)
  about/             Mission, philosophy, workforce, leadership placeholder
  contact/           Multi-step lead form ("Get Started")
  sitemap.ts / robots.ts / icon.svg / not-found.tsx
components/
  layout/            Navbar, Footer
  brand/             Logo
  ui/                Button, SectionHeading, PageHeader, Reveal, Stat
  cards/             ServiceCard, IndustryCard, CaseStudyCard
  home/              All homepage sections
  contact/           MultiStepForm
  visuals/           HeroVisual (abstract data-network SVG)
lib/
  content.ts         ALL editable copy & data (services, industries, etc.)
  utils.ts
```

## Editing content

Almost everything is data-driven from **`lib/content.ts`** — services,
industries, solutions, workforce, quality pillars, stats, case studies, trust
items, and the `site` object (name, email, location, URL). Edit there rather
than in components.

## Placeholders to replace before launch

These are intentionally marked — the site does **not** fabricate credibility:

- **`site` object** in `lib/content.ts`: `email`, `location`, `url` (production domain).
- **Stats** (`stats` in `lib/content.ts`): `XX+` values are placeholders (shown with a `TBD` chip). Replace with verified figures.
- **Case studies** (`caseStudies`): bracketed `[…]` placeholders. Populate with real, verifiable projects.
- **Trust & compliance** (`trustPlaceholders`): claim certifications/standards only once genuinely held.
- **Leadership** (`app/about/page.tsx`): `[Name] / [Role]` cards.
- **Lead form** (`components/contact/MultiStepForm.tsx`): submission is simulated (logs to console). Wire a real endpoint — an `/api/lead` route, HubSpot, Formspree, etc.
- **Open Graph image**: add `app/opengraph-image.png` (1200×630) for rich link previews.

## Notes

- Dark, minimal design system defined in `tailwind.config.ts` + `app/globals.css`.
- Respects `prefers-reduced-motion`.
- Accessible: semantic landmarks, skip link, focus states, `aria` on interactive UI.
