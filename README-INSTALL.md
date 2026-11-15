# Temporal Portfolio — redesign overlay

This package is an overlay for your new repository. Your new repository already contains the original Magic Portfolio Next.js codebase; this overlay adds the redesign while preserving its existing project pages, writing, gallery, and portfolio content.

## Target repository

https://github.com/VyshakhVengilode/vyshakhvengilode-portfolio

## 1. Clone your new repository

Run these commands in Windows PowerShell:

```powershell
git clone https://github.com/VyshakhVengilode/vyshakhvengilode-portfolio.git
Set-Location .\vyshakhvengilode-portfolio
```

## 2. Apply this overlay

Extract this ZIP to a temporary folder. Copy the package's `src` and `public` folders into the cloned `vyshakhvengilode-portfolio` folder, merging folders and replacing only matching files. Do not delete the other files already in the repository.

For example, when the ZIP is extracted to your Downloads folder as `temporal-portfolio-overlay`, run:

```powershell
Copy-Item "$HOME\Downloads\temporal-portfolio-overlay\src\*" .\src -Recurse -Force
Copy-Item "$HOME\Downloads\temporal-portfolio-overlay\public\*" .\public -Recurse -Force
```

Then commit and push the redesign:

```powershell
git add .
git commit -m "Build cinematic temporal portfolio experience"
git push origin main
```

## 3. Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## What's changed

- `src/app/page.tsx` — cinematic home page and retained featured project, recent writing, more projects, and newsletter sections.
- `src/app/home.module.scss` — visual treatment for those retained archive sections.
- `src/components/TemporalExperience.tsx` — time-travel experience, chapter navigation, live IST clock, scroll progress, section-aware navigation, profile loop, background loop, contact and preserved navigation links.
- `src/components/TemporalExperience.module.scss` — responsive futuristic interface and motion.
- `public/media/vyshakh-profile-loop.mp4` — compressed uploaded profile video, used in the circular profile and as the fixed ambient background at 20% opacity.

The existing `/about`, `/work`, `/publications`, `/blog`, `/gallery`, `/fav`, and `/astero-shooter` routes and their content files are not overwritten by this overlay.

No new npm dependencies are required.
