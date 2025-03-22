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
          <i :class="service.icon"></i>
        </div>
        <h3>{{ service.name }}</h3>
        <p class="description">{{ service.description }}</p>
        <ul class="features">
          <li v-for="feature in service.features" :key="feature">
            <i class="fas fa-check-circle"></i> {{ feature }}
          </li>
        </ul>
        <div class="service-stats">
          <div class="stat">
            <i class="fas fa-project-diagram"></i>
            <span class="stat-value">{{ service.projects }}+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <i class="fas fa-smile-beam"></i>
            <span class="stat-value">{{ service.satisfaction }}%</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
        <router-link :to="'/contact'" class="cta-button">
          <i class="fas fa-rocket"></i> Get Started
        </router-link>
      </div>
    </section>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">
        <i class="fas fa-home"></i> Home
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

const services = ref([
  {
    id: 'ai-integration',
    name: 'AI Integration',
    icon: 'fas fa-brain',
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
    icon: 'fas fa-link',
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
    icon: 'fas fa-vr-cardboard',
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
  background: var(--color-background);
  color: var(--color-text-primary);
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.title {
  font-family: var(--font-family-logo);
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
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
  background: var(--color-card-bg);
  border-radius: var(--card-border-radius);
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  background: var(--color-card-hover);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid rgba(var(--color-primary-rgb), 0.2);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  color: var(--color-secondary);
  background: rgba(var(--color-secondary-rgb), 0.1);
  border-color: rgba(var(--color-secondary-rgb), 0.2);
}

.service-card h3 {
  font-family: var(--font-family-logo);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
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
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.features li i {
  color: var(--color-primary);
  font-size: 1.1rem;
}

.service-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--color-surface-2);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-border);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat i {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-family: var(--font-family-logo);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  text-decoration: none;
  border-radius: var(--button-border-radius);
  font-weight: var(--font-weight-semibold);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.3);
}

.cta-button i {
  font-size: 1.2rem;
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
  color: var(--color-text-primary);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: var(--color-surface-1);
}

.nav-link:hover {
  opacity: 1;
  background: var(--color-surface-2);
  transform: translateY(-2px);
}

.nav-link i {
  font-size: 1.1rem;
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 