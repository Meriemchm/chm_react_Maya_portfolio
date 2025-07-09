/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPink: "#FFE1E9 ",
        secondPink: "#FFA2BA",
        third: "#F9F9F9",
        four: "#FFFFFF",
        purpleSix: "#ECE8FF",
        sevenyellow : '#FFF0B5',
        eightBlue : '#BFD8EE',
      },
    },
  },
  plugins: [],
};