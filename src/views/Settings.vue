<template>
  <div class="settings-view">
    <div class="settings-header">
      <h1 class="settings-title">Settings</h1>
      <p class="settings-subtitle">Customize your experience</p>
    </div>

    <div class="settings-content">
      <div class="settings-section">
        <h2 class="section-title">Appearance</h2>
        <div class="settings-group">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">Theme</span>
              <span class="setting-description">Choose between light and dark mode</span>
            </div>
            <button class="theme-toggle" @click="toggleTheme" :class="{ 'light': theme === 'light' }">
              <div class="toggle-track">
                <div class="toggle-indicator">
                  <svg v-if="theme === 'dark'" class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 7V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V5M12 19V21M5 12H3M21 12H19M18.364 18.364L16.95 16.95M18.364 5.636L16.95 7.05M5.636 18.364L7.05 16.95M5.636 5.636L7.05 7.05M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useTheme from '../utils/useTheme';

const { enabled } = useTheme();
const theme = computed(() => enabled.value ? 'dark' : 'light');

const toggleTheme = () => {
  enabled.value = !enabled.value;
};
</script>

<style lang="scss" scoped>
.settings-view {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.settings-header {
  text-align: center;
  margin-bottom: 3rem;
}

.settings-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
  [data-theme="dark"] & {
    color: var(--text-light);
  }
}

.settings-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted-dark);
  [data-theme="dark"] & {
    color: var(--text-muted-light);
  }
}

.settings-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
  [data-theme="dark"] & {
    color: var(--text-light);
  }
}

.settings-group {
  background: var(--light-card);
  border-radius: 12px;
  padding: 1.5rem;
  [data-theme="dark"] & {
    background: var(--dark-card);
  }
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--text-muted-dark);
  [data-theme="dark"] & {
    border-bottom-color: var(--text-muted-light);
  }

  &:last-child {
    border-bottom: none;
  }
}

.setting-info {
  display: flex;
  flex-direction: column;
}

.setting-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
  [data-theme="dark"] & {
    color: var(--text-light);
  }
}

.setting-description {
  font-size: 0.875rem;
  color: var(--text-muted-dark);
  [data-theme="dark"] & {
    color: var(--text-muted-light);
  }
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: 48px;
  height: 24px;
}

.toggle-track {
  width: 100%;
  height: 100%;
  background: rgba(0, 204, 255, 0.2);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 204, 255, 0.3);
}

.toggle-indicator {
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 2px;
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle.light .toggle-indicator {
  transform: translateX(24px);
  background: #FFCC00;
}

.theme-icon {
  width: 14px;
  height: 14px;
  color: rgba(0, 0, 0, 0.8);
}
</style> 