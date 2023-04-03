<template>
    <section class="position-absolute top-0 start-0 d-flex rounded-end" style="min-width: 16.75rem; height: 5.625rem; background-color: #63a9ec70;">
        <div class="h-100 rounded-circle" :style="`width: 5.625rem; background-image: url(${store.getUser.avatar}); background-repeat: no-repeat; background-size: cover;`"></div>
        <div class="h-100 ms-3">
            <p class="fs-5 fw-semibold mb-0">{{ store && store.user && store.user.name }}</p>
            <p class="fs-6 text-start mb-0">Linh Thạch: {{ stones }}</p>
            <p class="fs-6 text-start"></p>
        </div>
    </section>
    <section class="position-absolute top-0 end-0 d-flex"></section>
</template>

<script>
import { useUserStore } from '@/stores/index'
export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    data() {
        return {
            stones: 0,
        }
    },
    watch: {
        'store.user'() {
            this.store.user.bag.items.forEach(item => {
                if (item.item.name == 'Linh thạch') {
                    this.stones = item.quantity
                }
            });
        },
    },
    created() {
    },
}
</script>
