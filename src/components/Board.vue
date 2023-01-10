<template>
    <section class="position-absolute d-flex align-items-center justify-content-center board">
        <div class="m-auto position-relative bg-board">
            <div style="z-index: 10000;">
                <slot />
            </div>
            <div class="position-absolute top-0 d-flex flex-column board-background">
                <!-- <img @load="loaded" class="w-100 board-background__top" src="@/assets/img/top.svg" alt="">
                <div class="d-flex">
                    <div class="w-100 d-flex board-background__body">
                        <img class="ms-auto h-100" src="@/assets/img/right.svg" alt="">
                    </div>
                </div>
                <img @load="loaded" class="w-100 board-background__bottom" src="@/assets/img/bottom.svg" alt=""> -->

                <!-- <svg width="1453" height="875" viewBox="0 0 1453 875" fill="none">
                    <g clip-path="url(#clip0_24_2)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            :d="`M 0 55
                            ${/** C x1 y1, x2 y2, x y*/''}
                            C 0        50.163   0.624398 45.4719 1.79699 41.0028
                            ${/** L x y */''}
                            L 38.8951  2.39548
                            C 43.9887  0.837986 49.3965  0       55      0
                            ${/** H x */''}
                            H 1374.31
                            C 1367.25  8.55847  1363     19.5333 1363    31.5
                            C 1363     58.8381  1385.16  81      1412.5  81
                            C 1429.24  81       1444.04  72.689  1453    59.9677
                            ${/** V y */''}
                            V 820
                            C 1453     823.168  1452.73  826.274 1452.22 829.295
                            L 1411.24  873.396
                            C 1407     874.444  1402.56  875     1398    875
                            H 55
                            C 51.1501  875      47.3926  874.604 43.766  873.852
                            L 0.341845 826.167
                            C 0.115982 824.142  0        822.085 0       820
                            V 55 Z`"
                            fill="#66BCED" fill-opacity="0.5" />
                        !-- top line --
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M27.7442 14H1366.18C1366.44 13.3174 1366.71 12.642 1367 11.9742V8H33.5096L27.7442 14Z"
                            fill="#6A87EA" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.1742 25H1363.42C1363.69 22.9582 1364.08 20.9556 1364.59 19H22.9396L17.1742 25Z"
                            fill="#6A87EA" />
                        !-- bottom line --
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1429.26 854H25.6881L31.152 860H1423.69L1429.26 854Z" fill="#6A87EA" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1419.97 864H34.7946L40.2584 870H1414.39L1419.97 864Z" fill="#6A87EA" />
                        !-- right line --
                        <rect x="1441" y="69" width="6" height="768" fill="#6A87EA" />
                        <rect x="1432" y="76" width="6" height="768" fill="#6A87EA" />
                        <rect x="1422" y="81" width="6" height="774" fill="#6A87EA" />
                    </g>
                    <defs>
                        <clipPath id="clip0_24_2">
                            <rect width="1453" height="875" fill="white" />
                        </clipPath>
                    </defs>
                </svg> -->

                <svg :width="vx" :height="vy" :viewBox="`0 0 ${vx} ${vy}`" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Background 1453 875-->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 43.37} 0
                            L ${vx} 45.1327 V ${vy - 49.547}
                            L ${vx - 43.25} ${vy} H 44.8116
                            L 0 ${vy - 49.209} V 45.8729
                            L 44.0796 0 Z`"
                        fill="#66BCED" fill-opacity="0.5" />
                    <!-- Top line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M 31.2656 14
                            H ${vx - 132.79} V 8
                            H 36.834 Z`"
                        fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        :d="`M 21.057 25
                            H ${vx - 132} V 19 
                            H 26.6254 L 21.057 25 Z`"
                        fill="#6A87EA" />
                    <!-- Bottom line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 23.74} ${vy - 21}
                            H 25.6881
                            L 31.152 ${vy - 15} H ${1423.69 + vx}
                            L ${vx - 23.74} ${vy - 21} Z`" fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${vx - 33.03} ${vy - 11}
                            H 34.7946
                            L 40.2584 ${vy - 5} H ${vx - 38.61}
                            L ${vx - 33.03} ${vy - 11} Z`" fill="#6A87EA" />
                    <!-- Right line -->
                    <rect :x="vx - 11" y="146" width="4" :height="vy - 211" fill="#6A87EA" />
                    <rect :x="vx - 21" y="146" width="4" :height="vy - 211" fill="#6A87EA" />
                    <rect :x="vx - 31" y="146" width="4" :height="vy - 211" fill="#6A87EA" />
                    <!-- Group bottom right -->
                    <rect :x="1389 + vx" :y="806 + vy" width="64" height="4" fill="#6A87EA" />
                    <rect :x="1389.19 + vx" :y="806 + vy" width="4" height="66" :transform="`rotate(43.2187 ${1389.19 + vx} ${806 + vy})`"
                        fill="#6A87EA" />
                    <!-- Group bottom left -->
                    <rect width="64" height="4" :transform="`matrix(-1 0 0 1 64 ${806 + vy})`" fill="#6A87EA" />
                    <rect width="4" height="66" :transform="`matrix(-0.728745 0.684785 0.684785 0.728745 63.8151 ${806 + vy})`"
                        fill="#6A87EA" />
                    <!-- Group top right -->
                        <!-- 1 -->
                        <rect :x="1388 + vx" y="87" width="65" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1355 + vx} 68.2593
                                L ${1390.42 + vx} 87.8649
                                V 87.8649 C ${1389.88 + vx} 88.8313 ${1388.67 + vx} 89.181 ${1387.7 + vx} 88.6461
                                L ${1354.03 + vx} 70.0091
                                L ${1355 + vx} 68.2593 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1320.97 + vx} 35
                                L ${1356.15 + vx} 54.473
                                L ${1355 + vx}.18 56.2228
                                L ${1320 + vx} 36.7498
                                L ${1320.97 + vx} 35 Z`" fill="#06A5FE"
                            fill-opacity="0.5" />
                        <path :d="`M ${1354 + vx} 70 V 54.5 H ${1356  +vx} V70 H ${1354 + vx} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- 2 -->
                        <rect :x="1384 + vx" y="90" width="69" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1351 + vx} 71.2598
                                L ${1386.42 + vx} 90.865
                                V 90.865 C ${1385.88 + vx} 91.8314 ${1384.67 + vx} 92.1812 ${1383.7 + vx} 91.6462
                                L ${1350.03 + vx} 73.0096
                                L ${1351 + vx} 71.2598 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1316.32 + vx} 39.9068 C ${1316.89 + vx} 38.971 ${1318.11 + vx} 38.672 ${1319.04 + vx} 39.239
                                L ${1351 + vx}.82 59.097
                                L ${1350.79 + vx} 60.7914
                                L ${1316.32 + vx} 39.9068
                                V 39.9068 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path :d="`M ${1350  +vx} 73 V 59 H ${1352  +vx} V 73 H ${1350  +vx} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- Vòng tròn -->
                        <path
                            :d="`M ${1321 + vx} 34.5
                                C ${1321 + vx}          37.5376         ${1318.54 + vx}         40              ${1315.5 + vx}      40
                                C ${1312.46 + vx}       40              ${1310 + vx}            37.5376         ${1310 + vx}        34.5
                                C ${1310 + vx}          31.4624         ${1312.46 + vx}         29              ${1315.5 + vx}      29
                                C ${1318.54 + vx}       29              ${1321 + vx}            31.4624         ${1321 + vx}        34.5 Z
                               M ${1310.6 + vx} 34.5
                                C ${1310.6 + vx}        37.2082         ${1312.79 + vx}         39.4037         ${1315.5 + vx}      39.4037
                                C ${1318.21 + vx}       39.4037         ${1320.4 + vx}          37.2082         ${1320.4 + vx}      34.5
                                C ${1320.4 + vx}        31.7918         ${1318.21 + vx}         29.5963         ${1315.5 + vx}      29.5963
                                C ${1312.79 + vx}       29.5963         ${1310.6 + vx}          31.7918         ${1310.6 + vx}      34.5 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <!-- circle top right -->
                        <circle :cx="1315.5 + vx" cy="34.5" r="1.5" fill="#06A5FE" fill-opacity="0.5" />
                    <!-- ##################### -->

                    <!-- Group top left #No-change -->
                    <rect x="64" y="69.8364" width="64" height="4" transform="rotate(-180 64 69.8364)" fill="#6A87EA" />
                    <rect x="63.8151" y="69.8364" width="4" height="66" transform="rotate(-136.781 63.8151 69.8364)"
                        fill="#6A87EA" />
                </svg>

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
            vx: 400,
            vy: 300,
            imageLoaded: 0,
        }
    },
    methods: {
        loaded() {
            if (this.imageLoaded < 1) {
                this.imageLoaded++
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
/**
 * <svg :width="vx" :height="vy" :viewBox="`0 0 ${vx} ${vy}`" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Background 1453 875-->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${43.37 + vx} 0
                            L ${vx} 45.1327 V ${49.547 + vy}
                            L ${43.25 + vx} ${vy} H 44.8116
                            L 0 ${825.791 + vy} V 45.8729
                            L 44.0796 0 Z`"
                        fill="#66BCED" fill-opacity="0.5" />
                    <!-- Top line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M 31.2656 14
                            H ${1320.21 + vx} V 8
                            H 36.834 Z`"
                        fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        :d="`M 21.057 25
                            H ${1321 + vx} V 19 
                            H 26.6254 L 21.057 25 Z`"
                        fill="#6A87EA" />
                    <!-- Bottom line -->
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${1429.26 + vx} ${854 + vy}
                            H 25.6881
                            L 31.152 ${860 + vy} H ${1423.69 + vx}
                            L ${1429.26 + vx} ${854 + vy} Z`" fill="#6A87EA" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        :d="`M ${1419.97 + vx} ${864 + vy}
                            H 34.7946
                            L 40.2584 ${870 + vy} H ${1414.39 + vx}
                            L ${1419.97 + vx} ${864 + vy} Z`" fill="#6A87EA" />
                    <!-- Right line -->
                    <rect :x="1441 + vx" y="146" width="6" :height="664 + vy" fill="#6A87EA" />
                    <rect :x="1432 + vx" y="146" width="6" :height="664 + vy" fill="#6A87EA" />
                    <rect :x="1422 + vx" y="146" width="6" :height="664 + vy" fill="#6A87EA" />
                    <!-- Group bottom right -->
                    <rect :x="1389 + vx" :y="806 + vy" width="64" height="4" fill="#6A87EA" />
                    <rect :x="1389.19 + vx" :y="806 + vy" width="4" height="66" :transform="`rotate(43.2187 ${1389.19 + vx} ${806 + vy})`"
                        fill="#6A87EA" />
                    <!-- Group bottom left -->
                    <rect width="64" height="4" :transform="`matrix(-1 0 0 1 64 ${806 + vy})`" fill="#6A87EA" />
                    <rect width="4" height="66" :transform="`matrix(-0.728745 0.684785 0.684785 0.728745 63.8151 ${806 + vy})`"
                        fill="#6A87EA" />
                    <!-- Group top right -->
                        <!-- 1 -->
                        <rect :x="1388 + vx" y="87" width="65" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1355 + vx} 68.2593
                                L ${1390.42 + vx} 87.8649
                                V 87.8649 C ${1389.88 + vx} 88.8313 ${1388.67 + vx} 89.181 ${1387.7 + vx} 88.6461
                                L ${1354.03 + vx} 70.0091
                                L ${1355 + vx} 68.2593 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1320.97 + vx} 35
                                L ${1356.15 + vx} 54.473
                                L ${1355 + vx}.18 56.2228
                                L ${1320 + vx} 36.7498
                                L ${1320.97 + vx} 35 Z`" fill="#06A5FE"
                            fill-opacity="0.5" />
                        <path :d="`M ${1354 + vx} 70 V 54.5 H ${1356  +vx} V70 H ${1354 + vx} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- 2 -->
                        <rect :x="1384 + vx" y="90" width="69" height="2" fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1351 + vx} 71.2598
                                L ${1386.42 + vx} 90.865
                                V 90.865 C ${1385.88 + vx} 91.8314 ${1384.67 + vx} 92.1812 ${1383.7 + vx} 91.6462
                                L ${1350.03 + vx} 73.0096
                                L ${1351 + vx} 71.2598 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path
                            :d="`M ${1316.32 + vx} 39.9068 C ${1316.89 + vx} 38.971 ${1318.11 + vx} 38.672 ${1319.04 + vx} 39.239
                                L ${1351 + vx}.82 59.097
                                L ${1350.79 + vx} 60.7914
                                L ${1316.32 + vx} 39.9068
                                V 39.9068 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <path :d="`M ${1350  +vx} 73 V 59 H ${1352  +vx} V 73 H ${1350  +vx} Z`" fill="#06A5FE" fill-opacity="0.5" />
                        <!-- Vòng tròn -->
                        <path
                            :d="`M ${1321 + vx} 34.5
                                C ${1321 + vx}          37.5376         ${1318.54 + vx}         40              ${1315.5 + vx}      40
                                C ${1312.46 + vx}       40              ${1310 + vx}            37.5376         ${1310 + vx}        34.5
                                C ${1310 + vx}          31.4624         ${1312.46 + vx}         29              ${1315.5 + vx}      29
                                C ${1318.54 + vx}       29              ${1321 + vx}            31.4624         ${1321 + vx}        34.5 Z
                               M ${1310.6 + vx} 34.5
                                C ${1310.6 + vx}        37.2082         ${1312.79 + vx}         39.4037         ${1315.5 + vx}      39.4037
                                C ${1318.21 + vx}       39.4037         ${1320.4 + vx}          37.2082         ${1320.4 + vx}      34.5
                                C ${1320.4 + vx}        31.7918         ${1318.21 + vx}         29.5963         ${1315.5 + vx}      29.5963
                                C ${1312.79 + vx}       29.5963         ${1310.6 + vx}          31.7918         ${1310.6 + vx}      34.5 Z`"
                            fill="#06A5FE" fill-opacity="0.5" />
                        <!-- circle top right -->
                        <circle :cx="1315.5 + vx" cy="34.5" r="1.5" fill="#06A5FE" fill-opacity="0.5" />
                    <!-- ##################### -->

                    <!-- Group top left #No-change -->
                    <rect x="64" y="69.8364" width="64" height="4" transform="rotate(-180 64 69.8364)" fill="#6A87EA" />
                    <rect x="63.8151" y="69.8364" width="4" height="66" transform="rotate(-136.781 63.8151 69.8364)"
                        fill="#6A87EA" />
                </svg>
 */
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
