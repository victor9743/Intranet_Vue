<template>
    <div>
        <div v-if="erro != undefined">  
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head" id="aviso_head">
                    <p class="modal-card-title" style="font-size: 120%">Aviso</p>
                    <button class="delete" aria-label="close" @click="fechar"></button>
                    </header>
                    <section class="modal-card-foot">
                        <div class="aviso">
                            <h2>Usuário ou Senha Inválido(s)</h2>
                        </div>
                    </section>

                 </div>
            </div>
        </div>


        <div class="box">
        
            <div class="field">
                <label class="label" style="padding-top:30px">Usuário</label>
                <div class="control">
                    <input class="input is-warning is-rounded" type="text" placeholder="Usuário" v-model="usuario">
                </div>
            </div>

            <div class="field">
                <label class="label">Senha</label>
                <div class="control" style="margin-bottom: 20px;">
                <input class="input is-warning is-rounded" type="password" placeholder="********" v-model="senha">
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px; margin-bottom: 30px">  

                <button class="button is-warning is-rounded"  @click="logar">Entrar</button>

            </div>
        
        </div>
    

    </div>

</template>
<script>
import axios from 'axios'



export default {

    data(){

        return{
            usuario: '',
            senha: '',
            erro: undefined
        }

    },
  
   
 
    methods:{
      logar(){
        //  
          axios.post("http://localhost:3000/login",{
              usuario : this.usuario,
              password: this.senha
          }).then(res=>{

            localStorage.setItem("token", res.data.token);
            this.$router.push({name: 'intraindex'})

              /*console.log(res.data.msg);
              if(res.data.msg == false){
                  this.erro = "Usuário ou senha Inválidos";
                 
              }else{
                  
              }*/
        }).catch(err=>{
            console.log(err);
            this.erro = "usuario ou senha invalido(s)";
            this.$router.push({name: 'login'})
        })  
       
      },
      fechar(){
        this.erro = undefined;
      }
    }
}
</script>


<style lang="css">
@media all and (max-width: 850px){
    .box{
        margin-top: 100px;
         margin-left: 10%;
         margin-right: 10%;
         text-align: center
    }
    .modal{
        padding-left: 20%;
        padding-right: 20%;
    }
    #aviso_head{
        font-size: 12px;
    }
    .aviso{
        color: orangered;
        font-size: 13px;
        margin:10px;
    


    }
}
@media all and (min-width: 851px) and (max-width: 2000px){

    .box{
        margin-top: 150px;
          margin-left: 20%;
         margin-right: 20%;
         text-align: center
    }

    .aviso{
         margin-right: 10%;
        font-size: 22px;
        color: orangered;
        margin:30px;
       

    }
    .modal{
        padding-left: 20%;
        padding-right: 20%;
    }

}



.modal{
    margin-top: -20%;
   
}

</style>