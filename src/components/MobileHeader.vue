<template>
  <header class="mobile-header" :class="{ 'menu-open': isMenuOpen }">
    <!-- Main Header Bar -->
    <div class="header-bar">
      <router-link to="/" class="logo-container" @click="closeMenu">
        <img 
          :src="theme === 'dark' ? '/src/favicon-wb.png' : '/src/favicon-bw.png'" 
          alt="World of Unreal" 
          class="logo-img"
        />
        <span class="logo-text">World of Unreal</span>
      </router-link>
      
      <div class="header-controls">
        <button class="theme-toggle" @click="toggleTheme">
          <span v-if="theme === 'dark'" class="toggle-icon">☀️</span>
          <span v-else class="toggle-icon">🌙</span>
        </button>
        
        <button class="menu-toggle" @click="toggleMenu">
          <span class="menu-icon" :class="{ 'open': isMenuOpen }">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu (Slide Down) -->
    <nav class="mobile-nav" :class="{ 'open': isMenuOpen }">
      <div class="nav-links">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/services" class="nav-link" @click="closeMenu">Services</router-link>
        <router-link to="/blog" class="nav-link" @click="closeMenu">Blog</router-link>
        <router-link to="/theme-demo" class="nav-link" @click="closeMenu">Theme Demo</router-link>
        <router-link to="/style-guide" class="nav-link" @click="closeMenu">Style Guide</router-link>
      </div>
      
      <div class="social-links">
        <a href="https://twitter.com/worldofunreal" target="_blank" class="social-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
          </svg>
        </a>
        <a href="https://github.com/worldofunreal" target="_blank" class="social-link" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
    </nav>
    
    <!-- Backdrop for when menu is open -->
    <div class="menu-backdrop" v-if="isMenuOpen" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  theme: {
    type: String,
    default: 'light'
  }
});

const emit = defineEmits(['toggle-theme']);

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

const toggleTheme = () => {
  emit('toggle-theme');
};

// Close menu when route changes
router.afterEach(() => {
  closeMenu();
});
</script>

<style scoped>
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-family: 'Montserrat', sans-serif;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--light-card);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  transition: all 0.3s ease;
}

[data-theme="dark"] .header-bar {
  background-color: var(--dark-card);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-dark);
}

[data-theme="dark"] .logo-container {
  color: var(--text-light);
}

.logo-img {
  height: 32px;
  width: auto;
  margin-right: 0.5rem;
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: none; /* Hide text on smallest screens */
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle, .menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  transition: all 0.3s ease;
}

[data-theme="dark"] .theme-toggle, 
[data-theme="dark"] .menu-toggle {
  color: var(--text-light);
}

.theme-toggle:hover, .menu-toggle:hover {
  color: var(--primary-color);
}

.toggle-icon {
  font-size: 1.25rem;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  transition: all 0.3s ease;
}

.menu-icon .bar {
  width: 100%;
  height: 2px;
  background-color: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

[data-theme="dark"] .menu-icon .bar {
  background-color: var(--text-light);
}

/* Animated hamburger to X */
.menu-icon.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Navigation Menu */
.mobile-nav {
  position: absolute;
  top: 60px; /* Height of header bar */
  left: 0;
  width: 100%;
  background-color: var(--light-card);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

[data-theme="dark"] .mobile-nav {
  background-color: var(--dark-card);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.mobile-nav.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-links {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-link {
  padding: 1rem 1.5rem;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .nav-link {
  color: var(--text-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-link:hover, .nav-link.router-link-active {
  background-color: rgba(0, 0, 0, 0.03);
  color: var(--primary-color);
}

[data-theme="dark"] .nav-link:hover, 
[data-theme="dark"] .nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.03);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 0.5rem;
}

[data-theme="dark"] .social-links {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.social-link {
  color: var(--text-dark);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.03);
}

[data-theme="dark"] .social-link {
  color: var(--text-light);
  background-color: rgba(255, 255, 255, 0.03);
}

.social-link:hover {
  color: var(--primary-color);
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

[data-theme="dark"] .social-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Backdrop for when menu is open */
.menu-backdrop {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Media Queries */
@media (min-width: 480px) {
  .header-bar {
    padding: 0.75rem 1.5rem;
  }
  
  .logo-text {
    display: block; /* Show logo text on larger screens */
  }
}

@media (min-width: 768px) {
  .header-bar {
    padding: 0.75rem 2rem;
  }
  
  .logo-img {
    height: 36px;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  /* Slightly larger menu on tablets */
  .nav-link {
    padding: 1.25rem 2rem;
  }
}
</style> 