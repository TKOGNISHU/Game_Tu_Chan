<template>
    <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
        <button @click="appStore.setShowCharacter(i)" :data-character-btn="i" v-for="(e, i) of immortalities" :class="`w-100 py-1 mb-1 border-0 fw-semibold rounded ${i == appStore.getShowCharacter ? 'active' : ''}`" style="background-color: #006bff99; color: #05eaff;">
            {{ e.name }}
        </button>
    </section>
</template>

<script>
import { useAppStore } from '@/stores/useAppStore'
export default {
    props: {
        immortalities: { type: Array, default: [] },
    },
    setup() {
        const appStore = useAppStore()
        return {
            appStore,
        }
    },
}
</script>
