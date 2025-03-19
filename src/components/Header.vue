<template>
  <header class="neo-header" :class="{ 'menu-open': isMenuOpen }">
    <!-- Main Header Bar -->
    <div class="header-bar">
      <router-link to="/" class="logo-container" @click="closeMenu">
        <!-- AI Generated Image: Minimalist logo for "World of Unreal" with a tech/futuristic style -->
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="logo-text">UNREAL</span>
      </router-link>
      
      <div class="header-controls">
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <div class="menu-icon" :class="{ 'active': isMenuOpen }">
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu Component -->
    <MobileMenu v-model:isOpen="isMenuOpen" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MobileMenu from './MobileMenu.vue';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  
  // Prevent body scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Close menu when route changes
router.afterEach(() => {
  closeMenu();
});
</script>

<style scoped>
:root {
  --neo-header-height: 60px;
  --neo-primary: #00CCFF;
  --neo-text: #FFFFFF;
  --neo-bg: rgba(6, 8, 15, 0.85);
  --neo-card: rgba(15, 20, 35, 0.5);
  --neo-border: rgba(255, 255, 255, 0.1);
}

.neo-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000; /* Higher than mobile menu */
  font-family: 'Montserrat', sans-serif;
}

/* Mobile-first styles */
@media (max-width: 768px) {
  .header-bar {
    background-color: transparent;
    backdrop-filter: none;
    border-bottom: none;
  }
  
  .logo-container {
    opacity: 0.8;
  }
  
  .menu-toggle {
    z-index: 1001; /* Ensure it's above the mobile menu */
  }
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: var(--neo-bg);
  backdrop-filter: blur(12px);
  height: var(--neo-header-height);
  border-bottom: 1px solid var(--neo-border);
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--neo-text);
  gap: 0.75rem;
}

.logo-icon {
  width: 24px;
  height: 24px;
  color: var(--neo-primary);
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle, .menu-toggle {
  position: relative;
  z-index: 10001; /* Highest z-index to always be clickable */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neo-text);
  transition: color 0.3s ease;
}

.theme-toggle:hover, .menu-toggle:hover {
  color: var(--neo-primary);
}

.material-icons {
  font-size: 1.25rem;
}

.menu-icon {
  width: 22px;
  height: 14px;
  position: relative;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.menu-icon:hover {
  transform: scale(1.1);
}

.menu-icon .bar {
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: var(--neo-text);
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6),
              opacity 0.3s ease,
              background-color 0.3s ease;
}

.menu-icon .bar:first-child {
  top: 0;
  transform-origin: 100% 0%;
}

.menu-icon .bar:last-child {
  bottom: 0;
  transform-origin: 100% 100%;
}

.menu-icon.active .bar:first-child {
  transform: rotate(45deg) translate(2px, -1px);
  background-color: var(--neo-primary);
}

.menu-icon.active .bar:last-child {
  transform: rotate(-45deg) translate(2px, 1px);
  background-color: var(--neo-primary);
}

/* Media Queries */
@media (min-width: 768px) {
  .header-bar {
    padding: 0 2rem;
  }
}

@media (max-width: 359px) {
  .logo-text {
    display: none;
  }
}
</style> 