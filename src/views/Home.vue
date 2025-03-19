<template>
  <div class="home-page" :class="{ 'is-mobile': isMobile }">
    <!-- Portal Effect Overlay -->
    <div class="portal-effect"></div>
    
    <!-- Main Content Container -->
    <div class="journey-container">
      <!-- Entry Portal Section -->
      <section 
        id="entry-portal" 
        class="journey-section" 
        :class="{ 'active': activeSection === 'entry-portal' }"
        ref="entryPortal"
      >
        <div class="container">
          <h1 class="title-gradient">WORLD OF UNREAL</h1>
          <div class="subtitle-container">
            <p class="journey-subtitle">{{ isMobile ? 'ENTER THE METAVERSE' : 'BUILDING THE FUTURE OF TECHNOLOGY' }}</p>
            <div class="tech-line"></div>
          </div>
          <button @click="navigateTo('tech-showcase')" class="journey-button">
            <span class="button-text">{{ isMobile ? 'BEGIN JOURNEY' : 'EXPLORE' }}</span>
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
              <div class="card-image">
                <img :src="tech.image" :alt="tech.name" />
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <div class="tech-icon" :class="tech.id">
                  <component :is="tech.icon" :color="`var(--${tech.id}-color)`" />
                </div>
                <h3 class="tech-name">{{ tech.name }}</h3>
                <div class="tech-users" v-if="isMobile">
                  <span class="user-count">{{ tech.userCount }}k</span>
                  <span class="user-label">active users</span>
                </div>
                <p class="tech-description" v-else>{{ tech.description }}</p>
              </div>
              <div class="card-glow"></div>
            </div>
          </div>
          
          <div class="section-nav">
            <button 
              v-if="isMobile"
              @click="navigateTo('services-explore')" 
              class="journey-button secondary"
            >
              <span class="button-text">CONTINUE</span>
              <div class="button-glow"></div>
            </button>
            <div v-else class="desktop-nav">
              <button @click="previousSection" class="nav-button">Previous</button>
              <button @click="nextSection" class="nav-button">Next</button>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Additional sections from MobileHome.vue -->
      <template v-if="isMobile">
        <!-- Services Exploration Section -->
        <section 
          id="services-explore" 
          class="journey-section" 
          :class="{ 'active': activeSection === 'services-explore' }"
          ref="servicesExplore"
        >
          <!-- Mobile services content -->
        </section>
        
        <!-- Vision & Mission Section -->
        <section 
          id="vision-mission" 
          class="journey-section" 
          :class="{ 'active': activeSection === 'vision-mission' }"
          ref="visionMission"
        >
          <!-- Mobile vision content -->
        </section>
        
        <!-- Connection Point Section -->
        <section 
          id="connection-point" 
          class="journey-section" 
          :class="{ 'active': activeSection === 'connection-point' }"
          ref="connectionPoint"
        >
          <!-- Mobile connection content -->
        </section>
      </template>
      
      <!-- Desktop-specific sections -->
      <template v-else>
        <!-- Desktop services section -->
        <section 
          id="services" 
          class="section desktop-section"
          :class="{ 'active': activeSection === 'services' }"
        >
          <!-- Desktop services content -->
        </section>
        
        <!-- Desktop about section -->
        <section 
          id="about" 
          class="section desktop-section"
          :class="{ 'active': activeSection === 'about' }"
        >
          <!-- Desktop about content -->
        </section>
      </template>
    </div>
    
    <!-- Navigation -->
    <nav v-if="isMobile" class="app-nav">
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
        <div class="active-indicator"></div>
      </div>
      
      <!-- Theme toggle -->
      <div class="theme-toggle" @click="toggleTheme">
        <div class="tab-icon">
          <component :is="theme === 'dark' ? ThemedIcons.SunIcon : ThemedIcons.MoonIcon" />
        </div>
      </div>
    </nav>
    
    <!-- Desktop Navigation -->
    <nav v-else class="desktop-nav">
      <!-- Desktop navigation content -->
    </nav>
    
    <!-- Progress Indicator -->
    <div v-if="isMobile" class="journey-progress">
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
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import useDevice from '../utils/useDevice';
import ThemedIcons from '../utils/useIconSystem';

// Device detection
const { isMobile, isTablet, isDesktop } = useDevice();

// Theme management
const theme = ref('dark');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};

// Section management
const activeSection = ref('entry-portal');
const sections = computed(() => isMobile.value ? [
  { id: 'entry-portal', name: 'Entry' },
  { id: 'tech-showcase', name: 'Technologies' },
  { id: 'services-explore', name: 'Services' },
  { id: 'vision-mission', name: 'Vision' },
  { id: 'connection-point', name: 'Connect' }
] : [
  { id: 'entry-portal', name: 'Home' },
  { id: 'tech-showcase', name: 'Technologies' },
  { id: 'services', name: 'Services' },
  { id: 'about', name: 'About' }
]);

