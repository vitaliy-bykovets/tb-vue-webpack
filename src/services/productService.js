import Vue from 'vue';
import loadedData from '../../static/data.json';

export default {

  getProducts() {
    return loadedData.items;
    // return Vue.axios.get('http://localhost:8080/assets/data.json')
    //   .catch((error) => {
    //     throw new Error(error);
    //   });
  },
};