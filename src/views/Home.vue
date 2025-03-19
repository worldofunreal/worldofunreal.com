<template>
  <div class="mobile-app">
    <!-- Portal Effect Overlay -->
    <div class="portal-effect"></div>
    
    <!-- Main Content Container -->
    <div class="journey-container">
      <!-- Entry Portal Section (initially visible) -->
      <section 
        id="entry-portal" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'entry-portal' }"
        ref="entryPortal"
      >
      <div class="container">
          <h1 class="title-gradient">WORLD OF UNREAL</h1>
          <div class="subtitle-container">
            <p class="journey-subtitle">ENTER THE METAVERSE</p>
            <div class="tech-line"></div>
          </div>
          <button @click="navigateTo('tech-showcase')" class="journey-button">
            <span class="button-text">BEGIN JOURNEY</span>
            <div class="button-glow"></div>
          </button>
      </div>
    </section>
    
      <!-- Technology Showcase Section -->
      <section 
        id="tech-showcase" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'tech-showcase' }"
        ref="techShowcase"
      >
        <div class="container">
          <h2 class="section-title">Our Technologies</h2>
          <div class="tech-grid">
            <div 
              v-for="(tech, index) in technologies" 
              :key="tech.id"
              class="tech-card"
              :style="{ '--appear-delay': `${index * 0.15}s`, '--tech-color': tech.color }"
              @click="showTechDetails(tech.id)"
            >
              <!-- AI Generated Image Placeholder -->
              <div class="card-image">
                <!-- // A futuristic tech visualization of [tech.name] with neon blue glow effects -->
                <img src="/placeholder.jpg" alt="tech.name" />
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <div class="tech-icon" :class="tech.id">
                  <component :is="tech.icon" :color="`var(--${tech.id}-color)`" />
                </div>
                <h3 class="tech-name">{{ tech.name }}</h3>
                <div class="tech-users">
                  <span class="user-count">{{ tech.userCount }}k</span>
                  <span class="user-label">active users</span>
                </div>
              </div>
              <div class="card-glow"></div>
            </div>
          </div>
          <button @click="navigateTo('services-explore')" class="journey-button secondary">
            <span class="button-text">CONTINUE</span>
            <div class="button-glow"></div>
          </button>
        </div>
      </section>
      
      <!-- Services Exploration Section -->
      <section 
        id="services-explore" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'services-explore' }"
        ref="servicesExplore"
      >
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          <div class="service-cards">
            <div 
              v-for="(service, index) in services" 
              :key="service.id" 
              class="service-card"
              :style="{ '--appear-delay': `${index * 0.2}s`, '--service-color': service.color }"
            >
              <div class="service-header">
                <div class="service-icon">
                  <component :is="service.icon" :color="`var(--${service.id.split('-')[0]}-color)`" />
                </div>
                <h3 class="service-title">{{ service.title }}</h3>
              </div>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-stats">
                <div class="stat-item">
                  <div class="stat-value">{{ service.projectCount }}</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ service.rating }}/5</div>
                  <div class="stat-label">Rating</div>
                </div>
              </div>
              <button class="service-button">Learn More</button>
              <div class="card-glow"></div>
            </div>
          </div>
          <button @click="navigateTo('vision-mission')" class="journey-button secondary">
            <span class="button-text">DISCOVER MORE</span>
            <div class="button-glow"></div>
          </button>
        </div>
      </section>
      
      <!-- Vision & Mission Section -->
      <section 
        id="vision-mission" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'vision-mission' }"
        ref="visionMission"
      >
        <div class="container">
          <h2 class="section-title">Our Vision</h2>
          
          <!-- Progress Level Bar -->
          <div class="level-progress">
            <div class="level-info">
              <div class="level-number">LVL 42</div>
              <div class="company-xp">Metaverse Pioneer</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
              <div class="progress-text">4.2M XP</div>
            </div>
          </div>
          
          <!-- Mission Cards with completion status -->
          <div class="mission-container">
            <h3 class="mission-title">Key Missions</h3>
            
            <div class="mission-cards">
              <div class="mission-card completed">
                <div class="mission-icon">
                  <div class="mission-completion-badge">✓</div>
                  <!-- // A futuristic tech access portal with glowing edges -->
                  <img src="/placeholder.jpg" alt="Mission 1" class="mission-bg" />
                </div>
                <div class="mission-content">
                  <h4>Democratize Tech Access</h4>
                  <div class="mission-desc">Making emerging tech accessible to everyone</div>
                  <div class="mission-progress completed">
                    <span class="progress-label">COMPLETED</span>
                    <div class="progress-reward">+750 XP</div>
                  </div>
                </div>
              </div>
              
              <div class="mission-card active">
                <div class="mission-icon">
                  <div class="mission-completion-badge">75%</div>
                  <!-- // A secure digital vault with blockchain connections -->
                  <img src="/placeholder.jpg" alt="Mission 2" class="mission-bg" />
                </div>
                <div class="mission-content">
                  <h4>Secure Digital Ecosystems</h4>
                  <div class="mission-desc">Building trusted, transparent platforms</div>
                  <div class="mission-progress">
                    <div class="small-progress-bar">
                      <div class="small-progress-fill" style="width: 75%"></div>
                    </div>
                    <div class="progress-reward">+1200 XP</div>
                  </div>
                </div>
              </div>
              
              <div class="mission-card">
                <div class="mission-icon">
                  <div class="mission-completion-badge">32%</div>
                  <!-- // A person stepping through a portal into a virtual world -->
                  <img src="/placeholder.jpg" alt="Mission 3" class="mission-bg" />
                </div>
                <div class="mission-content">
                  <h4>Transcend Physical Limits</h4>
                  <div class="mission-desc">Creating immersive virtual experiences</div>
                  <div class="mission-progress">
                    <div class="small-progress-bar">
                      <div class="small-progress-fill" style="width: 32%"></div>
                    </div>
                    <div class="progress-reward">+2000 XP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Achievement Section -->
          <div class="achievements-section">
            <div class="section-header">
              <h3>Achievements</h3>
              <div class="view-all">View All</div>
            </div>
            
            <div class="achievements-grid">
              <div class="achievement-item unlocked">
                <div class="achievement-icon">
                  <!-- // A golden trophy with digital particles -->
                  <img src="/placeholder.jpg" alt="Innovator" />
                </div>
                <div class="achievement-name">Tech Innovator</div>
              </div>
              
              <div class="achievement-item unlocked">
                <div class="achievement-icon">
                  <!-- // A blockchain connection node glowing blue -->
                  <img src="/placeholder.jpg" alt="Blockchain" />
                </div>
                <div class="achievement-name">Chain Master</div>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon locked">
                  <!-- // A futuristic VR headset with glowing interface -->
                  <img src="/placeholder.jpg" alt="VR Master" />
                  <div class="lock-overlay">
                    <span class="lock-icon">🔒</span>
                  </div>
                </div>
                <div class="achievement-name">VR Pioneer</div>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon locked">
                  <!-- // A digital brain with neural connections -->
                  <img src="/placeholder.jpg" alt="AI Master" />
                  <div class="lock-overlay">
                    <span class="lock-icon">🔒</span>
                  </div>
                </div>
                <div class="achievement-name">AI Wizard</div>
              </div>
            </div>
          </div>
          
          <button @click="navigateTo('connection-point')" class="journey-button secondary">
            <span class="button-text">NEXT STEP</span>
            <div class="button-glow"></div>
          </button>
        </div>
      </section>
      
      <!-- Connection Point Section -->
      <section 
        id="connection-point" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'connection-point' }"
        ref="connectionPoint"
      >
        <div class="container">
          <div class="connection-header">
            <h2 class="section-title">Connect With Us</h2>
            <div class="stats-badge">
              <div class="user-count">18.2K</div>
              <div class="user-label">Active Users</div>
            </div>
          </div>
          
          <!-- User Profile Card -->
          <div class="profile-card">
            <div class="profile-header">
              <div class="avatar-container">
                <!-- // A futuristic digital avatar with glowing edges -->
                <img src="/placeholder.jpg" alt="User Avatar" class="avatar-img" />
                <div class="avatar-glow"></div>
              </div>
              <div class="profile-info">
                <div class="welcome-message">WELCOME, EXPLORER</div>
                <div class="user-rank">Early Adopter <span class="rank-badge">PRO</span></div>
              </div>
            </div>
            
            <!-- Stats Display -->
            <div class="stats-grid">
              <div class="stat-box">
                <div class="stat-value">5</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">12</div>
                <div class="stat-label">Downloads</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">3</div>
                <div class="stat-label">Rewards</div>
              </div>
              <div class="stat-box highlight">
                <div class="stat-value">83%</div>
                <div class="stat-label">Completion</div>
              </div>
            </div>
            
            <!-- Recent Activity Timeline -->
            <div class="activity-timeline">
              <div class="timeline-header">
                <h3>Recent Activity</h3>
                <div class="view-all">View All</div>
              </div>
              
              <div class="timeline-events">
                <div class="timeline-event">
                  <div class="event-time">2 days ago</div>
                  <div class="event-content">
                    <div class="event-icon">🚀</div>
                    <div class="event-details">
                      <div class="event-title">Started AI Integration Project</div>
                      <div class="event-desc">Initialized new project workspace</div>
                    </div>
                  </div>
                </div>
                
                <div class="timeline-event">
                  <div class="event-time">1 week ago</div>
                  <div class="event-content">
                    <div class="event-icon">🏆</div>
                    <div class="event-details">
                      <div class="event-title">Earned Achievement: Early Explorer</div>
                      <div class="event-desc">+200 XP</div>
                    </div>
                  </div>
                </div>
                
                <div class="timeline-event">
                  <div class="event-time">2 weeks ago</div>
                  <div class="event-content">
                    <div class="event-icon">💬</div>
                    <div class="event-details">
                      <div class="event-title">Joined Metaverse Community</div>
                      <div class="event-desc">Connected with 5 members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Action Cards -->
          <div class="action-cards">
            <div class="action-card project">
              <div class="card-icon">🛠️</div>
              <div class="card-content">
                <h4>Start a Project</h4>
                <p>Begin your journey with our technology stack</p>
              </div>
              <div class="card-arrow">→</div>
            </div>
            
            <div class="action-card connect">
              <div class="card-icon">👥</div>
              <div class="card-content">
                <h4>Join Community</h4>
                <p>Connect with like-minded innovators</p>
              </div>
              <div class="card-arrow">→</div>
            </div>
            
            <div class="action-card demo">
              <div class="card-icon">🎮</div>
              <div class="card-content">
                <h4>Try Demo</h4>
                <p>Experience our tech with interactive demos</p>
              </div>
              <div class="card-arrow">→</div>
            </div>
          </div>
          
          <!-- Contact CTA -->
          <div class="contact-cta">
            <div class="cta-header">Ready to transform your ideas into reality?</div>
            <button class="cta-button primary">
              <span class="button-text">CONTACT US</span>
              <div class="button-glow"></div>
            </button>
            <button class="cta-button secondary">
              <span class="button-text">VIEW SERVICES</span>
              <div class="button-glow"></div>
            </button>
          </div>
          
          <!-- Return Navigation -->
          <div class="nav-actions">
            <button @click="navigateTo('entry-portal')" class="nav-button">
              <span class="nav-icon">🏠</span>
              <span class="nav-text">Return Home</span>
            </button>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Bottom App Navigation -->
    <nav class="app-nav">
      <div 
        v-for="tab in navigationTabs" 
        :key="tab.id"
        class="nav-tab" 
        :class="{ 'active': activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        <div class="tab-icon">
          <component :is="tab.icon" :active="activeTab === tab.id" />
        </div>
        <span class="tab-label">{{ tab.label }}</span>
        
        <!-- Active indicator -->
        <div class="active-indicator"></div>
      </div>
      
      <!-- Theme toggle -->
      <div class="theme-toggle" @click="toggleTheme">
        <div class="tab-icon">
          <component :is="theme === 'dark' ? ThemedIcons.SunIcon : ThemedIcons.MoonIcon" />
        </div>
      </div>
    </nav>
    
    <!-- Progress Indicator (repositioned) -->
    <div class="journey-progress">
      <div 
        v-for="section in sections" 
        :key="section.id"
        class="progress-marker"
        :class="{ 'active': activeSection === section.id }"
        @click="navigateTo(section.id)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { gsap } from 'gsap';
