export default [
    {
        path: ':id/fight',
        component: () => import ('@/resource/views/Fight.vue'),
        children: [
            {
                path: '',
                name: 'fight',
                components: {
                    'bottom-function-fight': () => import ('@/resource/views/function/Fight-Bottom-Function.vue'),
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
                name: 'quest',
                components: {
                    'header-function': () => import ('@/resource/views/function/Header-Function.vue'),
                    'bottom-function': () => import ('@/resource/views/function/Bottom-Function.vue'),
                },
            }
        ]
    },
]