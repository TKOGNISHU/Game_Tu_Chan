import { createRouter, createWebHistory } from 'vue-router'

import quest from './quest'
import home from './home'

const routes = [
    {
        path: '/quests/:idQuest',
        children: [...quest],
    },
    {
        path: '/worlds',
        children: [
            {
                path: ':idPlayer/fight',
                component: () => import ('@views/Fight.vue'),
                children: [
                    {
                        path: '',
                        name: 'fight-player',
                        components: {
                            'bottom-function-fight': () => import ('@views/function/Fight-Bottom-Function.vue'),
                        },
                    },
                ]
            },
            {
                path: '',
                component: () => import ('@views/World.vue'),
                children: [
                    {
                        path: '',
                        name: 'world',
                        components: {
                            'header-function': () => import ('@views/function/Header-Function.vue'),
                            'bottom-function': () => import ('@views/function/Bottom-Function.vue'),
                        },
                    }
                ],
            }
        ]
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
