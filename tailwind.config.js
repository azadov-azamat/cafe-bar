/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_dark: "rgb(19, 19, 52)",
        primary_yellow: "#EABD52",
        primary_red: "#EB7058"
      }
    },
  },
  plugins: [],
}