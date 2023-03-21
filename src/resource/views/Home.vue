<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep(1).jpg" alt="">
        </section>

        <!-- Content -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <!-- Header -->
            <router-view name="header-function"/>

            <!-- Main -->
            <section>
            </section>

            <!-- Bottom -->
            <router-view name="bottom-function" />
        </section>

    </section>
</template>

<script>
import { useUserStore } from '@/stores/index'
import { Board } from '@/components/index'
import {
    Skill,
    normal_finally,
    heal_1s,
} from '@/util/index'

export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    components: { Board, },
    data() {
        return {
            immortalities: [],
            skills: { // action skill
                'normal': new Skill({
                    name: 'normal',
                    type: 'damage',
                    amount: 5, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: 100%; background-position-y: 75%',
                    animation: '',
                    startIs: 'you',
                    delay: 2000, // delay between (sky/figure) and action
                    effects: {
                        sky: '',
                        figure: 'magic_ring_normal', // from you
                        action: normal_finally, // animation from you -> object / immediately object
                    }
                }),
                'normal-heal': new Skill({
                    name: 'normal-heal',
                    type: 'heal',
                    amount: 2, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: auto; background-position-y: 100%;',
                    animation: 'animation-100',
                    startIs: 'object', // sky: from sky / you: from people action skill / object: immediacy from object be attacked, vd skill from earth, ect.
                    delay: 2000, // delay between (sky/figure) and action
                    effects: {
                        sky: '',
                        figure: 'magic_ring_normal', // from you
                        action: heal_1s, // animation from you -> object / immediately object
                    },
                }),
            },
        }
    },
    methods: {},
    async created() {
        await this.store.logIn(this)
    },
    async mounted() {
    },
}

// async function timeout(ms) {
//     return new Promise((resolve) => {
//         return setTimeout(resolve, ms)
//     })
// }
</script>

<style>
.background {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
