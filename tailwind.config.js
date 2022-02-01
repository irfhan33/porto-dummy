const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)",
        },
      });
    }),
  ],
};
