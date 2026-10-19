# Jurist Portfolio

A clean Next.js rebuild of the Jurist legal portfolio reference. The project keeps the visual direction and selected imagery while removing WordPress, Elementor, jQuery, and third-party theme scripts.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — App Router pages and page-level styles
- `src/components/layout` — shared header and footer
- `src/components/sections` — reusable marketing sections
- `src/data` — portfolio content and navigation data
- `public/images` — selected, renamed source imagery only

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```
