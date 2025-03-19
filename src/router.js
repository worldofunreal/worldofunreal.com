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

// Function to detect if user is on mobile
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const windowWidth = window.innerWidth;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || windowWidth < 768;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        return isMobile() ? import('./views/MobileHome.vue') : import('./views/Home.vue');
      },
      meta: { keepAlive: true }
    },
    {
      path: '/services',
      name: 'services',
      component: () => {
        return isMobile() ? import('./views/MobileServices.vue') : import('./views/Services.vue');
      },
      meta: { keepAlive: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => {
        return isMobile() ? import('./views/MobileAbout.vue') : import('./views/About.vue');
      },
      meta: { keepAlive: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => {
        return isMobile() ? import('./views/MobileContact.vue') : import('./views/Contact.vue');
      },
      meta: { keepAlive: true }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('./views/Privacy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('./views/Terms.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Add any necessary navigation guards
  next();
});

// Add transition handling
router.beforeEach((to, from, next) => {
  // Clear any existing transition classes
  document.body.classList.remove('page-transition');
  next();
});

router.afterEach((to, from) => {
  // Add transition class after navigation
  document.body.classList.add('page-transition');
});

export default router;
