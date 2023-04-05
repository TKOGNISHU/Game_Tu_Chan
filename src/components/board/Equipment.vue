<template>
    <section data-board-body-show="equipment" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <ListCharacter :immortalities="store.immortalities"/>
        
        <!-- Right -->
        <section class="col">
            <div class="row g-0 h-100">
                <section class="col">
                    <div v-if="wears.length > 0" class="d-flex pb-2 scrollbar scrollbar-horizontal" style="width: 600px; overflow-x: scroll;">
                        <div v-for="(e, i) of wears" :key="`bag-equipments-show-${i}`">
                            <div class="overflow-hidden" style="width: 200px; height: 200px;">
                                <div class="w-100 h-100 card position-relative mx-1 overflow-hidden">
                                    <img :src="`${HTTP_GG_DRIVE}${e.equip.image}`" class="h-100 card-img-top">
                                    <div class="w-100 h-100 card-body position-absolute top-0 overflow-auto scrollbar" style="background-color: #00000020;">
                                        <h6 class="card-title">{{ e.equip.name }}</h6>
                                        <p class="card-text">{{ e.equip.property.type }} {{ e.equip.property.value }}</p>
                                        <a @click.prevent="removeEquip" :data-equip-id="e.equip._id" href="#" class="btn btn-danger">Tháo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="h-100 d-flex align-items-center justify-content-center">Chưa Trang Bị</div>
                </section>
                <section class="col-2 border-start">
                    <!-- Body -->
                    <section class="row g-2 p-1">
                        <template v-for="(value, key, index) in (store.user ? store.user.bag.equipments : [])" :key="`training-bag-equipments-${index}`">
                            <div v-if="value.wearIs == '000000000000000000000000'" class="col-5 me-1 position-relative d-flex align-items-center bag-item" style="height: 40px; background-color: #cccccc80;">
                                <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value ? value.equip?.image : 'ERR'}`" alt="">
                                <div class="d-none p-2 position-absolute top-50 rounded" style="left: 20px; z-index: 100; width: 200px; background-color: #00000060;">
                                    <div>
                                        <p class="overflow-hidden text-light fw-semibold">{{ value && value.equip.name }}</p>
                                    </div>
                                    
                                    <div class="d-flex">
                                        <button @click="equip" :data-equip-id="value.equip._id"
                                            class="d-inline-block rounded me-auto p-1 border-0 overflow-hidden"
                                            style="height: 30px; background-color: #00ddd9cc; color: #fdfefe85;"
                                        >Trang Bị</button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </section>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { ListCharacter, } from '@/components/index.js'
import { useUserStore, useAppStore } from '@/stores'
import { ImmortalityService, UserService } from '@/services'
export default {
    components: { ListCharacter, },
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
            wears: [],
        }
    },
    watch: {
        "appStore.showCharacter"() {
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}

            this.wears = this.store.user.bag.equipments.filter((equipment) => {
                return equipment.wearIs == this.immortality._id
            })
        },
        'store.immortalities'() {
            // console.log("character: ", this.store.immortalities, this.immortality)
            this.immortality = this.store.immortalities[this.appStore.getShowCharacter] || {}
            this.showSkill = ''
            this.newFloorSkill = {}

            this.wears = this.store.user.bag.equipments.filter((equipment) => {
                return equipment.wearIs == this.immortality._id
            })
        },
        "store.user"() {
            this.wears = this.store.user.bag.equipments.filter((equipment) => {
                return equipment.wearIs == this.immortality._id
            })
        },
        immortality() {
            this.wears = this.store.user.bag.equipments.filter((equipment) => {
                return equipment.wearIs == this.immortality._id
            })
        },
    },
    methods: {
        async removeEquip(e) {
            const btn = e.currentTarget
            const id = btn.dataset.equipId
            await UserService.removeEquip(this.store.user._id, id)
            await this.store.refreshUser()
        },
        async equip(e) {
            const btn = e.currentTarget
            const idImmortality = this.immortality._id
            const id = btn.dataset.equipId
            await UserService.equip(this.store.user._id, idImmortality, id)
            await this.store.refreshUser()
        }
    },
}
</script>

<style>

</style>