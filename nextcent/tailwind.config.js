/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "780px",
      lg: "1024px",
      xl: "1111px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#28CB8B",
        secondary: "#263238",
        info: "#2194f3",
        header_bg: "#F5F7FA",
        hero_bg: "#F5F7FA",
        heading: "#4D4D4D",
        heading_sec: "#4CAF4F",
        gray: "#717171",
      },
    },
  },
  plugins: [],
}
