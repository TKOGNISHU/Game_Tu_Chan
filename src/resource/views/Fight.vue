<template>
    <section class="position-absolute top-0 end-0 start-0 h-100 text-center background">
        <section class="status-bar" style="height: 150px;"><h1>YOU / DEFENSE</h1></section>

        <section class="row battle-field ms-5 me-5">
            <!-- you  @load="chanting('you', i, 1000)" -->
            <div class="col bg-dark">
                <div v-for="j of [[7, 4, 1], [8, 5, 2], [9, 6, 3]]" class="row g-0">
                    <div v-for="i of j" :class="`col ${`you-${i}`}`">
                        <Avatar v-if="status.you[i]" style="height: 100px" :status="status.you[i]" :avatars="avatars" :states="states" who="you" :index="i"/>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
            <!-- defense -->
            <div class="col bg-dark">
                <div v-for="j of [[1, 4, 7], [2, 5, 8], [3, 6, 9]]" class="row g-0">
                    <div v-for="i of j" :class="`col ${`defense-${i}`}`">
                        <Avatar v-if="status.defense[i]" style="height: 100px" :status="status.defense[i]" :avatars="avatars" :states="states" who="defense" :index="i"/>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills -->
        <section>
            <!-- Sky -->
            <template v-for="(value, key, index) in skysState">
                <div
                    :class="`position-fixed top-0 start-0 end-0 d-none ${value.animation} ${key}`"
                    :style="`height: 200px;
                            z-index: 1000; 
                            background-image: url('${value.effect}');
                            background-size: cover; background-repeat: no-repeat; ${value.style};`"
                ></div>
            </template>
            <!-- Figure -->
            <template v-for="(value, key, index) in figures">
                <div
                    :class="`position-fixed top-0 start-0 d-none ${value.animation} ${key}`"
                    :style="`height: 200px; margin-left: -100px;
                            z-index: 1000; 
                            background-image: url('${value.effect}');
                            background-size: cover; background-repeat: no-repeat; ${value.style};`"
                ></div>
                <!-- <img :class="`position-fixed d-inline-block d-none ${key}`" :src="value.image" :style="`z-index: 1000; ${value.style}`" alt=""> -->
            </template>
            <!-- Skill -->
            <template v-for="(value, key, index) in skills">
                <div v-for="i in value.amount"
                    :class="`position-fixed top-0 start-0 d-none ${value.animation} skill-${key}-${i}`"
                    :style="`height: 200px; margin-top: -100px;
                            z-index: 1001; 
                            background-image: url('${value.effects.action}');
                            background-size: cover; background-repeat: no-repeat; ${value.style};`"
                ></div>
            </template>
            <!-- State -->
            <!-- <template v-for="(value, key, index) in states">
                <div v-for="i in value.amount"
                    :class="`position-fixed top-0 start-0 ${value.animation} skill-${key}-${i}`"
                    :style="`height: 25px; width: 25px;
                            z-index: 1001; 
                            background-image: url('${value.effect}');
                            background-size: cover; background-repeat: no-repeat; ${value.style};`"
                ></div>
            </template> -->
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

import fire from '@/assets/img/states/fire-500.png'

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
            figures: {
                magic_ring_normal: {
                    effect: magic_ring_normal,
                    style: 'width: 100px; margin-top: -150px;',
                    animation: '',
                },
            },
            skills: { // action skill
                'normal': {
                    type: 'damage',
                    amount: 1, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: 100%; background-position-y: 75%',
                    animation: '',
                    startIs: 'you',
                    delay: 0, // delay between (sky/figure) and action
                    effects: {
                        sky: '',
                        figure: 'magic_ring_normal', // from you
                        action: normal_finally, // animation from you -> object / immediately object
                    }
                },
                'normal-heal': {
                    type: 'buff',
                    amount: 2, // number of skill attend to defense same time
                    style: 'width: 100px; background-size: auto; background-position-y: 100%;',
                    animation: 'animation-100',
                    startIs: 'object', // sky: from sky / you: from people action skill / object: immediacy from object be attacked, vd skill from earth, ect.
                    delay: 0, // delay between (sky/figure) and action
                    effects: {
                        sky: '',
                        figure: 'magic_ring_normal', // from you
                        action: heal_1s, // animation from you -> object / immediately object
                    },
                }
            },
            states: {
                fire: {
                    amount: 1,
                    effect: fire,
                    style: '',
                    animation: 'animation-100-04-2-infinite',
                }
            },
            status: {
                you: {
                    1: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 100,
                        currentMp: 100,
                        states: ['fire','fire',],
                    },
                    3: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                    5: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                        states: ['fire','fire',],
                    },
                    7: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                    9: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                },
                defense: {
                    1: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                        states: ['fire','fire',],
                    },
                    3: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                    5: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                    7: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                    },
                    9: {
                        avatar: 'monk',
                        hp: 1000,
                        mp: 100,
                        currentHp: 1000,
                        currentMp: 100,
                        states: ['fire','fire',],
                    },
                }
            },
            plot: [ // turn // if actor / object < 0 => you else defense
                { // turn 1
                    you: {
                        actor: -5,
                        effects: [
                            {
                                name: 'normal-heal',
                                objects: [-1],
                                damages: [],
                                buffs: [2000],
                                debuffs: [],
                            }
                        ]
                    },
                    defense: {
                        actor: 1,
                        effects: [
                            {
                                name: 'normal-heal',
                                objects: [5],
                                damages: [],
                                buffs: [2000],
                                debuffs: [],
                            }
                        ]
                    },
                },
                { // turn 2
                    you: {
                        actor: -1,
                        effects: [
                            {
                                name: 'normal',
                                objects: [9],
                                damages: [2000],
                            }
                        ]
                    },
                    defense: {
                        actor: 3,
                        effects: [
                            {
                                name: 'normal',
                                objects: [-5],
                                damages: [2000],
                            }
                        ]
                    },
                },
            ]
        }
    },
    methods: {
        async actionPlot() {
            const time = 1000;

            // try {
                for (let turn of this.plot) {
                    for(const actor of Object.keys(turn)) {
                        // every effect only one actor who is effecting
                        // const actor = (turn[key].actor < 0) ? 'you' : 'defense'
                        for(let effect of turn[actor].effects) { // effect on a turn
                            // every effect only one object type who is effected, object type is effected!
                            const objectTypeBeEffected = (effect.objects[0] < 0) ? 'you' : 'defense'
                            const skillName = effect.name
                            const skillClass = `.skill-${skillName}`
                            const index = (turn[actor].actor < 0) ? (-turn[actor].actor) : (turn[actor].actor)
                            // figure
                            const figureName = this.skills[skillName].effects.figure
                            const figureClass = `.${figureName}`
                            // console.log(effect)
    
                            // Chanting
                            await this.chanting(actor, index)
                            await timeout(1000)
        
                            // Display skill, set local
                            this.displaySkill(
                                actor, index, effect.objects,
                                '', '', // sky
                                figureName, figureClass, //figure
                                skillName, skillClass // skill
                            )
    
                            // object is attacked
                            for(let i = 0; i < effect.objects.length; i++) {
                                // console.log(i, object)
                                const presentSkillClass = `${skillClass}-${i + 1}`
                                const objectIndex = (effect.objects[i] < 0) ? (-effect.objects[i]) : (effect.objects[i])
                                const defense = `.${objectTypeBeEffected}-${objectIndex}`
        
                                // attacking
                                await timeout(500).then(async () => {
                                    if (this.skills[skillName].startIs == 'object') {
                                        $(presentSkillClass).classList.remove('d-none')
                                    }
                                    this.setLocalSkillWithObject(actor, presentSkillClass, defense)
                                })

                                // Display number animation
                                this.toggleNumber(skillName, effect, objectTypeBeEffected, objectIndex, i)
                            }
        
                            // Hidden skills
                            await timeout(time).then(() => {
                                // hidden figure
                                if (figureName) {
                                    $(figureClass).classList.add('d-none')
                                    this.setLocalFirst(figureClass)
                                }
                                // hidden skills
                                for(let i = 0; i < effect.objects.length; i++) {
                                    const presentSkillClass = `${skillClass}-${i + 1}`
                                    const objectIndex = (effect.objects[i] < 0) ? (-effect.objects[i]) : (effect.objects[i])
                                    $(presentSkillClass).classList.add('d-none')
                                    this.setLocalFirst(presentSkillClass)
    
                                    // hidden number animation
                                    this.toggleNumber(skillName, effect, objectTypeBeEffected, objectIndex, i)
                                }
                            })
                            // Chanting finish
                            await this.chantingFinish(actor, index)
                        }
                        await timeout(1000)
                    }
                }
            // } catch (e) {
            //     console.log('ERROR: ', e)
            // }
        },
        displaySkill(who, actorIndex, objects, skyName, skyClass, figureName, figureClass, skillName, skillClass) {
            // Display sky
            if (skyName) {}
            // Display figure
            if (figureName) {
                this.setLocalSkillWithObject(who, figureClass, `.${who}-${actorIndex}`)
                $(figureClass).classList.remove('d-none')
                // Flip horizontally
                if (who == 'defense') {
                    $(figureClass).classList.add('flip-horizontal')
                    $(figureClass).classList.add('left-100')
                }
            }
            // Display skills
            if (this.skills[skillName].startIs == 'you') {
                for(let i = 0; i < objects.length; i++) {
                    $(`${skillClass}-${i + 1}`).classList.remove('d-none')
                    this.setLocalSkillWithObject(who, `${skillClass}-${i+1}`, `.${who}-${actorIndex}`)
                    if (who == 'defense') {
                        $(`${skillClass}-${i+1}`).classList.add('flip-horizontal')
                    }
                }
            }
        },
        toggleNumber(skillName, effect, who, objectIndex, indexSkill) {
            const skillType = this.skills[skillName].type
            const effectType = `${skillType}s`
            const effectNumbers = effect[effectType]

            if (effectNumbers.length > 0) {
                this.ToggleNumberAnimation(skillType, who, objectIndex, effectNumbers[indexSkill])
            }
        },
        ToggleNumberAnimation(type, who, index, number) {
            const types = {
                buff: {
                    sign: '+',
                    object: $(`.${who}__heal-${index}`),
                },
                debuff: {
                    sign: '-',
                    object: $(`.${who}__damage-${index}`),
                },
                damage: {
                    sign: '-',
                    object: $(`.${who}__damage-${index}`),
                },
            }
            types[type].object.innerText = `${types[type].sign}${number}`
            types[type].object.classList.toggle('d-none')
        },
        async chanting(who, index) {
            const first = $(`.${who}-${index}-first`)
            const second = $(`.${who}-${index}-second`)
            const final = $(`.${who}-${index}-finally`)

            second.classList.remove('d-none')
            first.classList.add('d-none')
            await timeout(30).then(async () => {
                final.classList.remove('d-none')
                second.classList.add('d-none')
            })
        },
        async chantingFinish(who, index) {
            const first = $(`.${who}-${index}-first`)
            const second = $(`.${who}-${index}-second`)
            const between = $(`.${who}-${index}-between`)
            const final = $(`.${who}-${index}-finally`)

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
        },
        setLocalFirst(yourSkill) {
            const skill = $(yourSkill)
            const isExistFlipClass = Array.from(skill.classList).find((cls) => cls == 'flip-horizontal')
            const isExistLeft100Class = Array.from(skill.classList).find((cls) => cls == 'left-100')

            if (isExistFlipClass) {
                skill.classList.toggle('flip-horizontal')
            }

            if (isExistLeft100Class) {
                skill.classList.toggle('left-100')
            }

            skill.style.translate = `0px 0px`
        },
        async setLocalSkillWithObject(who, yourSkill, object) {//(who, yourSkill, object)
            const skill = $(yourSkill)
            // Local rect on viewport
            const skillRect = skill.getBoundingClientRect()
            const defense = $(object).getBoundingClientRect()
            // 
            let x =   defense.x
                        + defense.width / 2
                        - skillRect.width / 2

            const y =   defense.y

            skill.style.translate = `${x}px ${y}px`
        },
        test() {
            // const youHeal = $('.you__heal-1')
            // const youDamage = $('.you__damage-1')
            // const healSkill = $('.skill-heal_1s')
            // const defenseHeal = $('.defense__heal-1')
            // const defenseDamage = $('.defense__damage-1')
            // youHeal.classList.toggle('d-none')
            // youDamage.classList.toggle('d-none')
            // defenseHeal.classList.toggle('d-none')
            // defenseDamage.classList.toggle('d-none')
            // // healSkill.classList.toggle('d-none')
            // this.chanting('you', 5, 1000)

            this.actionPlot()
        }
    },
    mounted() {
        this.actionPlot()
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
