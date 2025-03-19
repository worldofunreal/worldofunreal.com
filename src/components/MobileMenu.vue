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
  z-index: 50;
  background: rgba(10, 12, 27, 0.98);
  backdrop-filter: blur(25px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.4);
  padding: 0;
  transform: translateZ(0);
  will-change: transform;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  opacity: 0.7;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.75rem;
  padding: 0.5rem;
  border-radius: 12px;
  gap: 0.25rem;
  position: relative;
  height: 100%;
  width: 20%;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: radial-gradient(circle at center, rgba(0, 204, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00CCFF;
    transform: translateX(-50%) scale(0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px #00CCFF;
  }

  &.router-link-active {
    opacity: 1;
    color: #00CCFF;
    transform: translateY(-2px);

    &::before {
      opacity: 0.9;
    }

    &::after {
      transform: translateX(-50%) scale(1);
    }

    .menu-icon {
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(0, 204, 255, 0.6));
    }

    span {
      color: #00CCFF;
      text-shadow: 0 0 8px rgba(0, 204, 255, 0.4);
      opacity: 1;
    }
  }
}

.menu-icon {
  font-size: 1.25rem;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  position: relative;
  z-index: 2;
}

span {
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  opacity: 0.9;
}

@media (hover: hover) {
  .menu-item:hover:not(.router-link-active) {
    opacity: 0.9;
    transform: translateY(-1px);
  }
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