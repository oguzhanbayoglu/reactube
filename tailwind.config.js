/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myDark: {
          primary: "#f87171",

          secondary: "#a5b4fc",

          accent: "#2dd4bf",

          neutral: "#1f2937",

          "base-100": "#101010",

          info: "#0369a1",

          success: "#86efac",

          warning: "#facc15",

          error: "#e11d48",
        },

        myLight: {
          primary: "#f87171",

          secondary: "#a5b4fc",

          accent: "#2dd4bf",

          neutral: "#1f2937",

          "base-100": "#fafafa",

          info: "#0369a1",

          success: "#86efac",

          warning: "#facc15",

          error: "#e11d48",
        },
      },
    ],
  },
};
