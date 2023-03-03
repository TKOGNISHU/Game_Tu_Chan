import { createRouter, createWebHistory } from 'vue-router'

import quest from './quest'
import home from './home'

const routes = [
    {
        path: '/quest/:idQuest',
        children: [...quest],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('@/resource/views/Login.vue'),
    },
    {
        path: '/',
        component: () => import ('@/resource/views/Home.vue'),
        children: [...home]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
