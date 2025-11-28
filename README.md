# React-Portfolio (Vite + React)

Quick commands

- Initialize git & commit:
  ```
  cd D:\React\React-Portfolio
  git init
  git add .
  git commit -m "Initial React + Vite migration"
  ```

- Install deps (if not already):
  ```
  npm install
  ```

- Run dev server:
  ```
  npm run dev
  ```

- Build and preview:
  ```
  npm run build
  npm run preview
  ```

Deploy options

- GitHub Pages (automatic via Action):
  1. Set `homepage` in package.json to `https://<username>.github.io/<repo>/`.
  2. Push to `main`. The `deploy-gh-pages` workflow will build and publish to `gh-pages` branch.
  3. Or locally:
     ```
     npm run deploy
     ```

- Netlify:
  1. Connect repository in Netlify UI.
  2. Set build command: `npm run build` and publish directory: `dist`.
  3. The included `netlify.toml` contains the redirect and build settings.

- Vercel:
  1. Connect repo in Vercel.
  2. Vercel auto-detects Vite. Build command `npm run build`, Output Directory `dist`.

CI
- The GitHub Actions workflow at `.github/workflows/ci.yml` will run on push/PR to `main` and build the project.

If you want, I can:
- Add a GitHub Actions secret and create a custom deploy action for other targets.
- Add an image-optimization step or Lighthouse audit in CI.
