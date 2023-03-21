<template>
    <!-- Set height from <Avatar style=height: ???"" /> -->
    <div class="h-100 position-relative d-inline-block display-status" style=" width: 50px;">
        <div class="w-100 overflow-hidden position-absolute" style="height: 100px;">
            <div
                :class="`h-100 ${status.who}-${status.indexABS}-normal`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${loadingAvatars.normal ? loadingAvatars.normal : ''}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
            <div
                :class="`h-100 ${avatars && avatars[avatarType] && avatars[avatarType]['chanting'].animation} ${status.who}-${status.indexABS}-chanting d-none`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${loadingAvatars.chanting ? loadingAvatars.chanting : ''}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
            <div
                :class="`h-100 ${avatars && avatars[avatarType] && avatars[avatarType]['chantingFinish'].animation} ${status.who}-${status.indexABS}-chantingFinish d-none`"
                :style="`z-index: 100; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${loadingAvatars.chantingFinish ? loadingAvatars.chantingFinish : ''}');
                        background-size: cover; background-repeat: no-repeat;`"
            ></div>
        </div>

        <!-- heal -->
        <p :class="`position-absolute bottom-0 fw-bold text-success fs-5
            d-none ${status.who}__heal-${status.indexABS} ${status.who}__number--animation`"
            style="z-index: 10000;">+0</p>
        <!-- damage -->
        <p :class="`position-absolute bottom-0 fw-bold text-danger fs-5 pt-4
            d-none ${status.who}__damage-${status.indexABS} ${status.who}__number--animation`"
            style="z-index: 10000;">-0</p>

        <!-- state -->
        <div class="position-absolute top-0" 
            :style="`${status.who == 'you' ? 'left: -50%;' : 'right: -50%;'} width: 25px; z-index: 1002;`">
            <div v-for="(value, key, i) in states" :key="`you-state-${i}-state`"
                :class="`${states[key] && states[key]?.animation} ${status.who}__state-${key.replace(/ /g, '-')}-${status.indexABS} d-none`"
                :style="`height: 25px; ${status.who == 'defense' && 'transform: scaleX(-1)'};
                        background-image: url('${loadingStates[key] ? loadingStates[key]: ''}');
                        background-size: cover; background-repeat: no-repeat; ${states[key].style};`"
            ></div>
        </div>
    
        <!-- Status -->
        <BoardStatus name="Hạo Thiên" :status="status"/>
    </div>
</template>

<script>
import BoardStatus from '@/components/board/Board-Status.vue'
import { HTTP_GG_DRIVE } from '#/env'

import Immortality from '@/util/Immortality.js'

import { loadImage } from '@/util/index'

export default {
    components: { BoardStatus, },
    props: {
        status: { type: Immortality, default: new Immortality({}) },
        avatars: { type: Object, default: {} },
        states: { type: Object, default: {} },
    },
    emits: [ 'update:loaded', ],
    setup() {
        return {
            HTTP_GG_DRIVE,
        }
    },
    data() {
        return {
            notify: { index: 0 },
            avatarType: this.status.avatar,
            loadingAvatars: {},
            loadingStates: {},
        }
    },
    watch: {
        'notify.index'() {
            this.$emit('update:loaded')
        }
    },
    methods: {
    },
    mounted() {
        Object.keys(this.avatars[this.avatarType]).forEach(key => {
            if (key == 'normal') {
                loadImage(this.loadingAvatars, key, `${this.HTTP_GG_DRIVE}${this.avatars[this.avatarType][key]}`, this.notify)
            } else {
                loadImage(this.loadingAvatars, key, `${this.HTTP_GG_DRIVE}${this.avatars[this.avatarType][key].effect}`, this.notify)
            }
        })

        Object.keys(this.states).forEach(key => {
            loadImage(this.loadingStates, key, `${this.HTTP_GG_DRIVE}${this.states[key].effect}`, this.notify)
        })
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
