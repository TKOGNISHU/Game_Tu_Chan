<template>
    <section class="position-absolute top-0 end-0 start-0 h-100 text-center background">
        <div class="status-bar" style="height: 100px;"><h1>Status</h1></div>

        <div class="row battle-field">
            <!-- you -->
            <div class="col bg-dark">
                <div class="row g-0">
                    <div v-for="i of [3, 2, 1]" class="col position-relative bg-success" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`h-100 you-${i}-first`" style="z-index: 100;" :src="avatars[status.you[i].avatar].first" alt="">
                        <img v-if="status.you[i]" :class="`h-100 d-none you-${i}-second`" style="z-index: 100;" :src="avatars[status.you[i].avatar].second" alt="">
                        <img v-if="status.you[i]" :class="`h-100 d-none you-${i}-between`" style="z-index: 100;" :src="avatars[status.you[i].avatar].between" alt="">
                        <img v-if="status.you[i]" @load="chanting('you', i, 1000)" :class="`h-100 d-none you-${i}-finally`" style="z-index: 100;" :src="avatars[status.you[i].avatar].finally" alt="">
                        
                        <div class="position-absolute top-0 bottom-0 start-0" style="margin-top: -100px;">
                            <img class="h-75" src="@/assets/img/skills/normal/normal_first.png" alt="">

                            <img :class="`position-absolute h-25 you-skill-${i}`" style="top: 22%; left: 36%;" src="@/assets/img/skills/normal/normal_finally.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [6, 5, 4]" class="col position-relative bg-danger" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`h-100 you-${i}`" :src="avatars[status.you[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [9, 8, 7]" class="col position-relative bg-warning" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`h-100 you-${i}`" :src="avatars[status.you[i].avatar].first" alt="">
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <!-- defense -->
            <div class="col bg-dark">
                <div class="row g-0">
                    <div v-for="i of [3, 2, 1]" class="col position-relative bg-success" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [6, 5, 4]" class="col position-relative bg-danger" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [9, 8, 7]" class="col position-relative bg-warning" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import monkFirst from '@/assets/img/nam-tu-si/nam_tu_si_no_background.png'
import monkSecond from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_second.png'
import monkBetween from '@/assets/img/nam-tu-si/nam_tu_si_no_background_between.png'
import monkFinally from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_finally.png'

export default {
    data() {
        return {
            yLocal: 0,
            dLocal: 0,
            avatars: {
                'monk': {
                    first: monkFirst,
                    second: monkSecond,
                    between: monkBetween,
                    finally: monkFinally,
                },
            },
            skills: {
                'normal': {
                    first: '@/assets/img/skills/normal/normal_first.png',
                    finally: '@/assets/img/skills/normal/normal_finally.png',
                },
            },
            status: {
                you: {
                    1: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    3: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    5: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    7: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    9: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                },
                defense: {
                    1: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    3: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    5: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    7: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                    9: {
                        avatar: 'monk',
                        health: 1000,
                        mp: 100,
                    },
                }
            },
            plot: [ // turn
                [ // turn 1
                    { // you
                        local: 1,
                        preStatuses: [0], // > 0 => pre heal, < 0 => pre damage // list of status is actions before attacker attack.
                        beingAttacked: [1], // 1, 2, 3, 4, 5, first row, last row, first column, last column
                        damage: [100],
                        attackedEffect: 'normal',
                        heal: [0],
                        beingHealed: [0], // 0 => nothing, 1 => only, 2 => random, 3 => all
                        healedEffect: '',
                    },
                    { // defense
                    },
                ]
            ]
        }
    },
    methods: {
        async chanting(who, index, time) {
            const first = $(`.${who}-${index}-first`)
            const second = $(`.${who}-${index}-second`)
            const between = $(`.${who}-${index}-between`)
            const final = $(`.${who}-${index}-finally`)

            timeout(1000).then(async () => {
                second.classList.remove('d-none')
                first.classList.add('d-none')
                await timeout(30).then(async () => {
                    final.classList.remove('d-none')
                    second.classList.add('d-none')
                })

                this.actionSkill('you-skill-1', 'defense-3')
                await timeout(time).then(async () => {
                    this.chantingFinish(who, index)
                })
            })
        },
        async chantingFinish(who, index) {
            const first = $(`.${who}-${index}-first`)
            const second = $(`.${who}-${index}-second`)
            const between = $(`.${who}-${index}-between`)
            const final = $(`.${who}-${index}-finally`)

            timeout(0).then(async () => {
                between.classList.remove('d-none')
                final.classList.add('d-none')
                await timeout(50).then(async () => {
                    second.classList.remove('d-none')
                    between.classList.add('d-none')

                    await timeout(50).then(async () => {
                        first.classList.remove('d-none')
                        second.classList.add('d-none')
                    })
                })
            })
        },
        async actionSkill(yourSkill = 'you-skill-1', object = 'defense-3') {
            const skill = $(`.${yourSkill}`)
            skill.style.translate = `${$(`.${object}`).x - $(`.${yourSkill}`).x - $(`.${object}`).offsetWidth - $(`.${yourSkill}`).offsetWidth}px 0px`
        }
    },
    mounted() {
    }
}

function timeout(ms) {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    })
}
</script>
