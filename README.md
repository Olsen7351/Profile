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

## Deploy to GitHub Pages (publish from `docs` folder)

1. **Create a GitHub repository** for this project (this repo is set up for a repo named **Profile**).
2. **Configure git and push** (use the commands GitHub shows when you create the repo; they look like this):

   ```bash
   git remote add origin https://github.com/your-username/your-project-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Create the `gh-pages` branch and build:**

   ```bash
   git checkout -b gh-pages
   npm run deploy:pages
   ```

   This runs `ng build --output-path docs --base-href /Profile/` and then moves the build into `docs/` and creates `docs/404.html` for SPA routing.

4. **Commit and push:**

   ```bash
   git add docs package.json scripts
   git commit -m "Build for GitHub Pages"
   git push -u origin gh-pages
   ```

5. **On GitHub:** go to the repo **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **gh-pages** and folder **/docs**, then **Save**.

Your site will be at **https://\<user_name\>.github.io/Profile/**.

## Content

- **About** – Short intro and tech focus (TypeScript, Java, CI/CD, testing).
- **Experience** – Systematic, RNS Apps, Kamstrup, Forsvaret.
- **Projects** – [Smash](https://www.smash.rns-apps.dk), [POS](https://www.pos.rns-apps.dk), and profile/demo links.
- **Skills** – Languages, frontend/backend, DevOps, practices.
- **Contact** – Email, phone, LinkedIn, and openness to SDE roles.

Edit the section components under `src/app/sections/` to change copy. Styling is in `src/styles.scss` and each component’s `styles` array.
