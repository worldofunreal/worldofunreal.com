<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-floating-elements">
            <div class="floating-element el-blockchain"></div>
            <div class="floating-element el-ai"></div>
            <div class="floating-element el-vr"></div>
          </div>
          <div class="hero-logo">
            <img src="/logo.svg" alt="World of Unreal" class="logo-image" />
          </div>
          <h1 class="hero-title text-gradient">ARCHITECT THE METAVERSE</h1>
          <p class="hero-subtitle">Building the decentralized digital reality layer where Web3 and AI converge to create immersive sovereign experiences</p>
          <div class="hero-actions">
            <router-link to="/tech" class="btn btn-large">
              <i class="fas fa-rocket"></i> Enter The Metaverse
            </router-link>
            <router-link to="/services" class="btn btn-large btn-outline">
              <i class="fas fa-cube"></i> Explore dApps
            </router-link>
          </div>
          
          <div class="hero-tech-badges">
            <div class="tech-badge">
              <i class="fab fa-ethereum"></i>
              <span>Ethereum</span>
            </div>
            <div class="tech-badge">
              <i class="fas fa-cubes"></i>
              <span>Solana</span>
            </div>
            <div class="tech-badge">
              <i class="fas fa-project-diagram"></i>
              <span>Layer 2</span>
            </div>
            <div class="tech-badge">
              <i class="fas fa-vr-cardboard"></i>
              <span>AR/VR</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-backdrop"></div>
      <div class="hero-particles"></div>
    </section>
    
    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">100K+</div>
            <div class="stat-label">NFTs Minted</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">$50M+</div>
            <div class="stat-label">TVL Secured</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">25+</div>
            <div class="stat-label">dApps Built</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">5 Years</div>
            <div class="stat-label">Web3 Experience</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features section">
      <div class="container">
        <h2 class="section-title text-center">Web3 Infrastructure</h2>
        <p class="section-subtitle text-center">Our decentralized toolkit powers the next generation of trustless applications</p>
        
        <div class="features-grid">
          <div class="feature-card card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technologies Section -->
    <section class="technologies section">
      <div class="container">
        <h2 class="section-title text-center">Metaverse Architecture</h2>
        <p class="section-subtitle text-center">Designing and building the decentralized foundation for immersive digital experiences</p>
        
        <div class="tech-grid">
          <div class="tech-card card" v-for="tech in technologies" :key="tech.id">
            <div class="tech-icon">
              <i :class="tech.icon"></i>
            </div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
            <router-link :to="'/tech/' + tech.id" class="tech-link">
              Discover More <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
      
    <!-- Case Studies -->
    <section class="case-studies section">
      <div class="container">
        <h2 class="section-title text-center">Recent Projects</h2>
        <p class="section-subtitle text-center">Explore our latest work in the Web3 ecosystem</p>
        
        <div class="cases-grid">
          <div class="case-card" v-for="(project, index) in projects" :key="index">
            <div class="case-image" :class="`bg-${index+1}`">
              <div class="overlay">
                <span>{{ project.category }}</span>
              </div>
            </div>
            <div class="case-content">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="case-tech">
                <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Build in the Metaverse?</h2>
          <p>Let's architect your decentralized digital future together.</p>
          <router-link to="/contact" class="btn btn-large">
            <i class="fas fa-paper-plane"></i> Connect Your Wallet
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');

const features = ref([
  {
    id: 'smart-contracts',
    title: 'Smart Contract Development',
    icon: 'fas fa-file-contract',
    description: 'Secure, audited, and optimized smart contracts for DeFi, NFTs, DAOs, and custom tokenomics.'
  },
  {
    id: 'token',
    title: 'Tokenization Protocols',
    icon: 'fas fa-coins',
    description: 'Custom ERC/SPL token standards with advanced mechanisms for governance and utility.'
  },
  {
    id: 'defi',
    title: 'DeFi Infrastructure',
    icon: 'fas fa-hand-holding-usd',
    description: 'Decentralized exchange, lending, and yield optimization protocols with cross-chain capabilities.'
  },
  {
    id: 'nft',
    title: 'NFT Ecosystems',
    icon: 'fas fa-palette',
    description: 'End-to-end NFT platforms with minting, marketplace, and metaverse integration.'
  }
]);

const technologies = ref([
  { 
    id: 'ai', 
    name: 'AI Integration', 
    icon: 'fas fa-brain', 
    description: 'On-chain neural networks and decentralized AI systems that leverage blockchain security for trustless data processing and intelligence.' 
  },
  { 
    id: 'blockchain', 
    name: 'ZK Technology', 
    icon: 'fas fa-shield-alt', 
    description: 'Zero-knowledge proof implementations for privacy-preserving transactions and scalable layer-2 solutions with maximum security.'
  },
  { 
    id: 'metaverse', 
    name: 'Spatial Computing', 
    icon: 'fas fa-vr-cardboard', 
    description: 'Interoperable 3D environments where physical and digital realities merge through AR/VR with blockchain-verified digital identity and assets.'
  }
]);

const projects = ref([
  {
    name: "NexusWorld Virtual Land",
    category: "Metaverse",
    description: "Decentralized virtual real estate platform with on-chain land registry and P2E gameplay mechanics.",
    tech: ["Ethereum", "Unity", "IPFS"]
  },
  {
    name: "DeFi Yield Optimizer",
    category: "Finance",
    description: "Cross-chain yield farming protocol with automated strategy execution and risk management.",
    tech: ["Solana", "Rust", "React"]
  },
  {
    name: "AI-powered NFT Generator",
    category: "Creative",
    description: "Generative art platform using decentralized AI models to create unique NFTs with provable scarcity.",
    tech: ["Polygon", "TensorFlow", "ThreeJS"]
  }
]);

