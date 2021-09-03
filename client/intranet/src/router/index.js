import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import intranetINDEX from '../views/intranet/index.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name:'login',
    component: login
  },
  {
    path: "/intranet/index",
    name: "index",
    component: intranetINDEX
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
