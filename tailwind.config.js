/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#210124',
          dark: '#18001b'
        },
        secondary: {
          DEFAULT: '#66A182',
          dark: '#568973'
        },
        accent: '#E7E6F7',
      },
    },
  },
  plugins: [],
}
