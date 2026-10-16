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

## Google Search Setup

After the custom domain is serving valid HTTPS and the SEO changes are deployed:

1. Add `https://trinityschoolnsoatre.com/` as a Domain property in
   [Google Search Console](https://search.google.com/search-console/), using the
   DNS verification record Google provides.
2. Submit `https://trinityschoolnsoatre.com/sitemap.xml` in Search Console.
3. Use URL Inspection to request indexing for the homepage and important pages.
4. Keep school name, address, phone numbers, and website consistent across the
   site and school listings.

Google decides when and where pages appear in search; indexing and ranking are
not immediate or guaranteed. A Google Business Profile is managed separately.

## Why This Matters

- `output: 'export'` makes `npm run build` create the static site in `/out`.
- `netlify.toml` publishes `/out`.
- `npm run dev` continues to run the local development server.
- `app/sitemap.js` and `app/robots.js` generate the sitemap and crawler rules.

## Current Status

The production build and lint should pass before deployment. Confirm the
Netlify deploy succeeds, then complete Google Search Console setup and test the
live pages and forms afterward.
