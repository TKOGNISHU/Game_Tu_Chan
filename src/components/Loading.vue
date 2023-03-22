<template>
    <section class="position-fixed d-flex flex-column top-0 bottom-0 start-0 end-0"
        style="background-color: #5a5a5a; z-index: 9999;">
        <div class="m-auto">
            <p class="m-auto text-light">{{ (process/total*100).toFixed(2) }}%</p>
            <div class="position-relative m-auto overflow-hidden rounded-3 bg-light" style="width: 500px; height: 10px;">
                <div class="position-absolute rounded-3 bg-danger" :style="`width: 500px; height: 10px; left: ${process/total * 500 - 500}px;`"></div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    props: {
        process: { type: String, default: '0' },
        total: { type: String, default: '1' }
    },
    mounted() {},
}
</script>

<style>

</style>