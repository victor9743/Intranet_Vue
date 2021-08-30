<template id="teste">
     <div class="container" >
         
        
       <form class="box">
           <h3 style="">Acesso Restrito</h3>
      <div class="field">
        <label class="label" style="padding-top:30px">CPF</label>
        <div class="control">
          <input class="input is-warning is-rounded" type="number" placeholder="Usuário">
        </div>
      </div>

      <div class="field">
        <label class="label">Senha</label>
        <div class="control" style="margin-bottom: 20px;">
          <input class="input is-warning is-rounded" type="password" placeholder="********">
        </div>
      </div>

    <div style="text-align: center; margin-top: 30px; margin-bottom: 30px">  

        <router-view class="button is-rounded" id="entrar">Entrar</router-view>

    </div>
      
    </form>

    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="css">

@media screen and (max-width: 800px){
    .box{
        margin-top: 15%;
         margin-left: 10%;
         margin-right: 10%;
         text-align: center
    }

 
}

.box{
    margin-top: 15%;
    margin-left: 20%;
    margin-right: 20%;
  
    
}
.box .field{
    
    padding-left: 20px;
    padding-right: 20px;
}
.control input{
    width: 100%;
    
}
.box h3{
    font-size: 35px;
    text-align: center;
    color: orangered; 
  
    
}
#entrar{
  
    padding: 20px;
    width: 50%;
    background-color: orangered;
    color: white;

    
}
</style>