import { createRouter, createWebHashHistory } from 'vue-router'
import intranet from '../views/intranet.vue'

const routes = [
  {
    path: '/sinoredi/intranet',
    name: 'intranet',
    component: intranet
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
