<template>
    <Board :isShow="modelIsShow" index="status" @closeStatus="closeBoardStatus" style="top: -6.67rem;">
        <section id="board-status" class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
            <!-- Header -->
            <section class="text-start">
                <button @click.prevent="showTabStatus" data-board-btn-target="character" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Đệ Tử</button>
                
                <button @click.prevent="showTabStatus" data-board-btn-target="training" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Tu Luyện</button>
                
                <button @click.prevent="showTabStatus" data-board-btn-target="embattle" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Dàn Trận</button>
                
                <button @click.prevent="showTabStatus" data-board-btn-target="roll" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Chiêu Mộ</button>

            </section>

            <!-- Body -->
            <!-- Character -->
            <Character /> <!--  @update:modelIndex="displayCharacterIndex" -->

            <!-- Training -->
            <Training />

            <!-- Embattle -->
            <Embattle />

            <!-- Roll -->
            <Roll />
            
        </section>
    </Board>

    <Board :isShow="modelIsShowBag" index="bag" @closeStatus="closeBoardBag" style="top: -6.67rem;">
        <section id="board-bag" class="ms-3 me-5" style="min-width: 300px; max-width: 1000px; min-height: 300px; max-height: 500px;">
            <!-- Header -->
            <section class="text-start">
                <button @click.prevent="showTabStatus" data-board-btn-target="bag" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn active" style="background-color: #1a8fff6e; color: #05eaff;">Túi đồ</button>
                
                <button @click.prevent="showTabStatus" data-board-btn-target="upgrade" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Cường hóa</button>

                <button @click.prevent="showTabStatus" data-board-btn-target="market" class="rounded border-0 px-3 py-1 me-1 fw-semibold board-header-btn" style="background-color: #1a8fff6e; color: #05eaff;">Cửa hàng</button>

            </section>

            <!-- Bag -->
            <Bag :skills="skills" />
            <!-- Upgrade -->
            <Upgrade/>
        </section>
    </Board>
</template>

<script>
import { Board, Bag, Upgrade, Character, Training, Embattle, Roll, } from '@/components/index.js'
export default {
    props: {
        // props v-model modelIsShow and modelIsShowBag 
        // because component ScreenBoard have methods close Board 
        // (it's closeBoardStatus, closeBoardBag)
        modelIsShow: false,
        modelIsShowBag: false,
    },
    emits: ['update:modelIsShow', 'update:modelIsShowBag', ],
    components: { Board, Bag, Upgrade, Character, Training, Embattle, Roll, },
    data() {
        return {}
    },
    methods: {
        showTabStatus(e) {
            // get board is chosen
            const board = e.target.closest('[id*="board-"]')
            // from this board, get btn is currently activating
            const currentBtnActive = $(`#${board.id} .board-header-btn.active`)
            // next from it, get body is currently showing
            const currentTargetShow = 
                $(`[data-board-body-show='${currentBtnActive.dataset.boardBtnTarget}']`)
            // get btn is targeted
            const btn = e.target
            // next from it, get body will show
            const targetWillShow = $(`[data-board-body-show='${btn.dataset.boardBtnTarget}']`)

            currentBtnActive.classList.remove('active')
            currentTargetShow.classList.add('d-none')
            btn.classList.add('active')
            // Show body
            targetWillShow.classList.remove('d-none')
        },
        closeBoardStatus() {
            this.$emit('update:modelIsShow', false)
        },
        closeBoardBag() {
            this.$emit('update:modelIsShowBag', false)
        },
        // actionBoard(type) {
        //     console.log(type)
        //     switch (type) {
        //         case 'character':
        //             const showCharacterBtn = $(`button[data-board-btn-target="character"]`)
        //             showCharacterBtn.click()
        //             this.$emit('update:modelIsShow', false)
        //             break
        //         case 'training':
        //             const showTrainingBtn = $(`button[data-board-btn-target="training"]`)
        //             showTrainingBtn.click()
        //             this.$emit('update:modelIsShow', false)
        //             break
        //         case 'embattle':
        //             const showEmbattleBtn = $(`button[data-board-btn-target="embattle"]`)
        //             showEmbattleBtn.click()
        //             this.$emit('update:modelIsShow', false)
        //             break
        //         case 'bag':
        //             this.$emit('update:modelIsShowBag', false)
        //             break
        //     }

        // },
        // async handleShowCharacter(e) {
            
        //     this.showTabStatus(e)
        // },
        // async handleShowTraining(e) {
            
        //     this.showTabStatus(e)
        // },
        // async handleShowEmbattle(e) {
            
        //     this.showTabStatus(e)
        // },
        // async handleShowBag(e) {
            
        //     this.showTabStatus(e)
        // },
        // async handleShowUpgrade(e) {
            
        //     this.showTabStatus(e)
        // },
    }
}
</script>
