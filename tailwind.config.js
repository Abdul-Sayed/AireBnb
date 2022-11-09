/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
