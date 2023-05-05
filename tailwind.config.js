/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#008D2D",
        secondaryColor: "#343434",
      },
      backgroundImage: {
        heroImage: "url('./src/assets/Main frame.svg')",
      },
      gridTemplateColumns: {
        fourBox: "repeat(4, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [],
};
