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
    
    <!-- Mobile Navigation Menu -->
    <nav class="nav-panel" :class="{ 'active': isMenuOpen }">
      <div class="nav-content">
        <div class="nav-links">
          <router-link to="/" class="nav-link" @click="closeMenu" :class="{ 'active': $route.path === '/' }">
            <span class="link-number">01</span>
            <span class="link-text">Home</span>
            <div class="link-highlight"></div>
          </router-link>
          <router-link to="/services" class="nav-link" @click="closeMenu" :class="{ 'active': $route.path === '/services' }">
            <span class="link-number">02</span>
            <span class="link-text">Work</span>
            <div class="link-highlight"></div>
          </router-link>
          <router-link to="/blog" class="nav-link" @click="closeMenu" :class="{ 'active': $route.path === '/blog' }">
            <span class="link-number">03</span>
            <span class="link-text">Lab Notes</span>
            <div class="link-highlight"></div>
          </router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu" :class="{ 'active': $route.path === '/about' }">
            <span class="link-number">04</span>
            <span class="link-text">About</span>
            <div class="link-highlight"></div>
          </router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu" :class="{ 'active': $route.path === '/contact' }">
            <span class="link-number">05</span>
            <span class="link-text">Contact</span>
            <div class="link-highlight"></div>
          </router-link>
        </div>
        
        <!-- Settings Section -->
        <div class="settings-section">
          <h3 class="settings-title">Settings</h3>
          <div class="settings-options">
            <div class="setting-item">
              <span class="setting-label">Theme</span>
              <button class="theme-toggle" @click="toggleTheme" :class="{ 'light': theme === 'light' }">
                <div class="toggle-track">
                  <div class="toggle-indicator">
                    <span v-if="theme === 'dark'" class="material-icons">dark_mode</span>
                    <span v-else class="material-icons">light_mode</span>
                  </div>
                </div>
              </button>
            </div>
            <div class="setting-item">
              <span class="setting-label">Animations</span>
              <button class="theme-toggle" :class="{ 'light': animationsEnabled }">
                <div class="toggle-track">
                  <div class="toggle-indicator">
                    <span class="material-icons">{{ animationsEnabled ? 'animation' : 'animation_off' }}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div class="menu-footer">
          <div class="social-links">
            <a href="https://twitter.com/worldofunreal" target="_blank" class="social-link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.2 4.09 16.97 3.72 15.65 4.03C14.33 4.34 13.36 5.4 13.04 6.71C13.01 6.89 12.99 7.06 13 7.24C9.57 7.09 6.42 5.73 4.22 3.25C3.41 4.72 3.8 6.57 5.16 7.59C4.4 7.58 3.67 7.38 3 7C3 7.02 3 7.03 3 7.05C3 8.55 4.11 9.83 5.68 10.17C5.49 10.22 5.3 10.24 5.11 10.25C4.97 10.25 4.84 10.24 4.71 10.23C5.06 11.49 6.24 12.36 7.63 12.39C6.53 13.24 5.1 13.68 3.65 13.69C3.44 13.69 3.23 13.68 3 13.66C4.5 14.56 6.28 15 8 15C15.64 15 19.74 8.25 19.74 2.45C19.74 2.3 19.74 2.16 19.73 2.01C20.73 1.37 21.59 0.54 22.17 -0.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="https://github.com/worldofunreal" target="_blank" class="social-link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16 17.42 15.94 17.05 15.71 16.67C18.42 16.35 21 15.11 21 9.5C20.97 8.09 20.44 6.74 19.5 5.72C19.95 4.47 19.91 3.09 19.4 1.87C19.4 1.87 18.17 1.54 15.5 3.32C13.26 2.76 10.92 2.76 8.68 3.32C6 1.54 4.78 1.87 4.78 1.87C4.19 3.08 4.18 4.49 4.62 5.73C3.63 6.78 3.11 8.19 3.14 9.64C3.14 15.11 5.71 16.35 8.42 16.67C8.19 17.06 8.09 17.44 8.08 17.87V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/worldofunreal" target="_blank" class="social-link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="copyright">
            © {{ new Date().getFullYear() }} World of Unreal
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Backdrop for when menu is open -->
    <div class="menu-backdrop" v-if="isMenuOpen" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  theme: {
    type: String,
    default: 'dark'
  }
});

