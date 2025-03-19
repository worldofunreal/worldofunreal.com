<template>
  <div class="theme-example">
    <div class="section-header">
      <h2 class="text-gradient section-title">Theme System Examples</h2>
      <p class="text-text-dark dark:text-text-light text-center max-w-2xl mx-auto">
        This component demonstrates different approaches to using the theme system.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <!-- CSS Variables Approach -->
      <div class="example-card css-approach">
        <h3 class="card-title">CSS Variables Approach</h3>
        <div class="card-content">
          <p>This card uses traditional CSS variables with [data-theme="dark"] selectors.</p>
          <button class="css-button">CSS Button</button>
        </div>
      </div>
      
      <!-- Tailwind Approach -->
      <div class="bg-card-light dark:bg-card-dark p-6 rounded shadow-md transition-colors duration-300">
        <h3 class="text-primary text-xl font-bold mb-4">Tailwind Approach</h3>
        <div class="text-text-dark dark:text-text-light">
          <p class="mb-4">This card uses Tailwind utility classes with dark mode variants.</p>
          <button class="bg-primary hover:bg-opacity-90 text-white py-2 px-4 rounded shadow-primary-glow transition-all duration-300 hover:-translate-y-1">
            Tailwind Button
          </button>
        </div>
      </div>
      
      <!-- Hybrid Approach -->
      <div class="example-card hybrid-approach">
        <h3 class="card-title">Hybrid Approach (@apply)</h3>
        <div class="card-content">
          <p>This card uses CSS classes with Tailwind's @apply directive.</p>
          <button class="hybrid-button">Hybrid Button</button>
        </div>
      </div>
      
      <!-- Theme Toggle Example -->
      <div class="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded shadow-tech-glow">
        <h3 class="text-xl font-bold mb-4">Theme Toggle</h3>
        <div class="flex flex-col items-center">
          <p class="mb-4 text-center">Current theme: {{ themeStore.enabled ? 'Dark' : 'Light' }}</p>
          <button @click="themeStore.toggleTheme" class="theme-toggle-btn">
            <span v-if="themeStore.enabled" class="icon">☀️</span>
            <span v-else class="icon">🌙</span>
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../utils/useTheme';

const themeStore = useTheme();
</script>

<style scoped>
.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

/* CSS Variables Approach */
.css-approach {
  background-color: var(--light-card);
  color: var(--text-dark);
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

[data-theme="dark"] .css-approach {
  background-color: var(--dark-card);
  color: var(--text-light);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.card-title {
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.css-button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px var(--primary-alpha);
}

.css-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--primary-alpha);
}

/* Hybrid Approach with @apply */
.hybrid-approach {
  @apply bg-card-light dark:bg-card-dark p-6 rounded shadow-md transition-colors duration-300;
}

.hybrid-button {
  @apply bg-secondary text-white py-2 px-4 rounded shadow-md transition-all duration-300 mt-4;
  box-shadow: 0 0 15px var(--secondary-alpha);
}

.hybrid-button:hover {
  @apply transform -translate-y-1;
  box-shadow: 0 0 20px var(--tech-glow);
}

/* Theme Toggle Button */
.theme-toggle-btn {
  @apply flex items-center gap-2 bg-white bg-opacity-20 py-2 px-4 rounded backdrop-blur-sm transition-all duration-300;
}

.theme-toggle-btn:hover {
  @apply bg-opacity-30 transform -translate-y-1;
}

.icon {
  font-size: 1.25rem;
}
</style> 