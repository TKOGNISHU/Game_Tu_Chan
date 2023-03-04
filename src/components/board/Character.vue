<template>
    <section v-if="immortalities" data-board-body-show="character" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 900px;">
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
                        <img class="h-100" :src="`${HTTP_GG_DRIVE}${immortalities[0] ? immortalities[0].effects.normal : ''}`" alt="">
                    </div>
                </div>
                <div class="col-4 overflow-auto rounded px-2 py-1 scrollbar" style="height: 100px; margin-left: 10px; background-color: #cccccc50;">
                    <p v-if="immortality" class="m-0 ms-1 p-0">HP: <span class="fw-semibold">{{ immortality.currentlyHP }}/{{ immortality.hp }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">MP: <span class="fw-semibold">{{ immortality.currentlyMP }}/{{ immortality.mp }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Công Vật Lý: <span class="fw-semibold">{{ immortality.ATK }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Sát Thương Phép: <span class="fw-semibold">{{ immortality.INT }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Phòng Thủ: <span class="fw-semibold">{{ immortality.DEF }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Thần Thức: <span class="fw-semibold">{{ immortality.ACC }}</span></p>
                    <p v-if="immortality" class="m-0 ms-1 p-0">Thân Pháp: <span class="fw-semibold">{{ immortality.AGI }}</span></p>
                </div>
            </div>
            <!-- Body - skills -->
            <div class="mt-3 row g-1">
                <div class="col-4">
                    <div class="row g-1 overflow-auto scrollbar" style="height: 100px; margin-left: 10px;">
                        <template v-for="(value, key, index) in immortality.skills">
                            <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                                <button @click="displayDescription" :data-skill="key" class="d-inline-block p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                    <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value.floor ? value.floor.effects.image : 'ERR'}`" alt="">
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
import { useUserStore } from '@/stores/useUserStore'
import { HTTP_GG_DRIVE } from '../../../env'
export default {
    props: {
        immortalities: { type: Array, default: [] },
        immortality: { type: Object, default: {} },
    },
    setup() {
        const store = useUserStore()
        return {
            getUser: () => store.getUser,
        }
    },
    data() {
        return {
            HTTP_GG_DRIVE,
            description: '', //immortality.skills ? immortality.skills['Hỏa Cầu'].description : ''
        }
    },
    methods: {
        displayDescription(e) {
            const key = e.currentTarget.dataset.skill
            this.description = this.immortality.skills[key].description
        }
    },
    async created() {},
    async mounted() {
        console.log(this.immortalities, this.immortality.skills)
    }
}
</script>
