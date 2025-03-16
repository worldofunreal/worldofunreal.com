<template>
  <div class="style-guide">
    <section class="guide-section">
      <h1 class="guide-title">World of Unreal Style Guide</h1>
      <p class="guide-description">A comprehensive guide to our design system, showing responsive patterns across device sizes.</p>
      
      <div class="device-indicator">
        <div class="device-type mobile">Mobile</div>
        <div class="device-type tablet">Tablet</div>
        <div class="device-type desktop">Desktop</div>
      </div>
    </section>
    
    <!-- Typography Section -->
    <section class="guide-section">
      <h2 class="section-title">Typography</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Headings</h3>
        <div class="example-container">
          <h1 class="example-heading-1">Heading 1</h1>
          <p class="example-code">Font: Orbitron, Size: 2.5rem (mobile) / 3.5rem (desktop)</p>
          
          <h2 class="example-heading-2">Heading 2</h2>
          <p class="example-code">Font: Orbitron, Size: 2rem (mobile) / 2.5rem (desktop)</p>
          
          <h3 class="example-heading-3">Heading 3</h3>
          <p class="example-code">Font: Orbitron, Size: 1.5rem (mobile) / 1.75rem (desktop)</p>
          
          <h4 class="example-heading-4">Heading 4</h4>
          <p class="example-code">Font: Orbitron, Size: 1.25rem (mobile) / 1.5rem (desktop)</p>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Body Text</h3>
        <div class="example-container">
          <p class="example-body-text">Regular paragraph text. The World of Unreal platform combines cutting-edge technologies with forward-thinking design to create experiences that aren't just impressive today, but scalable for the evolving digital landscape of tomorrow.</p>
          <p class="example-code">Font: Montserrat, Size: 1rem (mobile) / 1.125rem (desktop), Line height: 1.6</p>
          
          <p class="example-body-text-small">Small text for captions and secondary information. This text is used for less important information.</p>
          <p class="example-code">Font: Montserrat, Size: 0.875rem, Line height: 1.5</p>
        </div>
      </div>
    </section>
    
    <!-- Colors Section -->
    <section class="guide-section">
      <h2 class="section-title">Colors</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Primary Colors</h3>
        <div class="color-grid">
          <div class="color-item">
            <div class="color-swatch primary-dark"></div>
            <p class="color-name">Primary Dark</p>
            <p class="color-value">#00CCFF</p>
          </div>
          <div class="color-item">
            <div class="color-swatch primary-light"></div>
            <p class="color-name">Primary Light</p>
            <p class="color-value">#0066CC</p>
          </div>
          <div class="color-item">
            <div class="color-swatch secondary-dark"></div>
            <p class="color-name">Secondary Dark</p>
            <p class="color-value">#4D3AFF</p>
          </div>
          <div class="color-item">
            <div class="color-swatch secondary-light"></div>
            <p class="color-name">Secondary Light</p>
            <p class="color-value">#3A66FF</p>
          </div>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Background Colors</h3>
        <div class="color-grid">
          <div class="color-item">
            <div class="color-swatch dark-bg"></div>
            <p class="color-name">Dark Background</p>
            <p class="color-value">#0A0C14</p>
          </div>
          <div class="color-item">
            <div class="color-swatch dark-card"></div>
            <p class="color-name">Dark Card</p>
            <p class="color-value">#14161E</p>
          </div>
          <div class="color-item">
            <div class="color-swatch light-bg"></div>
            <p class="color-name">Light Background</p>
            <p class="color-value">#F0F3FF</p>
          </div>
          <div class="color-item">
            <div class="color-swatch light-card"></div>
            <p class="color-name">Light Card</p>
            <p class="color-value">#FFFFFF</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Buttons Section -->
    <section class="guide-section">
      <h2 class="section-title">Buttons</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Primary Buttons</h3>
        <div class="example-container">
          <div class="button-row">
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-primary" disabled>Disabled</button>
          </div>
          <p class="example-code">
            Class: btn btn-primary<br>
            Padding: 0.75rem 1.5rem (mobile) / 1rem 2rem (desktop)<br>
            Font: Montserrat, 0.875rem, uppercase
          </p>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Secondary Buttons</h3>
        <div class="example-container">
          <div class="button-row">
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-secondary" disabled>Disabled</button>
          </div>
          <p class="example-code">
            Class: btn btn-secondary<br>
            Padding: 0.75rem 1.5rem (mobile) / 1rem 2rem (desktop)
          </p>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Outline Buttons</h3>
        <div class="example-container">
          <div class="button-row">
            <button class="btn btn-outline">Outline Button</button>
            <button class="btn btn-outline" disabled>Disabled</button>
          </div>
          <p class="example-code">
            Class: btn btn-outline<br>
            Border: 1px solid var(--primary-color)
          </p>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Button Sizes</h3>
        <div class="example-container">
          <div class="button-row">
            <button class="btn btn-primary btn-sm">Small</button>
            <button class="btn btn-primary">Regular</button>
            <button class="btn btn-primary btn-lg">Large</button>
          </div>
          <p class="example-code">
            Small: btn-sm (padding: 0.5rem 1rem)<br>
            Regular: default<br>
            Large: btn-lg (padding: 1.25rem 2.5rem)
          </p>
        </div>
      </div>
    </section>
    
    <!-- Layout Patterns Section -->
    <section class="guide-section">
      <h2 class="section-title">Layout Patterns</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Hero Section</h3>
        <div class="example-layout hero-layout">
          <div class="layout-content">
            <h2>Hero Title</h2>
            <p>Hero description text goes here</p>
            <div class="button-row">
              <button class="btn btn-primary">Primary CTA</button>
              <button class="btn btn-outline">Secondary CTA</button>
            </div>
          </div>
          <div class="layout-image">
            <div class="placeholder-image">Image</div>
          </div>
        </div>
        <p class="example-code">
          Mobile: Stacked (content above image)<br>
          Tablet/Desktop: 2-column grid (content | image)
        </p>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Card Grid</h3>
        <div class="example-layout card-grid">
          <div class="card">Card 1</div>
          <div class="card">Card 2</div>
          <div class="card">Card 3</div>
        </div>
        <p class="example-code">
          Mobile: 1 column<br>
          Tablet: 2 columns<br>
          Desktop: 3 columns
        </p>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Content Section</h3>
        <div class="example-layout content-layout">
          <div class="layout-image">
            <div class="placeholder-image">Image</div>
          </div>
          <div class="layout-content">
            <h3>Section Title</h3>
            <p>Section content goes here with a detailed description</p>
            <button class="btn btn-primary">Call to Action</button>
          </div>
        </div>
        <p class="example-code">
          Mobile: Stacked (image above content)<br>
          Tablet/Desktop: 2-column grid (image | content)
        </p>
      </div>
    </section>
    
    <!-- Form Elements Section -->
    <section class="guide-section">
      <h2 class="section-title">Form Elements</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Text Inputs</h3>
        <div class="example-container">
          <div class="form-group">
            <label for="example-input">Input Label</label>
            <input type="text" id="example-input" placeholder="Placeholder text" class="form-input">
          </div>
          <p class="example-code">
            Height: 48px (mobile) / 56px (desktop)<br>
            Padding: 0.75rem 1rem<br>
            Border: 1px solid var(--primary-alpha)
          </p>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Form Layout</h3>
        <div class="example-container">
          <form class="example-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" class="form-input">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-input">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" class="form-textarea"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <p class="example-code">
            Mobile: Full width, stacked<br>
            Desktop: Max-width 600px, centered
          </p>
        </div>
      </div>
    </section>
    
    <!-- Responsive Guidelines -->
    <section class="guide-section">
      <h2 class="section-title">Responsive Guidelines</h2>
      
      <div class="subsection">
        <h3 class="subsection-title">Breakpoints</h3>
        <div class="example-container">
          <ul class="breakpoint-list">
            <li><strong>Mobile:</strong> &lt; 768px</li>
            <li><strong>Tablet:</strong> 768px - 1023px</li>
            <li><strong>Desktop:</strong> ≥ 1024px</li>
          </ul>
        </div>
      </div>
      
      <div class="subsection">
        <h3 class="subsection-title">Mobile-First Approach</h3>
        <div class="example-container">
          <p>Always design for mobile first, then enhance for larger screens. Use media queries to add complexity for larger screens, not to fix mobile layouts.</p>
          <div class="code-block">
            <pre>
