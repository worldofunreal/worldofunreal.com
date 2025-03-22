<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-particles"></div>
      <div class="container">
        <h1 class="title text-gradient">CONNECT WITH US</h1>
        <p class="subtitle">Join our decentralized network of creators, developers and visionaries</p>
      </div>
    </section>

    <!-- Contact Options Section -->
    <section class="contact-options-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="tabs glass">
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'form' }" 
              @click="activeTab = 'form'"
            >
              <i class="fas fa-envelope"></i> Message
            </button>
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'wallet' }" 
              @click="activeTab = 'wallet'"
            >
              <i class="fas fa-wallet"></i> Connect Wallet
            </button>
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'discord' }" 
              @click="activeTab = 'discord'"
            >
              <i class="fab fa-discord"></i> Community
            </button>
          </div>

          <!-- Traditional Form -->
          <div v-if="activeTab === 'form'" class="tab-content glass">
            <h2>Send us a message</h2>
            <p class="tab-description">Have a project in mind? Tell us about your vision and goals.</p>
            
            <form @submit.prevent="handleSubmit">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name" 
                    placeholder="Your Name"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    placeholder="your@email.com"
                    required
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="service">I'm interested in</label>
                <select id="service" v-model="formData.service" required>
                  <option value="">Select an option</option>
                  <option v-for="service in services" :key="service.id" :value="service.id">
                    {{ service.name }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="budget">Estimated budget</label>
                <select id="budget" v-model="formData.budget">
                  <option value="">Select a range</option>
                  <option value="5-15k">$5K - $15K</option>
                  <option value="15-30k">$15K - $30K</option>
                  <option value="30-50k">$30K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Project details</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  placeholder="Tell us about your project goals, timeline, and requirements"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">
                  <i class="fas fa-circle-notch fa-spin"></i> Sending...
                </span>
                <span v-else>
                  <i class="fas fa-paper-plane"></i> Send Message
                </span>
              </button>
            </form>
          </div>

          <!-- Wallet Connection -->
          <div v-if="activeTab === 'wallet'" class="tab-content glass">
            <h2>Connect your wallet</h2>
            <p class="tab-description">Join our DAO, access exclusive content, or sign transactions securely.</p>
            
            <div class="wallet-options">
              <button class="wallet-option glass-dark">
                <div class="wallet-icon">
                  <i class="fab fa-ethereum"></i>
                </div>
                <div class="wallet-info">
                  <h3>MetaMask</h3>
                  <p>Connect to Ethereum and compatible EVM chains</p>
                </div>
              </button>
              
              <button class="wallet-option glass-dark">
                <div class="wallet-icon">
                  <i class="fas fa-wallet"></i>
                </div>
                <div class="wallet-info">
                  <h3>WalletConnect</h3>
                  <p>Connect using QR code with your mobile wallet</p>
                </div>
              </button>
              
              <button class="wallet-option glass-dark">
                <div class="wallet-icon">
                  <i class="fas fa-cubes"></i>
                </div>
                <div class="wallet-info">
                  <h3>Solana</h3>
                  <p>Connect to Phantom, Solflare or other Solana wallets</p>
                </div>
              </button>
            </div>
            
            <div class="wallet-note">
              <p><i class="fas fa-info-circle"></i> We never store your private keys and only use your wallet for authentication.</p>
            </div>
          </div>

          <!-- Community -->
          <div v-if="activeTab === 'discord'" class="tab-content glass">
            <h2>Join our community</h2>
            <p class="tab-description">Connect with other builders, creators and metaverse enthusiasts.</p>
            
            <div class="community-options">
              <a href="#" class="community-option glass-dark">
                <div class="community-icon">
                  <i class="fab fa-discord"></i>
                </div>
                <div class="community-info">
                  <h3>Discord</h3>
                  <p>Join 10,000+ members in our active community</p>
                </div>
                <div class="community-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
              
              <a href="#" class="community-option glass-dark">
                <div class="community-icon">
                  <i class="fab fa-twitter"></i>
                </div>
                <div class="community-info">
                  <h3>Twitter</h3>
                  <p>Follow us for the latest updates and announcements</p>
                </div>
                <div class="community-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
              
              <a href="#" class="community-option glass-dark">
                <div class="community-icon">
                  <i class="fab fa-telegram"></i>
                </div>
                <div class="community-info">
                  <h3>Telegram</h3>
                  <p>Quick updates and notifications about new releases</p>
                </div>
                <div class="community-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="contact-cards">
            <div class="info-card glass">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Headquarters</h3>
              <p>San Francisco, CA</p>
              <p class="text-muted">With remote teams worldwide</p>
            </div>

            <div class="info-card glass">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>hello@worldofunreal.com</p>
              <p class="text-muted">We respond within 24 hours</p>
            </div>

            <div class="info-card glass">
              <div class="info-icon">
                <i class="fas fa-comments"></i>
              </div>
              <h3>Support</h3>
              <p>support@worldofunreal.com</p>
              <p class="text-muted">Technical assistance 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item glass" v-for="(faq, index) in faqs" :key="index">
              <div class="faq-question">
                <h3>{{ faq.question }}</h3>
              </div>
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('form');

const services = [
  { id: 'smart-contracts', name: 'Smart Contract Development' },
  { id: 'nft', name: 'NFT Platform & Marketplace' },
  { id: 'metaverse', name: 'Metaverse Development' },
  { id: 'defi', name: 'DeFi Protocol' },
  { id: 'dao', name: 'DAO Structure & Governance' },
  { id: 'gaming', name: 'Web3 Gaming' },
  { id: 'consultation', name: 'Blockchain Consultation' }
];

const formData = ref({
  name: '',
  email: '',
  service: '',
  budget: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      service: '',
      budget: '',
      message: ''
    };
    
    alert('Message sent successfully! We\'ll get back to you shortly.');
  } catch (error) {
    alert('Failed to send message. Please try again or contact us directly.');
  } finally {
    isSubmitting.value = false;
  }
};

