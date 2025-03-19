<template>
  <div class="mobile-contact">
    <!-- Portal Effect -->
    <div class="portal-effect"></div>
    
    <div class="container">
      <!-- Hero Section -->
      <section class="hero-section" ref="heroSection">
        <h1 class="title-gradient">Contact Us</h1>
        <div class="subtitle-container">
          <p class="journey-subtitle">LET'S CREATE SOMETHING AMAZING TOGETHER</p>
          <div class="tech-line"></div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="contact-section" ref="contactSection">
        <div class="contact-content">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required
                class="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <select 
                id="subject" 
                v-model="formData.subject" 
                required
                class="form-input"
              >
                <option value="">Select a subject</option>
                <option value="project">New Project</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                required
                class="form-input"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span class="button-text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <div class="button-glow"></div>
            </button>
          </form>
        </div>
      </section>

      <!-- Contact Info Section -->
      <section class="info-section" ref="infoSection">
        <div class="info-grid">
          <div 
            v-for="(info, index) in contactInfo" 
            :key="info.id"
            class="info-card"
            :style="{ '--appear-delay': `${index * 0.15}s` }"
            ref="infoCards"
          >
            <div class="info-icon">
              <component :is="info.icon" />
            </div>
            <h3 class="info-title">{{ info.title }}</h3>
            <p class="info-text">{{ info.text }}</p>
            <a 
              v-if="info.link" 
              :href="info.link" 
              target="_blank"
              class="info-link"
            >
              {{ info.linkText }}
            </a>
          </div>
        </div>
      </section>

      <!-- Social Links Section -->
      <section class="social-section" ref="socialSection">
        <h2 class="section-title">Connect With Us</h2>
        <div class="social-grid">
          <a 
            v-for="(social, index) in socialLinks" 
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="social-card"
            :style="{ '--appear-delay': `${index * 0.15}s` }"
            ref="socialCards"
          >
            <div class="social-icon">
              <component :is="social.icon" />
            </div>
            <span class="social-name">{{ social.name }}</span>
          </a>
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
const contactSection = ref(null);
const infoSection = ref(null);
const socialSection = ref(null);
const infoCards = ref([]);
const socialCards = ref([]);

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

// Content data
const contactInfo = [
  {
    id: 1,
    title: 'Email',
    text: 'contact@worldofunreal.com',
    icon: 'EmailIcon',
    link: 'mailto:contact@worldofunreal.com',
    linkText: 'Send Email'
  },
  {
    id: 2,
    title: 'Location',
    text: 'San Francisco, CA',
    icon: 'LocationIcon'
  },
  {
    id: 3,
    title: 'Hours',
    text: 'Mon-Fri: 9am-6pm PST',
    icon: 'ClockIcon'
  }
];

const socialLinks = [
  {
    id: 1,
    name: 'Twitter',
    icon: 'TwitterIcon',
    url: 'https://twitter.com'
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: 'LinkedInIcon',
    url: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'GitHub',
    icon: 'GitHubIcon',
    url: 'https://github.com'
  }
];

// Form submission
const handleSubmit = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Show success message
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

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

  // Contact section animation
  gsap.fromTo(contactSection.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactSection.value,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Info cards animation
  infoCards.value.forEach((card, index) => {
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

  // Social cards animation
  socialCards.value.forEach((card, index) => {
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
.mobile-contact {
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

.contact-section {
  margin-bottom: 4rem;
}

.contact-content {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 1rem;
  color: var(--text-muted-light);
}

.form-input {
  padding: 1rem;
  background: var(--dark-bg);
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  color: var(--text-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--primary-alpha);
}

.submit-button {
  position: relative;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  background: var(--primary-color);
  color: var(--dark-bg);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-alpha);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.submit-button:hover:not(:disabled) .button-glow {
  opacity: 1;
}

.info-section {
  margin-bottom: 4rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.info-card {
  background: var(--dark-card);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.info-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  color: var(--primary-color);
}

.info-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.info-text {
  color: var(--text-muted-light);
  margin-bottom: 1rem;
}

.info-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.info-link:hover {
  color: var(--secondary-color);
}

.social-section {
  margin-bottom: 4rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.social-card {
  background: var(--dark-card);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: var(--text-light);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.social-card:hover {
  transform: translateY(-5px);
  background: var(--primary-color);
  color: var(--dark-bg);
}

.social-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
}

.social-name {
  font-size: 0.9rem;
  font-weight: 600;
}
</style> 