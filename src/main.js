import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './routes'

import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/main.css'

const app = createApp(App)

window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

app
    .use(createPinia())
    .use(router)
    .mount('#app')
