/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // Include the root index.html
    "./src/client/**/*.{js,ts,jsx,tsx}",  // Include all JS/TS/JSX/TSX files in src/client
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
