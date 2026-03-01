import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Trirong", "serif"],
        birthstone: ["Birthstone", "cursive"],
      },
      animation: {
        fadeUp: "fadeUp 1.2s ease-out forwards",
      },
    },
  },
  plugins: [
    lineClamp,
  ],
};
