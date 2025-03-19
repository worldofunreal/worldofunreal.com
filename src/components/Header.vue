<template>
  <header class="header">
    <router-link to="/" class="logo">WORLD OF UNREAL</router-link>
    <nav class="desktop-nav">
      <router-link v-for="route in routes" :key="route.path" :to="route.path" class="nav-link">
        {{ route.name }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tech', path: '/tech' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script>

<style></style> 