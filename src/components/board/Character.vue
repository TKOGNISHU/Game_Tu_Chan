<template>
    <section v-if="store.immortalities" data-board-body-show="character" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="store.immortalities"/>
        <!-- Right -->
        <section class="col">
            <!-- Header -->
            <div class="row">
                <div class="col-2">
                    <div class="m-auto overflow-hidden" style="height: 100px; width: 46px;">
                        <img class="h-100" :src="`${HTTP_GG_DRIVE}${immortality?.effects?.normal || ''}`" alt="">
                    </div>
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
            <!-- Body - skills -->
            <div class="mt-3 row g-1">
                <div class="col-4">
                    <div class="row g-1 overflow-auto scrollbar" style="height: 100px; margin-left: 10px;">
                        <template v-for="(value, key, index) in immortality?.skills" :key="`character-${index}`">
                            <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                <button @click="displayDescription" :data-skill="key" class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                    <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value ? value?.image : 'ERR'}`" alt="">
                                </button>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="col">
                    <div class="row g-1 overflow-auto rounded px-2 scrollbar" style="height: 100px; margin-left: 10px; background-color: #cccccc50;">
                        <p class="fw-semibold">{{ description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { ListCharacter } from '@/components/index.js'
import { useUserStore, useAppStore } from '@/stores/index'
export default {
    components: { ListCharacter, },
    props: {},
    setup() {
        const store = useUserStore()
        const appStore = useAppStore()
        return {
            store,
            appStore,
        }
    },
    data() {
        return {
            immortality: {},
            HTTP_GG_DRIVE,
            description: '', //immortality.skills ? immortality.skills['Hỏa Cầu'].description : ''
        }
    },
    watch: {
        "appStore.showCharacter"() {
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}
            this.description = ''
        },
        'store.immortalities'() {
            console.log("character: ", this.store.immortalities, this.immortality)
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}
            this.description = ''
        },
    },
    methods: {
        displayDescription(e) {
            const key = e.currentTarget.dataset.skill
            this.description = this.immortality.skills[key].description
        },
    },
    async created() {},
    async mounted() {
        // console.log("character: ", this.store.immortalities, this.immortality)
    }
}
</script>
