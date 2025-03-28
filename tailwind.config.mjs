const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"],
      },
      boxShadow: {
        'black': '4px 4px 0px 0px #000000',
        'white': '4px 4px 0px 0px #ffffff'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  darkMode: 'selector',
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};

