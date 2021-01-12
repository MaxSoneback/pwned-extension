import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import '../assets/styles/index.css'
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import store from '@/store'
global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

Vue.use(VueSimpleAccordion, Vuex);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
