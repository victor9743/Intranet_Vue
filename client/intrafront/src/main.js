import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/vuetify/dist/vuetify'

createApp(App).use(router).mount('#app')
