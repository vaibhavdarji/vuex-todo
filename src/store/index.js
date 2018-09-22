import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from '../actions';
import * as mutations from '../mutations';
Vue.use(Vuex);

const state = {
  loading: true,
  todos: []
};

const getters = {
  todos: state => state.todos,
  loading: state => state.loading
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;
