<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img class="" style="height: 100vh;" src="@/assets/img/hinh-anh-may-tuyet-dep(1).jpg" alt="">
        </section>

        <!--  -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10;">
            <router-view name="header-function" />
    
            <router-link to="/quest/abc/a/fight">
                <img style="width: 50px;" src="@/assets/img/nam-tu-si/nam_tu_si_no_background.png" alt="">
            </router-link>
    
            <router-view name="bottom-function" />
        </section>

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
