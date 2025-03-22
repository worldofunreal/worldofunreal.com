<template>
  <div class="tech-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">TECHNOLOGIES</h1>
      <p class="subtitle">Exploring the Future of Digital Innovation</p>
    </section>

    <!-- Tech Grid -->
    <section class="tech-grid">
      <router-link to="/tech/ai" class="tech-card">
        <div class="tech-icon">
          <component :is="ThemedIcons.BrainIcon.value" />
        </div>
        <h3>Artificial Intelligence</h3>
        <p class="description">Harnessing the power of AI to transform business processes and decision-making.</p>
        <ul class="features">
          <li>Machine Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Predictive Analytics</li>
        </ul>
      </router-link>

      <router-link to="/tech/blockchain" class="tech-card">
        <div class="tech-icon">
          <component :is="ThemedIcons.BlockchainIcon.value" />
        </div>
        <h3>Blockchain</h3>
        <p class="description">Building secure, transparent, and decentralized applications.</p>
        <ul class="features">
          <li>Smart Contracts</li>
          <li>DeFi Solutions</li>
          <li>NFT Integration</li>
          <li>Private Blockchains</li>
        </ul>
      </router-link>

      <router-link to="/tech/metaverse" class="tech-card">
        <div class="tech-icon">
          <component :is="ThemedIcons.MetaverseIcon.value" />
        </div>
        <h3>Metaverse</h3>
        <p class="description">Creating immersive virtual experiences and digital worlds.</p>
        <ul class="features">
          <li>Virtual Reality</li>
          <li>Augmented Reality</li>
          <li>Digital Avatars</li>
          <li>Virtual Events</li>
        </ul>
      </router-link>
    </section>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/services" class="nav-link">Services</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </div>
</template>

<script setup>
import { markRaw } from 'vue';
import ThemedIcons from '../utils/useIconSystem';
</script>

<style scoped>
.tech-view {
  min-height: 100vh;
  color: var(--color-text-primary);
  padding: 2rem 1rem;
  background: var(--color-background);
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
  color: var(--color-text-secondary);
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.tech-card {
  background: var(--color-card-bg);
  border-radius: var(--card-border-radius);
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--color-text-primary);
  display: block;
}

.tech-card:hover {
  transform: translateY(-5px);
  background: var(--color-card-hover);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.tech-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
}

.tech-card h3 {
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
  margin: 0;
  text-align: left;
}

.features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text-secondary);
}

.features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.nav-link {
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--button-border-radius);
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: var(--color-surface-1);
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 