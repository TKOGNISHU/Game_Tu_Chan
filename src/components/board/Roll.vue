<template>
    <section data-board-body-show="roll" class="mt-1 mb-5 pt-1 text-start border-top border-1 row gx-2 d-none" style="border-color: #05ffe0 !important; width: 900px;">
        <!-- Left -->
        <section class="col-2 border-end border-1 overflow-auto scrollbar" style="height: 200px; border-color: #05beffcc !important;">
            <button v-for="(e, i) of immortalities" class="w-100 py-1 mb-1 border-0 fw-semibold rounded" style="background-color: #006bff99; color: #05eaff;">
                {{ e.name }}
            </button>
        </section>
    </section>
</template>

<script>
export default {
    props: {
        immortalities: { type: Array, default: [] },
    }
}
</script>
