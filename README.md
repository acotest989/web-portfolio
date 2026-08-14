# Portfolio — Aleksandar Milošević

Personal portfolio for a Web & Mobile Engineer with 9+ years of experience.
Single-page React app with an interactive CLI, a printable CV view, and full
English/Serbian localisation.

**Live:** https://acotest989.github.io/web-portfolio/

## Stack

- **React 19** + **TypeScript**, no router — one page, anchored sections
- **Vite 6** for dev server and build
- **Tailwind CSS v4** via `@tailwindcss/vite` (no PostCSS config needed)
- **lucide-react** for icons, **canvas-confetti** for the hire easter egg

## Features

- Bilingual content (EN/SR) driven from a single data module
- Interactive CLI terminal — `Cmd/Ctrl+K`, try `help` or `sudo hire`
- CV modal with a print stylesheet and a direct PDF download
- Experience timeline with role filtering and expandable detail
- Project cards linking to the live deployments

## Local development

```bash
npm install
npm run dev      # http://localhost:3000/web-portfolio/
```

Note the `/web-portfolio/` path — `base` is set in `vite.config.ts` so the
build works under the GitHub Pages subpath. The dev server honours it too.

```bash
npm run build    # production build into dist/
npm run preview  # serve the built output
npm run lint     # tsc --noEmit
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. No manual step involved.

## Structure

```
src/
  data/portfolioData.ts   all copy, experience, projects, skills — edit here
  components/             one file per section or modal
  types.ts                shared shapes for the data module
public/                   CV PDF and favicon, copied verbatim into the build
```

Content changes almost always mean editing `src/data/portfolioData.ts` alone;
the components read from it and render both languages.
