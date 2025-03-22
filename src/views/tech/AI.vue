<template>
  <div class="ai-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="gradient-text">Artificial Intelligence</h1>
      <p class="subtitle">Harnessing the Power of Neural Networks to Transform Industries and Redefine Digital Experiences</p>
    </section>

    <!-- Content Sections -->
    <section class="content-section">
      <div class="section-content">
        <h2>Our AI Solutions</h2>
        <p>We architect next-generation AI systems that transcend traditional boundaries—blending blockchain security with neural processing to create intelligent, autonomous networks that learn, adapt, and deliver unprecedented value across industries. Our solutions don't just automate—they think, evolve, and transform.</p>
        
        <div class="features-grid">
          <div class="feature-card">
            <component :is="ThemedIcons.MachineLearningIcon.value" class="feature-icon" />
            <h3>Machine Learning</h3>
            <p>Advanced algorithms that learn from data to make intelligent decisions and predictions.</p>
          </div>

          <div class="feature-card">
            <component :is="ThemedIcons.NLPIcon.value" class="feature-icon" />
            <h3>Natural Language Processing</h3>
            <p>Understanding and processing human language for intelligent communication and analysis.</p>
          </div>

          <div class="feature-card">
            <component :is="ThemedIcons.ComputerVisionIcon.value" class="feature-icon" />
            <h3>Computer Vision</h3>
            <p>Advanced image and video analysis for visual recognition and understanding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="applications-section">
      <div class="section-content">
        <h2>Applications</h2>
        <div class="applications-grid">
          <div class="application-card">
            <h3>Business Intelligence</h3>
            <p>Data-driven insights and predictive analytics for informed decision-making.</p>
          </div>
          <div class="application-card">
            <h3>Process Automation</h3>
            <p>Intelligent automation of repetitive tasks and workflows.</p>
          </div>
          <div class="application-card">
            <h3>Customer Experience</h3>
            <p>Personalized interactions and intelligent customer service solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <router-link to="/tech" class="quick-link">Back to Tech</router-link>
      <router-link to="/services" class="quick-link">Services</router-link>
      <router-link to="/contact" class="quick-link">Contact</router-link>
    </section>
  </div>
</template>

<script setup>
import ThemedIcons from '../../utils/useIconSystem';
</script>

<style scoped>
.ai-view {
  min-height: 100vh;
  color: var(--color-text-primary);
  padding: 2rem 1rem;
  background: var(--color-background);
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.gradient-text {
  font-family: var(--font-family-logo);
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
}

.content-section, .applications-section {
  margin-bottom: 4rem;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-content h2 {
  font-family: var(--font-family-logo);
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.section-content p {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.features-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card, .application-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--card-border-radius);
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover, .application-card:hover {
  transform: translateY(-5px);
  background: var(--color-card-hover);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.feature-icon {
  width: 48px;
  height: 48px;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.feature-card h3, .application-card h3 {
  font-family: var(--font-family-logo);
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.feature-card p, .application-card p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-primary);
  background: var(--color-surface-1);
  padding: 0.75rem 1.5rem;
  border-radius: var(--button-border-radius);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
}

.quick-link:hover {
  transform: translateY(-3px);
  background: var(--color-surface-2);
  color: var(--color-primary);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2rem;
  }

  .section-content h2 {
    font-size: 1.5rem;
  }

  .features-grid, .applications-grid {
    grid-template-columns: 1fr;
  }

  .quick-links {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style> 