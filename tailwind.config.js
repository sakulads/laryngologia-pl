/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        11: "3.5rem",
      },
      background: {
        normal: "#f1f7ff",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      width: {
        maximum: "96rem",
      },
      maxWidth: {
        maximum: "96rem",
      },
      colors: {
        gray: {
          400: "#646464",
        },
        emerald: { 400: "#16C79A" },
        blue: {
          400: "#5a9bfe",
          900: "#303b82",
        },
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 1.3s cubic-bezier(0.36, 1, 0.3, 2)",
        "slide-down-fade": "slide-down-fade 1.4s cubic-bezier(0.36, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.1,
    }),
  },
  plugins: [
    require("tailwindcss-ripple")(),
    require("@tailwindcss/forms"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("flowbite/plugin"),
  ],
};
