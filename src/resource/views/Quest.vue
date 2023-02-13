<template>
    <section class="h-100 text-center background">
        <router-view name="header-function" />

        <router-link to="/quest/abc/a/fight">
            <img style="width: 50px;" src="@/assets/img/nam-tu-si/nam_tu_si_no_background.png" alt="">
        </router-link>

        <router-view name="bottom-function" />
    </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
