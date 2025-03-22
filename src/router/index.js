import { createRouter, createWebHistory } from 'vue-router';
import { markRaw } from 'vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Tech from '../views/Tech.vue';
import AI from '../views/tech/AI.vue';
import Blockchain from '../views/tech/Blockchain.vue';
import Metaverse from '../views/tech/Metaverse.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: markRaw(Home)
  },
  {
    path: '/services',
    name: 'Services',
    component: markRaw(Services)
  },
  {
    path: '/about',
    name: 'About',
    component: markRaw(About)
  },
  {
    path: '/contact',
    name: 'Contact',
    component: markRaw(Contact)
  },
  {
    path: '/tech',
    name: 'Tech',
    component: markRaw(Tech)
  },
  {
    path: '/tech/ai',
    name: 'AI',
    component: markRaw(AI)
  },
  {
    path: '/tech/blockchain',
    name: 'Blockchain',
    component: markRaw(Blockchain)
  },
  {
    path: '/tech/metaverse',
    name: 'Metaverse',
    component: markRaw(Metaverse)
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: markRaw(Privacy)
  },
  {
    path: '/terms',
    name: 'Terms',
    component: markRaw(Terms)
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 