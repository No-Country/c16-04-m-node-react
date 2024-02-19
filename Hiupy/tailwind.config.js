/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        af7d4d: "#AF7D4D",
      },
      textColor: {
        ff9c00: "#FF9C00",
        c7786c: "#C7786C",
        caceb9: "#CACEB9",
        e2a748: '#E2A748',
      },
      fontFamily: {
        poppins: ["Poppins"], //instalacion de fuente poppins
      },
    },
  },
  plugins: [],
};
