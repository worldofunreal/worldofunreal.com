<template>
  <nav class="mobile-menu">
    <router-link 
      v-for="route in routes" 
      :key="route.path" 
      :to="route.path" 
      class="menu-item"
    >
      <i :class="route.icon" class="menu-icon"></i>
      <span>{{ route.name }}</span>
    </router-link>
  </nav>
</template>

<script setup>
const routes = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Services', path: '/services', icon: 'fas fa-cogs' },
  { name: 'Tech', path: '/tech', icon: 'fas fa-microchip' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
];
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 30;
  background: rgba(10, 12, 27, 0.98);
  backdrop-filter: blur(25px);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.4);
  padding: 0.8rem 0;
  transform: translateZ(0);
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  opacity: 0.7;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  padding: 0.6rem;
  border-radius: 16px;
  gap: 0.4rem;
  position: relative;
  min-height: 60px;
  justify-content: center;
  width: 100%;
  text-align: center;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(circle at center, rgba(0, 204, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00CCFF;
    transform: translateX(-50%) scale(0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 12px #00CCFF;
  }

  &.router-link-active {
    opacity: 1;
    color: #00CCFF;
    transform: translateY(-3px);

    &::before {
      opacity: 0.9;
      background: radial-gradient(circle at center, rgba(0, 204, 255, 0.3) 0%, transparent 70%);
    }

    &::after {
      transform: translateX(-50%) scale(1);
    }

    .menu-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 0 12px rgba(0, 204, 255, 0.6));
    }

    span {
      color: #00CCFF;
      text-shadow: 0 0 12px rgba(0, 204, 255, 0.4);
      opacity: 1;
    }
  }
}

.menu-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 0.25rem;
  color: currentColor;
  transition: all 0.3s ease;
  transform-origin: center;
  position: relative;
  z-index: 10;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item span {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  margin-top: 0.125rem;
  text-align: center;
  white-space: nowrap;
  opacity: 0.9;
}

@media (hover: none) {
  .menu-item:active {
    opacity: 0.6;
    transform: scale(0.95);
  }
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}
</style> 