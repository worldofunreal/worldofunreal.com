<template>
  <div class="services-page">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container mx-auto px-6 py-24 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="services-title">Premium Digital Services</h1>
          <div class="section-divider"></div>
          <p class="services-subtitle">
            Bespoke solutions crafted with precision and expertise to elevate your digital presence
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section id="ai" class="service-detail-section">
      <div class="container mx-auto px-6 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="service-image order-2 md:order-1">
            <div class="image-container">
              <!-- AI Image Prompt: Futuristic AI visualization with glowing neural networks, digital brains, and data streams flowing through a cybernetic environment with neon blue interfaces -->
              <img src="/placeholder.jpg" alt="AI Solutions" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-shape"></div>
            </div>
          </div>
          <div class="service-content order-1 md:order-2">
            <h2 class="section-title">AI Solutions</h2>
            <div class="section-divider left-align"></div>
            <p class="service-text">
              Our AI solutions empower businesses with intelligent automation and data-driven insights, enabling smarter decision-making and operational excellence.
            </p>
            <ul class="service-features">
              <li>Custom AI model development and training</li>
              <li>Natural language processing and computer vision</li>
              <li>Predictive analytics and forecasting</li>
              <li>AI-powered process automation</li>
            </ul>
            <a href="mailto:contact@worldofunreal.com" class="service-cta">Inquire About AI Solutions</a>
          </div>
        </div>
      </div>
    </section>

    <section id="blockchain" class="service-detail-section alt-bg">
      <div class="container mx-auto px-6 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="service-content">
            <h2 class="section-title">Blockchain Development</h2>
            <div class="section-divider left-align"></div>
            <p class="service-text">
              Our blockchain solutions create secure, transparent systems that transform industries and establish trust in digital transactions and asset management.
            </p>
            <ul class="service-features">
              <li>Smart contract development and auditing</li>
              <li>NFT creation and marketplace development</li>
              <li>DeFi application architecture</li>
              <li>Enterprise blockchain integration</li>
            </ul>
            <a href="mailto:contact@worldofunreal.com" class="service-cta">Inquire About Blockchain Solutions</a>
          </div>
          <div class="service-image">
            <div class="image-container">
              <!-- AI Image Prompt: Blockchain visualization with 3D interconnected blocks, glowing energy connections, and floating digital tokens in a high-tech virtual space with code fragments -->
              <img src="/placeholder.jpg" alt="Blockchain Development" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="metaverse" class="service-detail-section">
      <div class="container mx-auto px-6 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="service-image order-2 md:order-1">
            <div class="image-container">
              <!-- AI Image Prompt: Dynamic metaverse scene with digital avatars in a neon-filled virtual world, interactive 3D objects, and futuristic architecture with portals connecting different virtual spaces -->
              <img src="/placeholder.jpg" alt="Metaverse Experiences" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-shape"></div>
            </div>
          </div>
          <div class="service-content order-1 md:order-2">
            <h2 class="section-title">Metaverse Experiences</h2>
            <div class="section-divider left-align"></div>
            <p class="service-text">
              Our immersive metaverse solutions connect brands with audiences in revolutionary new ways, creating memorable digital experiences that drive engagement.
            </p>
            <ul class="service-features">
              <li>Virtual world design and development</li>
              <li>3D asset creation and optimization</li>
              <li>Immersive brand experiences</li>
              <li>Social and collaborative virtual spaces</li>
            </ul>
            <a href="mailto:contact@worldofunreal.com" class="service-cta">Inquire About Metaverse Solutions</a>
          </div>
        </div>
      </div>
    </section>

    <section id="web3" class="service-detail-section alt-bg">
      <div class="container mx-auto px-6 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="service-content">
            <h2 class="section-title">Web3 Applications</h2>
            <div class="section-divider left-align"></div>
            <p class="service-text">
              Our Web3 expertise enables the creation of decentralized applications that offer unprecedented user ownership, security, and interoperability.
            </p>
            <ul class="service-features">
              <li>Decentralized application (dApp) development</li>
              <li>Web3 frontend and backend integration</li>
              <li>Token economics and governance systems</li>
              <li>Cross-chain functionality and bridges</li>
            </ul>
            <a href="mailto:contact@worldofunreal.com" class="service-cta">Inquire About Web3 Solutions</a>
          </div>
          <div class="service-image">
            <div class="image-container">
              <!-- AI Image Prompt: Web3 interface with decentralized applications, digital wallets, and interactive blockchain elements with glowing blue connections in a futuristic dashboard layout -->
              <img src="/placeholder.jpg" alt="Web3 Applications" class="main-image" />
              <div class="tech-overlay"></div>
              <div class="accent-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container mx-auto px-6 py-20">
        <div class="cta-container">
          <h2 class="cta-title">Transform Your Digital Vision into Reality</h2>
          <p class="cta-text">
            Partner with us to create extraordinary digital experiences that elevate your brand
          </p>
          <div class="cta-buttons mt-10">
            <a href="mailto:contact@worldofunreal.com" class="primary-btn">Contact Us</a>
            <router-link to="/projects" class="secondary-btn">View Our Work</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '../components/Header.vue';

onMounted(() => {
  document.title = 'Premium Services | World of Unreal';
  
  // Scroll to section if hash exists in URL
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});
</script>

<style scoped>
.services-page {
  overflow-x: hidden;
}

/* Hero Section */
.services-hero {
  position: relative;
  background-color: var(--dark-card);
}

[data-theme="light"] .services-hero {
  background-color: var(--light-card);
}

.services-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.services-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .services-subtitle {
  color: var(--text-muted-dark);
}

.section-divider {
  width: 60px;
  height: 2px;
  background: var(--tech-gradient);
  margin: 0 auto 1.5rem;
}

.section-divider.left-align {
  margin: 0 0 1.5rem;
}

/* Service Detail Sections */
.service-detail-section {
  position: relative;
  overflow: hidden;
}

.service-detail-section.alt-bg {
  background-color: var(--dark-card);
}

[data-theme="light"] .service-detail-section.alt-bg {
  background-color: var(--light-card);
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.service-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .service-text {
  color: var(--text-muted-dark);
}

.service-features {
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
}

.service-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 300;
  color: var(--text-muted-light);
}

[data-theme="light"] .service-features li {
  color: var(--text-muted-dark);
}

.service-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 6px;
  background-color: var(--primary-color);
  box-shadow: 0 0 5px var(--primary-alpha);
}

.service-cta {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  border: 1px solid var(--primary-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
  z-index: -1;
}

.service-cta:hover {
  color: #FFFFFF;
}

[data-theme="light"] .service-cta:hover {
  color: #FFFFFF;
}

.service-cta:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.service-image {
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
  position: relative;
  z-index: 2;
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
  width: 60%;
  height: 70%;
  right: -5%;
  top: -5%;
  background-color: var(--primary-color);
  opacity: 0.05;
  z-index: 1;
}

/* CTA Section */
.services-cta {
  background-color: var(--dark-bg);
  position: relative;
}

[data-theme="light"] .services-cta {
  background-color: var(--light-bg);
}

.cta-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.25rem;
  color: var(--text-muted-light);
  font-weight: 300;
  margin-bottom: 2rem;
}

[data-theme="light"] .cta-text {
  color: var(--text-muted-dark);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.primary-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
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
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    text-align: center;
  }
  
  .service-cta {
    width: 100%;
    text-align: center;
  }
}
</style> 