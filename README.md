## Dhaka Prime Flips — Marketing Website (Next.js)

Premium, conversion-focused real estate business website for **Dhaka Prime Flips**.

- **Primary conversion targets**: Buyers + Sellers (secondary/resale apartments)
- **Non-goal**: Investor content on the homepage (dedicated page later)
- **Tech**: Next.js (App Router) + TypeScript + Tailwind + Framer Motion + Lucide

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Structure (high level)

```
src/
  app/                # App Router routes (home + internal pages)
  components/
    motion/           # Framer Motion primitives
    sections/         # Homepage sections (marketing)
    site/             # Navbar/Footer/Page shell
    ui/               # Reusable UI primitives (shadcn-inspired)
  content/            # Dummy/static data
  lib/                # Utilities (cn)
public/
  images/             # Placeholder SVG visuals
```

## Notes

- Forms are **static UI only** (no backend). Ideal for later CRM integration.
- Dummy data + placeholder images are used intentionally.

---

Built with Next.js App Router.