import ThemedIcons from '../utils/useIconSystem';
import useTheme from '../utils/useTheme';

// Theme management
const { enabled, toggleTheme } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');

// Refs for each section
const entryPortal = ref(null);
const techShowcase = ref(null);
const servicesExplore = ref(null);
const visionMission = ref(null);
const connectionPoint = ref(null);

// App navigation tabs
const activeTab = ref('home');
const navigationTabs = [
  { id: 'home', label: 'Home', icon: ThemedIcons.HomeIcon },
  { id: 'explore', label: 'Explore', icon: ThemedIcons.ExploreIcon },
  { id: 'services', label: 'Services', icon: ThemedIcons.ServicesIcon },
  { id: 'about', label: 'About', icon: ThemedIcons.AboutIcon }
];

// Tab switching
const switchTab = (tabId) => {
  activeTab.value = tabId;
  
  // Map tabs to sections for navigation
  switch(tabId) {
    case 'home':
      navigateTo('entry-portal');
      break;
    case 'explore':
      navigateTo('tech-showcase');
      break;
    case 'services':
      navigateTo('services-explore');
      break;
    case 'about':
      navigateTo('vision-mission');
      break;
  }
  
  // Tab switching animation
  gsap.fromTo(`.nav-tab.active .tab-icon`,
    { scale: 0.8, opacity: 0.5 },
    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
  );
};

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Wait for DOM to be fully rendered
  await nextTick();
  
  // Initialize the first section with animation (with safety check)
  if (entryPortal.value) {
    gsap.fromTo(entryPortal.value, 
      { autoAlpha: 0, y: 40, scale: 0.9 },
      { 
        autoAlpha: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.2, 
        ease: "power3.out", 
        delay: 0.5 
      }
    );
  }
  
  // Animate bottom nav entrance
  gsap.fromTo('.app-nav',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, delay: 1.2, ease: "power2.out" }
  );
  
  // Animate tech cards on scroll
  animateCardsOnScroll();
});

