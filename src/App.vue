// src/App.vue
<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <MobileMenu />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style></style>
