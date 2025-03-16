<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="blog-hero">
      <div class="container mx-auto px-6 py-24 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="blog-title">Insights & Perspectives</h1>
          <div class="section-divider"></div>
          <p class="blog-subtitle">
            Explore our latest thoughts on AI, blockchain, and metaverse technologies
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="blog-grid">
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Blog Item 1 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: Futuristic AI generated art with glowing neural networks, digital consciousness visualization, and neon blue energy fields creating abstract patterns -->
              <img src="/placeholder.jpg" alt="AI Advancements" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">AI</span>
                <span class="blog-date">May 15, 2023</span>
              </div>
              <h2 class="blog-card-title">The Evolution of Generative AI: What's Next?</h2>
              <p class="blog-excerpt">
                Exploring the latest advancements in generative AI and how they're reshaping creative industries and business processes.
              </p>
              <router-link to="/blog/generative-ai-evolution" class="blog-link">Read Article</router-link>
            </div>
          </article>

          <!-- Blog Item 2 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: 3D blockchain visualization with glowing blocks connected in a network, floating cryptocurrency symbols, and digital security locks with neon blue data streams -->
              <img src="/placeholder.jpg" alt="Blockchain Innovations" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">Blockchain</span>
                <span class="blog-date">April 28, 2023</span>
              </div>
              <h2 class="blog-card-title">How Blockchain is Transforming Digital Ownership</h2>
              <p class="blog-excerpt">
                A deep dive into how blockchain technology is revolutionizing the concept of ownership in the digital realm and creating new value systems.
              </p>
              <router-link to="/blog/blockchain-digital-ownership" class="blog-link">Read Article</router-link>
            </div>
          </article>

          <!-- Blog Item 3 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: Immersive metaverse landscape with digital avatars exploring a sci-fi virtual city with neon structures, floating platforms, and holographic interfaces -->
              <img src="/placeholder.jpg" alt="Metaverse Experiences" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">Metaverse</span>
                <span class="blog-date">April 10, 2023</span>
              </div>
              <h2 class="blog-card-title">Designing Immersive Metaverse Experiences</h2>
              <p class="blog-excerpt">
                Key principles and best practices for creating compelling, user-centric experiences in virtual worlds that drive engagement.
              </p>
              <router-link to="/blog/metaverse-experience-design" class="blog-link">Read Article</router-link>
            </div>
          </article>

          <!-- Blog Item 4 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: Web3 dashboard with decentralized app icons, digital wallet interface, and blockchain connections visualized with futuristic neon blue elements -->
              <img src="/placeholder.jpg" alt="Web3 Development" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">Web3</span>
                <span class="blog-date">March 22, 2023</span>
              </div>
              <h2 class="blog-card-title">The Rise of Decentralized Applications</h2>
              <p class="blog-excerpt">
                An overview of how decentralized applications are reshaping the internet and creating new paradigms for user interaction and value exchange.
              </p>
              <router-link to="/blog/decentralized-applications" class="blog-link">Read Article</router-link>
            </div>
          </article>

          <!-- Blog Item 5 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: Futuristic tech collage with AI robots, VR headsets, blockchain networks, and other emerging technologies with glowing blue digital effects -->
              <img src="/placeholder.jpg" alt="Technology Trends" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">Technology</span>
                <span class="blog-date">March 8, 2023</span>
              </div>
              <h2 class="blog-card-title">Emerging Technology Trends for 2023</h2>
              <p class="blog-excerpt">
                A comprehensive analysis of the most significant technology trends that are set to reshape industries and create new opportunities.
              </p>
              <router-link to="/blog/tech-trends-2023" class="blog-link">Read Article</router-link>
            </div>
          </article>

          <!-- Blog Item 6 -->
          <article class="blog-card">
            <div class="blog-image">
              <!-- AI Image Prompt: Digital transformation visualization with robots, automated systems, and data flows in a corporate setting with futuristic blue interfaces and holographic screens -->
              <img src="/placeholder.jpg" alt="Digital Transformation" class="image" />
              <div class="image-overlay"></div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">Strategy</span>
                <span class="blog-date">February 15, 2023</span>
              </div>
              <h2 class="blog-card-title">Digital Transformation in the Age of AI</h2>
              <p class="blog-excerpt">
                How artificial intelligence is accelerating digital transformation initiatives and enabling organizations to reimagine their operations.
              </p>
              <router-link to="/blog/digital-transformation-ai" class="blog-link">Read Article</router-link>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="pagination-button active">1</button>
          <button class="pagination-button">2</button>
          <button class="pagination-button">3</button>
          <button class="pagination-next">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container mx-auto px-6 py-20">
        <div class="newsletter-container">
          <div class="newsletter-content">
            <h2 class="newsletter-title">Stay Informed</h2>
            <div class="section-divider left-align"></div>
            <p class="newsletter-text">
              Subscribe to our newsletter for exclusive insights on emerging technologies and digital innovation
            </p>
          </div>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address" class="newsletter-input" required />
            <button type="submit" class="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Blog | World of Unreal';
});
</script>

