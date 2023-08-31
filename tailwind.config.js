/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '18': '1fr 8fr',
        '16': '2.5fr 32fr',
        '10': '1fr 10fr',
        // Complex site-specific row configuration
      },
      gridTemplateColumns :{
        '560': '5fr 16fr 10fr',
        '91': '14fr 6fr'
        
      }
    },
  },
  plugins: [],
}

