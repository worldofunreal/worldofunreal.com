<template>
  <header class="header">
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
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' }
];
</script>

<style>
.logo-image {
  height: 40px;
  width: auto;
}

[data-theme="dark"] .logo-image {
  filter: brightness(1.2);
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  opacity: 0.7;
  background: rgba(255, 255, 255, 0.05);
}

.theme-toggle:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

[data-theme="light"] .theme-toggle {
  color: var(--color-text-dark);
  background: rgba(0, 0, 0, 0.05);
}

[data-theme="light"] .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style> 