<template>
  <div :class="[cardBgClass, 'project-card p-4 m-4 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl']">
    <div class="image-container relative overflow-hidden rounded-lg">
      <img :src="image" alt="Project Image" class="w-full h-60 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
        <a :href="link" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          View Project
        </a>
      </div>
    </div>
    <div class="p-4">
      <h3 :class="['text-2xl font-semibold', cardTextClass]">{{ title }}</h3>
      <p :class="['mt-2', cardDescriptionClass]">{{ description }}</p>
      <a :href="link" target="_blank" :class="[cardLinkClass, 'mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all duration-300']">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</template>
    
<script setup>
import { computed } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();

const cardBgClass = computed(() => (enabled.value ? 'bg-gray-800' : 'bg-white'));
const cardTextClass = computed(() => (enabled.value ? 'text-white' : 'text-black'));
const cardDescriptionClass = computed(() => (enabled.value ? 'text-gray-300' : 'text-gray-600'));
const cardLinkClass = computed(() => (enabled.value ? 'text-blue-400' : 'text-blue-500'));

defineProps({
  title: String,
  description: String,
  image: String,
  link: String
});
</script>
    
<style scoped>
.project-card {
  width: 100%;
  max-width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.image-container {
  height: 240px;
  overflow: hidden;
}

/* Dark mode specific styles */
:deep([data-theme="dark"]) .project-card {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
    