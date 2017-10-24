import Vue from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';

Vue.config.debug = true;
Vue.config.devtools = true;

// Register plugins


// Set app routers
import router from './routers';
import store from './store';

// Filters
import filters from './filters';

Vue.filter('toPhoneNumber', filters.toPhoneNumber);

if ('serviceWorker' in navigator && !navigator.onLine) {
  document.body.classList.add('app-is-offline');
}

const a = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
