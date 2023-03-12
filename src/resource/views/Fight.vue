<template>
    <section class="position-relative top-0 h-100 background">
        <!-- Background -->
        <section class="" style="z-index: 1;">
            <img style="height: 100vh;" src="@/assets/img/fight.png" alt="">
        </section>

        <!--  -->
        <section class="position-absolute top-0 start-0 end-0 h-100" style="z-index: 10; background-color: #00000050;">
            <!-- Header -->
            <section class="status-bar" style="height: 150px;"><h1>YOU / DEFENSE</h1></section>
    
            <section class="row battle-field ms-5 me-5">
                <!-- you  @load="chanting('you', i, 1000)" -->
                <div class="col">
                    <div v-for="j of [[7, 4, 1], [8, 5, 2], [9, 6, 3]]" class="row g-0">
                        <div v-for="i of j" :class="`col`" style="height: 100px">
                            <div :class="`h-100 ${`you-${i}`}`">
                                <Avatar v-if="status.you[i]" :status="status.you[i]" :avatars="avatars" :states="states" who="you" :index="i"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <!-- defense -->
                <div class="col">
                    <div v-for="j of [[1, 4, 7], [2, 5, 8], [3, 6, 9]]" class="row g-0">
                        <div v-for="i of j" :class="`col`">
                            <div :class="`${`defense-${i}`}`" style="height: 100px">
                                <Avatar v-if="status.defense[i]" :status="status.defense[i]" :avatars="avatars" :states="states" who="defense" :index="i"/>
                            </div>
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
            </section>
    
            <!-- damage -->
            <!-- <section>
                <button @click="test" class="position-fixed">Click me!</button>
            </section> -->
    
            <!-- Bottom -->
            <router-view name="bottom-function-fight" />
        </section>
    </section>
</template>

<script>
import { Avatar } from '@/util/components.js'
import {
    Immortality,
    Skill,
    Figure,
    State,
    ActionPlot,
    QuestService
} from '@/util/index.js'

