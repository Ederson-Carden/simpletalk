import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wzry from '../views/Wzry.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
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
