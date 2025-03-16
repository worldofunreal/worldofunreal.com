<template>
  <div class="service-card p-6 transition-all duration-300" :class="[cardBg]">
    <div class="w-12 h-12 mb-6 flex items-center justify-center service-icon">
      <svg v-if="icon === 'art'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <svg v-else-if="icon === 'game'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
      <svg v-else-if="icon === 'metaverse'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-else-if="icon === 'hybrid'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
      <svg v-else-if="icon === 'twin'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
      <svg v-else-if="icon === 'web3'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-3 service-title" :class="textClass">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
    <div class="service-line mt-6 mb-6"></div>
    <a href="#" class="service-link inline-flex items-center">
      <span>Learn more</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'default'
  },
  cardBg: {
    type: String,
    default: ''
  }
});

const textClass = computed(() => enabled.value ? 'text-white' : 'text-gray-800');
</script>

<style scoped>
.service-card {
  height: 100%;
  position: relative;
  padding: 3rem 2rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  border: none !important;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background-color: var(--primary-color);
  box-shadow: 0 0 15px var(--tech-glow);
  transition: height 0.5s ease;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 30px var(--primary-alpha);
}

.service-card:hover::before {
  height: 100%;
}

.service-card:hover::after {
  border-color: var(--secondary-alpha);
}

.service-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0;
  background-color: var(--primary-alpha);
  color: var(--primary-color);
  box-shadow: 0 0 15px var(--primary-alpha);
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  position: relative;
  text-transform: uppercase;
  color: var(--text-light);
}

[data-theme="light"] .service-title {
  color: var(--text-dark);
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  line-height: 1.7;
}

:deep([data-theme="light"]) .service-description {
  color: rgba(30, 30, 30, 0.7);
}

.service-line {
  width: 40px;
  height: 1px;
  background: var(--tech-gradient);
  transition: width 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover .service-line {
  width: 80px;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}

.service-link {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.service-link:hover {
  color: var(--primary-color);
  text-shadow: 0 0 8px var(--primary-alpha);
}

.service-link:hover svg {
  transform: translateX(5px);
  filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.5));
}

.service-link svg {
  transition: transform 0.3s ease;
}

/* Dark mode specific styles */
:deep([data-theme="dark"]) .service-card {
  background-color: #0A0C14;
}

:deep([data-theme="light"]) .service-card {
  background-color: #F0F3FF;
}
</style> 