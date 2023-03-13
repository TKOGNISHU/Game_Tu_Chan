export default [
    {
        path: '',
        name: 'home',
        components: {
            'header-function': () => import ('@views/function/Header-Function.vue'),
            'bottom-function': () => import ('@views/function/Bottom-Function.vue'),
        },
    }
]