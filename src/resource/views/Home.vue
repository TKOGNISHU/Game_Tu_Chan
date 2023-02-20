<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep(1).jpg" alt="">
        </section>

        <!--  -->
        <section class="h-100" style="z-index: 10;">
            <router-view name="header-function" />
    
            <router-view @actionBoard="actionBoard" :isBoardShow="isShow" name="bottom-function" />
        </section>
            
        <Board :isShow="isShow" @closeStatus="closeStatus">
            <section class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
                <!-- Header -->
                <section class="text-start">
                    <button @click.prevent="handleShowCharacter" data-board-btn-target="character" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Nhân Vật</button>
                    
                    <button @click.prevent="handleShowTraining" data-board-btn-target="training" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Tu Luyện</button>
                    
                    <button @click.prevent="handleShowEmbattle" data-board-btn-target="embattle" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Dàn Trận</button>
                    
                </section>

                <!-- Body -->
                <!-- Character -->
                <section data-board-body-show="character" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 900px;">
                    <!-- Left -->
                    <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hạo Thiên
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hàn Lập
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Tiêu Viêm
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Lăng Cung
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                    </section>
                    <!-- Right -->
                    <section class="col">
                        <!-- Header -->
                        <div class="row">
                            <div class="col-2">
                                <div class="m-auto overflow-hidden" style="height: 100px; width: 46px;">
                                    <img class="h-100" src="@/assets/img/nam-tu-si/Immortality-200-chanting-3pic.png" alt="">
                                </div>
                            </div>
                            <div class="col-4 overflow-auto rounded px-2 py-1 scrollbar" style="height: 100px; margin-left: 10px; background-color: #cccccc50;">
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                                <p class="m-0 ms-1 p-0">Tư chất: <span>Ngũ hành linh căn</span></p>
                            </div>
                        </div>
                        <!-- Body - skills -->
                        <div class="mt-3 row g-1">
                            <div class="col-4">
                                <div class="row g-1 overflow-auto scrollbar" style="height: 100px; margin-left: 10px;">
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                    <template v-for="(value, key, index) in skills">
                                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                            <button class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="value.effects.action" alt="">
                                            </button>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row g-1 overflow-auto rounded px-2 scrollbar" style="height: 100px; margin-left: 10px; background-color: #cccccc50;">
                                    <p>
                                        Tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng, tâm như nước đọng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <!-- Training -->
                <section data-board-body-show="training" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
                    <!-- Left -->
                    <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hạo Thiên
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Hàn Lập
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Tiêu Viêm
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Lăng Cung
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                        <button class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            Yết Kiêu
                        </button>
                    </section>

                    <!-- Right -->
                    <section class="col">

                    </section>
                </section>

                <!-- Embattle -->
                <section data-board-body-show="embattle" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
                </section>
            </section>
        </Board>
    </section>
</template>

<script>
import Board from '@/components/board/Board.vue'

import Skill from '@/util/Skill.js'

import heal_1s from '@/assets/img/skills/skills-image/heal.png'
import normal_finally from '@/assets/img/skills/skills-image/fire-draw-1-100.png'

export default {
    components: { Board,  },
    data() {
        return {
            isShow: false,
            board: {
                show: 'character-btn',
            },
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
    methods: {
        closeStatus() {
            this.isShow = false
        },
        actionBoard() {
            this.isShow = true
        },
        async handleShowCharacter(e) {
            
            this.showBoard(e)
        },
        async handleShowTraining(e) {
            
            this.showBoard(e)
        },
        async handleShowEmbattle(e) {
            
            this.showBoard(e)
        },
        showBoard(e) {
            const currentBtnActive = $('.board-header-btn.active')
            const currentTargetShow = $(`[data-board-body-show='${currentBtnActive.dataset.boardBtnTarget}']`)
            const btn = e.target
            const targetWillShow = $(`[data-board-body-show='${btn.dataset.boardBtnTarget}']`)

            currentBtnActive.classList.remove('active')
            currentTargetShow.classList.add('d-none')
            btn.classList.add('active')
            targetWillShow.classList.remove('d-none')
        }
    },
    async created() {
    },
    async mounted() {
    },
}

// async function timeout(ms) {
//     return new Promise((resolve) => {
//         return setTimeout(resolve, ms)
//     })
// }

// async function temp() {

//     const img = $$('img')

//     let i = 0
//     await timeout(1000)
//         .then()
//     for (let e of img) {
//         console.group('\\\\')
//         e.classList.remove('d-none')
//         console.log(`hiện ${i}`)

//         await timeout(50)
//             .then(() => {
//                 if (e != img[3]) {
//                     e.classList.add('d-none')
//                 }
//                 console.log(`ẩn ${i}`)
//                 console.log('timeout')
//             })

//         if (e == img[3]) await timeout(1000)
//             .then(() => {
//                 e.classList.add('d-none')
//                 img[0].classList.remove('d-none')
//             })
//         console.groupEnd()
//     }
//     console.groupEnd()
// }
</script>

<style>
.background {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
