// src/App.vue
<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <router-link to="/" class="logo">WORLD OF UNREAL</router-link>
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>

    <!-- Portal Overlay -->
    <div class="portal-overlay" :class="{ active: isTransitioning }"></div>

    <!-- Main Content -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" @before-enter="startTransition" @after-enter="endTransition">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Mobile Menu -->
    <nav class="mobile-menu">
      <router-link to="/" class="menu-item">
        <component :is="ThemedIcons.HomeIcon" class="menu-icon" />
        <span>Home</span>
      </router-link>
      <router-link to="/services" class="menu-item">
        <component :is="ThemedIcons.ServicesIcon" class="menu-icon" />
        <span>Services</span>
      </router-link>
      <router-link to="/about" class="menu-item">
        <component :is="ThemedIcons.AboutIcon" class="menu-icon" />
        <span>About</span>
      </router-link>
      <router-link to="/contact" class="menu-item">
        <component :is="ThemedIcons.ContactIcon" class="menu-icon" />
        <span>Contact</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemedIcons from './utils/useIconSystem';

const isTransitioning = ref(false);

const startTransition = () => {
  isTransitioning.value = true;
};

const endTransition = () => {
  isTransitioning.value = false;
};
</script>

<style>
/* Reset and Base Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0A0C1B;
  color: white;
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(0, 204, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(153, 51, 255, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, #0A0C1B 0%, #1A0B36 100%);
  z-index: -1;
}

body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
  opacity: 0.5;
  animation: backgroundMove 20s linear infinite;
}

@keyframes backgroundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

/* App Layout */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(10, 12, 27, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desktop-nav {
  display: none;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-top: 60px;
  margin-bottom: 60px; /* Space for mobile menu */
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(10, 12, 27, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  opacity: 0.7;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 12px;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
}

/* Base state for all menu items */
.menu-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 204, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #00CCFF;
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  transition: transform 0.3s ease;
  box-shadow: 0 0 8px #00CCFF;
}

/* Hover state */
.menu-item:hover {
  opacity: 1;
  transform: translateY(-4px);
}

.menu-item:hover::before {
  opacity: 0.5;
}

.menu-item:hover .menu-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Active state */
.menu-item.router-link-active {
  opacity: 1;
  color: #00CCFF;
  transform: translateY(-4px);
}

.menu-item.router-link-active::before {
  opacity: 0.8;
  background: radial-gradient(circle at center, rgba(0, 204, 255, 0.2) 0%, transparent 70%);
}

.menu-item.router-link-active::after {
  transform: translateX(-50%) scale(1);
}

.menu-item.router-link-active .menu-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 0 8px rgba(0, 204, 255, 0.5));
}

/* Icon styles */
.menu-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 0.2rem;
  color: currentColor;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Text styles */
.menu-item span {
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.menu-item.router-link-active span {
  color: #00CCFF;
  text-shadow: 0 0 8px rgba(0, 204, 255, 0.3);
}

/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
  position: absolute;
  width: 100%;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Portal Effect */
.portal-overlay {
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1) 0%, transparent 70%),
    radial-gradient(circle at 50% 50%, rgba(153, 51, 255, 0.05) 0%, transparent 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 99;
}

.portal-overlay.active {
  opacity: 1;
}

/* Desktop Styles */
@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    opacity: 1;
  }

  .mobile-menu {
    display: none;
  }

  .main-content {
    margin-bottom: 0;
  }
}
</style>
