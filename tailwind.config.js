/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}",
    
  ],

  theme: {
    extend: {

      colors: {

         primary: "#ffb4aa",
        "primary-container": "#e30613",

        background: "#131313",
        surface: "#131313",

        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",

        "on-background": "#e5e2e1",
        "on-primary-container": "#fff5f3",

        secondary: "#c8c6c5",
        "secondary-container": "#4a4949",

        outline: "#af8782",
        "outline-variant": "#5e3f3b",

        error: "#ffb4ab",
        "error-container": "#93000a",
      },

      fontFamily: {

        headline: ["Epilogue", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],

      },

      borderRadius: {

        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",

      }

    },
  },

  plugins: [],
}
