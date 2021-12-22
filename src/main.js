// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App";
import Notification from "./storage/Notification";
import Swal from "sweetalert2";
import User from "./storage/User";
import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
import Vuex from "vuex";
import router from "./router";
import { store } from "./storage/store";

// Import Bootstrap an BootstrapVue CSS files (order is important)


Vue.use(Vuex);
Vue.config.productionTip = false;


import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

window.User = User;
window.Notification = Notification;
window.Swal = Swal;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
window.Toast = Toast;

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
