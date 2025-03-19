<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-logo">
            <img src="/logo.svg" alt="World of Unreal" class="logo-image" />
          </div>
          <h1 class="hero-title text-gradient">INTO THE METAVERSE</h1>
          <p class="hero-subtitle">Pioneering the frontier of digital reality with cutting-edge technology and immersive experiences</p>
          <div class="hero-actions">
            <router-link to="/tech" class="btn btn-large">
              <i class="fas fa-rocket"></i> Begin Your Journey
            </router-link>
            <router-link to="/services" class="btn btn-large btn-outline">
              <i class="fas fa-lightbulb"></i> Explore Services
            </router-link>
          </div>
        </div>
      </div>
      <div class="hero-backdrop"></div>
    </section>
    
    <!-- Features Section -->
    <section class="features section">
      <div class="container">
        <h2 class="section-title text-center">Unlocking Digital Potential</h2>
        <p class="section-subtitle text-center">Our suite of innovative technologies is reshaping the digital landscape</p>
        
        <div class="features-grid">
          <div class="feature-card card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technologies Section -->
    <section class="technologies section">
      <div class="container">
        <h2 class="section-title text-center">Advanced Technologies</h2>
        <p class="section-subtitle text-center">Leveraging state-of-the-art solutions to create transformative experiences</p>
        
        <div class="tech-grid">
          <div class="tech-card card" v-for="tech in technologies" :key="tech.id">
            <div class="tech-icon">
              <i :class="tech.icon"></i>
            </div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
            <router-link :to="'/tech/' + tech.id" class="tech-link">
              Learn More <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
      
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Digital Vision?</h2>
          <p>Connect with our team to explore how we can bring your ideas to life.</p>
          <router-link to="/contact" class="btn btn-large">
            <i class="fas fa-paper-plane"></i> Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');

const features = ref([
  {
    id: 'immersive',
    title: 'Immersive Experiences',
    icon: 'fas fa-vr-cardboard',
    description: 'Create captivating virtual environments that blur the line between digital and physical realities.'
  },
  {
    id: 'seamless',
    title: 'Seamless Integration',
    icon: 'fas fa-network-wired',
    description: 'Connect physical and digital assets with elegant solutions that enhance rather than disrupt.'
  },
  {
    id: 'scalable',
    title: 'Scalable Architecture',
    icon: 'fas fa-expand-arrows-alt',
    description: 'Build on frameworks designed to grow with your vision, from concept to global deployment.'
  },
  {
    id: 'secure',
    title: 'Enterprise Security',
    icon: 'fas fa-shield-alt',
    description: 'Protect your digital assets with industry-leading security protocols and best practices.'
  }
]);

const technologies = ref([
  { 
    id: 'ai', 
    name: 'AI & Machine Learning', 
    icon: 'fas fa-brain', 
    description: 'Harness the power of neural networks and advanced algorithms to create intelligent, adaptive systems that learn and evolve.'
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain Solutions', 
    icon: 'fas fa-link', 
    description: 'Implement decentralized architectures that provide transparency, security, and immutable record-keeping.'
  },
  { 
    id: 'metaverse', 
    name: 'Metaverse Development', 
    icon: 'fas fa-globe', 
    description: 'Craft interconnected virtual worlds where users can interact, transact, and experience digital content in revolutionary ways.'
  }
]);
</script>

<style scoped>
.home-view {
  color: var(--color-text-primary);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-xl) 0;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at bottom right, rgba(153, 51, 255, 0.2) 0%, transparent 70%),
              radial-gradient(ellipse at top left, rgba(0, 145, 255, 0.2) 0%, transparent 70%);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-logo {
  margin-bottom: var(--spacing-xl);
  display: flex;
  justify-content: center;
}

.logo-image {
  width: 80%;
  max-width: 400px;
  height: auto;
}

.hero-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.02em;
  font-family: var(--font-family-logo);
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-light);
  line-height: var(--line-height-relaxed);
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  justify-content: center;
  align-items: center;
}

/* Section Styles */
.section-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-bold);
}

.section-subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  line-height: var(--line-height-relaxed);
}

/* Features Section */
.features {
  background: var(--color-surface-1);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-xl);
  border-radius: var(--card-border-radius);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--spacing-md);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  position: relative;
}

.feature-icon::after {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 145, 255, 0.1);
  z-index: -1;
}

.feature-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-semibold);
}

.feature-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

/* Technologies Section */
.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

.tech-card {
  padding: var(--spacing-xl);
  border-radius: var(--card-border-radius);
}

.tech-icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  background: rgba(153, 51, 255, 0.1);
  border-radius: 50%;
  transition: all var(--transition-normal) ease;
}

.tech-card:hover .tech-icon {
  transform: scale(1.1) rotate(5deg);
  color: var(--color-primary);
  background: rgba(0, 145, 255, 0.1);
}

.tech-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-semibold);
}

.tech-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.tech-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  position: relative;
  padding-bottom: 2px;
}

.tech-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-normal) ease;
}

.tech-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.tech-link i {
  font-size: 0.85em;
  transition: transform var(--transition-normal) ease;
}

.tech-link:hover i {
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(0, 145, 255, 0.1) 0%, rgba(153, 51, 255, 0.1) 100%);
  padding: var(--spacing-3xl) 0;
  text-align: center;
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(153, 51, 255, 0.05) 0%, transparent 70%);
  z-index: -1;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: var(--line-height-relaxed);
}

/* Responsive Styles */
@media (min-width: 640px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-actions {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
