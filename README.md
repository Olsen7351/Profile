# Personal CV – Jens Møller Olsen

A one-page personal CV site built with **Angular 19** and **TypeScript**, with runtime **Danish/English localization**.

## Tech stack

- **Angular 19** (standalone components, signals)
- **TypeScript**
- **SCSS** (CSS variables, dark theme)
- **Vite** (optional dev tooling; build uses Angular CLI)

## Commands

```bash
npm install
npm run start      # Dev server at http://localhost:4200
npm run build      # Production build (output: dist/personal-cv)
npm run build:pages   # Build with base href for GitHub Pages
```

## Localization (da/en)

All copy lives in [`src/app/i18n/translations.ts`](src/app/i18n/translations.ts) as typed `en` and `da` dictionaries. [`src/app/i18n/language.service.ts`](src/app/i18n/language.service.ts) exposes the current language as a signal; the DA/EN toggle in the hero switches it. The choice is persisted in `localStorage` and defaults to the browser language (Danish browsers get Danish).

To change copy, edit `translations.ts` — the section components under `src/app/sections/` only render the dictionaries.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment**:
   - Source: **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually). The **Build and deploy to GitHub Pages** workflow will build and publish the site.

The site is available at **https://olsen7351.github.io/Profile/**.

## Content

- **About** – Short intro and tech focus.
- **Education** – BEng in Software Technology (VIA University College Horsens, incl. ML/computer vision bachelor project), Army Sergeant School.
- **Experience** – Systematic, Kamstrup, Forsvaret.
- **Projects** – [Smash](https://www.smash.rns-apps.dk) (hobby project), Padel Analytics (bachelor project), and this portfolio.
- **Skills** – Languages, frontend/backend, DevOps, practices.
- **Contact** – Email, phone, LinkedIn.

Styling is in `src/styles.scss` and each component's `styles` array.
