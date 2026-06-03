/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B7543",
        primaryDark: "#145A34",
        primaryLight: "#EAF6EF",
      },
    },
  },
  plugins: [],
}