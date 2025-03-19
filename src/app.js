import Vue from 'nativescript-vue';
import Home from './views/Home';
import { createPinia } from 'pinia';

// Uncomment the following to see NativeScript logs
// import { MessageType, filterConsoleLogger } from '@nativescript/core/trace';
// filterConsoleLogger(
//   Logger.messages.filter((message) => message.type === MessageType.error)
// );

Vue.config.silent = false;

// Initialize Pinia
const pinia = createPinia();
Vue.use(pinia);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start(); 