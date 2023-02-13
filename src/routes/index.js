import { createRouter, createWebHistory } from 'vue-router'

import quest from './quest'
import home from './home'

const routes = [
    {
        path: '/quest/:id',
        children: [...quest],
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
