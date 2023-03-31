<template>
    <section data-board-body-show="embattle" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="store.immortalities"/>

        <!-- Right -->
        <section class="col">
            <div class="row">
                <div class="col-8">
                    <div v-for="(j, index) of [[7, 4, 1], [8, 5, 2], [9, 6, 3]]" :key="`you-key-temp${index}`" class="row g-0">
                        <div v-for="(i, index) of j" :key="`embattle-key-${index}`" :class="`col position-relative border`" style="height: 50px">
                            <div class="position-absolute top-0 bottom-0 start-0 end-0 text-center" style="z-index: 100; opacity: 0.7;">{{ i }}</div>
                            <button
                                @click.prevent="focus" v-if="immortalitiesObject[i]"
                                :data-embattle-index="i"
                                :data-embattle-id="immortalitiesObject[i]._id"
                                :class="`d-block w-100 h-100 ${focusIndex == i ? 'btn-focus' : ''}`"
                                style="z-index: 101; background-color: #ffffff20;"
                            >{{ immortalitiesObject[i].name }}</button>
                            <button
                                @click.prevent="focus" v-else
                                :data-embattle-index="i"
                                :class="`d-block w-100 h-100 ${focusIndex == i ? 'btn-focus' : ''}`"
                                style="z-index: 101; background-color: #ffffff20;"
                            ></button>
                        </div>
                    </div>

                    <div class="mt-3">
                        <button @click.prevent="embattle" class="btn btn-info">Xuất Trận</button>
                        <button @click.prevent="embattle" class="btn btn-danger ms-3">Thu Hồi</button>
                    </div>
                </div>
                <div class="col-4"></div>
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
            immortalitiesObject: {},
            focusIndex: 0,
        }
    },
    watch: {
        'store.immortalities'() {
            let i = 0
            this.immortalitiesObject = this.store.immortalities.reduce((total, e) => {
                if (e.index > 0) {
                    total[e.index] = {
                        ...e,
                        local: i++,
                    }
                }
                return total
            }, {})
        }
    },
    methods: {
        focus(e) {
            const index = e.currentTarget.dataset.embattleIndex
            const id = e.currentTarget.dataset?.embattleId

            this.focusIndex = index
            if (id) {
                this.appStore.setShowCharacter(this.immortalitiesObject[index].local)
            }
        },
        async embattle(e) {
            console.log(this.store.immortalities[this.appStore.getShowCharacter].name)
            await UserService.embattle(
                this.store.user._id,
                this.store.immortalities[this.appStore.getShowCharacter]._id,
                this.focusIndex,
            )
            await this.store.getData()
        }
    }
}
</script>

<style>
.btn-focus {
    border: 2px solid red !important;
    background-color: #00ff4490 !important;
}
</style>
