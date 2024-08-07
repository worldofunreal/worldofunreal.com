// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
