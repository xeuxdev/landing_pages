/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1111px",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        orb: ["var(--font-orb)"],
        fell: ["var(--font-fell)"],
      },
      colors: {
        background: "#010208",
      },
    },
  },
  plugins: [],
}
