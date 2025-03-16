<template>
  <header class="header" :class="{ 'dark-mode': enabled }">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="brand-logo">
          <img v-if="enabled" src="/src/favicon-wb.png" alt="World of Unreal" class="logo-img" />
          <img v-else src="/src/favicon-bw.png" alt="World of Unreal" class="logo-img" />
          <span class="logo-text">World of Unreal</span>
        </router-link>
      </div>
      
      <div class="navigation-menu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/theme-demo" class="nav-link">Theme Demo</router-link>
        <router-link to="/style-guide" class="nav-link">Style Guide</router-link>
        <a href="https://twitter.com/worldofunreal" target="_blank" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
          </svg>
        </a>
      </div>

      <div class="flex items-center">
        <button @click="toggleTheme" class="theme-toggle ml-4" aria-label="Toggle theme">
          <svg v-if="enabled" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled, toggleTheme } = useTheme();
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--primary-alpha);
  background-color: rgba(250, 250, 250, 0.85);
}

.header.dark-mode {
  background-color: rgba(10, 12, 20, 0.85);
}

.brand-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 32px;
  width: auto;
  margin-right: 10px;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #1E1E1E;
  position: relative;
}

.header.dark-mode .logo-text {
  color: #FFFFFF;
}

.brand-logo::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 42px;
  width: 30%;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px var(--primary-alpha);
}

.brand-logo:hover::after {
  width: calc(100% - 42px);
}

.navigation-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-dark);
  position: relative;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
}

.header.dark-mode .nav-link {
  color: var(--text-light);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
  box-shadow: 0 0 5px var(--primary-alpha);
}

.nav-link:hover {
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-alpha);
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: var(--primary-color) !important;
  text-shadow: 0 0 5px var(--primary-alpha);
}

.router-link-active::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--text-dark);
  padding: 0.5rem;
  border-radius: 0;
  position: relative;
  transition: all 0.3s ease;
}

.header.dark-mode .theme-toggle {
  color: var(--text-light);
}

.theme-toggle:hover {
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-alpha);
}
</style>
