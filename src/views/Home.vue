<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">WORLD OF UNREAL</h1>
      <p class="subtitle">ENTER THE METAVERSE</p>
      <router-link to="/tech" class="cta-button">
        <i class="fas fa-rocket"></i> BEGIN JOURNEY
      </router-link>
    </section>
    
    <!-- Featured Tech -->
    <section class="featured">
      <h2><i class="fas fa-star"></i> Featured Technologies</h2>
      <div class="tech-grid">
        <div v-for="tech in technologies" :key="tech.id" class="tech-card">
          <div class="tech-icon">
            <i :class="tech.icon"></i>
          </div>
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
          <router-link :to="'/tech/' + tech.id" class="learn-more">
            Learn More <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
      
    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/services" class="nav-link">
        <i class="fas fa-cogs"></i> Services
      </router-link>
      <router-link to="/about" class="nav-link">
        <i class="fas fa-info-circle"></i> About Us
      </router-link>
      <router-link to="/contact" class="nav-link">
        <i class="fas fa-envelope"></i> Contact
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const technologies = ref([
  { 
    id: 'ai', 
    name: 'AI Solutions', 
    icon: 'fas fa-brain', 
    description: 'Next-gen AI integration for your projects'
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    icon: 'fas fa-link', 
    description: 'Secure, decentralized infrastructure'
  },
  { 
    id: 'metaverse', 
    name: 'Metaverse', 
    icon: 'fas fa-vr-cardboard', 
    description: 'Immersive virtual experiences'
  }
]);
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  color: white;
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 204, 255, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 204, 255, 0.3);
}

.cta-button i {
  font-size: 1.2rem;
}

.featured {
  padding: 2rem 0;
}

.featured h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Orbitron', sans-serif;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.tech-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tech-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  color: #00CCFF;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: rgba(0, 204, 255, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(0, 204, 255, 0.2);
}

.tech-card:hover .tech-icon {
  transform: scale(1.1) rotate(5deg);
  color: #9933FF;
  background: rgba(153, 51, 255, 0.1);
  border-color: rgba(153, 51, 255, 0.2);
}

.tech-card h3 {
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', sans-serif;
}

.tech-card p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.learn-more {
  color: #00CCFF;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.learn-more:hover {
  color: #9933FF;
  transform: translateX(5px);
}

.learn-more::after {
  content: '→';
  transition: transform 0.3s ease;
}

.learn-more:hover::after {
  transform: translateX(5px);
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link i {
  font-size: 1.1rem;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
