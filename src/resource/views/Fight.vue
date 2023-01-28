<template>
    <section class="position-absolute top-0 end-0 start-0 h-100 text-center background">
        <section class="status-bar" style="height: 150px;"><h1>Status</h1></section>

        <section class="row battle-field">
            <!-- you  -->
            <div class="col bg-dark">
                <div class="row g-0">
                    <div v-for="i of [7, 4, 1]" :class="`col position-relative bg-success ${`you-${i}`}`" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 you-${i}-first`" style="z-index: 100;" :src="avatars[status.you[i].avatar].first" alt="">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 d-none you-${i}-second`" style="z-index: 100;" :src="avatars[status.you[i].avatar].second" alt="">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 d-none you-${i}-between`" style="z-index: 100;" :src="avatars[status.you[i].avatar].between" alt="">
                        <img v-if="status.you[i]" @load="chanting('you', i, 1000)" :class="`h-100 d-none you-${i}-finally`" style="z-index: 100;" :src="avatars[status.you[i].avatar].finally" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [8, 5, 2]" class="col position-relative bg-danger" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`h-100 you-${i}`" :src="avatars[status.you[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [9, 6, 3]" class="col position-relative bg-warning" style="height: 140px;">
                        <img v-if="status.you[i]" :class="`h-100 you-${i}`" :src="avatars[status.you[i].avatar].first" alt="">
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <!-- defense -->
            <div class="col bg-dark">
                <div class="row g-0">
                    <div v-for="i of [1, 4, 7]" :class="`col position-relative bg-success`" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`d-inline-block h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [2, 5, 8]" class="col position-relative bg-danger" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`d-inline-block h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [3, 6, 9]" class="col position-relative bg-warning" style="height: 140px;">
                        <img v-if="status.defense[i]" :class="`d-inline-block h-100 defense-${i}`" style="transform: scaleX(-1);" :src="avatars[status.defense[i].avatar].first" alt="">
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills -->
        <section>
            <template v-for="(value, key, index) in skysState">
                <img :class="`position-fixed d-inline-block ${key}`" :src="value.image" :style="value.style" alt="">
            </template>
            
            <template v-for="(value, key, index) in magicRings">
                <img :class="`position-fixed d-inline-block ${key}`" :src="value.image" :style="value.style" alt="">
            </template>

            <template v-for="(value, key, index) in skills">
                <img v-for="i in value.amount" :class="`position-fixed d-inline-block skill-${key}`" :src="value.image" :style="value.style" alt="">
            </template>
        </section>
    </section>
</template>

<script>
import monkFirst from '@/assets/img/nam-tu-si/nam_tu_si_no_background.png'
import monkSecond from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_second.png'
import monkBetween from '@/assets/img/nam-tu-si/nam_tu_si_no_background_between.png'
import monkFinally from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_finally.png'

import magic_ring_normal from '@/assets/img/skills/normal/normal_first.png'
import normal_finally from '@/assets/img/skills/normal/normal_finally.png'

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
            skysState: {

            },
            magicRings: {
                magic_ring_normal: {
                    image: magic_ring_normal,
                    style: 'width: 150px; margin-top: -150px; margin-left: -20px'
                },
            },
            skills: {
                'normal': {
                    local: 'you', // you - defense - sky
                    amount: 1, // number of skill attend to defense same time
                    image: normal_finally,
                    style: 'width: 150px; z-index: 1000; margin-top: -50px;',
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
                // Display skill
                if (index == 1) {
                    this.setLocalFirst('magic_ring_normal', `${who}-${index}`)
                    this.setLocalFirst('skill-normal', `${who}-${index}`)
                }

                second.classList.remove('d-none')
                first.classList.add('d-none')
                await timeout(30).then(async () => {
                    final.classList.remove('d-none')
                    second.classList.add('d-none')
                })

                await timeout(500).then(async () => {
                    if (index == 1) {
                        this.actionSkill(`${who}-${index}`, 'skill-normal', 'defense-5')
                    }
                })
                await timeout(time).then(async () => {
                    this.chantingFinish(who, index)
                    // Hidden skill
                    if (index == 1) {
                        this.setLocalFirst('magic_ring_normal', `app`)
                        this.setLocalFirst('skill-normal', `app`)
                    }
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
        setLocalFirst(yourSkill, object) {
            const skill = $(`.${yourSkill}`)
            // Local rect on viewport
            const skillRect = $(`.${yourSkill}`).getBoundingClientRect()
            const objectRect = $(`.${object}`).getBoundingClientRect()

            skill.style.top = `${objectRect.y}px`
            skill.style.left = `${objectRect.x}px`
        },
        async actionSkill(who, yourSkill, object) {
            const skill = $(`.${yourSkill}`)
            // Local rect on viewport
            const skillRect = $(`.${yourSkill}`).getBoundingClientRect()
            const defense = $(`.${object}`).getBoundingClientRect()
            // 
            const x =   defense.x
                      - skillRect.x // => object <=> yourSkill
                      - skillRect.width / 2
            // 
            const y =   defense.y
                      - skillRect.y // => object <=> yourSkill
                      + skillRect.height / 2

            skill.style.translate = `${x}px ${y}px`
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
