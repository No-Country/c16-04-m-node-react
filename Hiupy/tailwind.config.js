/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ['Poppins']  //instalacion de fuente poppins
      },
      colors: {
        'dark-grey': '#A9A9A9',
        'amarillo-custom': '#FF9C00',
        'botones': '#AF7D4D',
        'light-grey': '#D9D9D9'
      }
    },
  },
  plugins: [],
}