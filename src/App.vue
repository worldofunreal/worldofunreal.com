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
  width: 100%;
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.app-container {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-content {
  flex: 1;
  margin-top: var(--header-height);
  position: relative;
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
}
</style>
