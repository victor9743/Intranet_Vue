import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import intranetINDEX from '../views/intranet/index.vue'
import intranetCARTORIOS from '../views/intranet/cartorios/cartorios.vue'
import axios from 'axios'
Vue.use(VueRouter)

function AdminAuth(to, from, next){

  var req ={
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }

  
  if(localStorage.getItem('token') != undefined || localStorage.getItem('token') != ""){
    
    axios.post("http://localhost:3000/autenticar",{}, req).then(res=>{
     

      next();

      return res;

    }).catch(err =>{

     
      if(err.data == undefined){
        next("/");
        return err;
      }
      

      
    })
    
  }else{
    next("/");
  }
  
}

const routes = [

  {
    path: "/",
    name:'login',
    component: login
  },
  {
    path: "/intranet/index",
    name: "index",
    component: intranetINDEX,
    beforeEnter: AdminAuth
  },
  {
    path: "/intranet/cartorios",
    name: "cartorios",
    component: intranetCARTORIOS,
    beforeEnter : AdminAuth

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
