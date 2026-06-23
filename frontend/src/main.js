// import './assets/main.css'

import { createApp } from 'vue' //dkdlk
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)



// Mount it to the <div id="app"></div> in your HTML inside 'body'
app.mount('#app')
