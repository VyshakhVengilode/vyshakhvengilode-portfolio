# Temporal Portfolio — Vercel build fix

This patch fixes the CSS Modules compilation error reported by Vercel.

## Apply
1. Extract this ZIP into the root of `VyshakhVengilode/vyshakhvengilode-portfolio`.
2. Allow the two files under `src/components/` to replace the existing files.
3. Commit and push the changes to `main`.
4. Vercel will automatically start a new deployment.

## What changed
- Removed two `:global(...)` parent selectors from `TemporalExperience.module.scss`. They violated Next.js CSS Modules selector purity.
- Moved the same header/footer hiding rules into a `style jsx global` block in `TemporalExperience.tsx`, scoped by the page marker `data-temporal-page="true"`.
- No portfolio content, navigation links, project assets, or video files were changed.

The Vercel warnings about `cache-dir`, install scripts, and stale Browserslist data were not the cause of the failed build.
