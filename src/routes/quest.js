export default [
    {
        path: ':id/fight',
        component: () => import ('@/resource/views/Fight.vue'),
        children: [
            {
                path: '',
                components: {
                    'bottom-function': () => import ('@/resource/views/function/Bottom-Function-Fight.vue'),
                },
            },
        ]
    },
    {
        path: '',
        component: () => import ('@/resource/views/Quest.vue'),
        children: [
            {
                path: '',
                components: {
                    'header-function': () => import ('@/resource/views/function/Header-Function.vue'),
                    'bottom-function': () => import ('@/resource/views/function/Bottom-Function.vue'),
                },
            }
        ]
    },
]