// Animate cards when they come into view
const animateCardsOnScroll = () => {
  const cards = document.querySelectorAll('.tech-card, .service-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: parseFloat(entry.target.style.getPropertyValue('--appear-delay')) || 0
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    gsap.set(card, { y: 30, opacity: 0, scale: 0.9 });
    observer.observe(card);
  });
};

// Journey navigation
const activeSection = ref('entry-portal');
const sections = [
  { id: 'entry-portal', name: 'Entry' },
  { id: 'tech-showcase', name: 'Technologies' },
  { id: 'services-explore', name: 'Services' },
  { id: 'vision-mission', name: 'Vision' },
  { id: 'connection-point', name: 'Connect' }
];

// Update activeTab when section changes
const updateActiveTab = (sectionId) => {
  switch(sectionId) {
    case 'entry-portal':
      activeTab.value = 'home';
      break;
    case 'tech-showcase':
      activeTab.value = 'explore';
      break;
    case 'services-explore':
      activeTab.value = 'services';
      break;
    case 'vision-mission':
    case 'connection-point':
      activeTab.value = 'about';
      break;
  }
};

const navigateTo = (sectionId) => {
  if (activeSection.value === sectionId) return;
  
  // Get current and next section elements with safety checks
  const currentSectionRef = getSectionRef(activeSection.value);
  const nextSectionRef = getSectionRef(sectionId);
  
  // Safety check to ensure refs are available
  if (!currentSectionRef || !nextSectionRef) return;
  
  // Portal effect
  const portalEffect = document.querySelector('.portal-effect');
  if (!portalEffect) return;
  
  // Animation sequence
  const tl = gsap.timeline({
    onComplete: () => {
      activeSection.value = sectionId;
      updateActiveTab(sectionId);
      
      // Trigger card animations when new section becomes active
      if (sectionId === 'tech-showcase' || sectionId === 'services-explore') {
        animateCardsOnScroll();
      }
    }
  });
  
  // Exit current section
  tl.to(currentSectionRef, {
    duration: 0.5,
    autoAlpha: 0,
    y: -50,
    scale: 0.9,
    ease: "power2.in"
  });
  
  // Portal effect animation
  tl.to(portalEffect, {
    duration: 0.4,
    scale: 1.5,
    autoAlpha: 1,
    ease: "power2.out"
  });
  
  // Enter new section
  tl.to(nextSectionRef, {
    duration: 0.6,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    ease: "power2.out"
  });
  
  // Fade portal
  tl.to(portalEffect, {
    duration: 0.3,
    scale: 0,
    autoAlpha: 0,
    ease: "power2.in"
  }, "-=0.3");
};

