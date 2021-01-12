import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    emailObjects: [],
    breaches: [] 
  },
  getters,
  mutations,
  actions,
  modules: {}
});

window.store = store;

export default {
  store 
};