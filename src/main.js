import Vue from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';

Vue.config.debug = true;
Vue.config.devtools = true;

// Set app routers
import router from './routers';
import store from './store';

// Filters
import filters from './filters';

Vue.filter('toPhoneNumber', filters.toPhoneNumber);

const a = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
