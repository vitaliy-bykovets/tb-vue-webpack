import { SET_ACTIVE_FILTER, SET_ACTIVE_WEIGHT } from '../mutations';
import CONSTANTS from '@/constants';

// Initial state of store
export const state = {
  activeFilter: 'newest',
  activeWeight: CONSTANTS.WEIGHT_FILTERS[0],
  query: '',
};

export const mutations = {
  [SET_ACTIVE_FILTER](state, filter) {
    state.activeFilter = filter;
  },
  [SET_ACTIVE_WEIGHT](state, weightAmount) {
    state.activeWeight = weightAmount;
  },
};

export default {
  state,
  mutations
};
