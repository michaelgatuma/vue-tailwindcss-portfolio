/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'col-span-4'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

