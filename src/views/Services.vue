<template>
  <div class="services-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">OUR SERVICES</h1>
      <p class="subtitle">Transforming Ideas into Digital Reality</p>
    </section>

    <!-- Services Grid -->
    <section class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <div class="service-icon">
          <component :is="service.icon" />
        </div>
        <h3>{{ service.name }}</h3>
        <p class="description">{{ service.description }}</p>
        <ul class="features">
          <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
        </ul>
        <div class="service-stats">
          <div class="stat">
            <span class="stat-value">{{ service.projects }}+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <span class="stat-value">{{ service.satisfaction }}%</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
        <router-link :to="'/contact'" class="cta-button">
          Get Started
        </router-link>
      </div>
    </section>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemedIcons from '../utils/useIconSystem';

const services = ref([
  {
    id: 'ai-integration',
    name: 'AI Integration',
    icon: ThemedIcons.BrainIcon,
    description: 'Harness the power of artificial intelligence to transform your business processes and decision-making.',
    features: [
      'Custom AI Models',
      'Natural Language Processing',
      'Predictive Analytics',
      'Machine Learning Integration'
    ],
    projects: 45,
    satisfaction: 98
  },
  {
    id: 'blockchain',
    name: 'Blockchain Solutions',
    icon: ThemedIcons.BlockchainIcon,
    description: 'Build secure, transparent, and decentralized applications using cutting-edge blockchain technology.',
    features: [
      'Smart Contracts',
      'DeFi Applications',
      'NFT Platforms',
      'Private Blockchains'
    ],
    projects: 32,
    satisfaction: 96
  },
  {
    id: 'metaverse',
    name: 'Metaverse Development',
    icon: ThemedIcons.MetaverseIcon,
    description: 'Create immersive virtual experiences that connect people and businesses in the digital realm.',
    features: [
      'Virtual Worlds',
      'Digital Assets',
      'Social Platforms',
      'AR/VR Integration'
    ],
    projects: 28,
    satisfaction: 95
  }
]);
</script>

<style scoped>
.services-view {
  min-height: 100vh;
  background: linear-gradient(180deg, #0A0C1B 0%, #1A0B36 100%);
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

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: #00CCFF;
}

.service-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
}

.features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  opacity: 0.8;
}

.features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #00CCFF;
}

.service-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00CCFF;
  font-family: 'Orbitron', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.25rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 