// Helper function to get the ref of a section
const getSectionRef = (sectionId) => {
  switch(sectionId) {
    case 'entry-portal': return entryPortal.value;
    case 'tech-showcase': return techShowcase.value;
    case 'services-explore': return servicesExplore.value;
    case 'vision-mission': return visionMission.value;
    case 'connection-point': return connectionPoint.value;
    default: return null;
  }
};

// Enhanced content data
const technologies = [
  { 
    id: 'ai', 
    name: 'AI Solutions', 
    icon: ThemedIcons.BrainIcon, 
    color: '#00CCFF',
    userCount: '120',
    popularity: 'High' 
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    icon: ThemedIcons.BlockchainIcon, 
    color: '#9933FF',
    userCount: '85',
    popularity: 'Rising' 
  },
  { 
    id: 'metaverse', 
    name: 'Metaverse', 
    icon: ThemedIcons.MetaverseIcon, 
    color: '#FF3366',
    userCount: '64',
    popularity: 'Trending' 
  },
  { 
    id: 'web3', 
    name: 'Web3', 
    icon: ThemedIcons.Web3Icon, 
    color: '#33FFCC',
    userCount: '92',
    popularity: 'Popular' 
  }
];

const services = [
  { 
    id: 'ai-services', 
    title: 'AI Integration', 
    icon: ThemedIcons.BrainIcon,
    color: '#00CCFF',
    description: 'Intelligent solutions that learn and evolve to provide unprecedented insights.',
    projectCount: 86,
    rating: 4.9
  },
  { 
    id: 'blockchain-services', 
    title: 'Blockchain Solutions', 
    icon: ThemedIcons.BlockchainIcon,
    color: '#9933FF',
    description: 'Secure, transparent infrastructure for digital assets and transactions.',
    projectCount: 53,
    rating: 4.7
  },
  { 
    id: 'metaverse-services', 
    title: 'Metaverse Experiences', 
    icon: ThemedIcons.MetaverseIcon,
    color: '#FF3366',
    description: 'Immersive virtual worlds that transcend physical limitations.',
    projectCount: 41,
    rating: 4.8
  }
];

