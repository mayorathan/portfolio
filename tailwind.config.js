/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#1c1e20",
      foreground: "#b8daee",
      orange: "#ff8948",
      red: "#fa7c78",
      green: "#9ed264",
      blue: "#61b8d0",
      purple: "#8c80cf",
      cloud: "#fefffe",
      // unused colors
      hotPink: "#d53864",
      yellow: "#f3ef6d",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
};
