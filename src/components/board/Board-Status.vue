<template>
    <div :class="`position-absolute top-0 ${(index == 7 || index == 8 || index == 9) && 'end-0'} border bg-secondary mt-5 px-2 rounded board-info`" style="width: 250px; z-index: 10000">
        <h5 class="text-start ps-3 py-1 border-bottom">{{ name }}</h5>
        <div class="row">
            <div class="col-3"></div>
            <div class="col">
                <div class="row align-items-center">
                    <p class="col-1 my-1">HP</p>
                    <p class="col my-1 d-flex align-items-center">
                        <input class="w-100" type="range" name="" id="" :value="status.currentHp/status.hp*100">
                    </p>
                </div>
                <div class="row align-items-center">
                    <p class="col-1 my-1">MP</p>
                    <p class="col my-1 d-flex align-items-center">
                        <input class="w-100" type="range" name="" id="" :value="status.currentMp/status.mp*100">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: { type: Number, default: 1 },
        name: { type: String, default: 'N/A' },
        status: { type: Object, default: {
            hp: { type: Number, default: 9999 },
            mp: { type: Number, default: 9999 },
            currentHp: { type: Number, default: 0 },
            currentMp: { type: Number, default: 0 },
        }}
    },
}
</script>

<style>
.board-info {
    display: none;
}
</style>
