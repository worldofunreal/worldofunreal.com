// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import MobileHome from './views/MobileHome.vue';
import MobileServices from './views/MobileServices.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';
import Blog from './views/Blog.vue';
import StyleGuide from './components/StyleGuide.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: MobileHome
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
    component: MobileServices
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
