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
            <router-view v-model:modelIsBoardShow="isShow" v-model:modelIsBoardBagShow="isShowBag" name="bottom-function" />
        </section>
            
        <Board :isShow="isShow" index="0" @closeStatus="closeStatus" style="top: -6.67rem;">
            <section id="board-status" class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
                <!-- Header -->
                <section class="text-start">
                    <button @click.prevent="handleShowCharacter" data-board-btn-target="character" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Đệ Tử</button>
                    
                    <button @click.prevent="handleShowTraining" data-board-btn-target="training" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Tu Luyện</button>
                    
                    <button @click.prevent="handleShowEmbattle" data-board-btn-target="embattle" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Dàn Trận</button>
                    
                    <button @click.prevent="handleShowEmbattle" data-board-btn-target="roll" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Chiêu Mộ</button>

                </section>

                <!-- Body -->
                <!-- Character -->
                <Character :immortalities="immortalities"/> <!--  @update:modelIndex="displayCharacterIndex" -->

                <!-- Training -->
                <Training :immortalities="immortalities"/>

                <!-- Embattle -->
                <Embattle :immortalities="immortalities"/>

                <!-- Roll -->
                <Roll :immortalities="immortalities"/>
                
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
                <Bag :skills="skills" />
                <!-- Upgrade -->
                <Upgrade/>
            </section>
        </Board>
    </section>
</template>

<script>
import { Board, Bag, Upgrade, Character, Training, Embattle, Roll } from '@/util/components.js'
import {
    Skill,
    UserService,
    normal_finally,
    heal_1s,
} from '@/util/index.js'
import { useUserStore } from '@/stores/useUserStore'

export default {
    components: { Board, Bag, Upgrade, Character, Training, Embattle, Roll },
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
        // actionBoard(type) {
        //     console.log(type)
        //     switch (type) {
        //         case 'character':
        //             const showCharacterBtn = $(`button[data-board-btn-target="character"]`)
        //             showCharacterBtn.click()
        //             this.isShow = true
        //             break
        //         case 'training':
        //             const showTrainingBtn = $(`button[data-board-btn-target="training"]`)
        //             showTrainingBtn.click()
        //             this.isShow = true
        //             break
        //         case 'embattle':
        //             const showEmbattleBtn = $(`button[data-board-btn-target="embattle"]`)
        //             showEmbattleBtn.click()
        //             this.isShow = true
        //             break
        //         case 'bag':
        //             this.isShowBag = true
        //             break
        //     }

        // },
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
        },
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
            console.log(this.immortalities)

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
