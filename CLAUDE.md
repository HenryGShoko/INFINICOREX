# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

INFINICOREX is a production-ready marketing website for an IT company offering software engineering, digital product/design, and IT services. Built with Next.js App Router, TypeScript, Tailwind CSS v4, and Sanity CMS. Launch scope is **Home page only**, architected for future page expansion.

## Commands

```bash
npm run dev          # Start dev server (Next.js 16 defaults to Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint (flat config)
npx tsc --noEmit     # Type check without emitting
```

No test framework is configured yet — there are no test scripts or test files.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict, no `any`)
- **Styling:** Tailwind CSS v4 (config via CSS `@theme` in `globals.css`, no `tailwind.config.ts`)
- **CMS:** Sanity (gracefully degrades to fallback data when not configured)
- **Email:** Resend (installed as dependency; delivery still TODO in `api/contact/route.ts`)
- **Deployment:** Vercel
- **Validation:** Zod (shared client/server schema)
- **Icons:** lucide-react
- **Linting:** ESLint (flat config) + Prettier (single quotes, 100 char width, trailing commas)

## Architecture

### Import Alias

`@/*` maps to `./src/*` — use `@/components/ui/Button` not relative paths.

### Key Principle

Content lives in Sanity. Presentation lives in code. Raw CMS shapes are mapped to domain types via mappers before reaching UI components. When Sanity is not configured (no `NEXT_PUBLIC_SANITY_PROJECT_ID`), fallback data in `src/lib/constants/fallback-data.ts` is used automatically.

### Folder Structure (under `src/`)

```
app/
  (marketing)/        # Route group — Home page lives here
    page.tsx           # Home page (server component, fetches all data)
    layout.tsx         # Marketing layout (Header + Footer wrapper)
  api/contact/         # POST endpoint for consultation form
    route.ts
components/
  ui/                  # Primitives: Button, Container, SectionHeading, Card, Input, Textarea, Select
  layout/              # Header, Footer
  navigation/          # ServicesDropdown (desktop), MobileNav (mobile drawer)
  forms/               # ConsultationForm (client component)
features/
  home/
    components/        # HeroSection, ServicesSection, WhyUsSection, ProcessSection, ConsultationSection
    mappers/           # map-cms-data.ts — CMS raw → domain types
    queries/           # get-home-data.ts — orchestrates all data fetching with fallbacks
domain/
  site/types.ts        # SiteSettings, HeroContent, WhyUsItem, ProcessStep, ConsultationSection
  services/types.ts    # ServiceCategory, ServiceItem
  contact/types.ts     # ConsultationRequest, FormResponse
lib/
  sanity/              # client.ts (conditional creation), fetch.ts (safe wrapper)
  validation/          # consultation.ts (Zod schema, shared client/server)
  constants/           # fallback-data.ts (all default content)
  utils/               # structured-data.ts (JSON-LD)
config/
  site.ts              # Company name, URL, description
  sanity.ts            # Sanity project config from env vars
```

### Sanity CMS (under `sanity/`)

```
schemaTypes/           # Document schemas: siteSettings, hero, serviceCategory, whyUsItem, processStep, consultationSection
queries/               # GROQ queries for home page data
```

### Data Flow

```
Sanity CMS → GROQ queries (sanity/queries/) → sanityFetch (lib/sanity/) → mappers (features/home/mappers/) → domain types → page/section components
```

If Sanity is unconfigured, the flow short-circuits: `sanityFetch returns null → fallback data used`.

### Server/Client Boundaries

- All page and section components are **server components** (no `'use client'`)
- Only interactive components use `'use client'`: `ServicesDropdown`, `MobileNav`, `ConsultationForm`

## Service Categories (source of truth)

- **Software Engineering:** Software Development, Web App Development, Mobile App Development, Software Testing & QA, Software Maintenance
- **Product & Design:** Planning & Strategy, UX/UI Design
- **IT Services:** IT Support, Managed IT Services, Hardware & Software, Business Internet, Microsoft Tools, IT Security, Hosting

## Environment Variables

Copy `.env.local.example` to `.env.local`. Required for CMS:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — defaults to `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` — defaults to `2024-01-01`
- `NEXT_PUBLIC_SITE_URL` — defaults to `https://www.infinicorex.co.za`

## Key Constraints

- **Phased workflow** — Plan before coding, get approval before each major phase
- **Blue mixed-theme** — Design tokens in `globals.css` via `@theme inline`: navy scale (`--color-navy-600` to `--color-navy-950`, primary `#007ACC`), brand greens (`--color-brand-*`), slate neutrals, semantic `--color-success`/`--color-error`. Font: Inter via `--font-sans`.
- **Accessibility** — Semantic HTML, keyboard nav/dropdowns/forms, visible focus states, ARIA, WCAG contrast
- **Performance** — Server-rendered, minimal client JS, no animation libraries
- **Form** — Client-side + server-side Zod validation, stubbed email delivery (TODO in `api/contact/route.ts`)
- **Copywriting** — Confident, direct, concrete. No vague startup jargon.

## Remaining TODOs

- Wire the installed Resend SDK into `src/app/api/contact/route.ts` (currently stubbed)
- Set up Sanity project and configure env vars
- Add favicon and OG image assets to `public/`
- Implement future route placeholders (`/services`, `/about`, `/contact`) when needed
