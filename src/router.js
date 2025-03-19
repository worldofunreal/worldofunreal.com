// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';
import Blog from './views/Blog.vue';
import StyleGuide from './components/StyleGuide.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home
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
    component: Services
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
