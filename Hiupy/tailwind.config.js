/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'af7d4d': '#AF7D4D',
      },
      textColor: {
        'ff9c00': '#FF9C00',
      },
      fontFamily: {
        poppins: ['Poppins']  //instalacion de fuente poppins
      }
    },
  },
  plugins: [],
}