export default [
    {
        path: '',
        name: 'home',
        components: {
            'header-function': () => import ('@/resource/views/function/Header-Function.vue'),
            'bottom-function': () => import ('@/resource/views/function/Bottom-Function.vue'),
        },
    }
]