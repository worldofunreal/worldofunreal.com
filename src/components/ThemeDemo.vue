<template>
  <div class="theme-demo">
    <h2 class="text-theme">Theme Utilities Demo</h2>
    
    <div class="demo-section">
      <h3 class="text-theme">Text Colors</h3>
      <p class="text-theme">This is regular theme text</p>
      <p class="text-muted">This is muted theme text</p>
      <p class="text-primary">This is primary color text</p>
      <p class="text-secondary">This is secondary color text</p>
    </div>
    
    <div class="demo-section">
      <h3 class="text-theme">Background Colors</h3>
      <div class="demo-box bg-theme">
        <p class="text-theme">Theme Background</p>
      </div>
      <div class="demo-box bg-card">
        <p class="text-theme">Card Background</p>
      </div>
      <div class="demo-box bg-primary">
        <p style="color: #FFFFFF">Primary Background</p>
      </div>
      <div class="demo-box bg-secondary">
        <p style="color: #FFFFFF">Secondary Background</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="text-theme">Buttons</h3>
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary Button</button>
      <button class="btn btn-outline">Outline Button</button>
    </div>
    
    <div class="demo-section">
      <h3 class="text-theme">Effects</h3>
      <div class="demo-box bg-card glow-primary">
        <p class="text-theme">Primary Glow</p>
      </div>
      <div class="demo-box bg-card glow-secondary">
        <p class="text-theme">Secondary Glow</p>
      </div>
      <div class="demo-box gradient-theme">
        <p style="color: #FFFFFF">Theme Gradient</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
.theme-demo {
  padding: 2rem;
  background-color: var(--light-bg);
  color: var(--text-dark);
}

[data-theme="dark"] .theme-demo {
  background-color: var(--dark-bg);
  color: var(--text-light);
}

.demo-section {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.demo-box {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.btn {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style> 