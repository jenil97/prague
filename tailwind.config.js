/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oswald: "Oswald",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/Hero/BG.jpg')",
      },
    },
  },
  plugins: [],
};