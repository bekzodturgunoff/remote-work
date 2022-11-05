/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 98%)",
        grey: "hsl(0, 0%, 41%)",
        black: "hsl(0, 0%, 8%)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
