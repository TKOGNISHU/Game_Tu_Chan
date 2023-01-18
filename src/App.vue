<script setup>
import Function from '@/components/Function.vue'
</script>

<template>
    <header>

    </header>

    <main class="bg-dark">
        <Function />
        <section class="position-relative" style="top: -100%; z-index: 1;">
            <router-view />
        </section>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
}
</style>
