<template>
  <footer class="mobile-footer">
    <!-- Main Footer Content -->
    <div class="footer-content">
      <!-- Logo and Tagline -->
      <div class="footer-brand">
        <img 
          :src="theme === 'dark' ? '/src/favicon-wb.png' : '/src/favicon-bw.png'" 
          alt="World of Unreal" 
          class="footer-logo"
        />
        <h3 class="footer-title">World of Unreal</h3>
        <p class="footer-tagline">Exploring the future of digital experiences</p>
      </div>
      
      <!-- Quick Links -->
      <div class="footer-links-container">
        <div class="footer-links">
          <h4 class="footer-heading">Navigation</h4>
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/services" class="footer-link">Services</router-link>
          <router-link to="/blog" class="footer-link">Blog</router-link>
          <router-link to="/theme-demo" class="footer-link">Theme Demo</router-link>
          <router-link to="/style-guide" class="footer-link">Style Guide</router-link>
        </div>
        
        <div class="footer-links">
          <h4 class="footer-heading">Legal</h4>
          <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
          <router-link to="/terms" class="footer-link">Terms of Service</router-link>
        </div>
      </div>
      
      <!-- Newsletter Signup -->
      <div class="footer-newsletter">
        <h4 class="footer-heading">Stay Updated</h4>
        <p class="newsletter-text">Subscribe to our newsletter for the latest updates</p>
        
        <form class="newsletter-form" @submit.prevent="subscribeToNewsletter">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Your email address" 
            class="newsletter-input"
            required
          />
          <button type="submit" class="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    
    <!-- Social Links -->
    <div class="footer-social">
      <a href="https://twitter.com/worldofunreal" target="_blank" class="social-link" aria-label="Twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
        </svg>
      </a>
      <a href="https://github.com/worldofunreal" target="_blank" class="social-link" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <a href="https://linkedin.com/company/worldofunreal" target="_blank" class="social-link" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </a>
      <a href="https://instagram.com/worldofunreal" target="_blank" class="social-link" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
      </a>
    </div>
    
    <!-- Copyright -->
    <div class="footer-copyright">
      <p>&copy; {{ new Date().getFullYear() }} World of Unreal. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'light'
  }
});

const email = ref('');

const subscribeToNewsletter = () => {
  // Here you would typically send the email to your newsletter service
  alert(`Thank you for subscribing with ${email.value}!`);
  email.value = '';
};
</script>

<style scoped>
.mobile-footer {
  background-color: var(--light-card);
  color: var(--text-dark);
  padding: 2rem 1rem;
  font-family: 'Montserrat', sans-serif;
}

[data-theme="dark"] .mobile-footer {
  background-color: var(--dark-card);
  color: var(--text-light);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 60px;
  height: auto;
  margin-bottom: 0.75rem;
}

.footer-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--text-muted-dark);
  margin: 0;
}

[data-theme="dark"] .footer-tagline {
  color: var(--text-muted-light);
}

/* Links Section */
.footer-links-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}

.footer-heading {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-link {
  color: var(--text-dark);
  text-decoration: none;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

[data-theme="dark"] .footer-link {
  color: var(--text-light);
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateX(3px);
}

/* Newsletter Section */
.footer-newsletter {
  margin-top: 1rem;
}

.newsletter-text {
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: var(--text-muted-dark);
}

[data-theme="dark"] .newsletter-text {
  color: var(--text-muted-light);
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.newsletter-input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  background-color: var(--light-bg);
  color: var(--text-dark);
  transition: all 0.3s ease;
}

[data-theme="dark"] .newsletter-input {
  background-color: var(--dark-bg);
  color: var(--text-light);
  border-color: rgba(255, 255, 255, 0.1);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
}

.newsletter-button {
  padding: 0.75rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
}

/* Social Links */
.footer-social {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin: 2rem 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-dark);
  transition: all 0.3s ease;
}

[data-theme="dark"] .social-link {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-light);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

/* Copyright */
.footer-copyright {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted-dark);
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .footer-copyright {
  color: var(--text-muted-light);
  border-top-color: rgba(255, 255, 255, 0.05);
}

/* Media Queries */
@media (min-width: 480px) {
  .mobile-footer {
    padding: 2.5rem 1.5rem;
  }
  
  .newsletter-form {
    flex-direction: row;
  }
  
  .newsletter-input {
    flex: 1;
  }
}

@media (min-width: 768px) {
  .mobile-footer {
    padding: 3rem 2rem;
  }
  
  .footer-content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .footer-brand {
    flex: 0 0 100%;
    margin-bottom: 2rem;
  }
  
  .footer-links-container {
    flex: 1;
    justify-content: flex-start;
    gap: 3rem;
  }
  
  .footer-newsletter {
    flex: 0 0 300px;
    margin-top: 0;
  }
  
  .footer-social {
    margin: 3rem 0 2rem;
  }
}

@media (min-width: 992px) {
  .footer-brand {
    flex: 0 0 25%;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0;
  }
  
  .footer-links-container {
    flex: 0 0 40%;
  }
  
  .footer-newsletter {
    flex: 0 0 30%;
  }
}
</style> 