.element {
  /* Mobile styles (default) */
  width: 100%;
}

@media (min-width: 768px) {
  /* Tablet styles */
  .element {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  /* Desktop styles */
  .element {
    width: 33.33%;
  }
}
            </pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
.style-guide {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--light-bg);
  color: var(--text-dark);
}

[data-theme="dark"] .style-guide {
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.guide-section {
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--primary-alpha);
  padding-bottom: 2rem;
}

.guide-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.guide-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 800px;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--primary-color);
  box-shadow: 0 0 10px var(--primary-alpha);
}

.subsection {
  margin-bottom: 2rem;
}

.subsection-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.example-container {
  background-color: var(--light-card);
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

[data-theme="dark"] .example-container {
  background-color: var(--dark-card);
}

.example-code {
  font-family: monospace;
  font-size: 0.875rem;
  padding: 0.75rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-top: 1rem;
  color: var(--text-muted-dark);
}

[data-theme="dark"] .example-code {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-muted-light);
}

/* Typography examples */
.example-heading-1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.example-heading-2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.example-heading-3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.example-heading-4 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.example-body-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.example-body-text-small {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-muted-dark);
}

[data-theme="dark"] .example-body-text-small {
  color: var(--text-muted-light);
}

/* Color examples */
.color-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-swatch {
  width: 100%;
  height: 80px;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.color-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.color-value {
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--text-muted-dark);
}

