<template>
    <section class="position-absolute bottom-0 end-0" style="z-index: 100;">
        <router-link @click.prevent="actionBoard" class="d-inline-flex flex-column align-items-center text-decoration-none me-2" to="">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/book.png" alt="">
            <p class="text-light fs-6">Tu luyện</p>
        </router-link>

        <router-link v-if="this.$route.path == '/'" class="d-inline-flex flex-column align-items-center text-decoration-none" to="quest/abc">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/sword.png" alt="">
            <p class="text-light fs-6">Du ngoạn</p>
        </router-link>
        <router-link v-else class="d-inline-flex flex-column align-items-center text-decoration-none" to="/">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Về Tông</p>
        </router-link>
    </section>
</template>

<script>
export default {
    props: {
        isBoardShow: { type: Boolean, default: false },
    },
    methods: {
        actionBoard() {
            this.$emit('actionBoard')
        }
    }
}
</script>
