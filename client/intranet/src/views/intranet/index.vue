<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app style="text-align:center; padding-top:15px">
        <v-card height="400" width="256" class="mx-auto">

            <v-avatar color="amber darken-3" class="white--text" size="64">
                {{ AVATARusuario }}
            </v-avatar>

       

            <v-list-item-title class="text-h6">
                    {{ AVATARusuario }}
            </v-list-item-title>
            <v-list-item-subtitle>
                    usuario
            </v-list-item-subtitle>

            <v-divider></v-divider>
            
            <v-menu  top :offset-x="offset">
                <template v-slot:activator="{ on, attrs }" >

                      <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title color="primary" dark v-bind="attrs" v-on="on">Sair</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title color="primary" dark v-bind="attrs" v-on="on">Cadastros</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                </template>

                <v-list >
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
        </v-menu>  
    </v-card>


      
    </v-navigation-drawer>

    <v-app-bar app style="background-color: #FF8F00;" class="white--text" >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>

      <v-toolbar-title style="text-align:center">Intranet</v-toolbar-title>
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
            selectedItem: 0,
           items: [
                { title: 'Usuários' },
                { title: 'Cartórios' },
                { title: 'Departamentos' },
                {
                    title: "opção sair"
                }
            
            ],
            offset:true
          
           
        }},
  }
</script>
<style lang="css">

#menuItem{
    width: 250px;
}
#opcoes{
    text-decoration: none;
}

</style>