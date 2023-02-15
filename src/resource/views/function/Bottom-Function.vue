<template>
    <section style="z-index: 100;">
        <router-link v-if="this.$route.path == '/'" class="position-absolute d-inline-flex flex-column align-items-center text-decoration-none" style="bottom: 5%; right: 5%;" to="quest/abc">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Du ngoạn</p>
        </router-link>
        <router-link v-else class="position-absolute d-inline-flex flex-column align-items-center text-decoration-none" style="bottom: 5%; right: 5%;" to="/">
            <img class="d-block border border-2 border-secondary object-fit rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/Ảnh chụp màn hình 2023-01-08 091407123123.png" alt="">
            <p class="text-light fs-6">Về Tông</p>
        </router-link>
    </section>
</template>

<script>
</script>
