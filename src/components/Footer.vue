<template>
  <footer class="neo-footer">
    <div class="container">
      <!-- Footer Top Section -->
      <div class="footer-top">
        <div class="footer-branding">
          <div class="logo-container">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="brand-text">
              <h3 class="brand-name">World of Unreal</h3>
              <p class="brand-slogan">_automating_the_future</p>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-links">
          <div class="links-column">
            <h4 class="column-title">Explore</h4>
            <div class="links-list">
              <router-link to="/" class="footer-link">Home</router-link>
              <router-link to="/services" class="footer-link">Work</router-link>
              <router-link to="/blog" class="footer-link">Lab Notes</router-link>
              <router-link to="/about" class="footer-link">About</router-link>
            </div>
          </div>
          
          <div class="links-column">
            <h4 class="column-title">Legal</h4>
            <div class="links-list">
              <router-link to="/privacy" class="footer-link">Privacy</router-link>
              <router-link to="/terms" class="footer-link">Terms</router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact/Newsletter Section -->
      <div class="footer-contact">
        <h4 class="contact-title">Join Our Network</h4>
        <form class="subscribe-form" @submit.prevent="subscribe">
          <div class="input-wrapper">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Your email address" 
              class="subscribe-input"
              required
            />
            <button type="submit" class="subscribe-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
        
        <div class="social-links">
          <a href="https://twitter.com/worldofunreal" target="_blank" class="social-link" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.2 4.09 16.97 3.72 15.65 4.03C14.33 4.34 13.36 5.4 13.04 6.71C13.01 6.89 12.99 7.06 13 7.24C9.57 7.09 6.42 5.73 4.22 3.25C3.41 4.72 3.8 6.57 5.16 7.59C4.4 7.58 3.67 7.38 3 7C3 7.02 3 7.03 3 7.05C3 8.55 4.11 9.83 5.68 10.17C5.49 10.22 5.3 10.24 5.11 10.25C4.97 10.25 4.84 10.24 4.71 10.23C5.06 11.49 6.24 12.36 7.63 12.39C6.53 13.24 5.1 13.68 3.65 13.69C3.44 13.69 3.23 13.68 3 13.66C4.5 14.56 6.28 15 8 15C15.64 15 19.74 8.25 19.74 2.45C19.74 2.3 19.74 2.16 19.73 2.01C20.73 1.37 21.59 0.54 22.17 -0.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/worldofunreal" target="_blank" class="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16 17.42 15.94 17.05 15.71 16.67C18.42 16.35 21 15.11 21 9.5C20.97 8.09 20.44 6.74 19.5 5.72C19.95 4.47 19.91 3.09 19.4 1.87C19.4 1.87 18.17 1.54 15.5 3.32C13.26 2.76 10.92 2.76 8.68 3.32C6 1.54 4.78 1.87 4.78 1.87C4.19 3.08 4.18 4.49 4.62 5.73C3.63 6.78 3.11 8.19 3.14 9.64C3.14 15.11 5.71 16.35 8.42 16.67C8.19 17.06 8.09 17.44 8.08 17.87V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/worldofunreal" target="_blank" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://instagram.com/worldofunreal" target="_blank" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 6L18.01 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} World of Unreal. All rights reserved.</p>
        <p class="footer-tagline">Building the metaverse, one experience at a time.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'dark'
  }
});

const email = ref('');
const currentYear = computed(() => new Date().getFullYear());

const subscribe = () => {
  // Here you would typically send the email to your newsletter service
  console.log(`Subscribing email: ${email.value}`);
  alert(`Thank you for subscribing with ${email.value}!`);
  email.value = '';
};
</script>

<style scoped>
:root {
  --neo-primary: #00CCFF;
  --neo-primary-dark: #0099FF;
  --neo-secondary: #9933FF;
  --neo-text: #FFFFFF;
  --neo-text-muted: rgba(255, 255, 255, 0.6);
  --neo-bg: rgba(6, 8, 15, 0.9);
  --neo-border: rgba(255, 255, 255, 0.1);
}

.neo-footer {
  background-color: var(--neo-bg);
  backdrop-filter: blur(12px);
  color: var(--neo-text);
  font-family: 'Montserrat', sans-serif;
  border-top: 1px solid var(--neo-border);
  padding: 3rem 0 1rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Footer Top */
.footer-top {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer-branding {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo-icon {
  width: 28px;
  height: 28px;
  color: var(--neo-primary);
}

.brand-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.05em;
}

.brand-slogan {
  font-size: 0.8rem;
  margin: 0.25rem 0 0;
  font-family: monospace;
  letter-spacing: 0.05em;
  color: var(--neo-primary);
}

/* Footer Links */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.links-column {
  min-width: 120px;
}

.column-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 1px;
  background-color: var(--neo-primary);
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  font-size: 0.9rem;
  color: var(--neo-text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background-color: var(--neo-primary);
  transition: width 0.3s ease, left 0.3s ease;
  transform: translateY(-50%);
}

.footer-link:hover {
  color: var(--neo-text);
  padding-left: 12px;
}

.footer-link:hover::before {
  width: 8px;
}

/* Footer Contact */
.footer-contact {
  margin-bottom: 3rem;
}

.contact-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.subscribe-form {
  margin-bottom: 1.5rem;
}

.input-wrapper {
  display: flex;
  height: 46px;
  max-width: 360px;
  position: relative;
}

.subscribe-input {
  flex: 1;
  height: 100%;
  padding: 0 1rem;
  border: 1px solid var(--neo-border);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--neo-text);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}

.subscribe-input:focus {
  outline: none;
  border-color: var(--neo-primary);
}

.subscribe-button {
  width: 46px;
  height: 100%;
  background-color: var(--neo-primary);
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.subscribe-button:hover {
  background-color: var(--neo-primary-dark);
}

.subscribe-button svg {
  width: 18px;
  height: 18px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.social-link {
  width: 20px;
  height: 20px;
  color: var(--neo-text);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--neo-primary);
  opacity: 1;
  transform: translateY(-2px);
}

/* Footer Bottom */
.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--neo-border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright {
  font-size: 0.8rem;
  color: var(--neo-text-muted);
  margin: 0;
}

.footer-tagline {
  font-size: 0.8rem;
  color: var(--neo-text-muted);
  margin: 0;
  font-style: italic;
}

/* Media Queries */
@media (min-width: 768px) {
  .neo-footer {
    padding: 4rem 0 1.5rem;
  }
  
  .container {
    padding: 0 2rem;
  }
  
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .footer-branding {
    max-width: 280px;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (min-width: 992px) {
  .footer-contact {
    max-width: 360px;
  }
}
</style> 