const emit = defineEmits(['toggle-theme']);

const router = useRouter();
const isMenuOpen = ref(false);
const animationsEnabled = ref(true);

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
  z-index: 1000;
  font-family: 'Montserrat', sans-serif;
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

/* Navigation Panel */
.nav-panel {
  position: fixed;
  top: var(--neo-header-height);
  right: 0;
  width: 100%;
  max-width: 360px;
  height: calc(100vh - var(--neo-header-height));
  background-color: var(--neo-bg);
  backdrop-filter: blur(15px);
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  z-index: 999;
  border-left: 1px solid var(--neo-border);
  overflow-y: auto;
}

.nav-panel.active {
  transform: translateX(0);
}

.nav-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem 0;
}

.nav-links {
  display: flex;
  flex-direction: column;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  color: var(--neo-text);
  text-decoration: none;
  position: relative;
  transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform: translateX(0);
}

.link-number {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  color: var(--neo-primary);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.link-text {
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.link-highlight {
  position: absolute;
  left: 0;
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--neo-primary), transparent);
  transition: height 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.nav-link:hover {
  transform: translateX(10px);
}

.nav-link:hover .link-highlight,
.nav-link.active .link-highlight {
  height: 100%;
}

.nav-link.active {
  background: rgba(0, 204, 255, 0.1);
}

.nav-link.active .link-number {
  opacity: 1;
  transform: scale(1.1);
}

.nav-link.active .link-text {
  color: var(--neo-primary);
  font-weight: 600;
}

/* Menu Footer */
.menu-footer {
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--neo-border);
  margin-top: auto;
}

.social-links {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.social-link {
  width: 20px;
  height: 20px;
  color: var(--neo-text);
  opacity: 0.7;
  transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.social-link:hover {
  opacity: 1;
  color: var(--neo-primary);
  transform: translateY(-5px) scale(1.2);
}

.copyright {
  font-size: 0.75rem;
  opacity: 0.5;
}

/* Backdrop */
.menu-backdrop {
  position: fixed;
  top: var(--neo-header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--neo-header-height));
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Entry/Exit Animations for Nav Links */
.nav-panel.active .nav-link {
  animation: slideIn 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Stagger nav links animation */
.nav-panel.active .nav-link:nth-child(1) { animation-delay: 0.1s; }
.nav-panel.active .nav-link:nth-child(2) { animation-delay: 0.2s; }
.nav-panel.active .nav-link:nth-child(3) { animation-delay: 0.3s; }
.nav-panel.active .nav-link:nth-child(4) { animation-delay: 0.4s; }
.nav-panel.active .nav-link:nth-child(5) { animation-delay: 0.5s; }

/* Settings Section */
.settings-section {
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--neo-border);
  margin-top: auto;
}

.settings-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--neo-text);
}

.settings-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting-label {
  font-size: 0.9rem;
  color: var(--neo-text);
  opacity: 0.8;
}

/* Enhanced Theme Toggle */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: 48px;
  height: 24px;
}

.toggle-track {
  width: 100%;
  height: 100%;
  background: rgba(0, 204, 255, 0.2);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 204, 255, 0.3);
}

.toggle-indicator {
  width: 20px;
  height: 20px;
  background: var(--neo-primary);
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 2px;
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle.light .toggle-indicator {
  transform: translateX(24px);
  background: #FFCC00;
}

.toggle-indicator .material-icons {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
}

/* Media Queries */
@media (min-width: 768px) {
  .header-bar {
    padding: 0 2rem;
  }
  
  .nav-panel {
    max-width: 400px;
  }
}

@media (max-width: 359px) {
  .logo-text {
    display: none;
  }
}
</style> 