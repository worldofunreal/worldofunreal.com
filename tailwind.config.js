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
      colors: {
        // Theme color variables that automatically adapt to theme
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        
        // Background and text colors
        'bg-light': 'var(--light-bg)',
        'bg-dark': 'var(--dark-bg)',
        'card-light': 'var(--light-card)',
        'card-dark': 'var(--dark-card)', 
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'text-muted-light': 'var(--text-muted-light)',
        'text-muted-dark': 'var(--text-muted-dark)',
      },
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
        // Theme-aware shadows
        'primary-glow': '0 0 15px var(--primary-alpha)',
        'tech-glow': '0 0 15px var(--tech-glow)',
      },
      backgroundImage: {
        'tech-gradient': 'var(--tech-gradient)',
        'tech-dark-gradient': 'var(--tech-dark-gradient)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    // Custom plugin for theme-specific utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'var(--tech-gradient)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
