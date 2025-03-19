<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="title">CONTACT US</h1>
      <p class="subtitle">Let's Build Something Amazing Together</p>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form">
      <div class="content-wrapper">
        <div class="form-container">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Your Name"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="your@email.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="service">Service Interest</label>
              <select id="service" v-model="formData.service" required>
                <option value="">Select a Service</option>
                <option v-for="service in services" :key="service.id" :value="service.id">
                  {{ service.name }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Tell us about your project"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <component :is="ThemedIcons.LocationIcon" />
            </div>
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <component :is="ThemedIcons.EmailIcon" />
            </div>
            <h3>Email</h3>
            <p>hello@worldofunreal.com</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <component :is="ThemedIcons.PhoneIcon" />
            </div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <nav class="quick-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/services" class="nav-link">Services</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemedIcons from '../utils/useIconSystem';

const services = [
  { id: 'ai', name: 'AI Integration' },
  { id: 'blockchain', name: 'Blockchain Solutions' },
  { id: 'metaverse', name: 'Metaverse Development' }
];

const formData = ref({
  name: '',
  email: '',
  service: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      service: '',
      message: ''
    };
    
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-view {
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
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.form-container {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #00CCFF;
  background: rgba(255, 255, 255, 0.15);
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 204, 255, 0.3);
}

.info-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  color: #00CCFF;
}

.info-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  font-size: 1rem;
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
  .content-wrapper {
    grid-template-columns: 3fr 2fr;
    align-items: start;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }
}
</style> 