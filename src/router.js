// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';
import Blog from './views/Blog.vue';
import Services from './views/Services.vue';
import ThemeDemo from './components/ThemeDemo.vue';
import StyleGuide from './components/StyleGuide.vue';
import MobileHome from './views/MobileHome.vue';
import MobileServices from './views/MobileServices.vue';

// Function to detect if the user is on a mobile device
// This will be replaced by the reactive implementation in App.vue
// We keep this for initial route loading
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const windowWidth = window.innerWidth;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || windowWidth < 768;
};

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: () => {
      return isMobile() ? import('./views/MobileHome.vue') : import('./views/Home.vue');
    }
  },
  { 
    path: '/privacy', 
    name: 'privacy',
    component: Privacy 
  },
  { 
    path: '/terms', 
    name: 'terms',
    component: Terms 
  },
  { 
    path: '/blog', 
    name: 'blog',
    component: Blog 
  },
  { 
    path: '/services', 
    name: 'services',
    component: () => {
      return isMobile() ? import('./views/MobileServices.vue') : import('./views/Services.vue');
    }
  },
  { 
    path: '/theme-demo', 
    name: 'theme-demo',
    component: ThemeDemo 
  },
  { 
    path: '/style-guide', 
    name: 'style-guide',
    component: StyleGuide 
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/'
  },
  {
    path: '/contact',
    name: 'contact',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
