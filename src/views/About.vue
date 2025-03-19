<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">ABOUT US</h1>
      <p class="subtitle">Pioneering the Future of Digital Innovation</p>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="content-wrapper">
        <h2>Our Mission</h2>
        <p>We are dedicated to pushing the boundaries of what's possible in the digital realm. Our mission is to empower businesses and individuals with cutting-edge technology solutions that drive innovation and create meaningful experiences.</p>
        
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-value">100+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">50+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">95%</span>
            <span class="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <div class="content-wrapper">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <component :is="ThemedIcons.InnovationIcon" />
            </div>
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries and exploring new possibilities in technology</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <component :is="ThemedIcons.QualityIcon" />
            </div>
            <h3>Excellence</h3>
            <p>Delivering the highest quality solutions with attention to detail</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <component :is="ThemedIcons.CollaborationIcon" />
            </div>
            <h3>Collaboration</h3>
            <p>Working closely with clients to achieve their vision and goals</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="content-wrapper">
        <h2>Our Team</h2>
        <p class="section-intro">A diverse group of passionate technologists, creators, and problem solvers.</p>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="member-avatar">
              <component :is="member.icon" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/services" class="nav-link">Services</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemedIcons from '../utils/useIconSystem';

const teamMembers = ref([
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Chief Technology Officer',
    icon: ThemedIcons.PersonIcon,
    bio: 'Visionary technologist with 15+ years of experience in AI and blockchain.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Head of Innovation',
    icon: ThemedIcons.PersonIcon,
    bio: 'Leading our research and development in emerging technologies.'
  },
  {
    id: 3,
    name: 'Michael Zhang',
    role: 'Lead Developer',
    icon: ThemedIcons.PersonIcon,
    bio: 'Expert in building scalable and secure digital solutions.'
  }
]);
</script>

<style scoped>
.about-view {
  min-height: 100vh;
  background: linear-gradient(180deg, #0A0C1B 0%, #1A0B36 100%);
  color: white;
  padding: 2rem 1rem;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.mission p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.stat-value {
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #00CCFF;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.value-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  color: #00CCFF;
}

.value-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.value-card p {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
}

.section-intro {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.team-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.member-avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(0, 204, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00CCFF;
}

.team-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #00CCFF;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.member-bio {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
}

.quick-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 