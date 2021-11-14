import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/auth/login'
import Layout from '../components/layout'

// User
import User from '../components/user/index'
import createuser from '../components/user/create'
import edituser from '../components/user/edit'

// Product
import Product from '../components/product/index'
import createproduct from '../components/product/create'
import editproduct from '../components/product/edit'
import viewproduct from '../components/product/create'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'layout',
      component: Layout,
      children : [
          {
          path: 'home',
          name: 'home',
          component: Home,
          },
          {
            path: 'user',
            name: 'user',
            component: User,
          },
          {
            path: 'edit-user/:id',
            name: 'edit-user',
            component: edituser,
          },
          {
            path: 'create-user',
            name: 'create-user',
            component: createuser,
          },
          {
            path: 'product',
            name: 'product',
            component: Product,
          },
          {
            path: 'edit-product/:id',
            name: 'edit-product',
            component: editproduct,
          },
          {
            path: 'view-product/:id',
            name: 'view-product',
            component: viewproduct,
          },
          {
            path: 'create-product',
            name: 'create-product',
            component: createproduct,
          },
      ]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    }
  ]
})
