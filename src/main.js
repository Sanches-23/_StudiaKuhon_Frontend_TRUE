import {createApp, inject} from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueCookies, { expires: '3h' })

app.mount('#app')

