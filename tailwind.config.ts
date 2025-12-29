import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#f4c025',
        'background-light': '#f8f8f5',
        'background-dark': '#231e10',
        'surface-dark': '#342d18',
        'surface-highlight': '#493f22',
        'border-dark': '#493f22',
        'card-dark': '#342d18',
        'text-muted': '#cbbc90',
        'input-border': '#685a31',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'body': ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

export default config
