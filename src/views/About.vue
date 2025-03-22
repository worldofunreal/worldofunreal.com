<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-particles"></div>
      <div class="container">
        <h1 class="title text-gradient">ABOUT US</h1>
        <p class="subtitle">Building the decentralized architecture of tomorrow</p>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">Our Vision</h2>
          <div class="vision-content">
            <div class="glass vision-card">
              <p>At <span class="text-gradient">World of Unreal</span>, we're redefining digital existence through decentralized systems, trustless architecture, and immersive experiences that honor user sovereignty.</p>
              <p>Our mission is to collapse the barriers between physical and digital, creating seamless interoperable worlds where users own their data, digital assets, and virtual identities without compromise.</p>
            </div>
            <div class="vision-stats">
              <div class="stat-card glass">
                <span class="stat-value">2018</span>
                <span class="stat-label">Founded</span>
              </div>
              <div class="stat-card glass">
                <span class="stat-value">250K+</span>
                <span class="stat-label">Users</span>
              </div>
              <div class="stat-card glass">
                <span class="stat-value">$30M+</span>
                <span class="stat-label">Raised</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">Core Principles</h2>
          <div class="values-grid">
            <div class="value-card glass">
              <div class="value-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Self-Sovereignty</h3>
              <p>We believe users should own their digital identities, data, and assets without intermediaries or gatekeepers.</p>
            </div>
            <div class="value-card glass">
              <div class="value-icon">
                <i class="fas fa-cubes"></i>
              </div>
              <h3>Decentralization</h3>
              <p>Our systems distribute power through decentralized networks, removing single points of failure and control.</p>
            </div>
            <div class="value-card glass">
              <div class="value-icon">
                <i class="fas fa-random"></i>
              </div>
              <h3>Interoperability</h3>
              <p>We design with open standards to ensure assets and identities can flow across virtual worlds and ecosystems.</p>
            </div>
            <div class="value-card glass">
              <div class="value-icon">
                <i class="fas fa-vr-cardboard"></i>
              </div>
              <h3>Immersion</h3>
              <p>Creating experiences that blur the boundary between physical and digital realities through spatial computing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">Our Team</h2>
          <p class="section-subtitle">A collective of builders, visionaries, and technical experts from Web2 and Web3</p>
          <div class="team-grid">
            <div v-for="member in teamMembers" :key="member.id" class="team-card glass">
              <div class="member-avatar">
                <div class="avatar-circle" :style="{ background: member.avatarColor }">
                  <i :class="member.icon"></i>
                </div>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-links">
                <a href="#" v-for="link in member.links" :key="link.type" class="social-link">
                  <i :class="link.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Investors Section -->
    <section class="investors-section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">Backed By</h2>
          <div class="investors-grid">
            <div class="investor-logo glass">
              <span>Paradigm</span>
            </div>
            <div class="investor-logo glass">
              <span>a16z</span>
            </div>
            <div class="investor-logo glass">
              <span>Coinbase Ventures</span>
            </div>
            <div class="investor-logo glass">
              <span>Solana Ventures</span>
            </div>
            <div class="investor-logo glass">
              <span>Digital Currency Group</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Join Us in Building the Metaverse</h2>
          <p>Connect with our team or explore open positions</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn">
              <i class="fas fa-paper-plane"></i> Contact Us
            </router-link>
            <a href="#" class="btn btn-outline">
              <i class="fas fa-briefcase"></i> Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Founder & CEO',
    icon: 'fas fa-user-astronaut',
    avatarColor: 'linear-gradient(135deg, #3a0ca3, #4361ee)',
    bio: 'Former Ethereum Foundation researcher with 8+ years in blockchain systems and spatial computing.',
    links: [
      { type: 'twitter', icon: 'fab fa-twitter' },
      { type: 'github', icon: 'fab fa-github' },
      { type: 'linkedin', icon: 'fab fa-linkedin' }
    ]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO',
    icon: 'fas fa-brain',
    avatarColor: 'linear-gradient(135deg, #7209b7, #f72585)',
    bio: 'Zero-knowledge cryptography expert and former lead engineer at Layer 2 scaling protocol.',
    links: [
      { type: 'twitter', icon: 'fab fa-twitter' },
      { type: 'github', icon: 'fab fa-github' },
      { type: 'linkedin', icon: 'fab fa-linkedin' }
    ]
  },
  {
    id: 3,
    name: 'Michael Zhang',
    role: 'Head of Research',
    icon: 'fas fa-vr-cardboard',
    avatarColor: 'linear-gradient(135deg, #4cc9f0, #4361ee)',
    bio: "AR/VR innovator with experience at Meta\\'s Reality Labs, focusing on spatial computing protocols.",
    links: [
      { type: 'twitter', icon: 'fab fa-twitter' },
      { type: 'github', icon: 'fab fa-github' },
      { type: 'linkedin', icon: 'fab fa-linkedin' }
    ]
  },
  {
    id: 4,
    name: 'Layla Rodriguez',
    role: 'Lead Smart Contract Engineer',
    icon: 'fas fa-file-contract',
    avatarColor: 'linear-gradient(135deg, #f72585, #ff9e00)',
    bio: 'Security-focused developer with experience auditing high-value DeFi protocols and NFT platforms.',
    links: [
      { type: 'twitter', icon: 'fab fa-twitter' },
      { type: 'github', icon: 'fab fa-github' },
      { type: 'linkedin', icon: 'fab fa-linkedin' }
    ]
  },
]);
</script>

<style scoped>
.about-view {
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

.section-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: -1rem auto 2rem;
  font-size: 1rem;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

section {
  padding: 4rem 1rem;
}

/* Vision Section */
.vision-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.vision-card {
  padding: 2rem;
  border-radius: 16px;
}

.vision-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.vision-card p:last-child {
  margin-bottom: 0;
}

.vision-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  padding: 1.5rem;
  text-align: center;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.stat-value {
  display: block;
  font-family: var(--font-family-logo);
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.value-card {
  padding: 2rem;
  text-align: center;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.value-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.value-card h3 {
  font-family: var(--font-family-display);
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.value-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-card {
  padding: 2rem;
  text-align: center;
  border-radius: 16px;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-primary-rgb), 0.3);
}

.member-avatar {
  margin-bottom: 1.5rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.team-card h3 {
  font-family: var(--font-family-display);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.member-role {
  font-size: 0.875rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.member-bio {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
}

.member-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  color: var(--color-text-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}

/* Investors Section */
.investors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.investor-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 12px;
  height: 120px;
  transition: all 0.3s ease;
}

.investor-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.investor-logo span {
  font-family: var(--font-family-logo);
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(0, 145, 255, 0.1) 0%, rgba(153, 51, 255, 0.1) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(153, 51, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-content p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

/* Responsive design */
@media (min-width: 640px) {
  .title {
    font-size: 3rem;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .vision-content {
    grid-template-columns: 2fr 1fr;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .investors-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .investors-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style> 