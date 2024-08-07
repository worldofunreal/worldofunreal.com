/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/components/**/*.{vue,js}",
    "./src/views/**/*.vue",
    "./src/App.vue",
    "./src/main.js",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'blur-saturate': 'saturate(180%) blur(15px)',
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1920px",
      },
      boxShadow: {
        "btm-right": "8px 12px 24px -12px #666565",
        "top-right": "-12px -8px 24px -12px #666565",
        around: "0px 0px 17px 2px rgba(255, 255, 255, 0.43)",
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
