import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './routes'

import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'

import Immortality from '@/util/Immortality.js'
import Skill from '@/util/Skill.js'
import Figure from '@/util/Figures.js'
import State from '@/util/State.js'
import ActionPlot from '@/util/ActionPlot.js'

import chanting from '@/assets/img/nam-tu-si/Immortality-200-chanting-3pic.png'
import chantingFinish from '@/assets/img/nam-tu-si/Immortality-200-chantingFinish.png'

import magic_ring_normal from '@/assets/img/skills/normal/normal_first.png'
import normal_finally from '@/assets/img/skills/normal/normal_finally.png'

import heal_1s from '@/assets/img/skills/heal/Heal.png'

import fire from '@/assets/img/states/fire-500.png'

const app = createApp(App)

window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

app
    .use(createPinia())
    .use(router)
    .mount('#app')
