// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Ensure router is imported
import './index.scss';

createApp(App).use(createPinia()).use(router).mount('#app'); // Ensure router is used
