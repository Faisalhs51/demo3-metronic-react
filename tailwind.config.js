/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      boxShadow: {
        'card1': '0px 0px 20px 0px rgba(76, 87, 125, 0.02)',
      }
    },
  },
  plugins: [],
};
