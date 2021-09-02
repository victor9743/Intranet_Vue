<template>
    <div>
        <aside class="menu" id="menuIntra">
            <ul class="menu-list" >
                <li>
                    <a class="is-active" @click="opcao">Cadastros</a>
                    <ul >
                        <li><a>Usuários</a></li>
                        <li><a>Cadastro 2</a></li>
                        <li><a>Cadastro 3</a></li>
                    </ul>
                </li>

                  <li>
                    <a class="is-active">Financeiro</a>
                    <ul>
                        <li><a>Usuários</a></li>
                        <li><a>Cadastro 2</a></li>
                        <li><a>Cadastro 3</a></li>
                    </ul>
                </li>
                
            </ul>
        </aside>

        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            opAtivo: false,
            numeroMenu :0
        }

    },
    methods:{
        opcao(){
            if(this.opAtivo == false){

                this.opAtivo = true;
             
            }else{

                
                this.opAtivo = false;
            }
            
        }
    }
    
}
</script>
<style>

#menuIntra{
    width: 150px;
    margin-top: 100px;
    margin-left: 10px;
    
}
#menuIntra button{
    border-bottom-width: 1px solid white;
}




</style>