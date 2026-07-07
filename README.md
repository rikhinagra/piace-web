# PIace

Marketing website for **PIace** — AI-native case management built for personal injury law firms. Intake, medical chronologies, demand letters, deadlines, client texting and settlement tracking, with AI agents working inside every stage of the case.

Live site: **[www.piace.ai](https://www.piace.ai)**

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- React + TypeScript
- Plain CSS (custom design system in `app/globals.css`)
- Framer Motion for a few interactions

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build    # production build
npm run start    # run the production build
npm run lint     # lint the project
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata and SEO
  page.tsx          Home page — assembles the sections
  globals.css       Design system and all component styles
  manifest.ts       Web app manifest (PWA)
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
components/
  Navbar, Hero, ProductSection, IntegrateSection,
  FeatureSection, MigrationBand, DemoSection, Faq,
  BookSection, Footer, and shared helpers
public/             Logo, icons and static assets
```

## Sections

The home page is composed of self-contained section components: a hero with an
animated starfield, the product overview, the case workflow, the feature grid, a
migration call-out, an interactive product demo, FAQs, a booking form and the
footer.

## To do before launch

- Connect the "Book a call" form to the scheduler (Calendly / Cal.com).
- Drop in the real product walkthrough video in the demo section, if available.

## Deployment

The site is a standard Next.js app and deploys cleanly to Vercel. Push to the
connected branch and Vercel builds automatically, or run `npm run build` and host
the output anywhere that supports Node.
