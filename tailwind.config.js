/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkText': '#1a171f',
        'paragraphColor': '#b4b2b7',
        'saleBackground': '#fff1e2',
        'saleColor': '#edb773',
        'counterButton': '#f9f8fd'
      },
      fontSize: {
        'minimum': '8px'
      }
    },
  },
  plugins: [],
}
