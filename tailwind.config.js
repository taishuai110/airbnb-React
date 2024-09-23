/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reset: {
          textColor: "#484848",
          textColorSecondary: "#222"
        },
        root: {
          primaryColor: "#ff385c",
          secondaryColor: "#00848A"
        },
        textColor: {
          primaryColor: "#484848",
          secondaryColor: "#222"
        }
      },

      margin: {
        opposite: "-0.5rem"
      }
    },
  },
  plugins: [],
}