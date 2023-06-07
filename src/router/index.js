import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wzry from '../views/Wzry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wzry',
    name: 'Wzry',
    component: Wzry
  },
]

const router = new VueRouter({
  routes
})

export default router
