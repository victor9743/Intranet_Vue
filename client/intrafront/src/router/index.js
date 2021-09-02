import { createRouter, createWebHistory } from 'vue-router'
import intrahome from '../views/intranet.vue'
import login from '../views/login.vue'
import axios from 'axios'
function Admin (to, from, next){

  var req ={
    headers:{
      Authorization: 'Bearer ' +localStorage.getItem('token')
    }
  }

  if(localStorage.getItem('token') != undefined){

    axios.post("http://localhost:3000/autenticar",{},req).then(res=>{

      if(res.status == 403){
        next('/');
      }else{
        next();
      }

      
    }).catch(err=>{

      console.log(err.response);
      next("/");
    })

  }else{
    next('/');
  }

}

const routes = [

  {
    path:'/sinoredi/index',
    name: 'intraindex',
    component: intrahome,
    beforeEnter: Admin
  },
  {
    path: '/',
    name: 'login',
    component: login

  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