export default {
    components: { Avatar, },
    data() {
        const { idQuest, idCluster } = this.$route.params
        return {
            already: false,
            idQuest, idCluster,
            avatars: {
                // 'monk': {
                //     'chanting-normal': {
                //         effect: chanting,
                //         animation: 'animation-50-3pic',
                //     },
                //     'chantingFinish-normal':  {
                //         effect: chantingFinish,
                //         animation: 'animation-50-4pic',
                //     },
                // },
            },
            skysState: {

            },
            figures: {
                // magic_ring_normal: new Figure({
                //     name: 'magic_ring_normal',
                //     effect: magic_ring_normal,
                //     style: 'width: 100px; margin-top: -150px;',
                //     animation: '',
                // }),
            },
            skills: { // action skill
                // 'normal': new Skill({
                //     name: 'normal',
                //     type: 'damage',
                //     amount: 5, // number of skill attend to defense same time
                //     style: 'width: 100px; background-size: 100%; background-position-y: 75%',
                //     animation: '',
                //     startIs: 'you',
                //     delay: 2000, // delay between (sky/figure) and action
                //     effects: {
                //         sky: '',
                //         figure: 'magic_ring_normal', // from you
                //         action: normal_finally, // animation from you -> object / immediately object
                //     }
                // }),
                // 'normal-heal': new Skill({
                //     name: 'normal-heal',
                //     type: 'heal',
                //     amount: 2, // number of skill attend to defense same time
                //     style: 'width: 100px; background-size: auto; background-position-y: 100%;',
                //     animation: 'animation-100',
                //     startIs: 'object', // sky: from sky / you: from people action skill / object: immediacy from object be attacked, vd skill from earth, ect.
                //     delay: 2000, // delay between (sky/figure) and action
                //     effects: {
                //         sky: '',
                //         figure: 'magic_ring_normal', // from you
                //         action: heal_1s, // animation from you -> object / immediately object
                //     },
                // }),
            },
            states: {
                // fire: new State({
                //     name: 'fire',
                //     type: 'damage', // damage/heal/'' ('' when effect decrease atk/... not hp or mp)
                //     amount: 1,
                //     effect: fire,
                //     style: '',
                //     animation: 'animation-100-04-2-infinite',
                // })
            },
            status: {
                // you: {
                //     1: new Immortality({
                //         index: -1,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                //     3: new Immortality({
                //         index: -3,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                //     5: new Immortality({
                //         index: -5,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //         states: ['fire',],
                //     }),
                //     7: new Immortality({
                //         index: -7,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                //     9: new Immortality({
                //         index: -9,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                // },
                // defense: {
                //     1: new Immortality({
                //         index: 1,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //         states: ['fire','fire',],
                //     }),
                //     3: new Immortality({
                //         index: 3,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                //     5: new Immortality({
                //         index: 5,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //         states: ['fire',],
                //     }),
                //     7: new Immortality({
                //         index: 7,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                //     9: new Immortality({
                //         index: 9,
                //         avatar: 'monk',
                //         hp: 1000,
                //         mp: 100,
                //         currentHp: 1000,
                //         currentMp: 100,
                //     }),
                // }
            },
            plot: [ // turn // if actor / object < 0 => you else defense
                // { // turn 1
                //     you: {
                //         actor: -1,
                //         effects: [
                //             {
                //                 type: 'skill',
                //                 name: 'normal-heal',
                //                 objects: [-1],
                //                 damages: [],
                //                 heals: ['+200'],
                //             }
                //         ]
                //     },
                //     defense: {
                //         actor: 1,
                //         effects: [
                //             {
                //                 type: 'skill',
                //                 name: 'normal-heal',
                //                 objects: [9],
                //                 damages: [],
                //                 heals: ['+600'],
                //             }
                //         ]
                //     },
                // },
                // { // turn 2
                //     you: {
                //         actor: -3,
                //         effects: [
                //             {
                //                 type: 'skill',
                //                 name: 'normal',
                //                 objects: [5, 1],
                //                 damages: ['-200', '-300'],
                //             },
                //             {
                //                 type: 'action',
                //                 name: 'fire',
                //                 objects: [5],
                //             }
                //         ]
                //     },
                //     defense: {
                //         actor: 3,
                //         effects: [
                //             {
                //                 type: 'skill',
                //                 name: 'normal',
                //                 objects: [-5],
                //                 damages: ['-200'],
                //             },
                //             {
                //                 type: 'action',
                //                 name: 'fire',
                //                 objects: [-5],
                //             }
                //         ]
                //     },
                // },
                // { // turn 3
                //     you: {
                //         actor: -5,
                //         effects: [
                //             {
                //                 type: 'damage',
                //                 damages: ['-50'],
                //             },
                //             {
                //                 type: 'skill',
                //                 name: 'normal',
                //                 objects: [1, 3, 5, 7, 9],
                //                 damages: ['-1000', '-1000', '-100', '-1000', '-1000']
                //             }
                //         ]
                //     },
                //     defense: {
                //         actor: 5,
                //         effects: [
                //             {
                //                 type: 'damage',
                //                 damages: ['-50'],
                //             },
                //             {
                //                 type: 'remove',
                //                 name: 'fire',
                //             },
                //             {
                //                 type: 'skill',
                //                 name: 'normal',
                //                 objects: [-1, -3, -5, -7, -9],
                //                 damages: ['-20000', '-30000', '-10000', '-10000', '-10000'],
                //             },
                //         ]
                //     },
                // },
            ]
        }
    },
    watch: {
        already() {
            // new ActionPlot(this.avatars, this.skysState, this.figures, this.skills, this.states, this.status, this.plot).play()
        },
    },
    async created() {
        const result = await QuestService.fight(this.idQuest, this.idCluster)
    },
    methods: {
        // async test() {
        //     new ActionPlot(this.avatars, this.skysState, this.figures, this.skills, this.states, this.status, this.plot).play()
        // }
    },
    mounted() {}
}
</script>

<style>
</style>

