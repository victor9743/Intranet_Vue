<template >
  <v-app>

    <v-card id="area_login" ref="form" v-model="valid" lazy-validation class="rounded-xl">
      
      <h2 class="" style="padding-top: 30px; text-align: center;">Acesso Restrito</h2>
      <div class="nome rounded-xl" >


        <v-text-field style="padding-bottom:10px"
            label="Usuário"
            v-model="usuario"
            hint="* Campo Obrigatório"
            :rules="[nameRules.required]"
            placeholder=""
            filled
            rounded
            dense
        ></v-text-field>

    </div>

    <div class="nome rounded-xl" style="padding-bottom:10px">
         <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            label="Senha"
             filled
            rounded
            dense
            hint="* Campo Obrigatório"
         
            @click:append="show1 = !show1"
          ></v-text-field>
    </div>

    
     
      <div id="footer">

        <v-btn
          :disabled="!valid"
          color="yellow darken-3"
          class="mr-4 white--text"
          @click="validate"
        >
          Login
          </v-btn>

      </div>
     
  
     </v-card>
  
  
  </v-app>
</template>

<script>
export default {
 data(){
     return {
        valid: true,
        show1: false,
        usuario: '',
        password: '',
        nameRules:{
            required: value => !!value || 'Campo Não Pode Está Vazio'
        },
        rules: {
          required: value => !!value || 'Campo Não Pode Está Vazio.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
 },
 methods:{
     validate () {
        
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