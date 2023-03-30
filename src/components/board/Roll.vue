<template>
    <section data-board-body-show="roll" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="store.immortalities"/>

        <!-- Right -->
        <section class="col">
            <div class="row">
                <div class="col-2">
                    <div class="m-auto overflow-hidden" style="height: 100px; width: 46px;">
                        <img class="h-100" :src="`${HTTP_GG_DRIVE}${immortality?.effects?.normal || ''}`" alt="">
                    </div>
                    <div class="m-auto">{{ immortality && immortality?.name }}</div>
                    <div class="m-auto">
                        <span class="d-block fs-6 fw-semibold" style="color: #84e1f0;">{{ immortality?.level?.name }}</span>
                        <span class="d-block fs-6 fw-semibold" style="color: #84e1f0;">{{ immortality?.level?.level }}</span>
                    </div>
                </div>
                <div class="col-4 overflow-auto rounded px-2 py-1 scrollbar" style="height: 100px; margin-left: 10px; background-color: #cccccc50;">
                    <p v-if="immortality" class="m-0 ms-1 p-0">HP: <span class="fw-semibold">{{ immortality?.currentStatus?.HP }}/{{ immortality?.status?.HP }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">MP: <span class="fw-semibold">{{ immortality?.currentStatus?.MP }}/{{ immortality?.status?.MP }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Công Vật Lý: <span class="fw-semibold">{{ immortality?.status?.ATK }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Sát Thương Phép: <span class="fw-semibold">{{ immortality?.status?.INT }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Phòng Thủ: <span class="fw-semibold">{{ immortality?.status?.DEF }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Thần Thức: <span class="fw-semibold">{{ immortality?.status?.ACC }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Thân Pháp: <span class="fw-semibold">{{ immortality?.status?.AGI }}</span></p>
                </div>
            </div>

            <div class="">
                <button 
                    @click.prevent="findImmortality"
                    class="d-inline-block ms-auto rounded border-0 px-3 py-1 me-1 fw-semibold"
                    style="background-color: #ff1a1a6e; color: #fdfefe85;"
                >Tìm Kiếm</button>
                <button v-if="Object.keys(immortality).length > 0"
                    @click.prevent="addImmortality"
                    class="d-inline-block ms-auto rounded border-0 px-3 py-1 me-1 fw-semibold"
                    style="background-color: #ff1a1a6e; color: #fdfefe85;"
                >Chiêu Mộ</button>
            </div>
        </section>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { ListCharacter } from '@/components/index.js'
import { useUserStore, useAppStore } from '@/stores'
import { ImmortalityService, UserService } from '@/services'
export default {
    components: { ListCharacter, },
    props: {
        immortalities: { type: Array, default: [] },
    },
    setup() {
        const store = useUserStore()
        const appStore = useAppStore()
        return {
            store,
            appStore,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            immortality: {},
        }
    },
    methods: {
        async findImmortality() {
            try {
                this.immortality = await ImmortalityService.create()
                console.log(this.immortality)
            } catch (error) {
                console.log(error)
            }
        },
        async addImmortality() {
            await UserService.enlist(this.store.user._id, this.immortality._id)
            await this.store.getData()
            this.immortality = {}
        },
    }
}
</script>
