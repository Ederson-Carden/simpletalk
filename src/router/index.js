import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wzry from '../views/Wzry.vue'
import Mine from '../views/Mine.vue'
import Xqtd from '../views/Xqtd.vue'
import Csgo from '../views/Csgo.vue'


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
  {
    path: '/xqtd',
    name: 'Xqtd',
    component: Xqtd
  },
  {
    path: '/csgo',
    name: 'Csgo',
    component: Csgo
  },
]
const router = new VueRouter({
  routes
})

export default router
