/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "900px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#D434FE",
        secondary: "#903AFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
    },
    animation: {
      blink: "blink 1s infinite",
    },
  },
  plugins: [],
};
