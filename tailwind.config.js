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
        about: "url('/src/assets/About/about.jpg')",
        services: "url('/src/assets/Services/Bg-services.jpg')",
      },
    },
  },
  plugins: [],
};
