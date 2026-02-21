# Personal CV – Jens Møller Olsen

A one-page personal CV site built with **Angular 19** and **TypeScript**, styled for readability and tailored to software engineering roles (e.g. [Software Development Engineer I at Expedia Group](https://careers.expediagroup.com/job/software-development-engineer-i/rome-Roma/R-101721/)).

## Tech stack

- **Angular 19** (standalone components)
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

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `YourUsername/Personal_CV`).
2. In the repo: **Settings → Pages → Build and deployment**:
   - Source: **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually). The **Build and deploy to GitHub Pages** workflow will build and publish the site.

The site will be available at:

**https://YourUsername.github.io/Personal_CV/**

To use a custom domain or deploy from a different branch, adjust the workflow and `base-href` in `package.json` (`build:pages` script) and in the workflow artifact path if needed.

## Content

- **About** – Short intro and tech focus (TypeScript, Java, CI/CD, testing).
- **Experience** – Systematic, RNS Apps, Kamstrup, Forsvaret.
- **Projects** – [Smash](https://www.smash.rns-apps.dk), [POS](https://www.pos.rns-apps.dk), and profile/demo links.
- **Skills** – Languages, frontend/backend, DevOps, practices.
- **Contact** – Email, phone, LinkedIn, and openness to SDE roles.

Edit the section components under `src/app/sections/` to change copy. Styling is in `src/styles.scss` and each component’s `styles` array.
