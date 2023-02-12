<template>
    <!-- Set height from <Avatar style=height: ???"" /> -->
    <div class="h-100 position-relative d-inline-block display-status" style=" width: 50px;">
        <div class="w-100 position-absolute" style="height: 100px;">
            <div
                :class="`h-100 ${status.who}-${status.indexABS}-normal`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${avatars[avatarType]['chanting-normal'].effect}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
            <div
                :class="`h-100 ${avatars[avatarType]['chanting-normal'].animation} ${status.who}-${status.indexABS}-chanting d-none`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${avatars[avatarType]['chanting-normal'].effect}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
            <div
                :class="`h-100 ${avatars[avatarType]['chantingFinish-normal'].animation} ${status.who}-${status.indexABS}-chantingFinish d-none`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${avatars[avatarType]['chantingFinish-normal'].effect}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
        </div>

        <!-- heal -->
        <p :class="`position-absolute bottom-0 fw-bold text-success fs-5
            d-none ${status.who}__heal-${status.indexABS} ${status.who}__number--animation`"
            style="z-index: 10000;">+1000</p>
        <!-- damage -->
        <p :class="`position-absolute bottom-0 fw-bold text-danger fs-5 pt-4
            d-none ${status.who}__damage-${status.indexABS} ${status.who}__number--animation`"
            style="z-index: 10000;">-1000</p>

        <!-- state -->
        <div class="position-absolute top-0" 
            :style="`${status.who == 'you' ? 'left: -50%;' : 'right: -50%;'} width: 25px; z-index: 1002;`">
            <div v-for="(e, i) in status.states"
                :class="`${states[e].animation} ${status.who}__state-${e}-${status.indexABS} d-none`"
                :style="`height: 25px;
                        background-image: url('${states[e].effect}');
                        background-size: cover; background-repeat: no-repeat; ${states[e].style};`"
            ></div>
        </div>
    
        <!-- Status -->
        <BoardStatus name="Hạo Thiên" :status="status"/>
    </div>
</template>

<script>
import BoardStatus from '@/components/board/Board-Status.vue'

import Immortality from '@/util/Immortality.js'

export default {
    components: { BoardStatus, },
    props: {
        status: { type: Immortality, default: new Immortality({}) },
        avatars: { type: Object, default: {} },
        states: { type: Object, default: {} },
    },
    data() {
        return {
            avatarType: this.status.avatar,
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style>
.you__number--animation {
    animation: 
        you-number 0.2s linear forwards;
}
.defense__number--animation {
    animation: 
        defense-number 0.2s linear forwards;
}
</style>
