<template>
  <header class="header">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <img src="/logo.svg" alt="World of Unreal" class="logo-image" />
      </router-link>
      <nav class="desktop-nav">
        <router-link v-for="route in routes" :key="route.path" :to="route.path" class="nav-link">
          {{ route.name }}
        </router-link>
        <button class="theme-toggle" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
          <div class="toggle-icon">
            <i class="fas fa-moon" v-if="theme === 'light'"></i>
            <i class="fas fa-sun" v-else></i>
          </div>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');

// Toggle theme function
const toggleTheme = () => {
  enabled.value = !enabled.value;
};

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tech', path: '/tech' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo-image {
  height: 40px;
  width: auto;
  transition: filter var(--transition-normal) ease, 
              transform var(--transition-fast) ease;
}

.logo:hover .logo-image {
  transform: translateY(-2px);
}

[data-theme="dark"] .logo-image {
  filter: brightness(1.2);
}

.theme-toggle {
  background: var(--color-surface-2);
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  padding: var(--spacing-xs);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transition: all var(--transition-fast) ease;
  opacity: 0.9;
  margin-left: var(--spacing-md);
}

.theme-toggle:hover {
  opacity: 1;
  background: var(--color-surface-1);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.theme-toggle:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary);
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style> 