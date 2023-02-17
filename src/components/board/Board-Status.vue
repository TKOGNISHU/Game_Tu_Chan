<template>
    <div :class="`position-absolute top-0 ${(status.index == 7 || status.index == 8 || status.index == 9) && 'end-0'} border bg-secondary mt-5 px-2 rounded board-info`" style="width: 250px; z-index: 10000">
        <h5 class="text-start ps-3 py-1 border-bottom">{{ name }}</h5>
        <div class="row">
            <div class="col-3"></div>
            <div class="col">
                <div class="row align-items-center">
                    <p class="col-1 my-1">HP</p>
                    <p class="col my-1 d-flex align-items-center">
                        <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" :style="`width: ${status.currentHp/status.hp*100}%`" :aria-valuenow="status.currentHp/status.hp*100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </p>
                </div>
                <div class="row align-items-center">
                    <p class="col-1 my-1">MP</p>
                    <p class="col my-1 d-flex align-items-center">
                        <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" :style="`width: ${status.currentMp/status.mp*100}%`" :aria-valuenow="status.currentMp/status.mp*100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, default: 'N/A' },
        status: { type: Object, default: {} }
    },
}
</script>

<style>
.board-info {
    display: none;
}
</style>
