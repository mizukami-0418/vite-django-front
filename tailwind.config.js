// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#d1fae5", // 明るい緑
          DEFAULT: "#10b981", // ベースの緑
          dark: "#047857", // 濃い緑
        },
      },
    },
  },
  plugins: [],
};
