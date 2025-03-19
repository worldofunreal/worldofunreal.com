<template>
  <div class="retro-future-app">
    <!-- Mobile Header -->
    <MobileHeader :theme="theme" @toggle-theme="toggleTheme" />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1>WORLD OF UNREAL</h1>
        <p>ENTER THE METAVERSE</p>
        <router-link to="/services" class="cta-button">EXPLORE</router-link>
      </div>
    </section>
    
    <!-- Mobile Footer -->
    <MobileFooter :theme="theme" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MobileHeader from '../components/MobileHeader.vue';
import MobileFooter from '../components/MobileFooter.vue';

const theme = ref('dark');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
});
</script>

<style scoped>
.retro-future-app {
  font-family: 'Montserrat', sans-serif;
  color: white;
  min-height: 100vh;
  padding-top: 60px;
  background: linear-gradient(180deg, #0A0F1B 0%, #16092C 100%);
}

.container {
  padding: 0 1.5rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #00CCFF;
  text-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #C774E8 0%, #00CCFF 100%);
  color: white;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 204, 255, 0.5);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 204, 255, 0.7);
}
</style>
