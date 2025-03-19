// src/App.vue
<template>
  <div :data-theme="theme" class="app">
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Footer from './components/Footer.vue';
import useTheme from './utils/useTheme';

const { enabled } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap');
@import './utils/themeUtilities.css';

/*
COLOR USAGE GUIDELINES:
1. Text Colors:
   - For main text: Use var(--text-dark) in light theme and var(--text-light) in dark theme
   - For muted text: Use var(--text-muted-dark) in light theme and var(--text-muted-light) in dark theme
   - NEVER use hardcoded colors like #FFFFFF or #000000 for text
   - Any component-specific text colors should ALWAYS include [data-theme="light"] overrides

2. Background Colors:
   - For main backgrounds: Use var(--light-bg) in light theme and var(--dark-bg) in dark theme
   - For cards/elevated elements: Use var(--light-card) in light theme and var(--dark-card) in dark theme

3. Accent Colors:
   - Primary accent: var(--primary-color) (automatically switches between themes)
   - Secondary accent: var(--secondary-color) (automatically switches between themes)
   - For transparency/alpha versions: Use var(--primary-alpha) and var(--secondary-alpha)

4. CSS Pattern for Theme-Specific Styling:
   ```css
   .my-element {
     color: var(--text-dark);
     background-color: var(--light-bg);
   }
   
   [data-theme="dark"] .my-element {
     color: var(--text-light);
     background-color: var(--dark-bg);
   }
   ```
*/

:root {
  /* Theme-specific primary colors */
  --primary-dark: #00CCFF; /* Brighter cyan for dark mode */
  --primary-light: #0066CC; /* Deeper blue for light mode */
  
  /* Secondary accent color */
  --secondary-dark: #4D3AFF; /* Vibrant purple-blue for dark mode */
  --secondary-light: #3A66FF; /* Vivid blue for light mode */
  
  /* Shared variables */
  --dark-bg: #0A0C14;
  --dark-card: #14161E;
  --light-bg: #F0F3FF;
  --light-card: #FFFFFF;
  --text-dark: #1E1E1E;
  --text-light: #FFFFFF;
  --text-muted-dark: rgba(30, 30, 30, 0.7);
  --text-muted-light: rgba(255, 255, 255, 0.7);
  
  /* These will be set dynamically based on theme */
  --primary-color: var(--primary-light);
  --secondary-color: var(--secondary-light);
  --primary-alpha: rgba(0, 102, 204, 0.1);
  --secondary-alpha: rgba(58, 102, 255, 0.15);
  --tech-glow: rgba(58, 102, 255, 0.6);
  --tech-gradient: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%);
  --tech-dark-gradient: linear-gradient(135deg, #0A0C14 0%, #14161E 100%);
}

[data-theme="dark"] {
  --primary-color: var(--primary-dark);
  --secondary-color: var(--secondary-dark);
  --primary-alpha: rgba(0, 204, 255, 0.1);
  --secondary-alpha: rgba(77, 58, 255, 0.15);
  --tech-glow: rgba(77, 58, 255, 0.6);
  --tech-gradient: linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background-color: var(--light-bg);
  color: var(--text-dark);
  transition: background-color 0.3s ease, color 0.3s ease;
}

[data-theme="dark"] body {
  background-color: var(--dark-bg);
  color: var(--text-light);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  p {
    font-size: 0.9rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
}

@media (min-width: 1025px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
}
</style>
