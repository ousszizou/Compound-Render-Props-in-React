/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "indeterminate-bar":
          "indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
      },
      keyframes: {
        "indeterminate-bar": {
          "0%": {
            transform: "translateX(-50%) scaleX(0.2)",
          },
          "100%": {
            transform: "translateX(100%) scaleX(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
