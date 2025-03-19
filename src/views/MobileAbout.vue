<template>
  <div class="mobile-about">
    <!-- Portal Effect -->
    <div class="portal-effect"></div>
    
    <div class="container">
      <!-- Hero Section -->
      <section class="hero-section" ref="heroSection">
        <h1 class="title-gradient">About Us</h1>
        <div class="subtitle-container">
          <p class="journey-subtitle">SHAPING THE FUTURE OF TECHNOLOGY</p>
          <div class="tech-line"></div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section" ref="storySection">
        <div class="story-content">
          <h2 class="section-title">Our Story</h2>
          <p class="story-text">
            Founded in 2024, World of Unreal emerged from a vision to bridge the gap between imagination and reality. 
            We believe in creating immersive experiences that push the boundaries of what's possible in the digital realm.
          </p>
          <div class="story-stats">
            <div class="stat-card">
              <span class="stat-value">2024</span>
              <span class="stat-label">Founded</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">50+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">20+</span>
              <span class="stat-label">Team Members</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section" ref="teamSection">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
          <div 
            v-for="(member, index) in team" 
            :key="member.id"
            class="team-card"
            :style="{ '--appear-delay': `${index * 0.15}s` }"
            ref="teamCards"
          >
            <div class="member-image">
              <img :src="member.image" :alt="member.name" />
              <div class="image-overlay"></div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <div class="member-social">
                <a 
                  v-for="social in member.social" 
                  :key="social.platform"
                  :href="social.url"
                  target="_blank"
                  class="social-link"
                >
                  <component :is="social.icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section" ref="valuesSection">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div 
            v-for="(value, index) in values" 
            :key="value.id"
            class="value-card"
            :style="{ '--appear-delay': `${index * 0.15}s` }"
            ref="valueCards"
          >
            <div class="value-icon">
              <component :is="value.icon" />
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Section refs
const heroSection = ref(null);
const storySection = ref(null);
const teamSection = ref(null);
const valuesSection = ref(null);
const teamCards = ref([]);
const valueCards = ref([]);

// Content data
const team = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/images/team/john.jpg',
    social: [
      { platform: 'linkedin', icon: 'LinkedInIcon', url: 'https://linkedin.com' },
      { platform: 'twitter', icon: 'TwitterIcon', url: 'https://twitter.com' }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    image: '/images/team/jane.jpg',
    social: [
      { platform: 'linkedin', icon: 'LinkedInIcon', url: 'https://linkedin.com' },
      { platform: 'github', icon: 'GitHubIcon', url: 'https://github.com' }
    ]
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: '/images/team/mike.jpg',
    social: [
      { platform: 'linkedin', icon: 'LinkedInIcon', url: 'https://linkedin.com' },
      { platform: 'github', icon: 'GitHubIcon', url: 'https://github.com' }
    ]
  }
];

const values = [
  {
    id: 1,
    title: 'Innovation',
    description: 'Pushing boundaries and exploring new possibilities in technology.',
    icon: 'InnovationIcon'
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'Delivering the highest quality solutions with attention to detail.',
    icon: 'ExcellenceIcon'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'Working together to create something greater than the sum of its parts.',
    icon: 'CollaborationIcon'
  }
];

// Animation setup
onMounted(() => {
  // Hero section animation
  gsap.fromTo(heroSection.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }
  );

  // Story section animation
  gsap.fromTo(storySection.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: storySection.value,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Team cards animation
  teamCards.value.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Values cards animation
  valueCards.value.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
});
</script>

<style scoped>
.mobile-about {
  min-height: 100vh;
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-card) 100%);
  padding: 2rem 1.5rem;
  color: var(--text-light);
}

.portal-effect {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, var(--primary-alpha) 0%, transparent 70%);
  opacity: 0;
  pointer-events: none;
  z-index: 100;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.title-gradient {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--tech-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.journey-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted-light);
  margin-bottom: 1rem;
}

.tech-line {
  width: 60px;
  height: 2px;
  background: var(--tech-gradient);
  margin: 1rem auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.story-section {
  margin-bottom: 4rem;
}

.story-content {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-muted-light);
}

.story-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  background: var(--dark-bg);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted-light);
}

.team-section {
  margin-bottom: 4rem;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-card {
  background: var(--dark-card);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.member-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
}

.member-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .member-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
}

.member-info {
  padding: 1.5rem;
}

.member-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.member-role {
  color: var(--text-muted-light);
  margin-bottom: 1rem;
}

.member-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-bg);
  border-radius: 50%;
  color: var(--text-light);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  color: var(--dark-bg);
  transform: translateY(-3px);
}

.values-section {
  margin-bottom: 4rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.value-card {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.value-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  color: var(--primary-color);
}

.value-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-description {
  color: var(--text-muted-light);
  line-height: 1.6;
}
</style> 