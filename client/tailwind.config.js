/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        new4: "repeat(4, minmax(100px, 600px))",
      },
    },
  },
  plugins: [],
};