const faqs = [
  {
    question: "What blockchain networks do you support?",
    answer: "We support all major blockchain networks including Ethereum, Solana, Polygon, Binance Smart Chain, and emerging L2 solutions like Arbitrum and Optimism."
  },
  {
    question: "Do you provide smart contract audit services?",
    answer: "Yes, we offer comprehensive smart contract audits through our network of security partners. We also follow rigorous internal review processes for all contracts."
  },
  {
    question: "How long does a typical Web3 project take?",
    answer: "Project timelines vary based on complexity. Simple dApps can take 4-6 weeks, while complex ecosystems might require 3-6 months for development, testing and deployment."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide ongoing maintenance, monitoring, and updates through flexible support packages to ensure your project remains secure and operational."
  }
];
</script>

<style scoped>
.contact-view {
  min-height: 100vh;
}

.hero {
  text-align: center;
  padding: 6rem 1rem 3rem;
  position: relative;
  overflow: hidden;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: -1;
  opacity: 0.3;
}

.title {
  font-family: var(--font-family-logo);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: var(--color-text-secondary);
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  padding: 3rem 1rem;
}

.contact-options-section {
  position: relative;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  padding: 0.5rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
}

.tab-btn i {
  font-size: 1rem;
}

.tab-content {
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.tab-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-display);
}

.tab-description {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  background: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: var(--color-input-focus-bg);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-muted);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23959595' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

/* Wallet Connection Tab */
.wallet-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.wallet-option {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
}

.wallet-option:hover {
  transform: translateY(-2px);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  background: var(--color-card-hover);
}

.wallet-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
  background: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
}

.wallet-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.wallet-info p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.wallet-note {
  background: rgba(var(--color-primary-rgb), 0.05);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.wallet-note i {
  color: var(--color-primary);
  margin-right: 0.5rem;
}

/* Community Tab */
.community-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.community-option {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
}

.community-option:hover {
  transform: translateY(-2px);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  background: var(--color-card-hover);
}

.community-option:hover .community-arrow {
  transform: translateX(4px);
}

.community-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
  background: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
}

.community-info {
  flex: 1;
}

.community-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.community-info p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.community-arrow {
  font-size: 1rem;
  color: var(--color-primary);
  transition: transform 0.3s ease;
}

/* Contact Info Section */
.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.info-card.glass {
  background: var(--color-card-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--color-border);
  border-radius: var(--card-border-radius);
  transition: all 0.3s ease;
}

.info-card.glass:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.info-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 50%;
}

.info-card h3 {
  font-family: var(--font-family-display);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.info-card .text-muted {
  font-size: 0.875rem;
}

/* FAQ Section */
.faq-section {
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.05) 0%, rgba(var(--color-secondary-rgb), 0.05) 100%);
}

.section-title {
  font-family: var(--font-family-display);
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.faq-item.glass {
  background: var(--color-card-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--color-border);
  border-radius: var(--card-border-radius);
  transition: all 0.3s ease;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.faq-item.glass:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(var(--color-primary-rgb), 0.2);
}

.faq-question h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--color-primary);
}

.faq-answer p {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Responsive styles */
@media (min-width: 640px) {
  .title {
    font-size: 3rem;
  }
  
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .community-options {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .contact-cards {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .wallet-options {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .faq-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .community-options {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .tab-content {
    padding: 3rem;
  }
}
</style> 