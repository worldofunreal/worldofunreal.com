<template>
  <div class="privacy-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">Privacy Policy</h1>
      <p class="subtitle">How World of Unreal LLC Handles Your Information</p>
    </section>

    <div class="privacy-container">
      <section class="privacy-section">
        <h2>Introduction</h2>
        <p>
          At World of Unreal LLC, a Delaware limited liability company, we respect the privacy of our users and are committed 
          to protecting it. This Privacy Policy explains how we collect, use, and 
          safeguard your information when you visit our website or use our services.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Information Collection and Use</h2>
        <p>
          We collect information such as email addresses for marketing purposes 
          when you use certain features of our applications. This information is 
          used to keep you informed about our products and services.
        </p>
        <p>
          For digital wallet interactions, we collect only the public wallet addresses necessary 
          to facilitate transactions. We do not collect private keys or seed phrases.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Data Protection</h2>
        <p>
          We take the protection of your data seriously. We implement appropriate technical and 
          organizational measures to prevent unauthorized access, disclosure, modification, or 
          unauthorized destruction of the data.
        </p>
        <p>
          Our blockchain applications leverage decentralized infrastructure, which inherently provides 
          enhanced security and privacy features through cryptographic methods.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Sharing of Information</h2>
        <p>
          We do not share your personal information with third parties, except as 
          necessary to provide our services or as required by law.
        </p>
        <p>
          Please note that public blockchain transactions are visible to all participants in the network.
          Any data you choose to include in on-chain transactions will be publicly accessible.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete the information we have 
          on you. You can do this by contacting us directly. Under the GDPR, CCPA, and other applicable laws, 
          you may have additional rights regarding your personal data.
        </p>
        <p>
          Please be aware that data stored on public blockchains cannot be deleted due to the immutable 
          nature of distributed ledger technology.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you 
          of any changes by posting the new Privacy Policy on this page and updating the effective date.
        </p>
      </section>
  
      <section class="privacy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at 
          <a href="mailto:privacy@worldofunreal.com">privacy@worldofunreal.com</a>.
        </p>
      </section>

      <div class="last-updated">
        <p>Last updated: June 1, 2023</p>
      </div>
    </div>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/terms" class="nav-link">Terms &amp; Conditions</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </div>
</template>
    
<script setup>
// No additional script needed
</script>
    
<style scoped>
.privacy-view {
  min-height: 100vh;
  color: var(--color-text-primary);
  padding: 2rem 1rem;
  background: var(--color-background);
}

.hero {
  text-align: center;
  padding: 4rem 1rem 2rem;
}

.title {
  font-family: var(--font-family-logo);
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
}

.privacy-container {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 1rem;
}
    
.privacy-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--color-card-bg);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal) ease;
}

.privacy-section:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  box-shadow: var(--shadow-md);
}
    
.privacy-section h2 {
  font-family: var(--font-family-display);
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
  color: var(--color-primary);
}
    
.privacy-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.privacy-section p:last-child {
  margin-bottom: 0;
}
    
.privacy-section a {
  color: var(--color-primary);
  text-decoration: none;
  transition: all var(--transition-fast) ease;
}
    
.privacy-section a:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

.last-updated {
  text-align: right;
  font-style: italic;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-top: 2rem;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.nav-link {
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--button-border-radius);
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: var(--color-surface-1);
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .privacy-container {
    padding: 2rem;
  }
}
</style>
    