onMounted(() => {
  animateHeroElements();
});

function animateHeroElements() {
  const elements = document.querySelectorAll('.floating-element');
  elements.forEach(el => {
    const randomX = Math.random() * 10 - 5;
    const randomY = Math.random() * 10 - 5;
    const randomDelay = Math.random() * 2;
    const randomTime = 3 + Math.random() * 2;
    
    el.style.setProperty('--x', `${randomX}px`);
    el.style.setProperty('--y', `${randomY}px`);
    el.style.setProperty('--delay', `${randomDelay}s`);
    el.style.setProperty('--time', `${randomTime}s`);
  });
}
</script>

<style scoped>
.home-view {
  color: var(--color-text-primary);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) 0;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at bottom right, rgba(153, 51, 255, 0.2) 0%, transparent 70%),
              radial-gradient(ellipse at top left, rgba(0, 145, 255, 0.2) 0%, transparent 70%);
  z-index: -1;
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

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 0 var(--spacing-md);
}

.hero-floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.floating-element {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.15;
  z-index: -1;
  will-change: transform;
  animation: float var(--time) ease-in-out infinite;
  animation-delay: var(--delay);
}

.el-blockchain {
  background: rgba(0, 217, 255, 0.6);
  top: -20px;
  left: 10%;
  height: 180px;
  width: 180px;
}

.el-ai {
  background: rgba(153, 51, 255, 0.6);
  bottom: 10%;
  right: 10%;
  height: 200px;
  width: 200px;
}

.el-vr {
  background: rgba(255, 69, 131, 0.6);
  top: 30%;
  right: 5%;
  height: 120px;
  width: 120px;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(var(--x), var(--y));
  }
}

.hero-logo {
  margin-bottom: var(--spacing-lg);
  display: flex;
  justify-content: center;
}

.logo-image {
  width: 35%;
  max-width: 180px;
  height: auto;
}

.hero-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.02em;
  font-family: var(--font-family-logo);
  text-transform: uppercase;
  line-height: 1.2;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px rgba(0, 145, 255, 0.5);
  }
  100% {
    text-shadow: 0 0 20px rgba(153, 51, 255, 0.8);
  }
}

.hero-subtitle {
  font-size: var(--font-size-sm);
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-light);
  line-height: var(--line-height-relaxed);
  padding: 0 var(--spacing-sm);
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: stretch;
  padding: 0 var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.hero-tech-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: var(--spacing-lg);
}

.tech-badge {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.tech-badge i {
  color: var(--color-primary);
}

/* Stats Section */
.stats-section {
  background: rgba(10, 12, 27, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
  padding: 0 var(--spacing-sm);
}

.stat-card {
  padding: var(--spacing-sm);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-value {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-logo);
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

/* Section Styles */
.section {
  padding: var(--spacing-xl) 0;
}

.section-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-bold);
  padding: 0 var(--spacing-sm);
}

.section-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto var(--spacing-lg);
  line-height: var(--line-height-relaxed);
  padding: 0 var(--spacing-md);
}

/* Features Section */
.features {
  background: linear-gradient(180deg, var(--color-surface-1) 0%, transparent 100%);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  padding: 0 var(--spacing-sm);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(var(--color-primary-rgb), 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.feature-card:hover::before {
  transform: translateX(100%);
}

.feature-card:hover {
  border-color: rgba(var(--color-primary-rgb), 0.3);
  transform: translateY(-5px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto var(--spacing-sm);
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 50%;
}

.feature-card h3 {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
}

.feature-card p {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}

/* Technologies Section */
.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  padding: 0 var(--spacing-sm);
}

.tech-card {
  padding: var(--spacing-lg);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  border-color: rgba(var(--color-secondary-rgb), 0.3);
  transform: translateY(-5px);
}

.tech-icon {
  width: 48px;
  height: 48px;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-xl);
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color-secondary-rgb), 0.1);
  border-radius: 50%;
}

.tech-card h3 {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
}

.tech-card p {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-normal);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-secondary);
}

.tech-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  position: relative;
  padding-bottom: 2px;
}

.tech-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-normal) ease;
}

.tech-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.tech-link i {
  font-size: 0.85em;
  transition: transform var(--transition-normal) ease;
}

.tech-link:hover i {
  transform: translateX(4px);
}

/* Case Studies */
.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  padding: 0 var(--spacing-sm);
}

.case-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.1);
}

.case-image {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.bg-1 {
  background: linear-gradient(45deg, #3a0ca3, #4cc9f0);
}

.bg-2 {
  background: linear-gradient(45deg, #7209b7, #f72585);
}

.bg-3 {
  background: linear-gradient(45deg, #4361ee, #3a0ca3);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.overlay span {
  font-size: var(--font-size-2xs);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.case-content {
  padding: var(--spacing-md);
}

.case-content h3 {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
}

.case-content p {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-normal);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-secondary);
}

.case-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.case-tech span {
  font-size: var(--font-size-3xs);
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  color: var(--color-text-muted);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(0, 145, 255, 0.1) 0%, rgba(153, 51, 255, 0.1) 100%);
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(153, 51, 255, 0.05) 0%, transparent 70%);
  z-index: -1;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

.cta-content h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-secondary);
}

/* Responsive Styles */
@media (min-width: 640px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-md);
  }
  
  .hero-actions {
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
  
  .section {
    padding: var(--spacing-2xl) 0;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
  }
  
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .hero {
    min-height: 85vh;
    padding: var(--spacing-xl) 0;
  }

  .logo-image {
    width: 45%;
    max-width: 220px;
  }
  
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .section-subtitle {
    font-size: var(--font-size-md);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
  
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
  
  .feature-card,
  .tech-card {
    padding: var(--spacing-xl);
  }
  
  .cases-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
