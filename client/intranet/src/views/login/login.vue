<template >
  <v-app>
    
    <div  class="container" style="margin-top:3%; width:350px; position:fixed; " border="left">
         <v-alert
      v-model="erro"
      border="left"
      close-text="Close Alert"
      color="amber darken-3"
      dark
      dismissible
    >
        Usuário ou senha Inválidos
    </v-alert>
    
        
    </div>


    <v-card id="area_login" ref="form" lazy-validation class="rounded-xl" :loading="carregando">
      
      <h2 class="" style="padding-top: 30px; text-align: center;">Acesso Restrito</h2>
      <div class="nome rounded-xl" >


        <v-text-field style="padding-bottom:10px"
            label="Usuário"
            v-model="usuario"
       
            :rules="[nameRules.required]"
            placeholder=""
            filled
            rounded
            dense
        ></v-text-field>

    </div>

    <div class="nome rounded-xl" style="padding-bottom:10px">
         <v-text-field
            v-model="senha"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            label="Senha"
             filled
            rounded
            dense
            @click:append="show1 = !show1"
          ></v-text-field>
    </div>    
      <div id="footer">
        <v-btn   
          color="yellow darken-3"
          class="mr-4 white--text"
          @click="login"     
        >
          Login
          </v-btn>

      </div>
     
  
     </v-card>
  
  
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
 data(){

    localStorage.clear();
     return {
        
        carregando: false,
        erro: false,
        overlay: true,
        zIndex: 1,
        show1: false,
        usuario: '',
        senha: '',
        nameRules:{
            required: value => !!value || 'Campo Não Pode Está Vazio'
        },
        rules: {
          required: value => !!value || 'Campo Não Pode Está Vazio.',
         
        },
      }
  },
   
 methods:{
     login () { 
       
            axios.post("http://localhost:3000/login",{
                usuario: this.usuario,
                password : this.senha

            }).then(res=>{
                  if(res.data.msg === "true"){
                    localStorage.setItem('token', res.data.token);
                    this.$router.push({name:'index'});
                    
                    return
                  }else{
                    this.erro = res.data.msg;
                    this.overlay =true;
                    this.erro = true;
                

                  }
            }).catch(err =>{                 
                   var msgErro = err.response.data.err;
                    return msgErro;
            }) 
      },

      fechar(){
        this.overlay =false;
        this.erro = false;
       
      }
  
 }
 
  
 
};
</script>
<style lang="css">
    #area_login{
        
    
      margin: auto;
      
      height: 500px;
      width: 500px;      
      
    }
    .nome{
      margin-top:80px;
      margin-left: 5%;
      margin-right:5%;
      margin-bottom: -100px;
      padding:10px;
    }
    #footer{
      margin-top: 100px;
      padding:20px;
      text-align: center;
    }
    h2{
        color: #F9A825;
        font-size: 30px;

    }
  
</style>