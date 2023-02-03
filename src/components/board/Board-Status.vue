<template>
    <div class="position-absolute top-0 border bg-secondary mt-5 px-2 rounded board-info" style="width: 250px; z-index: 10000">
        <h5 class="text-start ps-3 py-1 border-bottom">{{ name }}</h5>
        <div class="row">
            <div class="col-3"></div>
            <div class="col">
                <div class="row align-items-center">
                    <p class="col-1 my-1">HP</p>
                    <p class="col my-1 d-flex align-items-center"><input class="w-100" type="range" name="" id=""></p>
                </div>
                <div class="row align-items-center">
                    <p class="col-1 my-1">MP</p>
                    <p class="col my-1 d-flex align-items-center"><input class="w-100" type="range" name="" id=""></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, default: 'N/A' },
        hp: { type: Number, default: 100 },
        mp: { type: Number, default: 100 },
    }
}
</script>

<style>
.board-info {
    display: none;
}
</style>
