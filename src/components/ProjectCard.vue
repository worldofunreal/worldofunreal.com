<template>
      <div :class="[cardBgClass, 'project-card p-4 m-4 rounded-lg transition transform hover-custom-scale']">
        <img :src="image" alt="Project Image" class="w-full h-60 object-cover rounded-t-lg" />
        <div class="p-4">
          <h3 :class="['text-2xl font-semibold', cardTextClass]">{{ title }}</h3>
          <p :class="['mt-2', cardDescriptionClass]">{{ description }}</p>
          <a :href="link" target="_blank" :class="[cardLinkClass, 'mt-4 inline-block hover:underline']">Learn More</a>
        </div>
      </div>
    </template>
    
    <script setup>
    import { computed } from 'vue';
    import useTheme from '../utils/useTheme';
    
    const { enabled } = useTheme();
    
    const cardBgClass = computed(() => (enabled.value ? 'bg-[#121212]' : 'bg-white'));
    const cardTextClass = computed(() => (enabled.value ? 'text-white' : 'text-black'));
    const cardDescriptionClass = computed(() => (enabled.value ? 'text-gray-400' : 'text-gray-600'));
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
    }
    
    /* Custom hover scale */
.hover-custom-scale {
  transition: transform 0.25s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
}

.hover-custom-scale:hover {
  transform: scale(1.025); /* Adjust this value as needed */
}
    </style>
    