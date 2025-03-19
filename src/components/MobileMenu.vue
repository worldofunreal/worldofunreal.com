<template>
  <nav class="mobile-menu">
    <router-link 
      v-for="route in routes" 
      :key="route.path" 
      :to="route.path" 
      class="menu-item"
    >
      <i :class="route.icon" class="menu-icon"></i>
      <span>{{ route.name }}</span>
    </router-link>
  </nav>
</template>

<script setup>
const routes = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Services', path: '/services', icon: 'fas fa-cogs' },
  { name: 'Tech', path: '/tech', icon: 'fas fa-microchip' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
];
</script>

<style></style> 