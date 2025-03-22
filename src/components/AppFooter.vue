<template>
  <footer class="app-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="/logo.svg" alt="World of Unreal" class="logo-image" />
        </div>
        <p class="footer-tagline">Architect the Metaverse</p>
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-discord"></i>
          </a>
          <a href="#" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-nav">
        <h3 class="footer-title">Navigate</h3>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/tech">Technologies</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      
      <div class="footer-nav">
        <h3 class="footer-title">Resources</h3>
        <ul class="footer-links">
          <li><a href="#">Documentation</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Developers</a></li>
          <li><router-link to="/privacy">Privacy</router-link></li>
          <li><router-link to="/terms">Terms</router-link></li>
        </ul>
      </div>
      
      <div class="footer-nav">
        <h3 class="footer-title">Connect</h3>
        <div class="wallet-connect">
          <a href="#" class="wallet-btn">
            <i class="fas fa-wallet"></i> Connect Wallet
          </a>
        </div>
        <p class="wallet-info">Join our DAO and participate in governance</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} World of Unreal
      </div>
      <div class="built-on">
        <span>Built on</span>
        <a href="#" class="chain-link">
          <i class="fab fa-ethereum"></i> Ethereum
        </a>
        <span>&</span>
        <a href="#" class="chain-link">
          <i class="fas fa-cube"></i> Solana
        </a>
      </div>
    </div>
    
    <div class="footer-particles"></div>
  </footer>
</template>

<style scoped>
.app-footer {
  color: var(--color-text-primary);
  padding: 4rem 0 2rem;
  margin-top: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  background: var(--color-surface-1);
  display: none; /* Hide by default on mobile */
}

.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: -1;
  opacity: 0.5;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-brand {
  text-align: center;
}

.footer-logo {
  margin-bottom: var(--spacing-sm);
}

.logo-image {
  height: 32px;
  width: auto;
}

.footer-tagline {
  font-family: var(--font-family-logo);
  font-size: var(--font-size-xs);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.social-link {
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
}

.social-link:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
  background: rgba(var(--color-primary-rgb), 0.05);
  border-color: rgba(var(--color-primary-rgb), 0.2);
}

.footer-title {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
  font-family: var(--font-family-display);
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: var(--spacing-sm);
}

.footer-links a {
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-primary);
  transform: translateX(3px);
}

.wallet-connect {
  margin-bottom: var(--spacing-sm);
}

.wallet-info {
  font-size: var(--font-size-2xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md) 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: var(--spacing-xl);
  gap: var(--spacing-md);
}

.copyright {
  font-size: var(--font-size-2xs);
  color: var(--color-text-muted);
}

.built-on {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-2xs);
  color: var(--color-text-muted);
}

.chain-link {
  color: var(--color-text-secondary);
  transition: color 0.2s ease;
}

.chain-link:hover {
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .app-footer {
    display: block; /* Show on desktop/tablet */
    position: relative; /* Not fixed, appears at natural position in document flow */
    bottom: auto;
    left: auto;
    right: auto;
  }
  
  .footer-grid {
    grid-template-columns: 1.5fr repeat(3, 1fr);
    gap: 3rem;
    padding: 0 var(--spacing-lg);
  }
  
  .footer-brand {
    text-align: left;
  }
  
  .social-links {
    justify-content: flex-start;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: var(--spacing-xl) var(--spacing-lg) 0;
  }
}
</style> 