/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Figtree"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
