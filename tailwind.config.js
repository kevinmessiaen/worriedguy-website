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
      },
      colors: {
          'granite-green': {
                  '50': '#f4f3f1',
                  '100': '#e7e5e0',
                  '200': '#d1cec5',
                  '300': '#b4b1a2',
                  '400': '#8c8773',
                  '500': '#7c7866',
                  '600': '#615e4f',
                  '700': '#4c4a3f',
                  '800': '#3f3d35',
                  '900': '#373630',
                  '950': '#1c1b17',
              },

      }
    },
  },
  plugins: [],
}

