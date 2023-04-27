<template>
    <section data-board-body-show="market" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 800px;">
        <div class="col-8 border-end overflow-auto scrollbar" style="height: 200px;">
            <div class="row gx-0">
                <template v-for="(value, index) of (store.market ? store.market : [])" :key="`market-skills-${index}`">
                    <div class="col-2 mt-2">
                        <div class="d-flex flex-column align-items-center me-1" style="width: 64px; background-color: #cccccc80;">
                            <button @click.prevent="show" :data-item-index="index" class="d-inline-flex align-items-center justify-content-center p-0 border-0 overflow-hidden" style="height: 60px; width: 60px; background-color: #cccccc00;">
                                <img :class="`h-100 w-100`" :src="`${HTTP_GG_DRIVE}${value[value.type].image}`" alt="">
                            </button>
                            <p class="mb-0">x {{ value.quantity }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="col-4">
            <div class="overflow-auto scrollbar" style="height: 200px;">
                <template v-if="showIndex != -1">
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
                    <p class="border mt-2 mb-0">Phí Đổi</p>
                    <div v-for="(e, i) of description.prices" :key="`description-prices-${i}`" class="row g-0 border-top border-start">
                        <div class="col-4 ps-1 border-end">{{ e.name }}</div>
                        <div class="col ps-1">{{ e.type }} x {{ e.quantity }}</div>
                    </div>
                    
                </template>
            </div>
            <div>
                <button v-if="store.market[showIndex] && store.market[showIndex].quantity > 0" @click.prevent="buy" class="btn btn-danger">Đổi</button>
                <button v-else @click.prevent="buy" class="btn btn-danger" disabled>Đổi</button>
            </div>
        </div>
        <!-- Toast -->
        <section class="toast-container position-fixed top-0 end-0 p-3">
            <div id="MarketToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body d-flex justify-content-between">
                    {{ message }}
                    <button type="button" class="btn-close text-end" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
import { HTTP_GG_DRIVE, } from '#/env'
import { useUserStore, } from '@/stores/index'
import { MarketService, } from '#/src/services'
export default {
    setup() {
        const store = useUserStore()
        return {
            store,
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            showIndex: -1,
            description: {},
            message: '',
        }
    },
    watch: {
        'store.market'() {
            console.log("bag", this.store.user)
        },
        showIndex() {
            console.log('----- UPDATE INDEX -----')
            const element = this.store.market[this.showIndex]
            const elementShow = element[element.type]

            this.description.type = element.type
            this.description.quantity = element.quantity

            this.description.image = elementShow.image
            this.description.name = elementShow.name
            this.description.description = elementShow.description
            this.description.prices = []

            element.prices.items.forEach(e => {
                this.description.prices.push(this.showItem(e, 'Vật Phẩm'))
            })

            element.prices.equips.forEach(e => {
                this.description.prices.push(this.showItem(e, 'Pháp Khí'))
            })

            element.prices.skills.forEach(e => {
                this.description.prices.push(this.showItem(e, 'Bí Tịch'))
            })
        }
    },
    methods: {
        show(e) {
            const btn = e.currentTarget
            this.showIndex = btn.dataset.itemIndex
        },
        showItem(data, type) {
            const priceInfo = {}
            priceInfo.name = data.data.name
            priceInfo.type = type
            priceInfo.quantity = data.quantity
            return priceInfo
        },
        async buy() {
            if (this.showIndex != -1) {
                const result = await MarketService.buy(this.store.user._id, this.store.market[this.showIndex]._id)

                this.message = result.message

                // Show toast
                const toastLiveExample = document.getElementById('MarketToast')
                const toast = new Toast(toastLiveExample)
                toast.show()
                await this.store.logIn()

                if (this.message == 'Thành Công') {
                    this.description.quantity --
                }

                console.log("buy: ", result)
            }
        }
    },

}
</script>
