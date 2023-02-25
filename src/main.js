import {createApp, inject} from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import VueSplide from '@splidejs/vue-splide';

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/js/src/carousel.js"
import "bootstrap"
import '@splidejs/vue-splide/css';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueCookies, { expires: '3h' })
app.use( VueSplide );

app.mount('#app')

