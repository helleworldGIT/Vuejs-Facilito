import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/gifparty',
    name: 'Gifparty',
    component: function () {
      return import('../views/Gifparty.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
