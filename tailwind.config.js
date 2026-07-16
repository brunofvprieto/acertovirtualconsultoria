/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bordo: {
          DEFAULT: "#5C1A1E",
          dark: "#401114",
          deep: "#2E0C0E",
          light: "#7A2A2F",
        },
        dourado: {
          DEFAULT: "#C2973F",
          light: "#D9B76A",
          pale: "#EADBB8",
        },
        offwhite: "#F6F2E9",
        creme: "#FBF9F3",
        tinta: "#2A1B1A",
        cinza: "#6E5F58",
      },
      fontFamily: {
        display: ["Marcellus", "Georgia", "serif"],
        sans: ["Figtree", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
