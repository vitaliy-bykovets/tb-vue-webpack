import Vue from 'vue';
import Vuex from 'vuex';

import productStore from './modules/products';
import appStore from './modules/app.js';

// Install Vue plugin
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productStore,
    appStore,
  },
});