// Technology details handling
const showTechDetails = (techId) => {
  // Placeholder for tech details modal/expansion
  console.log(`Show details for ${techId}`);
  // This would be expanded to show a modal or detailed view
};


</script>

<style scoped>
.mobile-app {
  font-family: 'Montserrat', sans-serif;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0A0C1B 0%, #1A0B36 100%);
  padding-bottom: 70px; /* Space for bottom nav */
}

.container {
  padding: 0 1.5rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* App Navigation - Enhanced with better visual feedback */
.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(10, 12, 30, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(0, 204, 255, 0.15);
  z-index: 100;
  padding: 0 10px;
  box-shadow: 0 -5px 20px rgba(0, 204, 255, 0.1);
}

.nav-tab {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.nav-tab.active {
  color: #00CCFF;
}

.tab-icon {
  width: 22px;
  height: 22px;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

.tab-label {
  font-size: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.nav-tab.active .tab-label {
  opacity: 1;
}

.active-indicator {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
}

.nav-tab.active .active-indicator {
  width: 20px;
  opacity: 1;
}

.nav-tab:active {
  transform: scale(0.9);
}

.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 204, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 204, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.15);
}

.theme-toggle:active {
  transform: scale(0.9);
  background: rgba(0, 204, 255, 0.2);
}

.theme-toggle .tab-icon {
  width: 18px;
  height: 18px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
}

/* Portal Effect - Enhanced glow */
.portal-effect {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 200vw;
  height: 200vw;
  background: radial-gradient(
    circle,
    rgba(0, 204, 255, 0.5) 0%,
    rgba(153, 51, 255, 0.3) 30%,
    rgba(0, 0, 0, 0) 70%
  );
  opacity: 0;
  z-index: 5;
  pointer-events: none;
  will-change: transform, opacity;
}

/* Journey Container */
.journey-container {
  position: relative;
  min-height: calc(100vh - 60px); /* Subtract nav height */
}

/* Sections */
.journey-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 60px - 40px); /* Subtract nav and progress indicator */
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  z-index: 1;
  transform: translateY(40px) scale(0.9);
}

.journey-section.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

/* Progress Indicator - Enhanced with pill shape and glow */
.journey-progress {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
  background: rgba(10, 12, 30, 0.7);
  padding: 6px 10px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 204, 255, 0.15);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.1);
}

.progress-marker {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.progress-marker.active {
  background-color: #00CCFF;
  transform: scale(1.5);
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
}

/* Entry Portal Section */
.title-gradient {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 204, 255, 0.5);
  text-align: center;
}

