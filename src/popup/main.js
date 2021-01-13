import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "../assets/styles/index.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

global.browser = require("webextension-polyfill");
Vue.prototype.$browser = global.browser;

//Vue.use(VueSimpleAccordion, Vuex);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
