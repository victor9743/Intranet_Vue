<template>
  <div>
   
   <login/>
  
    <footer>
      <h3>Desenvolvido por Victor Costa</h3>
    </footer>
  </div>
</template>
<script>
  import login from './components/login.vue'
export default {
  
  components:{
    login
  }

}
</script>

<style>

  footer{
  
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 70px;
    padding-top: 20px;
    border-top: 2px solid orangered;
  }
</style>
