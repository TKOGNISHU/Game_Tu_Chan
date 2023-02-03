<template>
    <section class="position-absolute top-0 end-0 start-0 h-100 text-center background">
        <section class="status-bar" style="height: 150px;"><h1>YOU / DEFENSE</h1></section>

        <section class="row battle-field ms-5 me-5">
            <!-- you  @load="chanting('you', i, 1000)" -->
            <div class="col bg-dark">
                <div v-for="j of [[7, 4, 1], [8, 5, 2], [9, 6, 3]]" class="row g-0">
                    <div v-for="i of j" :class="`col ${`you-${i}`}`">
                        <Avatar v-if="status.you[i]" :status="status.you[i]" :avatars="avatars" who="you" :index="i"/>
                    </div>
                </div>
                <!-- <div class="row g-0">
                    <div v-for="i of [8, 5, 2]" :class="`col position-relative ${`you-${i}`}`" style="height: 100px;">
                        <Avatar v-if="status.you[i]" :status="status.you[i]" :avatars="avatars" who="you" :index="i"/>
                    </div>
                </div>
                <div class="row g-0">
                    <div v-for="i of [9, 6, 3]" :class="`col position-relative ${`you-${i}`}`" style="height: 100px;">
                        <Avatar v-if="status.you[i]" :status="status.you[i]" :avatars="avatars" who="you" :index="i"/>
                    </div>
                </div> -->
            </div>
            <div class="col-2"></div>
            <!-- defense -->
            <div class="col bg-dark">
                <div v-for="j of [[1, 4, 7], [2, 5, 8], [3, 6, 9]]" class="row g-0">
                    <div v-for="i of j" :class="`col position-relative`" style="height: 100px;">
                        <Avatar v-if="status.defense[i]" :status="status.defense[i]" :avatars="avatars" who="defense" :index="i"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills -->
        <section>
            <template v-for="(value, key, index) in skysState">
                <img :class="`position-fixed d-inline-block d-none ${key}`" :src="value.image" :style="`${value.style}`" alt="">
            </template>
            
            <template v-for="(value, key, index) in magicRings">
                <img :class="`position-fixed top-0 start-0 d-inline-block d-none ${key}`" :src="value.image" :style="`z-index: 1000; ${value.style}`" alt="">
            </template>

            <template v-for="(value, key, index) in skills">
                <div :class="`position-fixed top-0 start-0 d-none ${value.animation} skill-${key}`"
                    :style="`height: 200px; margin-top: -100px; z-index: 1000; background-image: url('${value.effects.begin}');
                            background-size: cover; background-repeat: no-repeat;
                            ${value.style};`"
                ></div>
                <!-- <img v-for="i in value.amount" :class="`position-fixed d-inline-block d-none skill-${key}`" :src="value.effects.begin" :style="value.style" alt="">
                <img v-for="i in value.amount" :class="`position-fixed d-inline-block d-none skill-${key}`" :src="value.effects.end" :style="value.style" alt=""> -->
            </template>
        </section>

        <!-- damage -->
        <section>
            <button @click="test" class="position-fixed">Click me!</button>
        </section>
    </section>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

import monkFirst from '@/assets/img/nam-tu-si/nam_tu_si_no_background.png'
import monkSecond from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_second.png'
import monkBetween from '@/assets/img/nam-tu-si/nam_tu_si_no_background_between.png'
import monkFinally from '@/assets/img/nam-tu-si/nam_tu_si_thi_phap_finally.png'

import magic_ring_normal from '@/assets/img/skills/normal/normal_first.png'
import normal_finally from '@/assets/img/skills/normal/normal_finally.png'

import heal_1s from '@/assets/img/skills/heal/Heal.png'

export default {
    components: { Avatar, },
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
                    // local: 'you', // you - defense - sky
                    amount: 1, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: 100%; background-position-y: 75%',
                    animation: '',
                    effects: {
                        sky: '',
                        begin: normal_finally,
                        end: normal_finally
                    }
                },
                'heal_1s': {
                    amount: 1, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: auto; background-position-y: 100%;',
                    animation: 'animation',
                    effects: {
                        sky: '',
                        begin: heal_1s,
                        end: heal_1s
                    }
                }
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
                        actor: -1,
                        effects: [
                            {
                                name: 'normal',
                                objects: [1],
                                effectType: 'damage',
                                damages: [1000],
                                buffs: [],
                                deBuffs: [],
                            }
                        ]
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

            const magic_ring_normal = '.magic_ring_normal'
            // const skill = '.skill-normal'
            const skill = '.skill-heal_1s'
            const defense = '.defense-3'
            // const defense = `.${who}-${index}`
            
            timeout(1000).then(async () => {
                // Display skill, set local
                if (index == 5) {
                    this.actionSkill(`.${who}-${index}`, magic_ring_normal, `.${who}-${index}`)
                    this.actionSkill(`.${who}-${index}`, skill, `.${who}-${index}`)
                    $(magic_ring_normal).classList.toggle('d-none')
                    $(skill).classList.toggle('d-none')
                }

                second.classList.remove('d-none')
                first.classList.add('d-none')
                await timeout(30).then(async () => {
                    final.classList.remove('d-none')
                    second.classList.add('d-none')
                })

                await timeout(500).then(async () => {
                    if (index == 1) { // attack
                        this.actionSkill(`${who}-${index}`, skill, defense)
                    }
                })
                await timeout(time).then(async () => {
                    this.chantingFinish(who, index)
                    // Hidden skill
                    if (index == 5) {
                        $(magic_ring_normal).classList.toggle('d-none')
                        $(skill).classList.toggle('d-none')
                        this.setLocalFirst(magic_ring_normal)
                        this.setLocalFirst(skill)
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
        setLocalFirst(yourSkill) {
            const skill = $(yourSkill)
            skill.style.translate = `0px 0px`
        },
        async actionSkill(who, yourSkill, object) {
            const skill = $(yourSkill)
            // Local rect on viewport
            const skillRect = $(yourSkill).getBoundingClientRect()
            const defense = $(object).getBoundingClientRect()
            console.log(who, object)
            // 
            const x =   defense.x
                    //   - skillRect.x // => object <=> yourSkill
                    //   - defense.width
                    + defense.width / 2
                    - skillRect.width / 2
            // 
            const y =   defense.y
                    //   - skillRect.y // => object <=> yourSkill

            console.log(x, y)

            skill.style.translate = `${x}px ${y}px`
        },
        test() {
            const youHeal = $('.you__heal-1')
            const youDamage = $('.you__damage-1')
            const healSkill = $('.skill-heal_1s')
            const defenseHeal = $('.defense__heal-1')
            const defenseDamage = $('.defense__damage-1')

            youHeal.classList.toggle('d-none')
            youDamage.classList.toggle('d-none')
            defenseHeal.classList.toggle('d-none')
            defenseDamage.classList.toggle('d-none')

            // healSkill.classList.toggle('d-none')
            this.chanting('you', 5, 1000)
        }
    },
    mounted() {
        this.chanting('you', 5, 1000)
    }
}

function timeout(ms) {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    })
}
</script>

<style>
</style>












<!-- Old Structure
    
                    <div v-for="i of [8, 5, 2]" :class="`col position-relative ${`you-${i}`}`" style="height: 100px;">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 display-status you-${i}-first`" style="z-index: 100;" :src="avatars[status.you[i].avatar].first" alt="">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 d-none you-${i}-second`" style="z-index: 100;" :src="avatars[status.you[i].avatar].second" alt="">
                        <img v-if="status.you[i]" :class="`d-inline-block h-100 d-none you-${i}-between`" style="z-index: 100;" :src="avatars[status.you[i].avatar].between" alt="">
                        <img v-if="status.you[i]" @load="chanting('you', i, 1000)" :class="`h-100 d-none you-${i}-finally`" style="z-index: 100;" :src="avatars[status.you[i].avatar].finally" alt="">

                        <p v-if="status.you[i]" :class="`position-absolute top-50 fw-bold text-success fs-5 d-none you__heal-${i} you__number--animation`" style="z-index: 1000;">+1000</p>

                        <p v-if="status.you[i]" :class="`position-absolute top-50 fw-bold text-danger fs-5 pt-4 d-none you__damage-${i} you__number--animation`" style="z-index: 1000;">-1000</p>


                        <BoardStatus v-if="status.you[i]" name="Hạo Thiên"/>
                    </div>
 -->


