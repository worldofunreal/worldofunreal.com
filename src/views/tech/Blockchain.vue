<template>
  <div class="blockchain-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="gradient-text">Blockchain</h1>
      <p class="subtitle">Building Trust Through Decentralized Technology</p>
    </section>

    <!-- Content Sections -->
    <section class="content-section">
      <div class="section-content">
        <h2>Our Blockchain Solutions</h2>
        <p>We develop secure and transparent blockchain solutions that revolutionize how businesses operate in the digital age.</p>
        
        <div class="features-grid">
          <div class="feature-card">
            <component :is="ThemedIcons.SmartContractIcon" class="feature-icon" />
            <h3>Smart Contracts</h3>
            <p>Automated, self-executing contracts that ensure trust and transparency in transactions.</p>
          </div>

          <div class="feature-card">
            <component :is="ThemedIcons.DeFiIcon" class="feature-icon" />
            <h3>DeFi Solutions</h3>
            <p>Decentralized financial applications that provide innovative banking and investment opportunities.</p>
          </div>

          <div class="feature-card">
            <component :is="ThemedIcons.NFTIcon" class="feature-icon" />
            <h3>NFT Integration</h3>
            <p>Digital asset management and tokenization solutions for unique digital content.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="applications-section">
      <div class="section-content">
        <h2>Applications</h2>
        <div class="applications-grid">
          <div class="application-card">
            <h3>Supply Chain</h3>
            <p>Transparent and traceable supply chain management solutions.</p>
          </div>
          <div class="application-card">
            <h3>Digital Identity</h3>
            <p>Secure and verifiable digital identity management systems.</p>
          </div>
          <div class="application-card">
            <h3>Asset Management</h3>
            <p>Decentralized platforms for digital asset trading and management.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <router-link to="/tech" class="quick-link">Back to Tech</router-link>
      <router-link to="/services" class="quick-link">Services</router-link>
      <router-link to="/contact" class="quick-link">Contact</router-link>
    </section>
  </div>
</template>

<script setup>
import ThemedIcons from '../../utils/useIconSystem';
</script>

<style scoped>
.blockchain-view {
  min-height: 100vh;
  color: white;
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.gradient-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.content-section, .applications-section {
  margin-bottom: 4rem;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-content h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: #00CCFF;
  margin-bottom: 1.5rem;
}

.section-content p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.features-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card, .application-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover, .application-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.feature-icon {
  width: 48px;
  height: 48px;
  color: #00CCFF;
  margin-bottom: 1rem;
}

.feature-card h3, .application-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  color: #00CCFF;
  margin-bottom: 1rem;
}

.feature-card p, .application-card p {
  opacity: 0.8;
  font-size: 1rem;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.quick-link {
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.quick-link:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2rem;
  }

  .section-content h2 {
    font-size: 1.5rem;
  }

  .features-grid, .applications-grid {
    grid-template-columns: 1fr;
  }

  .quick-links {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style> 