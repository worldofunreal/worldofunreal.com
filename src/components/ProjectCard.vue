<template>
  <div :class="[cardBgClass, 'project-card']">
    <div class="image-container">
      <img :src="image" alt="Project Image" />
      <div class="overlay">
        <a :href="link" target="_blank" class="view-button">View Project</a>
      </div>
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <a :href="link" target="_blank" :class="[cardLinkClass, 'link']">
      Learn More
      <i class="fas fa-arrow-right"></i>
    </a>
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
  link: String,
  cardBgClass: String,
  cardLinkClass: String
});
</script>

<style lang="scss" scoped>
.project-card {
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  &:hover {
    opacity: 1;
  }
}

.view-button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
}

.title {
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.description {
  margin-top: 0.5rem;
  color: #666;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.5rem;
  }
}
</style>
    