// Navigation
const activeTab = ref('home');
const navigationTabs = [
  { id: 'home', label: 'Home', icon: ThemedIcons.HomeIcon },
  { id: 'explore', label: 'Explore', icon: ThemedIcons.ExploreIcon },
  { id: 'services', label: 'Services', icon: ThemedIcons.ServicesIcon },
  { id: 'about', label: 'About', icon: ThemedIcons.AboutIcon }
];

// Section refs
const entryPortal = ref(null);
const techShowcase = ref(null);
const servicesExplore = ref(null);
const visionMission = ref(null);
const connectionPoint = ref(null);

// Navigation functions
const navigateTo = (sectionId) => {
  if (activeSection.value === sectionId) return;
  
  const currentSectionRef = getSectionRef(activeSection.value);
  const nextSectionRef = getSectionRef(sectionId);
  
  if (!currentSectionRef || !nextSectionRef) return;
  
  const tl = gsap.timeline({
    onComplete: () => {
      activeSection.value = sectionId;
      updateActiveTab(sectionId);
    }
  });
  
  // Animation sequence
  animateTransition(tl, currentSectionRef, nextSectionRef);
};

const animateTransition = (timeline, from, to) => {
  // Exit animation
  timeline.to(from, {
    duration: 0.5,
    autoAlpha: 0,
    y: -50,
    scale: 0.9,
    ease: "power2.in"
  });
  
  // Portal effect
  if (isMobile.value) {
    timeline.to('.portal-effect', {
      duration: 0.4,
      scale: 1.5,
      autoAlpha: 1,
      ease: "power2.out"
    });
  }
  
  // Enter animation
  timeline.to(to, {
    duration: 0.6,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    ease: "power2.out"
  });
  
  // Fade portal
  if (isMobile.value) {
    timeline.to('.portal-effect', {
      duration: 0.3,
      scale: 0,
      autoAlpha: 0,
      ease: "power2.in"
    }, "-=0.3");
  }
};

// Helper functions
const getSectionRef = (sectionId) => {
  const refs = {
    'entry-portal': entryPortal,
    'tech-showcase': techShowcase,
    'services-explore': servicesExplore,
    'vision-mission': visionMission,
    'connection-point': connectionPoint
  };
  return refs[sectionId]?.value || null;
};

const updateActiveTab = (sectionId) => {
  const tabMapping = {
    'entry-portal': 'home',
    'tech-showcase': 'explore',
    'services-explore': 'services',
    'vision-mission': 'about',
    'connection-point': 'about'
  };
  activeTab.value = tabMapping[sectionId] || 'home';
};

// Content data
const technologies = [
  { 
    id: 'ai', 
    name: 'AI Solutions', 
    icon: ThemedIcons.BrainIcon, 
    color: '#00CCFF',
    userCount: '120',
    description: 'Advanced AI solutions for modern challenges',
    image: '/images/tech/ai.jpg'
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    icon: ThemedIcons.BlockchainIcon, 
    color: '#9933FF',
    userCount: '85',
    description: 'Secure and transparent blockchain technology',
    image: '/images/tech/blockchain.jpg'
  },
  { 
    id: 'metaverse', 
    name: 'Metaverse', 
    icon: ThemedIcons.MetaverseIcon, 
    color: '#FF3366',
    userCount: '64',
    description: 'Immersive metaverse experiences',
    image: '/images/tech/metaverse.jpg'
  },
  { 
    id: 'web3', 
    name: 'Web3', 
    icon: ThemedIcons.Web3Icon, 
    color: '#33FFCC',
    userCount: '92',
    description: 'Next-generation web3 applications',
    image: '/images/tech/web3.jpg'
  }
];

// Lifecycle hooks
onMounted(async () => {
  document.documentElement.setAttribute('data-theme', theme.value);
  
  // Initial animations
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
  
  if (isMobile.value) {
    gsap.fromTo('.app-nav',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 1.2, ease: "power2.out" }
    );
  }
});
</script>

<style scoped>
/* Import existing styles from MobileHome.vue */
/* Add responsive styles */
.home-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-card) 100%);
}

/* Mobile-specific styles */
.home-page.is-mobile {
  padding-bottom: 70px;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  .title-gradient {
    font-size: 4rem;
  }
  
  .journey-section {
    min-height: 100vh;
    padding: 4rem 0;
  }
}

/* Import remaining styles from MobileHome.vue and add desktop-specific styles */
</style>
