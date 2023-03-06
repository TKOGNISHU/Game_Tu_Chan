<template>
    <section class="position-absolute top-0 start-0 d-flex rounded-end" style="min-width: 16.75rem; height: 5.625rem; background-color: #63a9ec70;">
        <div class="h-100 rounded-circle" :style="`width: 5.625rem; background-image: url(${user.avatar}); background-repeat: no-repeat; background-size: cover;`"></div>
        <div class="h-100 ms-3">
            <p class="fs-5 fw-semibold mb-0">{{ user.name }}</p>
            <p class="fs-6 fw-semibold text-start mb-0">{{ user.name }}</p>
            <p class="fs-6 fw-semibold text-start">{{ user.name }}</p>
        </div>
    </section>
    <section class="position-absolute top-0 end-0 d-flex"></section>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore.js'
export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    data() {
        return {
            user: this.store.getUser || {},
        }
    },
    watch: {
        'store.user'() {
            this.user = this.store.getUser
        },
    },
    created() {
    },
}
</script>
