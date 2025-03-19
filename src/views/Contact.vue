<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Get in Touch</h1>
        <p class="hero-subtitle">Let's create something amazing together</p>
      </div>
      <div class="hero-background">
        <div class="tech-grid"></div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form">
            <h2 class="section-title">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="form">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  :class="{ 'error': errors.name }"
                  @focus="clearError('name')"
                >
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  :class="{ 'error': errors.email }"
                  @focus="clearError('email')"
                >
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  :class="{ 'error': errors.subject }"
                  @focus="clearError('subject')"
                >
                <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  :class="{ 'error': errors.message }"
                  @focus="clearError('message')"
                ></textarea>
                <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span class="btn-text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                <span class="btn-loader" v-if="isSubmitting"></span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="section-title">Contact Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>contact@worldofunreal.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Location</h3>
                  <p>123 Tech Street, Digital City</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="#" class="social-icon" target="_blank">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01C21 4.5 20.02 4.69 19 5C18.2 4.09 16.97 3.72 15.65 4.03C14.33 4.34 13.36 5.4 13.04 6.71C13.01 6.89 12.99 7.06 13 7.24C9.57 7.09 6.42 5.73 4.22 3.25C3.41 4.72 3.8 6.57 5.16 7.59C4.4 7.58 3.67 7.38 3 7C3 7.02 3 7.03 3 7.05C3 8.55 4.11 9.83 5.68 10.17C5.49 10.22 5.3 10.24 5.11 10.25C4.97 10.25 4.84 10.24 4.71 10.23C5.06 11.49 6.24 12.36 7.63 12.39C6.53 13.24 5.1 13.68 3.65 13.69C3.44 13.69 3.23 13.68 3 13.66C4.5 14.56 6.28 15 8 15C15.64 15 19.74 8.25 19.74 2.45C19.74 2.3 19.74 2.16 19.73 2.01C20.73 1.37 21.59 0.54 22.17 -0.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="#" class="social-icon" target="_blank">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="#" class="social-icon" target="_blank">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

const validateForm = () => {
  let isValid = true;
  
  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const clearError = (field) => {
  errors[field] = '';
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
    // Show success message
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 40vh;
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

/* Contact Section */
.contact-section {
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: var(--tech-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Form Styles */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 1rem;
  font-weight: 500;
}

input,
textarea {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--card-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-alpha);
}

.error {
  border-color: var(--error-color);
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
}

.submit-btn {
  position: relative;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--primary-alpha);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.info-grid {
  display: grid;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--card-color);
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-icon {
  width: 40px;
  height: 40px;
  color: var(--primary-color);
}

.info-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.info-content p {
  opacity: 0.8;
}

/* Social Links */
.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--card-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

/* Animations */
@keyframes gridMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}

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
.contact-form,
.contact-info {
  animation: fadeIn 0.6s ease forwards;
}

.hero-content {
  animation-delay: 0.2s;
}

.contact-form {
  animation-delay: 0.4s;
}

.contact-info {
  animation-delay: 0.6s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .info-item {
    padding: 1rem;
  }
}
</style> 