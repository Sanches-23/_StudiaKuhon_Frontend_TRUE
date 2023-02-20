import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"

const app = createApp(App)
const pinia =createPinia()
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)

app.mount('#app')

