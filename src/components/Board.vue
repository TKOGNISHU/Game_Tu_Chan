<template>
    <section class="position-absolute d-flex align-items-center justify-content-center board">
        <div class="m-auto position-relative bg-board">
            <div style="z-index: 10000;">
                <slot/>
            </div>
            <div class="position-absolute top-0 bottom-0 d-flex flex-column board-background">
                <img @load="loaded" class="w-100 board-background__top" src="@/assets/img/top.svg" alt="">
                <div class="d-flex">
                    <div class="w-100 d-flex board-background__body">
                        <img class="ms-auto h-100" src="@/assets/img/right.svg" alt="">
                    </div>
                </div>
                <img @load="loaded" class="w-100 board-background__bottom" src="@/assets/img/bottom.svg" alt="">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            // width: 1453, //1453
            // height: 875, // 875
            imageLoaded: 0,
        }
    },
    methods: {
        loaded() {
            if (this.imageLoaded < 1) {
                this.imageLoaded ++
                return
            }

            const boardBackground = $('.board-background')
            const boardBackGroundTop = $('.board-background__top')
            const boardBackGroundBottom = $('.board-background__bottom')
            const contentBackgroundBody = $('.board-background__body')

            contentBackgroundBody.style.height = 
                (boardBackground.offsetHeight - boardBackGroundTop.offsetHeight - boardBackGroundBottom.offsetHeight) 
                + 'px'
        }
    },
    mounted() {
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

                <!-- <svg class="w-100" :viewBox="`0 0 ${width} ${height}`" fill="none">
                    <g clip-path="url(#clip0_24_2)"> -->
                        <!-- Rectangle -->
                        <!-- <path fill-rule="evenodd" clip-rule="evenodd"
                            :d="`M0 55 
                                C 0 50 0 45 1 41
                                L 38 2
                                C 43 0 49 0 55 0
                                H 1374
                                C 1367 8 1363 19 1363 31
                                C 1363 58 1385 81 1412 81
                                C 1429 81 1444 72 ${width} 59
                                V 820
                                C ${width} 823 1452 826 1452 829
                                L 1411 873
                                C 1407 874 1402 ${height} 1398 ${height}
                                H 55
                                C 51 ${height} 47 874 43 873
                                L 0 826
                                C 0 824 0 822 0 820
                                V 55 Z`"
                            fill="#66BCED" fill-opacity="0.5" /> -->
                        <!-- Top line -->
                        <!-- <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M 27 14
                                H 1366
                                C 1366 13 1366 12 1367 11
                                V 8
                                H 33
                                L 27 14 Z"
                            fill="#6A87EA" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M 17 25
                                H 1363
                                C 1363 22 1364 20 1364 19
                                H 22.9396
                                L 17 25 Z"
                            fill="#6A87EA" /> -->
                        <!-- Bottom line -->
                        <!-- <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M 1429 854
                                H 25
                                L 31 860
                                H 1423
                                L 1429 854 Z" fill="#6A87EA" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M 1419.97 864
                                H 34
                                L 40 870
                                H 1414
                                L 1419 864 Z" fill="#6A87EA" /> -->
                        <!-- Right line -->
                        <!-- <rect x="1441" y="69" width="6" height="768" fill="#6A87EA" />
                        <rect x="1432" y="76" width="6" height="768" fill="#6A87EA" />
                        <rect x="1422" y="81" width="6" height="774" fill="#6A87EA" /> -->
                    <!-- </g>
                    <defs>
                        <clipPath id="clip0_24_2">
                            <rect :width="`${width}`" :height="`${height}`" fill="white" />
                        </clipPath>
                    </defs>
                </svg> -->