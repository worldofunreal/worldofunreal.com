<template>
  <div class="terms-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">Terms &amp; Conditions</h1>
      <p class="subtitle">Legal Agreement for Using World of Unreal Services</p>
    </section>

    <div class="terms-container">
      <section class="terms-section">
        <h2>Introduction</h2>
        <p>
          Welcome to World of Unreal LLC ("Company", "we", "our", "us"), a Delaware limited liability company. 
          These Terms and Conditions govern your relationship with World of Unreal LLC and your use of our 
          website, applications, and services (collectively, the "Services").
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms and Conditions. 
          If you disagree with any part of the terms, you may not access our Services.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>User Agreement</h2>
        <p>
          By using our Services, you represent that you are at least 18 years of age or that you are a valid legal entity. 
          You are responsible for safeguarding the password that you use to access the Services and for any activities 
          or actions under your password.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Use of the Services</h2>
        <p>
          Our Services provide blockchain, artificial intelligence, and metaverse technology solutions. 
          The content on our platform is for informational purposes only and is not intended as legal, financial, 
          or investment advice. You should consult with qualified professionals before making any decisions.
        </p>
        <p>
          You agree not to misuse our Services or help anyone else do so. Misuse includes violating these terms, 
          attempting unauthorized access, or using our Services in a fraudulent or deceptive manner.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Digital Assets and Blockchain Interactions</h2>
        <p>
          Many of our services involve interactions with blockchain networks, digital assets, and cryptographic systems. 
          You acknowledge the inherent risks of using cryptographic and blockchain-based systems, including but not limited 
          to the risk of losing access to digital assets through private key loss, smart contract bugs, or regulatory changes.
        </p>
        <p>
          We are not responsible for any losses, damages, or claims arising from digital asset transactions, 
          whether caused by user error, software defects, network failures, or any other cause.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Intellectual Property Rights</h2>
        <p>
          The Services and their original content, features, and functionality are owned by World of Unreal LLC and 
          are protected by international copyright, trademark, patent, trade secret, and other intellectual property 
          or proprietary rights laws.
        </p>
        <p>
          Unless otherwise indicated, all logos, company names, and product names are trademarks of their respective owners.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>User Responsibilities</h2>
        <p>
          You are responsible for your use of our Services and any content you provide, including compliance with 
          applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.
        </p>
        <p>
          When interacting with our blockchain-based services, you are responsible for understanding the implications 
          of your actions and for securing your digital assets and private keys.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall World of Unreal LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, 
          be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
          loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
          inability to access or use the Services.
        </p>
        <p>
          We specifically disclaim all liability for any activities related to digital assets, including cryptocurrency 
          transactions, token issuances, or smart contract interactions.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of Delaware, 
          without regard to its conflict of law provisions. Any disputes relating to these Terms and Conditions 
          will be subject to the exclusive jurisdiction of the courts of Delaware.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Changes to the Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
          we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
          will be determined at our sole discretion.
        </p>
      </section>
  
      <section class="terms-section">
        <h2>Contact Information</h2>
        <p>
          For any questions regarding these Terms, please contact us at 
          <a href="mailto:legal@worldofunreal.com">legal@worldofunreal.com</a>.
        </p>
      </section>

      <div class="last-updated">
        <p>Last updated: June 1, 2023</p>
      </div>
    </div>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/privacy" class="nav-link">Privacy Policy</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </div>
</template>
    
<script setup>
// No additional script needed
</script>
    
<style scoped>
.terms-view {
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

.terms-container {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 1rem;
}
    
.terms-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--color-card-bg);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal) ease;
}

.terms-section:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  box-shadow: var(--shadow-md);
}
    
.terms-section h2 {
  font-family: var(--font-family-display);
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
  color: var(--color-primary);
}
    
.terms-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.terms-section p:last-child {
  margin-bottom: 0;
}
    
.terms-section a {
  color: var(--color-primary);
  text-decoration: none;
  transition: all var(--transition-fast) ease;
}
    
.terms-section a:hover {
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
  .terms-container {
    padding: 2rem;
  }
}
</style>
    