import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/quest',
        component: () => import ('@/resource/views/Quest.vue')
    },
    {
        path: '/',
        component: () => import ('@/resource/views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
