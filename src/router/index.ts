import Vue from 'nativescript-vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';

export const router = {
  // Define routes for frame navigation
  navigateToHome() {
    return Vue.navigateTo(Home, {
      clearHistory: true,
      transition: {
        name: 'slide',
        duration: 300,
        curve: 'easeInOut'
      }
    });
  },
  
  navigateToServices() {
    return Vue.navigateTo(Services, {
      transition: {
        name: 'slide',
        duration: 300,
        curve: 'easeInOut'
      }
    });
  },
  
  // Navigation with back history
  navigateBack() {
    return Vue.navigateBack();
  },
  
  // Utility for handling navigation with parameters
  navigateWithParams(component, params = {}, options = {}) {
    return Vue.navigateTo(component, {
      props: params,
      transition: {
        name: 'slide',
        duration: 300,
        curve: 'easeInOut'
      },
      ...options
    });
  }
};

export default router; 