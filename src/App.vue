// src/App.vue
<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <MobileMenu />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import './index.scss';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tech', path: '/tech' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: rgb(10, 12, 27);
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding-top: 60px; // Height of header
  padding-bottom: 75px; // Height of mobile menu
  height: calc(100vh - 135px); // Viewport height minus header and mobile menu
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding-bottom: 0; // No mobile menu on desktop
    height: calc(100vh - 60px); // Only subtract header height
  }
}

/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  position: absolute;
  width: 100%;
  height: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
