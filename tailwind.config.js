/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        primary: "#15A3C7",
        secondary: "#00AF9A",
      },

      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        gothic: ["Dela Gothic One", "cursive"],
      },
    },
  },
  plugins: [],
};
