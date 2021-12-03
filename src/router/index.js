import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Login from "../components/auth/login";
import Layout from "../components/layout";

// User
import User from "../components/user/index";
import createUser from "../components/user/create";
import editUser from "../components/user/edit";

// Category
import Category from "../components/category/index";
import createCat from "../components/category/create";
import editCat from "../components/category/edit";

// Product
import Product from "../components/product/index";
import createproduct from "@/components/product/create";
import editproduct from "@/components/product/edit";
import viewproduct from "@/components/product/create";

// Profile
import Profile from "@/components/profile/index";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "user",
          name: "user",
          component: User
        },
        {
          path: "edit-user/:id",
          name: "edit-user",
          component: editUser
        },
        {
          path: "create-user",
          name: "create-user",
          component: createUser
        },
        {
          path: "category",
          name: "category",
          component: Category
        },
        {
          path: "edit-category/:id",
          name: "edit-category",
          component: editCat
        },
        {
          path: "create-category",
          name: "create-category",
          component: createCat
        },
        {
          path: "product",
          name: "product",
          component: Product
        },
        {
          path: "edit-product/:id",
          name: "edit-product",
          component: editproduct
        },
        {
          path: "view-product/:id",
          name: "view-product",
          component: viewproduct
        },
        {
          path: "create-product",
          name: "create-product",
          component: createproduct
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