<!-- 
        getTypeEffect(skillType) {
            return `${skillType}s`
        },
        async actionPlot() {
            // try {
                for (let turn of this.plot) {
                    for(const actor of Object.keys(turn)) {
                        // every effect only one actor who is effecting
                        // const actor = (turn[key].actor < 0) ? 'you' : 'defense'

                        // effect on a turn
                        for(let effect of turn[actor].effects) {
                            switch (effect.type) {
                                case 'skill': {
                                    // every effect only one object type who is effected, object type is effected!
                                    const skillName = effect.name
                                    const skillType = this.skills[skillName].type
                                    const skillClass = `.skill-${skillName}`
                                    const index = Math.abs(turn[actor].actor)
                                    // figure
                                    const figureName = this.skills[skillName].effects.figure
                                    const figureClass = `.${figureName}`
                                    // console.log(effect)
            
                                    // Chanting
                                    await this.status[actor][index].chanting(2000)
                                    await timeout(900)

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
                                        const objectTypeBeEffected = (effect.objects[0] < 0) ? 'you' : 'defense'
                                        const presentSkillClass = `${skillClass}-${i + 1}`
                                        const objectIndex = Math.abs(effect.objects[i])
                                        const defense = `.${objectTypeBeEffected}-${objectIndex}`
                
                                        // attacking
                                        await timeout(500).then(async () => {
                                            if (this.skills[skillName].startIs == 'object') {
                                                $(presentSkillClass).classList.remove('d-none')
                                            }
                                            this.setLocalSkillWithObject(actor, presentSkillClass, defense)
                                        })
        
                                        // Computed damage
                                        this.computedDamage(objectTypeBeEffected, objectIndex, effect, i, skillName)
        
                                        // Display number animation
                                        this.toggleNumber(skillType, effect, objectTypeBeEffected, objectIndex, i)
                                    }

                                    // Hidden skills
                                    await timeout(900).then(() => {
                                        // hidden figure
                                        if (figureName) {
                                            $(figureClass).classList.add('d-none')
                                            this.setLocalFirst(figureClass)
                                        }
                                        // hidden skills
                                        for(let i = 0; i < effect.objects.length; i++) {
                                            const objectTypeBeEffected = (effect.objects[0] < 0) ? 'you' : 'defense'
                                            const presentSkillClass = `${skillClass}-${i + 1}`
                                            const objectIndex = Math.abs(effect.objects[i])

                                            $(presentSkillClass).classList.add('d-none')
                                            this.setLocalFirst(presentSkillClass)
                                        }
                                    })

                                    break
                                }
                                case 'action': {
                                    const stateName = effect.name

                                    for(let i = 0; i < effect.objects.length; i++) {
                                        const objectTypeBeEffected = (effect.objects[i] < 0) ? 'you' : 'defense'
                                        const objectIndex = Math.abs(effect.objects[i])
                                        const stateClass = 
                                            `.${objectTypeBeEffected}__state-${stateName}-${objectIndex}`
                                        const state = $(stateClass)

                                        state.classList.remove('d-none')
                                    }
                                    break
                                }
                                case 'remove': {
                                    const index = turn[actor].actor
                                    const objectTypeBeEffected = (actor < 0) ? 'you' : 'defense'
                                    const skill = $(`.${objectTypeBeEffected}__state-${effect.name}-${index}`)

                                    skill.classList.add('d-none')
                                    break
                                }
                                default: {// damage/heal, it's display number
                                    const skillType = effect.type
                                    const index = turn[actor].actor
                                    const objectTypeBeEffected = (actor < 0) ? 'you' : 'defense'
                                    
                                    this.toggleNumber(skillType, effect, objectTypeBeEffected, index, 0)
                                    
                                    break
                                }
                            }
                        }
                        // Timeout each actor on turn
                        await timeout(400)
                    }
                    // Timeout each turn
                    await timeout(500)
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
        toggleNumber(skillType, effect, who, objectIndex, indexSkill) {
            // Damage effect, [100, 10, ...]
            const effectNumbers = effect[this.getTypeEffect(skillType)]

            if (effectNumbers.length > 0) {
                this.ToggleNumberAnimation(skillType, who, objectIndex, effectNumbers[indexSkill])
            }
        },
        ToggleNumberAnimation(type, who, index, number) {
            const i = Math.abs(index)
            const types = {
                heal: {
                    sign: '+',
                    object: $(`.${who}__heal-${i}`),
                },
                damage: {
                    sign: '-',
                    object: $(`.${who}__damage-${i}`),
                },
            }
            types[type].object.innerText = `${types[type].sign}${number}`
            types[type].object.classList.remove('d-none')

            timeout(1500).then(() => types[type].object.classList.add('d-none'))
        },
        computedDamage(objectTypeBeEffected, objectIndex, effect, index, skillName) {
            const skillType = this.skills[skillName].type
            const hpBeChanged = effect[this.getTypeEffect(skillType)][index]

            switch (skillType) {
                case 'damage':
                    this.status[objectTypeBeEffected][objectIndex].currentHp -= hpBeChanged
                    break
                case 'heal':
                    this.status[objectTypeBeEffected][objectIndex].currentHp += hpBeChanged
                    break;
            }
            const hp = this.status[objectTypeBeEffected][objectIndex].hp
            const currentHp = this.status[objectTypeBeEffected][objectIndex].currentHp
            if (currentHp > hp) {
                this.status[objectTypeBeEffected][objectIndex].currentHp = hp
            }
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
 -->
