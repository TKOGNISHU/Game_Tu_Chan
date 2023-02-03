<template>
    <section :class="`position-absolute d-flex align-items-center justify-content-center board ${show()}`">
        <div class="d-flex flex-column align-items-center m-auto position-relative bg-board" style="margin-top: -16px;">
            <div class="board-content" style="z-index: 10000;">
                <div class="w-100 d-flex align-items-center justify-content-center" style="margin-top: 16px;">
                    <svg height="10px"> <!--  :viewBox="`0 0 ${vx}`" -->
                        <rect x="8" y="4" width="400" height="2" fill="#2656FB" fill-opacity="0.48"/>
                        <circle cx="5" cy="5" r="5" fill="#2656FB" fill-opacity="0.48"/>
                    </svg>

                    <img style="width: 20px; margin-left: -8px;" src="@/assets/img/board/top-center-right-circle.svg" alt="">
                </div>
                <slot />
            </div>
            <div class="position-absolute top-0 d-flex flex-column">
                <svg :width="`${vx}px`" :height="`${vy == 0 ? 0 : vy}px`" :viewBox="`0 0 ${vx} ${vy == 0 ? 0 : vy}`" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Background 1453 875 -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 13.37} 0
                            L ${vx} 15.1327 V ${vy == 0 ? 0 : vy - 19.547}
                            L ${vx - 13.25} ${vy == 0 ? 0 : vy} H 14.8116
                            L 0 ${vy == 0 ? 0 : vy - 19.209} V 15.8729
                            L 14.0796 0 Z`"
                        fill="#66BCED" fill-opacity="0.5" />
                    <!-- Top line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M 8.8 6
                            H ${vx - 44} V 2
                            H 12.6 Z`"
                        fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        :d="`M 1.8 14
                            H ${vx - 40} V 10
                            H 5.4 Z`"
                        fill="#6A87EA" />
                    <!-- Bottom line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 3.8} ${vy == 0 ? 0 : vy - 14}
                            H 4
                            L 7.4 ${vy == 0 ? 0 : vy - 10} H ${vx - 6.5} Z`" fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 8} ${vy == 0 ? 0 : vy - 8}
                            H 8.8
                            L 12 ${vy == 0 ? 0 : vy - 4} H ${vx - 10.61} Z`" fill="#6A87EA" />
                    <!-- Right line -->
                    <rect :x="vx - 11" y="100" width="4" :height="vy == 0 ? 0 : vy - 132" fill="#6A87EA" />
                    <rect :x="vx - 21" y="100" width="4" :height="vy == 0 ? 0 : vy - 132" fill="#6A87EA" />
                    <rect :x="vx - 31" y="100" width="4" :height="vy == 0 ? 0 : vy - 132" fill="#6A87EA" />
                    <!-- Group bottom right -->
                    <rect :x="vx - 30" :y="vy == 0 ? 0 : vy - 36" width="30" height="4" fill="#6A87EA" />
                    <rect :x="vx - 30" :y="vy == 0 ? 0 : vy - 36" width="4" height="30" :transform="`rotate(43.2187 ${vx - 30} ${vy == 0 ? 0 : vy - 36})`"
                        fill="#6A87EA" />
                    <!-- Group bottom left -->
                    <rect width="30" height="4" :transform="`matrix(1 0 0 1 0 ${vy == 0 ? 0 : vy - 36})`" fill="#6A87EA" />
                    <rect width="4" height="32" :transform="`matrix(-0.728745 0.684785 0.684785 0.728745 30 ${vy == 0 ? 0 : vy - 36})`"
                        fill="#6A87EA" />
                    <!-- Group top right -->
                        <!-- 1 -->
                        <rect :x="vx - 65" y="87" width="65" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${vx - 98} 68.2593
                                L ${vx - 62.58} 87.8649
                                V 87.8649 C ${vx - 63.12} 88.8313 ${vx - 64.33} 89.181 ${vx - 65.3} 88.6461
                                L ${vx - 98.97} 70.0091
                                L ${vx - 98} 68.2593 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${vx - 132.03} 35
                                L ${vx - 96.85} 54.473
                                L ${vx - 98}.18 56.2228
                                L ${vx - 133} 36.7498
                                L ${vx - 132.03} 35 Z`" fill="#06A5FE"
                            fill-opacity="0.5" />
                        <path :d="`M ${vx - 99} 70 V 54.5 H ${vx - 97} V70 H ${vx - 99} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- 2 -->
                        <rect :x="vx - 69" y="90" width="69" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${vx - 103} 71.2598
                                L ${vx - 66.58} 90.865
                                V 90.865 C ${vx - 67.12} 91.8314 ${vx - 68.33} 92.1812 ${vx - 70} 91.6462
                                L ${vx - 102.97} 73.0096
                                L ${vx - 103} 71.2598 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${vx - 136.68} 39.9068 C ${vx - 136.11} 38.971 ${vx - 134.89} 38.672 ${vx - 133.96} 39.239
                                L ${vx - 103}.82 59.097
                                L ${vx - 102.21} 60.7914
                                L ${vx - 136.68} 39.9068
                                V 39.9068 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path :d="`M ${vx - 103} 73 V 59 H ${vx - 101} V 73 H ${vx - 103} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- Vòng tròn -->
                        <path
                            :d="`M ${vx - 132} 34.5
                                C ${vx - 132}          37.5376         ${vx - 134.46}         40              ${vx - 137.5}      40
                                C ${vx - 140.54}       40              ${vx - 143}            37.5376         ${vx - 143}        34.5
                                C ${vx - 143}          31.4624         ${vx - 140.54}         29              ${vx - 137.5}      29
                                C ${vx - 134.46}       29              ${vx - 132}            31.4624         ${vx - 132}        34.5 Z
                               M ${vx - 142.4} 34.5
                                C ${vx - 142.4}        37.2082         ${vx - 140.21}         39.4037         ${vx - 137.5}      39.4037
                                C ${vx - 134.79}       39.4037         ${vx - 132.6}          37.2082         ${vx - 132.6}      34.5
                                C ${vx - 132.6}        31.7918         ${vx - 134.79}         29.5963         ${vx - 137.5}      29.5963
                                C ${vx - 140.21}       29.5963         ${vx - 142.4}          31.7918         ${vx - 142.4}      34.5 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <!-- circle top right -->
                        <circle :cx="vx - 137.5" cy="34.5" r="1.5" fill="#06A5FE" fill-opacity="0.5" />
                    <!-- ##################### -->

                    <!-- Group top left #No-change -->
                    <rect x="30" y="30" width="30" height="4" transform="rotate(-180 30 30)" fill="#6A87EA" />
                    <rect x="30" y="30" width="4" height="24" transform="rotate(-136.781 30 30)"
                        fill="#6A87EA" />
                </svg>

                <router-link @click="$emit('closeStatus')" class="position-absolute d-flex align-items-center text-decoration-none rounded-circle" :style="`width: 50px; height: 50px; top: -3%; right: -3%; background-image: url('${background}'); background-size: 100%; z-index: 10000;`" to="">
                    <span class="w-100 fw-bold" style="margin-top: -2px;">X</span>
                </router-link>

            </div>
        </div>

    </section>
</template>

<script>
import background from '@/assets/img/board/circle.svg'

export default {
    props: {
        isShow: { type: Boolean, default: true },
    },
    data() {
        return {
            vx: 0,
            vy: 0,
        }
    },
    computed: {
        background() {
            return background
        }
    },
    methods: {
        show() {
            if (!this.isShow) {
                return 'd-none'
            }
            
            return ''
        },
        load() {
            const boardBackground = $('.board-content')
            this.vx = boardBackground.offsetWidth
            this.vy = boardBackground.offsetHeight
        }
    },
    mounted() {
        this.load()
    }
}
</script>

<style>
:root {
    --board-z-index: 1000;
}

.board {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: var(--board-z-index);
}

.board-background__body {
    background-color: #64b9e982
}
</style>