<style scoped>
.blog-page {
  overflow-x: hidden;
}

/* Hero Section */
.blog-hero {
  position: relative;
  background-color: var(--dark-card);
}

[data-theme="light"] .blog-hero {
  background-color: var(--light-card);
}

.blog-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.blog-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .blog-subtitle {
  color: var(--text-muted-dark);
}

.section-divider {
  width: 60px;
  height: 2px;
  background-color: var(--primary-color);
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 10px var(--primary-alpha);
}

.section-divider.left-align {
  margin: 0 0 1.5rem;
}

/* Blog Grid */
.blog-grid {
  background-color: var(--dark-bg);
}

[data-theme="light"] .blog-grid {
  background-color: var(--light-bg);
}

.blog-card {
  background-color: var(--dark-card);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="light"] .blog-card {
  background-color: var(--light-card);
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px var(--secondary-alpha);
}

.blog-image {
  height: 240px;
  position: relative;
  overflow: hidden;
}

.blog-image .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.blog-card:hover .blog-image .image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  transition: opacity 0.3s ease;
}

.blog-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.blog-category {
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.blog-date {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: var(--text-muted-light);
  font-weight: 300;
}

[data-theme="light"] .blog-date {
  color: var(--text-muted-dark);
}

.blog-card-title {
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  font-weight: 700;
}

.blog-excerpt {
  color: var(--text-muted-light);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.7;
  font-weight: 300;
  flex: 1;
}

[data-theme="light"] .blog-excerpt {
  color: var(--text-muted-dark);
}

.blog-link {
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  display: inline-block;
  padding-bottom: 0.25rem;
  align-self: flex-start;
}

.blog-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
  box-shadow: 0 0 5px var(--primary-alpha);
}

.blog-link:hover::after {
  width: 100%;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  gap: 0.5rem;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(190, 164, 131, 0.3);
  color: var(--text-light);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

[data-theme="light"] .pagination-button {
  color: var(--text-dark);
}

.pagination-button.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #FFFFFF;
}

.pagination-button:not(.active):hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.pagination-next {
  padding: 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(190, 164, 131, 0.3);
  color: var(--text-light);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: 0.5rem;
}

[data-theme="light"] .pagination-next {
  color: var(--text-dark);
}

.pagination-next:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Newsletter Section */
.newsletter-section {
  background-color: var(--dark-card);
  position: relative;
}

[data-theme="light"] .newsletter-section {
  background-color: var(--light-card);
}

.newsletter-container {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.newsletter-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.newsletter-text {
  color: var(--text-muted-light);
  font-size: 1.125rem;
  line-height: 1.7;
  font-weight: 300;
}

[data-theme="light"] .newsletter-text {
  color: var(--text-muted-dark);
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-input {
  padding: 1rem;
  background-color: transparent;
  border: 1px solid rgba(190, 164, 131, 0.3);
  color: var(--text-light);
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
}

[data-theme="light"] .newsletter-input {
  color: var(--text-dark);
}

.newsletter-input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 10px var(--primary-alpha);
}

.newsletter-button {
  padding: 1rem;
  background-color: var(--primary-color);
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  background-color: var(--secondary-color);
  box-shadow: 0 0 15px var(--primary-alpha);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2.5rem;
  }
  
  .newsletter-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .blog-content {
    padding: 1.5rem;
  }
  
  .blog-image {
    height: 200px;
  }
}
</style> 