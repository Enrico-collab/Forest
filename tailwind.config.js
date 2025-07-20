/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/**/*.{html,js}", // seu src
    "./**/*.{html,js}", // pega todos os html e js de qualquer pasta (incluindo raiz)
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem", // substitui .5rem por 0.5rem para consistência
        sm: "1rem",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "system-ui", "sans-serif"],
      serif: ["DM Serif Text", "Georgia", "serif"],
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
        ["fade-in"]: "fadeIn .4s ease-in-out forwards",
      },
      colors: {
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#0F1C15",
          900: "#09140e",
          950: "#090d0b",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            "animation-delay": `${i * 100}ms`,
          };
        }
        return delays;
      }

      addUtilities(animationDelay());
    }),
  ],
};
