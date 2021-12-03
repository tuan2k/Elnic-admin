import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    categories: [],
    products: []
  },
  getters: {},
  mutations: {},
  actions: {
    getCategories() {
      axios
        .get("https://elnic-api.herokuapp.com/api/categories")
        .catch(error => Notification.error())
        .then(({ data }) => {
          this.state.products = data;
        });
    },
    getProducts() {
      axios
        .get("https://elnic-api.herokuapp.com/api/product")
        .catch(error => Notification.error())
        .then(({ data }) => {
          this.state.categories = data;
        });
    }
  }
});
