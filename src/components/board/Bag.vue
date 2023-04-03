<template>
    <section data-board-body-show="bag" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2" style="border-color: #05ffe0 !important; width: 800px;">
        <div class="row">
            <div class="col-9">
                <div class="row g-1 overflow-auto scrollbar" style="margin-left: 10px;">
                    <template v-for="(value, index) of (store.user ? store.user.bag.skills : [])" :key="`bag-skills-${index}`">
                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                            <button @click.prevent="showSkill" :data-bag-id="index" class="d-inline-flex align-items-center justify-content-center p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                <img :class="`h-100 w-100 skill-${key}-${i}`" :src="`${HTTP_GG_DRIVE}${value.skill.image}`" alt="">
                            </button>
                        </div>
                    </template>
                    <template v-for="(value, index) of (store.user ? store.user.bag.items : [])" :key="`bag-items-${index}`">
                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                            <button @click.prevent="showItem" :data-bag-id="index" class="d-inline-flex align-items-center justify-content-center p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                <img :class="`h-100 skill-${key}-${i}`" :src="`${HTTP_GG_DRIVE}${value.item.image}`" alt="">
                            </button>
                        </div>
                    </template>
                    <template v-for="(value, index) of (store.user ? store.user.bag.equipments : [])" :key="`bag-equips-${index}`">
                        <div class="d-flex align-items-center me-1" style="height: 34px; width: 34px; background-color: #cccccc80;">
                            <button @click.prevent="showEquip" :data-bag-id="index" class="d-inline-flex align-items-center justify-content-center p-0 border-0 overflow-hidden" style="height: 30px; width: 30px; background-color: #cccccc00;">
                                <img :class="`h-100 skill-${key}-${i}`" :src="`${HTTP_GG_DRIVE}${value.equip.image}`" alt="">
                            </button>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col-3 border-start overflow-auto scrollbar" style="height: 200px; ">
                <template v-if="Object.keys(description).length > 0">
                    <div class="d-flex align-items-center justify-content-center border me-1 overflow-hidden" style="height: 50px; background-color: #cccccc80;">
                        <img :class="`h-100 skill-${key}-${i}`" :src="`${HTTP_GG_DRIVE}${description.image}`" alt="">
                    </div>
                    <div class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Tên</div>
                        <div class="col ps-1">{{ description.name }}</div>
                    </div>
                    <div v-if="description?.description" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Mô Tả</div>
                        <div class="col ps-1">{{ description.description }}</div>
                    </div>
                    <div v-if="description?.type" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Loại</div>
                        <div class="col ps-1">{{ description.type }}</div>
                    </div>
                    <div v-if="description?.quantity" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Số lượng</div>
                        <div class="col ps-1">{{ description.quantity }}</div>
                    </div>
                    <div v-if="description?.durability" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Độ Bền</div>
                        <div class="col ps-1">{{ description.durability }}</div>
                    </div>
                    <div v-if="description?.property?.value" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">{{ description.property.type }}</div>
                        <div class="col ps-1">{{ description.property.value }}</div>
                    </div>
                    <div v-if="description?.requiredLevel" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">Cấp Độ</div>
                        <div class="col ps-1">{{ description.requiredLevel.name }} {{ description.requiredLevel.level }}</div>
                    </div>
                </template>
            </div>

        </div>
    </section>
</template>

<script>
import { HTTP_GG_DRIVE } from '#/env'
import { useUserStore } from '@/stores/index'
export default {
    props: {},
    setup() {
        const store = useUserStore()
        return {
            store,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            description: {},
        }
    },
    watch: {
        'store.user'() {
            console.log("bag", this.store.user)
        }
    },
    methods: {
        showSkill(e) {
            const btn = e.currentTarget
            const skill = this.store.user.bag.skills[btn.dataset.bagId]
            if (skill) {
                this.description = {}
                this.description.image = skill.skill.image
                this.description.name = skill.skill.name
                this.description.description = skill.skill.description
            }
        },
        showItem(e) {
            const btn = e.currentTarget
            const item = this.store.user.bag.items[btn.dataset.bagId]
            if (item) {
                this.description = {}
                this.description.image = item.item.image
                this.description.name = item.item.name
                this.description.description = item.item.description
                this.description.type = item.item.value
                this.description.quantity = item.quantity
            }
        },
        showEquip(e) {
            const btn = e.currentTarget
            const equip = this.store.user.bag.equipments[btn.dataset.bagId]
            if (equip) {
                this.description = {}
                this.description.image = equip.equip.image
                this.description.name = equip.equip.name
                this.description.type = equip.equip.type
                this.description.durability = equip.durability
                this.description.property = equip.equip.property
                this.description.requiredLevel = equip.equip.requiredLevel
            }
        },
    },
    mounted() {},
}
</script>
