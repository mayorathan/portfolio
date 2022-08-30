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
      orange: "#ff8948",
      yellow: "#f3ef6d",
      red: "#fa7c78",
      green: "#9ed264",
      blue: "#61b8d0",
      purple: "#8c80cf",
      hotPink: "#d53864",
      cloud: "#fefffe",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
};
