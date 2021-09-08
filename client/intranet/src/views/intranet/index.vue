<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app style="text-align:center; padding-top:15px">
      

            <v-avatar color="amber darken-3" class="white--text" size="64">
                {{ AVATARusuario }}
            </v-avatar>

       

            <v-list-item-title class="text-h6">
                    {{ AVATARusuario }}
            </v-list-item-title>
            <v-list-item-subtitle>
                    usuario
            </v-list-item-subtitle>

            <v-divider style="margin-bottom:10px"></v-divider>   

   
 
    <v-list >
     
   
     
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        color="orange"
        nav
        dense
       
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content >
             <router-link to="" class="router-link black--text" v-text="child.title"></router-link>
          </v-list-item-content>

          
        </v-list-item>
         
      </v-list-group>
    </v-list>
    <v-list >
      
      <v-list-item-group
        v-model="selectedItem"
        color="orange"
      >
        <v-list-item>
             <v-list-item-content>
            <router-link to="/" class="router-link black--text">Sair</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

      
    </v-navigation-drawer>

    <v-app-bar app style="background-color: #FF8F00;" class="white--text" >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
    
      <v-spacer/>
      <v-toolbar-title style="font-size:30px">Intranet</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data (){ 
        return {
            drawer: null,
            AVATARusuario: "Teste",
           email: "fkdsakfn@fandknf.comdfn",
           selectedItem: 1,

       items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'Usuários' },{ title: "Cartórios"}],
          title: 'Cadastros',
        },
        {
          action: 'mdi-ticket',
          items: [{ title: 'Opção 1' },{ title: "Opção 2"}],
          title: 'Departamentos',
        },
   
    
      ],
      
        
      
        }
  }
  }
</script>
<style lang="css">

#menuItem{
    width: 250px;
}
#opcoes{
    text-decoration: none;
}
.router-link{
    text-decoration: none;

     
}

</style>