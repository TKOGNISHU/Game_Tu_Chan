<template>
    <!-- Set height from <Avatar style=height: ???"" /> -->
    <div class="position-relative d-inline-block display-status">
        <img :class="`h-100 ${who}-${index}-first`"
                :style="`z-index: 100; ${who == 'defense' && 'transform: scaleX(-1)'}`"
                :src="avatars[avatarType].first" alt="">
        <img :class="`h-100 d-none ${who}-${index}-second`"
                :style="`z-index: 100; ${who == 'defense' && 'transform: scaleX(-1)'}`"
                :src="avatars[avatarType].second" alt="">
        <img :class="`h-100 d-none ${who}-${index}-between`"
                :style="`z-index: 100; ${who == 'defense' && 'transform: scaleX(-1)'}`"
                :src="avatars[avatarType].between" alt="">
        <img :class="`h-100 d-none ${who}-${index}-finally`"
                :style="`z-index: 100; ${who == 'defense' && 'transform: scaleX(-1)'}`"
                :src="avatars[avatarType].finally" alt="">

        <!-- heal -->
        <p :class="`position-absolute bottom-0 fw-bold text-success fs-5
            d-none ${who}__heal-${index} ${who}__number--animation`"
            style="z-index: 10000;">+1000</p>
        <!-- damage -->
        <p :class="`position-absolute bottom-0 fw-bold text-danger fs-5 pt-4
            d-none ${who}__damage-${index} ${who}__number--animation`"
            style="z-index: 10000;">-1000</p>

        <!-- state -->
        <div class="position-absolute top-0" 
            :style="`${who == 'you' ? 'left: -50%;' : 'right: -50%;'} width: 25px; z-index: 1002;`">
            <div v-for="(e, i) in status.states"
                :class="`${states[e].animation} ${who}__state-${e}-${index} d-none`"
                :style="`height: 25px;
                        background-image: url('${states[e].effect}');
                        background-size: cover; background-repeat: no-repeat; ${states[e].style};`"
            ></div>
        </div>
    
        <!-- Status -->
        <BoardStatus :who="who" :index="index" name="Hạo Thiên" :status="status"/>
    </div>
</template>

<script>
import BoardStatus from '@/components/board/Board-Status.vue'

export default {
    components: { BoardStatus, },
    props: {
        status: { type: Object, default: {} },
        avatars: { type: Object, default: {} },
        states: { type: Object, default: {} },
        who: { type: String, default: 'you' },
        index: { type: Number, default: 1},
    },
    data() {
        return {
            avatarType: this.status.avatar
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
    animation: you-number 0.2s linear forwards;
}
.defense__number--animation {
    animation: defense-number 0.2s linear forwards;
}

@keyframes you-number {
    from {
        margin-top: 10px;
        margin-left: 50%;
        opacity: 0;
    }
    to {
        margin-top: 0px;
        margin-left: 0;
        opacity: 1;
    }
}

@keyframes defense-number {
    from {
        margin-top: 10px;
        margin-left: -50%;
        opacity: 0;
    }
    to {
        margin-top: 0px;
        margin-left: 0;
        opacity: 1;
    }
}
</style>
