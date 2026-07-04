# IndGo Air Virtual — Crew Center & marketing site

A realistic Infinite Flight virtual airline inspired by IndiGo's real-world
operations. Built fresh with an original **"Jharokha"** design language —
Indian heritage rendered as clean modern vector, not kitsch.

**Tagline:** _Connecting the Skies_ · ICAO **IGO** · IATA **6E** · Callsign **IFLY 001GO**

## Design language

- **Signature motifs:** cusped Mughal arch (frames the hero + cards), jali
  lattice texture, rangoli/mandala line-art medallions — all pure SVG in
  `src/components/Motifs.tsx`.
- **Palette (locked to brand brief):** IndiGo Blue `#003DA5`, white, Sky
  `#6DCFF6`, plus a heritage **Marigold `#D98A2B`** used sparingly, on a warm
  **sandstone-ivory** canvas `#FBF8F2` (deliberately not the cold greys used by
  our other VA sites — this is what makes it visually unique).
- **Type:** Bricolage Grotesque (display) + Inter (body) via `next/font`.
- **Light-default**, airy, minimal — with an optional rich "midnight indigo"
  dark mode. No dark/cyber/gaming, no clutter, no over-animation (per brief).

## Pages

Marketing: `/` · `/fleet` · `/network` (route browser w/ search + filters) ·
`/events` · `/training` · `/ranks` (ranks + awards) · `/about` · `/join`.

Crew Center: `/crew` (pilot dashboard — stats, rank progress, PIREPs, quick
links) · `/dispatch` (route → SimBrief-style OFP generator).

All data is mock/illustrative in `src/lib/content.ts`, drawn from the official
brand brief.

## Run

Node lives at `~/.local/node-v22.12.0-darwin-arm64/bin` (not on PATH):

```bash
export PATH="$HOME/.local/node-v22.12.0-darwin-arm64/bin:$PATH"
npm run dev     # http://localhost:3900
npm run build   # production build (all routes prerender static)
```

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 (`@theme`
tokens in `globals.css`) · TypeScript.

_Not affiliated with IndiGo / InterGlobe Aviation. A fan virtual airline for
Infinite Flight._
