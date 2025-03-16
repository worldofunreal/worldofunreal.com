<template>
  <div class="mobile-home">
    <!-- Mobile Header -->
    <MobileHeader :theme="theme" @toggle-theme="toggleTheme" />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Explore the Future of Digital Experiences</h1>
        <p class="hero-subtitle">Cutting-edge solutions for metaverse, AI, blockchain, and Web3 technologies</p>
        <div class="hero-cta">
          <router-link to="/services" class="btn btn-primary">Our Services</router-link>
          <router-link to="/blog" class="btn btn-outline">Read Blog</router-link>
        </div>
      </div>
      <div class="hero-image-container">
        <img src="/assets/hero-mobile.jpg" alt="Digital Future" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">What We Offer</h2>
      
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
            </svg>
          </div>
          <h3 class="feature-title">AI Solutions</h3>
          <p class="feature-description">Custom AI solutions to automate processes and gain insights from your data</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
            </svg>
          </div>
          <h3 class="feature-title">Web3 Development</h3>
          <p class="feature-description">Build decentralized applications with blockchain technology</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
            </svg>
          </div>
          <h3 class="feature-title">Metaverse Experiences</h3>
          <p class="feature-description">Create immersive virtual worlds and experiences for your audience</p>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about-section">
      <div class="about-content">
        <h2 class="section-title">Who We Are</h2>
        <p class="about-text">World of Unreal is a team of passionate developers, designers, and strategists dedicated to pushing the boundaries of digital experiences. We combine cutting-edge technologies with forward-thinking design to create solutions that aren't just impressive today, but scalable for the evolving digital landscape of tomorrow.</p>
        <router-link to="/services" class="btn btn-secondary">Learn More</router-link>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <h2 class="section-title">What Our Clients Say</h2>
      
      <div class="testimonial-slider">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">"World of Unreal transformed our business with their innovative AI solutions. Their team's expertise and dedication exceeded our expectations."</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/assets/avatar-1.jpg" alt="Client" />
              </div>
              <div class="author-info">
                <h4 class="author-name">Sarah Johnson</h4>
                <p class="author-title">CEO, TechInnovate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Build the Future?</h2>
        <p class="cta-text">Let's create something amazing together. Contact us today to discuss your project.</p>
        <a href="#" class="btn btn-primary">Get Started</a>
      </div>
    </section>
    
    <!-- Mobile Footer -->
    <MobileFooter :theme="theme" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MobileHeader from '../components/MobileHeader.vue';
import MobileFooter from '../components/MobileFooter.vue';

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};

// Check for user's preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.value = 'dark';
  document.documentElement.setAttribute('data-theme', 'dark');
}
</script>

<style scoped>
.mobile-home {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-dark);
  background-color: var(--light-bg);
  padding-top: 60px; /* Height of the fixed header */
}

[data-theme="dark"] .mobile-home {
  color: var(--text-light);
  background-color: var(--dark-bg);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 1.5rem;
  max-width: 90%;
}

.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

/* Features Section */
.features-section {
  padding: 3rem 1.5rem;
  text-align: center;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
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

.feature-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: var(--light-card);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .feature-card {
  background-color: var(--dark-card);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .feature-card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background-color: rgba(0, 102, 204, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
}

[data-theme="dark"] .feature-icon {
  background-color: rgba(0, 204, 255, 0.1);
}

.feature-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted-dark);
}

[data-theme="dark"] .feature-description {
  color: var(--text-muted-light);
}

/* About Section */
.about-section {
  padding: 3rem 1.5rem;
  background-color: var(--light-bg);
  text-align: center;
}

[data-theme="dark"] .about-section {
  background-color: var(--dark-bg);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Testimonials Section */
.testimonials-section {
  padding: 3rem 1.5rem;
  text-align: center;
  background-color: var(--light-card);
}

[data-theme="dark"] .testimonials-section {
  background-color: var(--dark-card);
}

.testimonial-slider {
  margin-top: 2rem;
  padding: 0 1rem;
}

.testimonial-card {
  background-color: var(--light-bg);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .testimonial-card {
  background-color: var(--dark-bg);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before,
.testimonial-text::after {
  content: '"';
  font-size: 1.5rem;
  color: var(--primary-color);
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-weight: 600;
  margin: 0 0 0.25rem;
  font-size: 1rem;
}

.author-title {
  font-size: 0.8rem;
  color: var(--text-muted-dark);
  margin: 0;
}

[data-theme="dark"] .author-title {
  color: var(--text-muted-light);
}

/* CTA Section */
.cta-section {
  padding: 3rem 1.5rem;
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

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: var(--secondary-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Media Queries */
@media (min-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-cta {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .feature-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-text {
    font-size: 1.1rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) {
  .feature-cards {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .hero-content {
    max-width: 70%;
  }
}
</style> 