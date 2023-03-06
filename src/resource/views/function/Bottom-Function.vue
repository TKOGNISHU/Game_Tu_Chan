<template>
    <section class="position-absolute bottom-0 end-0" style="z-index: 100;">
        <router-link @click.prevent="actionBoard('embattle')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/embattle.png" alt="">
            <p class="text-light fs-6">Trận đồ</p>
        </router-link>

        <router-link @click.prevent="actionBoard('bag')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/bag.png" alt="">
            <p class="text-light fs-6">Túi đồ</p>
        </router-link>

        <router-link @click.prevent="actionBoard('training')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/book.png" alt="">
            <p class="text-light fs-6">Tu luyện</p>
        </router-link>

        <router-link @click.prevent="actionBoard('character')" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/book.png" alt="">
            <p class="text-light fs-6">Đệ tử</p>
        </router-link>

        <router-link v-if="this.$route.path == '/'" class="d-inline-flex flex-column align-items-center text-decoration-none" :to="{name: 'quest', params: { idQuest: 'a' }}">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/sword.png" alt="">
            <p class="text-light fs-6">Phó bản</p>
        </router-link>
        <router-link v-else class="d-inline-flex flex-column align-items-center text-decoration-none" :to="{name: 'home'}">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Về Tông</p>
        </router-link>
    </section>

    <ScreenBoard :immortalities="immortalities" v-model:modelIsShow="isShow" v-model:modelIsShowBag="isShowBag"/>
</template>

<script>
import { ScreenBoard, } from '@/util/components.js'
import { useUserStore } from '@/stores/useUserStore'
import {
    UserService
} from '@/util/index.js'

export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    components: { ScreenBoard, },
    data() {
        return {
            isShow: false,
            isShowBag: false,
            immortalities: [],
        }
    },
    watch: {
        async 'store.user'() {
            this.immortalities = await UserService.getImmortalities(this.store.getUser._id)
            console.log("immortalities: ", this.immortalities)
        },
    },
    methods: {
        actionBoard(type) {
            switch (type) {
                case 'character':
                    const showCharacterBtn = $(`button[data-board-btn-target="character"]`)
                    showCharacterBtn.click()
                    this.isShow = true
                    break
                case 'training':
                    const showTrainingBtn = $(`button[data-board-btn-target="training"]`)
                    showTrainingBtn.click()
                    this.isShow = true
                    break
                case 'embattle':
                    const showEmbattleBtn = $(`button[data-board-btn-target="embattle"]`)
                    showEmbattleBtn.click()
                    this.isShow = true
                    break
                case 'bag':
                    this.isShowBag = true
                    break
            }
        },
    },
    async created() {
        this.immortalities = await UserService.getImmortalities(this.store.getUser._id) || []
    },
}
</script>
