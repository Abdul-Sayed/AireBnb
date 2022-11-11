/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false,
  variants: {
    extend: [],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#9aa0a6",
          600: "#70757a",
          700: "#202124",
        },
      },
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
