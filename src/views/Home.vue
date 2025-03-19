<template>
  <div class="home">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-6 py-24 md:py-36">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="hero-content">
            <h1 class="hero-title">
              Immersive <span class="highlight">Metaverse</span> Experiences
            </h1>
            <p class="hero-subtitle">
              Pioneering the future of digital interaction through innovative AI, blockchain, and metaverse technologies.
            </p>
            <div class="hero-buttons mt-8">
              <router-link to="/services" class="primary-btn">Explore Services</router-link>
              <a href="mailto:contact@worldofunreal.com" class="secondary-btn">Contact Us</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-container">
              <!-- AI Image Prompt: Futuristic metaverse scene with vibrant neon blue structures, digital avatars interacting with holographic interfaces in a sci-fi virtual environment with particle effects -->
              <img src="/placeholder.jpg" alt="Metaverse Innovation" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container mx-auto px-6 py-24">
        <div class="section-header text-center mb-16">
          <h2 class="section-title">Our Core Technologies</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">
            Cutting-edge digital solutions for the next generation of connected experiences
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="AI Solutions" 
            description="Intelligent systems that learn, adapt, and evolve to provide unprecedented insights and automated capabilities."
            icon="hybrid"
            cardBg="service-card-bg"
          />
          <ServiceCard 
            title="Blockchain Development" 
            description="Decentralized infrastructure that ensures trust, transparency, and security in digital transactions and assets."
            icon="web3"
            cardBg="service-card-bg"
          />
          <ServiceCard 
            title="Metaverse Experiences" 
            description="Immersive virtual worlds that transcend physical limitations and create new possibilities for collaboration and engagement."
            icon="metaverse"
            cardBg="service-card-bg"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container mx-auto px-6 py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="about-image">
            <div class="image-container">
              <!-- AI Image Prompt: Sci-fi tech workspace with floating holographic interfaces, 3D models of digital worlds, and glowing blue code streams with futuristic AR/VR elements -->
              <img src="/placeholder.jpg" alt="Our Technology Approach" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-line"></div>
            </div>
          </div>
          <div class="about-content">
            <h2 class="section-title">Advanced Digital Innovation</h2>
            <div class="section-divider"></div>
            <p class="about-text">
              At World of Unreal, we push the boundaries of what's possible in the digital realm. Our approach combines cutting-edge technologies with forward-thinking design to create experiences that aren't just impressive today, but scalable for the evolving digital landscape of tomorrow.
            </p>
            <p class="about-text mt-4">
              We're building the infrastructure for the next generation of digital interaction—where AI, blockchain, and immersive technologies converge to create more meaningful, secure, and engaging experiences.
            </p>
            <router-link to="/about" class="text-link mt-8">Discover Our Approach</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container mx-auto px-6 py-20">
        <div class="cta-container">
          <h2 class="cta-title">Ready to Enter the Future?</h2>
          <p class="cta-text">
            Partner with us to build extraordinary digital experiences that define the next era
          </p>
          <div class="cta-buttons mt-8">
            <router-link to="/contact" class="primary-btn-alt">Start a Project</router-link>
            <router-link to="/services" class="secondary-btn-alt">View Our Services</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ServiceCard from '../components/ServiceCard.vue';
import Header from '../components/Header.vue';

onMounted(() => {
  document.title = 'World of Unreal | Next-Gen Digital Experiences';
});
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--tech-dark-gradient);
  z-index: -1;
}

[data-theme="light"] .hero-section::before {
  background: linear-gradient(135deg, var(--light-bg) 0%, #E8EFFF 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
  text-transform: uppercase;
}

.hero-title .highlight {
  color: var(--primary-color);
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-alpha);
}

.hero-title .highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
  z-index: -1;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 500px;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .hero-subtitle {
  color: var(--text-muted-dark);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.primary-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 0 15px var(--primary-alpha);
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.primary-btn:hover::before {
  transform: translateX(0);
}

.primary-btn:hover {
  box-shadow: 0 0 20px var(--tech-glow);
}

.secondary-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: var(--text-light);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid var(--primary-color);
}

[data-theme="light"] .secondary-btn {
  color: var(--text-dark);
}

.secondary-btn:hover {
  color: var(--primary-color);
  box-shadow: 0 0 15px var(--primary-alpha);
}

.hero-image {
  position: relative;
}

.image-container {
  position: relative;
  z-index: 1;
  border: 1px solid var(--primary-alpha);
  box-shadow: 0 0 30px var(--secondary-alpha);
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 0;
  position: relative;
  z-index: 2;
  display: block;
}

.tech-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-alpha) 0%, var(--secondary-alpha) 100%);
  z-index: 3;
  pointer-events: none;
}

.accent-shape {
  position: absolute;
  width: 70%;
  height: 70%;
  right: -5%;
  top: -5%;
  background-color: var(--primary-color);
  opacity: 0.05;
  z-index: 1;
}

/* Services Section */
.services-section {
  background-color: var(--dark-card);
  position: relative;
}

[data-theme="light"] .services-section {
  background-color: var(--light-card);
}

.section-header {
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
}

.section-divider {
  width: 60px;
  height: 2px;
  background: var(--tech-gradient);
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 10px var(--primary-alpha);
}

.section-subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .section-subtitle {
  color: var(--text-muted-dark);
}

.service-card-bg {
  background-color: var(--dark-bg);
}

[data-theme="light"] .service-card-bg {
  background-color: var(--light-bg);
}

/* About Section */
.about-section {
  position: relative;
  overflow: hidden;
}

.about-image {
  position: relative;
}

.accent-line {
  position: absolute;
  width: 40%;
  height: 1px;
  left: -10%;
  top: 50%;
  background: var(--tech-gradient);
  box-shadow: 0 0 15px var(--tech-glow);
}

.about-content .section-divider {
  margin: 0 0 1.5rem;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .about-text {
  color: var(--text-muted-dark);
}

.text-link {
  display: inline-block;
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  padding-bottom: 0.5rem;
}

.text-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--primary-color);
  transform: scaleX(0.3);
  transform-origin: left;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px var(--primary-alpha);
}

.text-link:hover::after {
  transform: scaleX(1);
}

/* CTA Section */
.cta-section {
  background-color: var(--dark-card);
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
  background: linear-gradient(135deg, var(--primary-alpha) 0%, var(--secondary-alpha) 100%);
  z-index: 0;
}

[data-theme="light"] .cta-section {
  background-color: var(--light-card);
}

.cta-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.cta-text {
  font-size: 1.25rem;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .cta-text {
  color: var(--text-muted-dark);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.primary-btn-alt {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px var(--primary-alpha);
}

.primary-btn-alt:hover {
  background-color: var(--secondary-color);
  box-shadow: 0 0 20px var(--tech-glow);
}

.secondary-btn-alt {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: var(--text-light);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 1px solid var(--primary-alpha);
}

[data-theme="light"] .secondary-btn-alt {
  color: var(--text-dark);
}

.secondary-btn-alt:hover {
  border-color: var(--primary-color);
  background-color: var(--primary-alpha);
  box-shadow: 0 0 15px var(--primary-alpha);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-buttons, .cta-buttons {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn, .primary-btn-alt, .secondary-btn-alt {
    width: 100%;
    text-align: center;
  }
}
</style>
