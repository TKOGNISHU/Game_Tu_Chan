import { createRouter, createWebHistory } from 'vue-router'

import quest from './quest'
import home from './home'

const routes = [
    {
        path: '/quests/:idQuest',
        children: [...quest],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('@views/Login.vue'),
    },
    {
        path: '/',
        component: () => import ('@views/Home.vue'),
        children: [...home]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
