# DEPLOYMENT CHECKLIST

## Before You Deploy to Netlify

1. Keep `output: 'export',` enabled in `next.config.mjs`.
2. Test the production build locally:
   ```bash
   npm run build
   ```
3. Verify that `/out` was created and contains the site assets.
4. Commit and push the intended site changes to GitHub.
5. Confirm the Netlify deploy succeeds before sharing it.

## For Local Development

Run `npm run dev` normally. Keep `output: 'export',` enabled; no config
toggle or manual `.next` cleanup is needed.

## Why This Matters

- `output: 'export'` makes `npm run build` create the static site in `/out`.
- `netlify.toml` publishes `/out`.
- `npm run dev` continues to run the local development server.

## Current Status

The production build and lint should pass before deployment. Confirm the
Netlify deploy succeeds and test the live pages and forms afterward.
