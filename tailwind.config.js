/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: '#17469b',
        'plum-dark': '#09245e',
        'plum-light': '#2563b4',
        gold: '#ee4b2b',
        'gold-light': '#ffb09a',
        ink: '#25212a',
        muted: '#726c75',
        paper: '#f7f9fc',
        border: '#e3e9f2',
      },
      boxShadow: {
        school: '0 18px 54px rgb(9 36 94 / 12%)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}
