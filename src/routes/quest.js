export default [
    {
        path: 'clusters/:idCluster/fight',
        component: () => import ('@views/Fight.vue'),
        children: [
            {
                path: '',
                name: 'fight',
                components: {
                    'bottom-function-fight': () => import ('@views/function/Fight-Bottom-Function.vue'),
                },
            },
        ]
    },
    {
        path: '',
        component: () => import ('@views/Quest.vue'),
        children: [
            {
                path: '',
                name: 'quest',
                components: {
                    'header-function': () => import ('@views/function/Header-Function.vue'),
                    'bottom-function': () => import ('@views/function/Bottom-Function.vue'),
                },
            }
        ]
    },
]