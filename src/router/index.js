import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    }
  },
  {
    path: '/blog/:id',
    name: 'blog_entry',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogEntry.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    }
  },
  {
    path: '/skills',
    name: 'skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Skills.vue')
    }
  },
  {
    path: '/services',
    name: 'servicesv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Services.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
