<template>
  <footer class="footer" :class="{ 'dark-mode': enabled }">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="footer-section">
          <h3 class="footer-title">World of Unreal</h3>
          <p class="footer-description mt-4">
            Crafting premium digital experiences through innovative solutions in AI, blockchain, and the metaverse.
          </p>
          <div class="social-links mt-6">
            <a href="https://twitter.com/worldofunreal" target="_blank" class="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </a>
            <a href="https://github.com/worldofunreal" target="_blank" class="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/worldofunreal/" target="_blank" class="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Services</h3>
          <ul class="footer-links mt-4">
            <li><router-link to="/services#ai" class="footer-link">AI Solutions</router-link></li>
            <li><router-link to="/services#blockchain" class="footer-link">Blockchain Development</router-link></li>
            <li><router-link to="/services#metaverse" class="footer-link">Metaverse Experiences</router-link></li>
            <li><router-link to="/services#web3" class="footer-link">Web3 Applications</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Contact</h3>
          <p class="footer-description mt-4">
            Have a project in mind? Let's discuss how we can transform your vision into reality.
          </p>
          <a href="mailto:contact@worldofunreal.com" class="contact-link mt-4">
            contact@worldofunreal.com
          </a>
        </div>
      </div>
      
      <div class="footer-divider mt-12 mb-8"></div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ new Date().getFullYear() }} World of Unreal. All rights reserved.</p>
        <div class="theme-toggle-container">
          <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle theme">
            <span>{{ enabled ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled, toggleTheme } = useTheme();
</script>

<style scoped>
.footer {
  background-color: var(--light-bg);
  color: var(--text-dark);
  border-top: 1px solid rgba(11, 132, 254, 0.1);
  position: relative;
}

.footer.dark-mode {
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.footer-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 40px;
  height: 1px;
  background-color: var(--secondary-color);
}

.footer-description {
  color: var(--text-muted-dark);
  line-height: 1.7;
  font-weight: 300;
}

.footer.dark-mode .footer-description {
  color: var(--text-muted-light);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  color: var(--text-dark);
  opacity: 0.7;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--secondary-light);
  border-radius: 0;
}

.footer.dark-mode .social-icon {
  color: var(--text-light);
}

.social-icon:hover {
  opacity: 1;
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(11, 132, 254, 0.2);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-muted-dark);
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  font-weight: 300;
}

.footer.dark-mode .footer-link {
  color: var(--text-muted-light);
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: var(--secondary-color);
}

.footer-link:hover::after {
  width: 100%;
}

.contact-link {
  color: var(--secondary-color);
  font-weight: 500;
  letter-spacing: 0.05em;
  display: inline-block;
  transition: all 0.3s ease;
}

.contact-link:hover {
  transform: translateX(5px);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(11, 132, 254, 0.1);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-size: 0.875rem;
  opacity: 0.7;
}

.theme-toggle {
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-color);
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.theme-toggle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}

.theme-toggle:hover::after {
  width: 100%;
}
</style>
