/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'chelsea-market': ["chelsea-market", "sans-serif"],
        gluten: ["gluten", "sans-serif"],
      }
    },
  },
  plugins: [],
}