[data-theme="dark"] .color-value {
  color: var(--text-muted-light);
}

.primary-dark {
  background-color: #00CCFF;
}

.primary-light {
  background-color: #0066CC;
}

.secondary-dark {
  background-color: #4D3AFF;
}

.secondary-light {
  background-color: #3A66FF;
}

.dark-bg {
  background-color: #0A0C14;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-card {
  background-color: #14161E;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.light-bg {
  background-color: #F0F3FF;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.light-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Button examples */
.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: #FFFFFF;
  box-shadow: 0 0 15px var(--primary-alpha);
}

.btn-primary:hover {
  box-shadow: 0 0 20px var(--primary-color);
}

.btn-primary:disabled {
  background-color: #888;
  box-shadow: none;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: #FFFFFF;
  box-shadow: 0 0 15px var(--secondary-alpha);
}

.btn-secondary:hover {
  box-shadow: 0 0 20px var(--secondary-color);
}

.btn-secondary:disabled {
  background-color: #888;
  box-shadow: none;
  cursor: not-allowed;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--text-dark);
}

[data-theme="dark"] .btn-outline {
  color: var(--text-light);
}

.btn-outline:hover {
  background-color: var(--primary-alpha);
  box-shadow: 0 0 15px var(--primary-alpha);
}

.btn-outline:disabled {
  border-color: #888;
  color: #888;
  cursor: not-allowed;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

.btn-lg {
  padding: 1.25rem 2.5rem;
  font-size: 1rem;
}

/* Layout examples */
.example-layout {
  background-color: var(--light-card);
  padding: 1.5rem;
  border-radius: 4px;
}

[data-theme="dark"] .example-layout {
  background-color: var(--dark-card);
}

.hero-layout, .content-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.layout-content h2, .layout-content h3 {
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
}

.layout-content p {
  margin-bottom: 1.5rem;
}

.placeholder-image {
  background-color: var(--primary-alpha);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-weight: 600;
  border-radius: 4px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.card {
  background-color: var(--light-bg);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
}

[data-theme="dark"] .card {
  background-color: var(--dark-bg);
}

/* Form examples */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--primary-alpha);
  background-color: var(--light-bg);
  color: var(--text-dark);
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
}

[data-theme="dark"] .form-input, [data-theme="dark"] .form-textarea {
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 10px var(--primary-alpha);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.example-form {
  max-width: 100%;
}

/* Code block */
.code-block {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: auto;
}

[data-theme="dark"] .code-block {
  background-color: rgba(255, 255, 255, 0.05);
}

.code-block pre {
  padding: 1rem;
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--text-muted-dark);
  white-space: pre;
}

[data-theme="dark"] .code-block pre {
  color: var(--text-muted-light);
}

/* Device indicator */
.device-indicator {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.device-type {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: var(--light-card);
}

[data-theme="dark"] .device-type {
  background-color: var(--dark-card);
}

.device-type.mobile {
  border-left: 4px solid var(--primary-color);
}

.device-type.tablet, .device-type.desktop {
  border-left: 4px solid #888;
  opacity: 0.5;
}

/* Breakpoint list */
.breakpoint-list {
  list-style: none;
  padding: 0;
}

.breakpoint-list li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  border-left: 3px solid var(--primary-color);
}

/* Responsive styles */
@media (min-width: 768px) {
  .style-guide {
    padding: 3rem 2rem;
  }
  
  .guide-title {
    font-size: 3rem;
  }
  
  .color-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .hero-layout, .content-layout {
    flex-direction: row;
  }
  
  .layout-content, .layout-image {
    flex: 1;
  }
  
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .example-form {
    max-width: 600px;
  }
  
  .example-heading-1 {
    font-size: 3.5rem;
  }
  
  .example-heading-2 {
    font-size: 2.5rem;
  }
  
  .example-heading-3 {
    font-size: 1.75rem;
  }
  
  .example-heading-4 {
    font-size: 1.5rem;
  }
  
  .example-body-text {
    font-size: 1.125rem;
  }
  
  .btn {
    padding: 1rem 2rem;
  }
  
  .device-type.tablet {
    border-left: 4px solid var(--primary-color);
    opacity: 1;
  }
  
  .device-type.mobile, .device-type.desktop {
    border-left: 4px solid #888;
    opacity: 0.5;
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .device-type.desktop {
    border-left: 4px solid var(--primary-color);
    opacity: 1;
  }
  
  .device-type.mobile, .device-type.tablet {
    border-left: 4px solid #888;
    opacity: 0.5;
  }
}
</style> 