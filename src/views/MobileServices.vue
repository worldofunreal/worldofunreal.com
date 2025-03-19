<template>
  <div class="mobile-services">
    <!-- Mobile Header -->
    <MobileHeader :theme="theme" @toggle-theme="toggleTheme" />
    
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="hero-content">
        <h1 class="hero-title">Our Services</h1>
        <p class="hero-subtitle">Cutting-edge solutions tailored to your business needs</p>
      </div>
    </section>
    
    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <h2 class="section-title">What We Do</h2>
        <p class="section-description">At World of Unreal, we specialize in creating innovative digital solutions that leverage the latest technologies. Our team of experts works closely with you to understand your unique challenges and develop customized solutions that drive results.</p>
      </div>
    </section>
    
    <!-- Service Categories -->
    <section class="service-categories">
      <div class="container">
        <!-- AI Solutions -->
        <div class="service-category">
          <div class="service-header" @click="toggleService('ai')">
            <h3 class="service-title">AI Solutions</h3>
            <div class="toggle-icon" :class="{ 'active': activeService === 'ai' }">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
          </div>
          
          <div class="service-content" :class="{ 'active': activeService === 'ai' }">
            <div class="service-image">
              <!-- AI Generated Image: A futuristic AI interface with holographic displays showing data analytics and machine learning visualizations -->
              <img src="/assets/placeholder.jpg" alt="AI Solutions" />
            </div>
            <div class="service-details">
              <p>Our AI solutions help businesses automate processes, gain insights from data, and create personalized experiences for their customers. We leverage machine learning, natural language processing, and computer vision to build intelligent applications.</p>
              
              <h4>Key Features:</h4>
              <ul class="feature-list">
                <li>Custom AI model development</li>
                <li>Predictive analytics</li>
                <li>Natural language processing</li>
                <li>Computer vision solutions</li>
                <li>AI-powered chatbots and assistants</li>
              </ul>
              
              <router-link to="#" class="btn btn-primary">Learn More</router-link>
            </div>
          </div>
        </div>
        
        <!-- Blockchain Development -->
        <div class="service-category">
          <div class="service-header" @click="toggleService('blockchain')">
            <h3 class="service-title">Blockchain Development</h3>
            <div class="toggle-icon" :class="{ 'active': activeService === 'blockchain' }">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
          </div>
          
          <div class="service-content" :class="{ 'active': activeService === 'blockchain' }">
            <div class="service-image">
              <!-- AI Generated Image: Abstract visualization of blockchain technology with connected blocks and digital cryptographic elements in a modern, tech aesthetic -->
              <img src="/assets/placeholder.jpg" alt="Blockchain Development" />
            </div>
            <div class="service-details">
              <p>We build secure, scalable blockchain solutions for businesses across industries. From smart contracts to decentralized applications (dApps), our blockchain development services help you leverage this transformative technology.</p>
              
              <h4>Key Features:</h4>
              <ul class="feature-list">
                <li>Smart contract development</li>
                <li>dApp development</li>
                <li>Tokenization solutions</li>
                <li>NFT marketplaces</li>
                <li>Blockchain integration with existing systems</li>
              </ul>
              
              <router-link to="#" class="btn btn-primary">Learn More</router-link>
            </div>
          </div>
        </div>
        
        <!-- Metaverse Experiences -->
        <div class="service-category">
          <div class="service-header" @click="toggleService('metaverse')">
            <h3 class="service-title">Metaverse Experiences</h3>
            <div class="toggle-icon" :class="{ 'active': activeService === 'metaverse' }">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
          </div>
          
          <div class="service-content" :class="{ 'active': activeService === 'metaverse' }">
            <div class="service-image">
              <!-- AI Generated Image: Immersive virtual reality world with avatars interacting in a futuristic cityscape with neon lights and holographic displays -->
              <img src="/assets/placeholder.jpg" alt="Metaverse Experiences" />
            </div>
            <div class="service-details">
              <p>Create immersive virtual worlds and experiences that engage your audience in new and exciting ways. Our metaverse development services help businesses establish a presence in the growing virtual economy.</p>
              
              <h4>Key Features:</h4>
              <ul class="feature-list">
                <li>Virtual world development</li>
                <li>3D environment design</li>
                <li>Avatar creation and customization</li>
                <li>Virtual events and experiences</li>
                <li>Metaverse commerce solutions</li>
              </ul>
              
              <router-link to="#" class="btn btn-primary">Learn More</router-link>
            </div>
          </div>
        </div>
        
        <!-- Web3 Applications -->
        <div class="service-category">
          <div class="service-header" @click="toggleService('web3')">
            <h3 class="service-title">Web3 Applications</h3>
            <div class="toggle-icon" :class="{ 'active': activeService === 'web3' }">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
          </div>
          
          <div class="service-content" :class="{ 'active': activeService === 'web3' }">
            <div class="service-image">
              <!-- AI Generated Image: Decentralized web interface showing connected nodes, cryptocurrency elements, and decentralized app interfaces in a clean, modern design -->
              <img src="/assets/placeholder.jpg" alt="Web3 Applications" />
            </div>
            <div class="service-details">
              <p>Build next-generation web applications that leverage decentralized technologies. Our Web3 development services help you create applications that are secure, transparent, and user-centric.</p>
              
              <h4>Key Features:</h4>
              <ul class="feature-list">
                <li>Decentralized application (dApp) development</li>
                <li>Web3 wallet integration</li>
                <li>Decentralized finance (DeFi) solutions</li>
                <li>DAO development and governance</li>
                <li>Web3 authentication and identity</li>
              </ul>
              
              <router-link to="#" class="btn btn-primary">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">Our Process</h2>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3 class="step-title">Discovery</h3>
            <p class="step-description">We start by understanding your business goals, challenges, and requirements to define the scope of your project.</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <h3 class="step-title">Strategy</h3>
            <p class="step-description">Our team develops a comprehensive strategy and roadmap for your project, outlining key milestones and deliverables.</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <h3 class="step-title">Design</h3>
            <p class="step-description">We create detailed designs and prototypes to visualize the solution before development begins.</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <h3 class="step-title">Development</h3>
            <p class="step-description">Our developers build your solution using the latest technologies and best practices, with regular updates and feedback.</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">5</div>
            <h3 class="step-title">Testing</h3>
            <p class="step-description">We thoroughly test your solution to ensure it meets all requirements and functions flawlessly.</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">6</div>
            <h3 class="step-title">Launch</h3>
            <p class="step-description">We deploy your solution and provide ongoing support to ensure its success.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">Ready to Get Started?</h2>
        <p class="cta-text">Contact us today to discuss your project and see how we can help you achieve your goals.</p>
        <a href="#" class="btn btn-primary">Contact Us</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MobileHeader from '../components/MobileHeader.vue';
