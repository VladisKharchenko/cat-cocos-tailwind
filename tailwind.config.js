/*@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 10px 10px rgba(0, 0, 0, 0.3)",
        "4xl": "0px 0px 10px 10px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
