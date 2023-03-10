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

        <router-link v-if="this.$route.path == '/'" @click.prevent="questsIsShow = true" class="d-inline-flex flex-column align-items-center text-decoration-none" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/sword.png" alt="">
            <p class="text-light fs-6">Phó bản</p>
        </router-link>
        <router-link v-else class="d-inline-flex flex-column align-items-center text-decoration-none" :to="{name: 'home'}">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Về Tông</p>
        </router-link>
    </section>

    <Board :isShow="questsIsShow" index="quests" @closeStatus="() => questsIsShow = false" style="top: -6.67rem;">
        <!-- Header -->
        <section class="border-bottom border-1" style="border-color: #05ffe0 !important; min-width: 600px;">
            <h3 class="fs-5">Chọn Tiểu Thế Giới</h3>
        </section>
        <!-- Body -->
        <section class="text-start px-2" style="min-height: 300px;">
            <template v-for="(e, i) of quests">
                <router-link v-if="store?.getUser?.quests[e.name]" class="d-inline-block mt-2 text-center text-decoration-none" :to="{name: 'quest', params: { idQuest: `${e._id}` }}">
                    <img class="d-inline-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
                    <p class="mb-0 text-light fs-6 text-center" style="width: 70px; height: 52px; overflow: hidden; display: block; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; height: ;">
                        {{ e?.name }}
                    </p>
                </router-link>
            </template>
        </section>
    </Board>

    <ScreenBoard :immortalities="immortalities" v-model:modelIsShow="isShow" v-model:modelIsShowBag="isShowBag"/>
</template>

<script>
import { ScreenBoard, Board, } from '@/util/components.js'
import { useUserStore } from '@/stores/useUserStore'
import {
    UserService,
    QuestService,
} from '@/util/index.js'

export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    components: { ScreenBoard, Board, },
    data() {
        return {
            isShow: false,
            isShowBag: false,
            questsIsShow: false,
            immortalities: [],
            quests: [],
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
        if (this.store.getUser._id) {
            this.immortalities = await UserService.getImmortalities(this.store.getUser._id) || []
        }
        this.quests = await QuestService.getAll()
    },
}
</script>
