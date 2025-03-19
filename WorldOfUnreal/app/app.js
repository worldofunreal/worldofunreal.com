import Vue from 'nativescript-vue';
import App from './components/App.vue';

// Register NativeScript UI Components with proper namespace
Vue.registerElement('BottomNavigation', () => require('@nativescript/core').BottomNavigation, {
  model: {
    prop: 'selectedIndex',
    event: 'selectedIndexChange'
  }
});

Vue.registerElement('TabStrip', () => require('@nativescript/core').TabStrip);
Vue.registerElement('TabStripItem', () => require('@nativescript/core').TabStripItem);
Vue.registerElement('TabContentItem', () => require('@nativescript/core').TabContentItem);
Vue.registerElement('Label', () => require('@nativescript/core').Label);
Vue.registerElement('GridLayout', () => require('@nativescript/core').GridLayout);
Vue.registerElement('StackLayout', () => require('@nativescript/core').StackLayout);
Vue.registerElement('Page', () => require('@nativescript/core').Page);
Vue.registerElement('ActionBar', () => require('@nativescript/core').ActionBar);
Vue.registerElement('ScrollView', () => require('@nativescript/core').ScrollView);

// Enable debug logging
Vue.config.silent = false;

new Vue({
    render: h => h(App)
}).$start();
