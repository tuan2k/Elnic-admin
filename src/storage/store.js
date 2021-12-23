import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    categories: [],
    products: [],
    users: []
  },
  getters: {},
  mutations: {},
  actions: {
    getCategories() {
      axios
        .get("https://elnic-api.herokuapp.com/api/categories")
        .catch(() => Notification.error())
        .then(({ data }) => {
          this.state.categories = data;
        });
    },
    async getProducts() {
      await axios
        .get("https://elnic-api.herokuapp.com/api/product")
        .catch(() => Notification.error())
        .then(({ data }) => {
          this.state.products = data;
        });
    },
    async getUsers() {
      await axios
        .get("https://elnic.herokuapp.com/api/user")
        .catch(() => Notification.error())
        .then(({ data }) => {
          this.state.users = data;
        });
    }
  }
});
