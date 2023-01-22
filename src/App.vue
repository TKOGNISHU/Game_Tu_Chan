<script setup>
import Function from '@/components/Function.vue'
</script>

<template>
    <main class="text-center bg-dark">
        <section class="position-relative d-inline-block">
            <Function />
            <router-view />
            <!-- <section class="position-relative" style="top: -100%; z-index: 1;">
            </section> -->
        </section>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
}
</style>
