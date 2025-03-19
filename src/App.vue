// src/App.vue
<template>
  <div class="app-container" :class="{ 'menu-open': isMenuOpen }">
    <Header @toggle-menu="toggleMenu" />
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition
          :name="$route.meta.transition || 'fade'"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
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
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import gsap from 'gsap';

const isMenuOpen = ref(false);

const toggleMenu = (value) => {
  isMenuOpen.value = value;
};

// Page transition animations
const beforeEnter = (el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: done
  });
};

const afterEnter = () => {
  // Reset scroll position if needed
  if (!document.querySelector('.transitioning')) {
    window.scrollTo(0, 0);
  }
};

const beforeLeave = (el) => {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: done
  });
};

const afterLeave = () => {
  // Cleanup if needed
};
</script>

<style lang="scss">
:root {
  --header-height: 60px;
  --footer-height: 120px;
  --neo-header-height: 60px;
  --neo-primary: #00CCFF;
  --neo-text: #FFFFFF;
  --neo-bg: rgba(6, 8, 15, 0.85);
  --neo-card: rgba(15, 20, 35, 0.5);
  --neo-border: rgba(255, 255, 255, 0.1);
  --dark-bg: #0A0C14;
  --text-light: #FFFFFF;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.main-content {
  flex: 1;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.app-footer {
  position: relative;
  background: var(--dark-bg);
  color: var(--text-light);
  padding: 2rem 0;
  z-index: 1;
}

.footer-content {
  padding: 0 1.5rem;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.social-link {
  color: var(--text-light);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.copyright {
  font-size: 0.875rem;
  opacity: 0.5;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Menu Open State */
.app-container.menu-open {
  .main-content {
    pointer-events: none;
  }
  
  .app-footer {
    pointer-events: none;
  }
}
</style>