.subtitle-container {
  position: relative;
  margin-bottom: 3rem;
}

.journey-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.tech-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.7);
}

/* Journey Button - Enhanced with stronger glow and better hover */
.journey-button {
  display: block;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  color: white;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 204, 255, 0.3);
}

.journey-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 204, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.15);
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(0, 204, 255, 0.8) 0%,
    rgba(0, 204, 255, 0) 70%
  );
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.journey-button:hover .button-glow {
  opacity: 0.5;
}

.journey-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 204, 255, 0.4);
}

/* Section Titles */
.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
}

/* Tech Showcase Section */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.tech-card {
  position: relative;
  background: rgba(10, 12, 30, 0.6);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(var(--tech-color, 0, 204, 255), 0.2);
  aspect-ratio: 1 / 1.2;
  transform: translateZ(0);
}

.tech-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 25px rgba(var(--tech-color, 0, 204, 255), 0.25);
  border: 1px solid rgba(var(--tech-color, 0, 204, 255), 0.5);
}

.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.tech-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 12, 30, 0.3) 0%,
    rgba(10, 12, 30, 0.9) 70%
  );
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.tech-icon {
  width: 40px;
  height: 40px;
  color: var(--tech-color, #00CCFF);
  margin-bottom: 0.75rem;
}

.tech-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.tech-users {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.user-count {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--tech-color, #00CCFF);
}

.user-label {
  font-size: 0.75rem;
  opacity: 0.7;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
  box-shadow: inset 0 0 20px var(--tech-color, rgba(0, 204, 255, 0.5));
  pointer-events: none;
}

.tech-card:hover .card-glow {
  opacity: 1;
}

/* Services Exploration Section */
.service-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-card {
  position: relative;
  background: rgba(10, 12, 30, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  border-left: 3px solid var(--service-color, #00CCFF);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(var(--service-color, 0, 204, 255), 0.25);
  background: rgba(10, 12, 30, 0.8);
}

.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.service-icon {
  width: 32px;
  height: 32px;
  color: var(--service-color, #00CCFF);
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.service-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--service-color, #00CCFF);
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.7;
}

.service-button {
  background: rgba(255, 255, 255, 0.05);
  color: var(--service-color, #00CCFF);
  border: 1px solid var(--service-color, #00CCFF);
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.service-button:hover {
  background: rgba(var(--service-color, 0, 204, 255), 0.1);
  box-shadow: 0 0 15px rgba(var(--service-color, 0, 204, 255), 0.3);
}

/* Vision & Mission Section */
.level-progress {
  background: rgba(10, 12, 30, 0.8);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 204, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.level-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.level-number {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #00CCFF;
  text-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
}

.company-xp {
  font-size: 0.85rem;
  opacity: 0.8;
  background: linear-gradient(90deg, #00CCFF, #9933FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.progress-bar {
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00CCFF, #9933FF);
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
}

.progress-text {
  position: absolute;
  right: 0;
  top: -18px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.mission-container {
  margin-bottom: 2.5rem;
}

.mission-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: white;
  display: flex;
  align-items: center;
}

.mission-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mission-card {
  display: flex;
  background: rgba(10, 12, 30, 0.7);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.mission-card.active {
  border: 1px solid rgba(0, 204, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.15);
}

.mission-card.completed {
  border: 1px solid rgba(0, 255, 128, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 128, 0.15);
}

.mission-icon {
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
}

.mission-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mission-completion-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(10, 12, 30, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.mission-card.completed .mission-completion-badge {
  background: #00FF80;
  color: #003311;
  font-weight: 700;
}

.mission-content {
  flex: 1;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mission-content h4 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  margin: 0 0 0.25rem;
  font-weight: 600;
}

.mission-desc {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.mission-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mission-progress.completed {
  color: #00FF80;
}

.small-progress-bar {
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  flex: 1;
  margin-right: 10px;
}

.small-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00CCFF, #9933FF);
  border-radius: 3px;
}

.progress-label {
  font-size: 0.7rem;
  font-weight: 600;
  flex: 1;
}

.progress-reward {
  font-size: 0.7rem;
  color: #FFCC00;
  font-weight: 600;
}

.achievements-section {
  margin-bottom: 2.5rem;
  background: rgba(10, 12, 30, 0.7);
  border-radius: 16px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.section-header h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin: 0;
}

.view-all {
  font-size: 0.85rem;
  color: #00CCFF;
  cursor: pointer;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.achievement-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.achievement-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.achievement-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.achievement-item.unlocked .achievement-icon {
  box-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
  border: 1px solid rgba(255, 204, 0, 0.5);
}

.achievement-icon.locked {
  opacity: 0.5;
  filter: grayscale(1);
}

.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-icon {
  font-size: 1.25rem;
}

.achievement-name {
  font-size: 0.75rem;
  text-align: center;
}

.achievement-item.unlocked .achievement-name {
  color: #FFCC00;
  font-weight: 600;
}

/* Connection Point Section */
.connection-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.stats-badge {
  background: rgba(0, 204, 255, 0.1);
  border: 1px solid rgba(0, 204, 255, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  text-align: center;
}

.user-count {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #00CCFF;
}

.user-label {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Profile Card */
.profile-card {
  background: rgba(10, 12, 30, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 204, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.avatar-container {
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00CCFF;
}

.avatar-glow {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 50%;
  border: 1px solid rgba(0, 204, 255, 0.5);
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.5);
  pointer-events: none;
  animation: pulseGlow 2s infinite;
}

@keyframes pulseGlow {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.profile-info {
  flex: 1;
}

.welcome-message {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
}

.user-rank {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rank-badge {
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  color: white;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.stat-box {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.75rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-box.highlight {
  background: rgba(0, 204, 255, 0.1);
  border: 1px solid rgba(0, 204, 255, 0.3);
}

.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
}

.stat-box.highlight .stat-value {
  color: #00CCFF;
}

.stat-label {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Activity Timeline */
.activity-timeline {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1rem;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.timeline-header h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  margin: 0;
}

.view-all {
  font-size: 0.75rem;
  color: #00CCFF;
  cursor: pointer;
}

.timeline-events {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline-event {
  position: relative;
}

.event-time {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.25rem;
}

.event-content {
  display: flex;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 0.75rem;
}

.event-icon {
  font-size: 1.25rem;
  min-width: 1.25rem;
  line-height: 1;
}

.event-details {
  flex: 1;
}

.event-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.event-desc {
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Action Cards */
.action-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.action-card {
  display: flex;
  align-items: center;
  background: rgba(10, 12, 30, 0.7);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.action-card.project {
  border-left: 3px solid #00CCFF;
}

.action-card.project:hover {
  box-shadow: 0 8px 20px rgba(0, 204, 255, 0.2);
}

.action-card.connect {
  border-left: 3px solid #9933FF;
}

.action-card.connect:hover {
  box-shadow: 0 8px 20px rgba(153, 51, 255, 0.2);
}

.action-card.demo {
  border-left: 3px solid #33FFCC;
}

.action-card.demo:hover {
  box-shadow: 0 8px 20px rgba(51, 255, 204, 0.2);
}

.card-icon {
  font-size: 1.75rem;
  margin-right: 1rem;
  min-width: 1.75rem;
  text-align: center;
}

.card-content {
  flex: 1;
}

.card-content h4 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.card-content p {
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0;
}

.card-arrow {
  font-size: 1.25rem;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.action-card:hover .card-arrow {
  transform: translateX(5px);
  opacity: 1;
}

/* Contact CTA */
.contact-cta {
  background: linear-gradient(135deg, rgba(0, 204, 255, 0.2) 0%, rgba(153, 51, 255, 0.2) 100%);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 204, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-header {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  line-height: 1.4;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem 0.5rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: none;
  color: white;
}

.cta-button.primary {
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  box-shadow: 0 4px 15px rgba(0, 204, 255, 0.4);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
}

.cta-button.primary:hover {
  box-shadow: 0 8px 25px rgba(0, 204, 255, 0.5);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Return Navigation */
.nav-actions {
  text-align: center;
}

.nav-button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.nav-button:hover {
  color: #00CCFF;
}

.nav-icon {
  font-size: 1rem;
}

/* Media Queries */
@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .service-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .connection-options {
    flex-direction: row;
    justify-content: center;
  }
  
  .connection-button {
    min-width: 180px;
  }
  
  .mission-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .mission-icon {
    width: 100%;
    height: 100px;
  }
  
  .mission-card {
    flex-direction: column;
    height: 100%;
  }
  
  .mission-content {
    padding: 1rem;
  }
  
  .action-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
