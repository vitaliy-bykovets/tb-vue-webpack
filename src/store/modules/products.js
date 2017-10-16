import ProductService from '../../services/productService';

import { FETCH_PRODUCTS } from '../actions';
import { SET_PRODUCTS } from '../mutations';


// Initial state of store
export const state = {
  products: [],
};

export const actions = {
  [FETCH_PRODUCTS]({ commit }) {
    return commit(SET_PRODUCTS, ProductService.getProducts());
  },
};

export const mutations = {
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
};

export default {
  state,
  actions,
  mutations
};