import useTheme from '../utils/useTheme';

const { enabled, toggleTheme } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');
const activeService = ref('ai'); // Default open service

const toggleService = (service) => {
  if (activeService.value === service) {
    activeService.value = null; // Close if already open
  } else {
    activeService.value = service; // Open the clicked service
  }
};
</script>

<style scoped>
.mobile-services {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-dark);
  background-color: var(--light-bg);
  padding-top: 60px; /* Height of the fixed header */
}

[data-theme="dark"] .mobile-services {
  color: var(--text-light);
  background-color: var(--dark-bg);
}

.container {
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.services-hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 3rem 1.5rem;
  text-align: center;
  color: white;
}

.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
}

/* Services Overview */
.services-overview {
  padding: 3rem 0;
  text-align: center;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
}

.section-description {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
}

/* Service Categories */
.service-categories {
  padding: 2rem 0 4rem;
}

.service-category {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--light-card);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .service-category {
  background-color: var(--dark-card);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-header:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

[data-theme="dark"] .service-header:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.toggle-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon-bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--text-dark);
  transition: all 0.3s ease;
}

[data-theme="dark"] .icon-bar {
  background-color: var(--text-light);
}

.icon-bar:first-child {
  top: 50%;
  transform: translateY(-50%);
}

.icon-bar:last-child {
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}

.toggle-icon.active .icon-bar:last-child {
  transform: translateY(-50%) rotate(0);
}

.service-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.service-content.active {
  max-height: 2000px; /* Large enough to show all content */
}

.service-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-details {
  padding: 1.5rem;
}

.service-details p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-details h4 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.feature-list {
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
}

/* Process Section */
.process-section {
  padding: 4rem 0;
  background-color: var(--light-bg);
  text-align: center;
}

[data-theme="dark"] .process-section {
  background-color: var(--dark-bg);
}

.process-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.process-step {
  position: relative;
  padding: 2rem 1.5rem;
  background-color: var(--light-card);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

[data-theme="dark"] .process-step {
  background-color: var(--dark-card);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .process-step:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  margin: 0 auto 1.25rem;
}

.step-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.step-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
.cta-section {
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  text-align: center;
  color: white;
}

.cta-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
}

/* Media Queries */
@media (min-width: 480px) {
  .container {
    padding: 0 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .service-title {
    font-size: 1.5rem;
  }
  
  .service-details p {
    font-size: 1rem;
  }
  
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-text {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) {
  .process-steps {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .service-content.active {
    display: flex;
    flex-direction: row;
  }
  
  .service-image {
    width: 40%;
    height: auto;
  }
  
  .service-details {
    width: 60%;
  }
}
</style> 