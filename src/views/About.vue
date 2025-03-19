<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">About World of Unreal</h1>
        <p class="hero-subtitle">Pushing the boundaries of what's possible in the digital realm</p>
      </div>
      <div class="hero-background">
        <div class="tech-grid"></div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <h2 class="section-title">Our Mission</h2>
          <p class="mission-text">
            At World of Unreal, we're dedicated to creating immersive digital experiences that bridge the gap between reality and imagination. Our team of innovators combines cutting-edge technology with creative vision to build the future of digital interaction.
          </p>
          <div class="mission-stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
          <div class="team-member" v-for="member in teamMembers" :key="member.name">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
              <div class="member-overlay">
                <div class="member-social">
                  <a :href="member.twitter" target="_blank" class="social-link">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.2 4.09 16.97 3.72 15.65 4.03C14.33 4.34 13.36 5.4 13.04 6.71C13.01 6.89 12.99 7.06 13 7.24C9.57 7.09 6.42 5.73 4.22 3.25C3.41 4.72 3.8 6.57 5.16 7.59C4.4 7.58 3.67 7.38 3 7C3 7.02 3 7.03 3 7.05C3 8.55 4.11 9.83 5.68 10.17C5.49 10.22 5.3 10.24 5.11 10.25C4.97 10.25 4.84 10.24 4.71 10.23C5.06 11.49 6.24 12.36 7.63 12.39C6.53 13.24 5.1 13.68 3.65 13.69C3.44 13.69 3.23 13.68 3 13.66C4.5 14.56 6.28 15 8 15C15.64 15 19.74 8.25 19.74 2.45C19.74 2.3 19.74 2.16 19.73 2.01C20.73 1.37 21.59 0.54 22.17 -0.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                  <a :href="member.linkedin" target="_blank" class="social-link">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">
              <component :is="value.icon" />
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
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
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/team/john.jpg',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: '/images/team/jane.jpg',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith'
  },
  {
    name: 'Mike Johnson',
    role: 'Technical Lead',
    image: '/images/team/mike.jpg',
    twitter: 'https://twitter.com/mikejohnson',
    linkedin: 'https://linkedin.com/in/mikejohnson'
  }
]);

const values = ref([
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to create groundbreaking experiences.',
    icon: 'InnovationIcon'
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in everything we do, from code to customer service.',
    icon: 'QualityIcon'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve exceptional results.',
    icon: 'CollaborationIcon'
  }
]);
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-card) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  background: var(--tech-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.tech-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(var(--primary-alpha) 1px, transparent 1px),
    linear-gradient(90deg, var(--primary-alpha) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}

/* Mission Section */
.mission-section {
  padding: 6rem 0;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.mission-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: var(--tech-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mission-text {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* Team Section */
.team-section {
  padding: 6rem 0;
  background-color: var(--card-color);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  position: relative;
  background: var(--bg-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-member:hover .member-image img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member:hover .member-overlay {
  opacity: 1;
}

.member-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.member-info {
  padding: 1.5rem;
  text-align: center;
}

.member-name {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.member-role {
  opacity: 0.8;
}

/* Values Section */
.values-section {
  padding: 6rem 0;
  background-color: var(--bg-color);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background: var(--card-color);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}

.value-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: var(--primary-color);
}

.value-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-description {
  opacity: 0.8;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .mission-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .team-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content,
.mission-content,
.team-member,
.value-card {
  animation: fadeIn 0.6s ease forwards;
}

.hero-content {
  animation-delay: 0.2s;
}

.mission-content {
  animation-delay: 0.4s;
}

.team-member {
  animation-delay: 0.6s;
}

.value-card {
  animation-delay: 0.8s;
}
</style> 