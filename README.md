# Trinity Christian School Website

A modern, responsive website for Trinity Christian School in Nsoatre, Bono Region, Ghana.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **UI**: React 18
- **Fonts**: DM Sans, Playfair Display (Google Fonts)
- **Icons**: React Icons

## Getting Started

### Development

Run the development server normally; keep `output: 'export'` enabled in
`next.config.mjs`:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Run the production build:

```bash
npm run build
```

With `output: 'export'` enabled, this creates the static site in `/out`,
ready for deployment.

### Deployment

The site is configured for static hosting on Netlify:
- Push to GitHub
- Netlify automatically runs `npm run build`
- Deploys the `/out` directory
- Check the Netlify deploy status before sharing the updated site.

## Project Structure

```
├── app/
│   ├── components/     # Reusable React components
│   ├── data/          # Static data (testimonials, links, etc.)
│   ├── about/         # About page
│   ├── academics/     # Academics page
│   ├── admissions/    # Admissions page
│   ├── contact/       # Contact page
│   ├── gallery/       # Gallery page
│   ├── globals.css    # Global styles
│   ├── layout.js      # Root layout
│   └── page.js        # Home page
├── public/
│   ├── images/        # Image assets
│   └── videos/        # Video assets
├── netlify.toml       # Netlify configuration
├── next.config.mjs    # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Color Palette

- **Plum**: `#17469b` (Primary brand color)
- **Plum Dark**: `#09245e`
- **Plum Light**: `#2563b4`
- **Gold**: `#ee4b2b` (Accent color)
- **Gold Light**: `#ffb09a`

## Contact

Trinity Christian School
Behind Adwinsa Hotel
Nsoatre, Bono Region, Ghana

📞 +233 24 799 5835 | +233 24 929 8640
📧 trinitychristianschoolnsoatre@gmail.com
