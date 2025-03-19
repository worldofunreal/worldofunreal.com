// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';
import Blog from './views/Blog.vue';
import Settings from './views/Settings.vue';
import StyleGuide from './components/StyleGuide.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  { 
    path: '/settings', 
    name: 'settings',
    component: Settings,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  { 
    path: '/privacy', 
    name: 'privacy',
    component: Privacy,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  { 
    path: '/terms', 
    name: 'terms',
    component: Terms,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  { 
    path: '/blog', 
    name: 'blog',
    component: Blog,
    meta: {
      transition: 'slide-up',
      keepScroll: true
    }
  },
  { 
    path: '/services', 
    name: 'services',
    component: Services,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  { 
    path: '/style-guide', 
    name: 'style-guide',
    component: StyleGuide,
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/',
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    redirect: '/',
    meta: {
      transition: 'slide-up',
      keepScroll: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.meta.keepScroll) {
      return { top: window.scrollY };
    } else {
      return { top: 0 };
    }
  }
});

// Navigation guard to handle transitions
router.beforeEach((to, from, next) => {
  // Add transitioning class to body
  document.body.classList.add('transitioning');
  next();
});

router.afterEach(() => {
  // Remove transitioning class from body
  document.body.classList.remove('transitioning');
});

export default router;
