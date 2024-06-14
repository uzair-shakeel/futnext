/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/assets/bg-custom.png')",
        "custom-bg1": "url('/assets/Vector.png')",
        "custom-gradient":
          "linear-gradient(179.96deg, #00CE41 0.04%, rgba(0, 206, 65, 0) 74.93%)",
        "custom-gradient-p3":
          "linear-gradient(179.96deg, color(display-p3 0.000 0.792 0.333) 0.04%, color(display-p3 0.000 0.792 0.333 / 0) 74.93%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
