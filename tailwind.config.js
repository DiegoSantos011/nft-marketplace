/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kurio: {
          bg: '#140D0A',
          card: '#1F1410',
          border: '#33221C',
          accent: '#E59866',
          orange: '#D47A3B',
        }
      }
    },
  },
  plugins: [],
}