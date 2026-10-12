# Ankit Kumar Sharma — Portfolio

Responsive React + Vite portfolio with animated visuals, project filtering, skills, experience, and contact sections.

## Run locally

From the `neon-portfolio` folder:

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Update projects

Edit only `src/projects.js` to add, remove, or update project cards. Copy an object and change its title, type, description, technologies, icon, and color. Add repository and demo URLs when available.

## Resume

The Resume button opens/downloads `public/resume.pdf`. Replace that file when your resume changes.

## Deploy on Vercel

This project is in the `neon-portfolio` subfolder. In the Vercel project dashboard, open **Settings → Build & Development Settings** and set **Root Directory** to `neon-portfolio` (enable “Include files outside the root directory” only if Vercel requires it). Save and redeploy the latest `main` deployment.

Use these settings:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install` (default)

If Vercel's Root Directory field was already set to `neon-portfolio`, then the GitHub `main` branch at the commit in the log does not contain `src/main.jsx` in that folder. Check that the complete `neon-portfolio/src` directory is committed and pushed, then redeploy.
