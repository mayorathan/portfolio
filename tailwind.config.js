/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: "#1c1e20",
      foreground: "#b8daee",
      orange: "#f18238",
      red: "#d12a24",
      lightGreen: "#9ed264",
      blue: "#4f96be",
      lightblue: "#61b8d0",
      purple: "#695abb",
      hotPink: "#d53864",
      cloud: "#fefffe",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
