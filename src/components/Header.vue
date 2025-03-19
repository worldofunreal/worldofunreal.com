<template>
  <header class="header">
    <router-link to="/" class="logo">WORLD OF UNREAL</router-link>
    <nav class="desktop-nav">
      <router-link v-for="route in routes" :key="route.path" :to="route.path" class="nav-link">
        {{ route.name }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tech', path: '/tech' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  background: rgba(10, 12, 27, 0.98);
  backdrop-filter: blur(10px);
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(90deg, #00CCFF 0%, #9933FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desktop-nav {
  display: none;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: white;
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover,
    &.router-link-active {
      opacity: 1;
    }
  }
}
</style> 