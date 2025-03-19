import { Application } from '@nativescript/core';
import Vue from 'nativescript-vue';
import Home from './views/Home.vue';
import { createPinia } from 'pinia';
import useTheme from './utils/useTheme';

// Initialize Vue with NativeScript
Vue.config.silent = false;

// Initialize Pinia
const pinia = createPinia();
Vue.use(pinia);

// Apply theme on app startup
const { setTheme } = useTheme();

Application.on(Application.launchEvent, () => {
  setTheme();
});

// Initialize Vue application
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start(); 