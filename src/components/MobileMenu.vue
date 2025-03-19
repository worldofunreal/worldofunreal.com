<template>
  <nav class="mobile-menu">
    <router-link 
      v-for="route in routes" 
      :key="route.path" 
      :to="route.path" 
      class="menu-item"
    >
      <i :class="route.icon" class="menu-icon"></i>
      <span class="menu-label">{{ route.name }}</span>
    </router-link>
    
    <button @click="toggleTheme" class="menu-item theme-button" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
      <i class="menu-icon" :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
      <span class="menu-label">Theme</span>
    </button>
  </nav>
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
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Services', path: '/services', icon: 'fas fa-cogs' },
  { name: 'Tech', path: '/tech', icon: 'fas fa-microchip' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
];
</script>

<style>
.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--mobile-menu-height);
  background: rgba(10, 12, 27, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: var(--z-index-menu);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  will-change: transform;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-decoration: none;
  color: var(--color-text-light);
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 0.5rem;
  flex: 1;
  text-align: center;
}

.menu-item.router-link-active {
  opacity: 1;
  color: var(--color-primary);
}

.menu-icon {
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.menu-item:hover .menu-icon,
.menu-item.router-link-active .menu-icon {
  transform: translateY(-2px);
}

.menu-item span {
  font-size: 0.7rem;
  font-weight: 500;
}

.theme-button {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  color: inherit;
}

.theme-button:focus {
  outline: none;
}

.menu-label {
  font-size: var(--font-size-3xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}
</style> 