<template>
    <!--  :style="`background-image: url('${background}');`" -->
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep(1).jpg" alt="">
        </section>

        <!--  -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <!-- Header -->
            <router-view name="header-function" :user="getUser()"/>

            <!-- Bottom -->
            <router-view
                @train="actionBoard" @bag="actionBoard" @embattle="actionBoard"
                :isBoardShow="isShow" name="bottom-function" />
        </section>
            
        <Board :isShow="isShow" index="0" @closeStatus="closeStatus" style="top: -6.67rem;">
            <section id="board-status" class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
                <!-- Header -->
                <section class="text-start">
                    <button @click.prevent="handleShowCharacter" data-board-btn-target="character" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Nhân Vật</button>
                    
                    <button @click.prevent="handleShowTraining" data-board-btn-target="training" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Tu Luyện</button>
                    
                    <button @click.prevent="handleShowEmbattle" data-board-btn-target="embattle" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Dàn Trận</button>
                    
                    <button @click.prevent="handleShowEmbattle" data-board-btn-target="roll" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Chiêu mộ</button>

                </section>

                <!-- Body -->
                <!-- Character -->
                <section data-board-body-show="character" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 900px;">
                    <!-- Left -->
                    <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
                        <button v-for="(e, i) of immortalities" class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            {{ e.name }}
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

                <!-- Roll -->
                <section data-board-body-show="roll" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
                    <!-- Left -->
                    <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
                        <button v-for="(e, i) of immortalities" class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                            {{ e.name }}
                        </button>
                    </section>
                </section>
                
            </section>
        </Board>

        <Board :isShow="isShowBag" index="1" @closeStatus="closeBag" style="top: -6.67rem;">
            <section id="board-bag" class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
                <!-- Header -->
                <section class="text-start">
                    <button @click.prevent="handleShowBag" data-board-btn-target="bag" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Túi đồ</button>
                    
                    <button @click.prevent="handleShowUpgrade" data-board-btn-target="upgrade" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Cường hóa</button>
                    
                </section>

                <!-- Bag -->
                <section data-board-body-show="bag" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 600px;">
                    
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
                </section>

                <!-- Upgrade -->
                <section data-board-body-show="upgrade" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 600px;">
                </section>
            </section>
        </Board>
    </section>
</template>

<script>
import { Board } from '@/util/components.js'
import {
    Skill,
    UserService,
    normal_finally,
    heal_1s,
} from '@/util/index.js'
import { useUserStore } from '@/stores/useUserStore'

export default {
    components: { Board,  },
    setup() {
        const store = useUserStore()
        return {
            store,
            logIn: store.logIn,
            logOut: store.logOut,
            getUser: () => store.getUser,
        }
    },
    data() {
        return {
            isShow: false,
            isShowBag: false,
            board: {
                show: 'character-btn',
            },
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
    methods: {
        closeStatus() {
            this.isShow = false
        },
        closeBag() {
            this.isShowBag = false
        },
        actionBoard(type) {
            switch (type) {
                case 'bag':
                    this.isShowBag = true
                    break
                default:
                    this.isShow = true
                    break
            }

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
        async handleShowBag(e) {
            
            this.showBoard(e)
        },
        async handleShowUpgrade(e) {
            
            this.showBoard(e)
        },
        showBoard(e) {
            const board = e.target.closest('[id*="board-"]')
            const currentBtnActive = $(`#${board.id} .board-header-btn.active`)
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
        // login
        try {
            await this.logIn()
            // await this.logOut()
            if (!this.getUser()) {
                return this.$router.push({ name: 'login' })
            }

            this.immortalities = await UserService.getImmortalities(this.getUser()._id)
        } catch (e) {
            this.$router.push({ name: 'login' })
        }
    },
    async mounted() {},
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
