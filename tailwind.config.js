/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strictly three colors site-wide — Vanilla Custard, Midnight
        // Espresso, Pistachio Frost. Everything else is one of these
        // three at reduced opacity, never a fourth hue.
        background: '#fff9eb', // VANILLA CUSTARD
        dark: '#200f07',       // MIDNIGHT ESPRESSO
        'dark-surface': '#200f07',
        onyx: {
          DEFAULT: '#200f07',
          surface: '#200f07',
          light: '#200f07',
          muted: 'rgba(32, 15, 7, 0.7)'
        },
        olive: {
          DEFAULT: '#200f07',
          hover: '#200f07',
          dark: '#200f07',
          light: '#c5e384',
          subtle: 'rgba(197, 227, 132, 0.15)'
        },
        bone: {
          DEFAULT: '#fff9eb',
          surface: '#fff9eb',
          dark: '#fff9eb',
          subtle: '#fff9eb',
          pure: '#fff9eb'
        },
        accent: {
          DEFAULT: '#200f07',
          hover: '#200f07',
          light: '#c5e384',
          subtle: 'rgba(197, 227, 132, 0.15)'
        },
        muted: 'rgba(32, 15, 7, 0.7)',
        border: 'rgba(32, 15, 7, 0.14)',
        'border-strong': 'rgba(32, 15, 7, 0.28)'
      },
      fontFamily: {
        // Manrope — clean, highly readable body/UI text.
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        // Oswald — bold condensed editorial display face for headings,
        // section titles, package/destination names and big numbers.
        display: ['Oswald', 'system-ui', 'sans-serif'],
        // Cormorant Garamond — elegant editorial serif accent, used
        // sparingly (italic) for one emphasis word inside headings,
        // never for body copy.
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '24px',
        'card-sm': '14px'
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(32, 15, 7, 0.06), 0 1px 4px -1px rgba(32, 15, 7, 0.03)',
        'card': '0 8px 24px -6px rgba(32, 15, 7, 0.09), 0 2px 6px -2px rgba(32, 15, 7, 0.05)',
        'lifted': '0 16px 36px -8px rgba(32, 15, 7, 0.16), 0 4px 12px -2px rgba(32, 15, 7, 0.08)',
      }
    },
  },
  plugins: [],
}
