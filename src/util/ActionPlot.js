import Immortality from './Immortality.js'
import Skill from './Skill.js'
import Figure from './Figures.js'
import State from './State.js'

class ActionPlot {
    constructor(avatars, skysState, figures, skills, states, status, plot) {
        this.avatars = avatars
        this.skysState = skysState
        this.figures = figures
        this.skills = skills
        this.states = states
        this.status = status
        this.plot = plot
    }

    getTypeEffect(type) {
        return `${type}s`
    }

    handleHP(who, objectIndex) {
        const hp = this.status[who][objectIndex].hp
        const currentHp = this.status[who][objectIndex].currentHp

        if (currentHp > hp) {
            this.status[who][objectIndex].currentHp = hp
        } else if (currentHp <= 0) {
            const objectDeath = $(`.${who}-${objectIndex}`)

            objectDeath.classList.add('d-none')
        }
    }

    async play() {
        const chantingFinishTimeout = 2500
        const effectTimeout = 500
        const changeActorTimeout = 1000
        const changeTurnTimeout = 1000
        // try {
            for (let turn of this.plot) {
                for(const actor of Object.keys(turn)) {
                    // every effect only one actor who is effecting
                    // effect on a turn
                    for(let i = 0; i < turn[actor].effects.length; i++) {
                        let effect = turn[actor].effects[i]
                        switch (effect.type) {
                            case 'skill': {
                                // every effect only one object type who is effected, object type is effected!
                                const skillName = effect.name
                                // const skillType = this.skills[skillName].type
                                const skillClass = `.skill-${skillName.replace(/ /g, '-')}`
                                const index = Math.abs(turn[actor].actor)
                                // figure
                                const figureName = this.skills[skillName].effects.figure
                                const figureClass = `.${figureName}`
                                // console.log(effect)
        
                                // Chanting
                                await this.status[actor][index].chanting(chantingFinishTimeout)
                                // await this.timeout(100)

                                // Display skill, set local
                                this.displaySkill(
                                    actor, index, effect.objects,
                                    '', '', // sky
                                    figureName, figureClass, //figure
                                    skillName, skillClass // skill
                                )

                                await this.timeout(this.skills[skillName].delay)
                                // object is attacked
                                for(let i = 0; i < effect.objects.length; i++) {
                                    // console.log(i, object)
                                    const objectTypeBeEffected = (effect.objects[0] < 0) ? 'you' : 'defense'
                                    const presentSkillClass = `${skillClass}-${i + 1}`
                                    const objectIndex = Math.abs(effect.objects[i])
                                    const defense = `.${objectTypeBeEffected}-${objectIndex}`
            
                                    // attacking
                                    await this.timeout(0).then(async () => {
                                        if (this.skills[skillName].startIs == 'enemy') {
                                            $(presentSkillClass).classList.remove('d-none')
                                        }
                                        this.setLocalSkillWithObject(actor, presentSkillClass, defense)
                                    })
    
                                    // Computed damage
                                    this.computedDamage(objectTypeBeEffected, objectIndex, effect, i, skillName)
    
                                    // Display number animation
                                    this.toggleNumber('', effect, objectTypeBeEffected, objectIndex, i)
                                }

                                // Hidden skills
                                await this.timeout(900).then(() => {
                                    // hidden figure
                                    // if (figureName) {
                                    //     $(figureClass).classList.add('d-none')
                                    //     this.setLocalFirst(figureClass)
                                    // }
                                    // hidden skills
                                    for(let i = 0; i < effect.objects.length; i++) {
                                        const presentSkillClass = `${skillClass}-${i + 1}`

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
                                        `.${objectTypeBeEffected}__state-${stateName.replace(/ /g, '-')}-${objectIndex}`
                                    // console.log(stateClass)
                                    const state = $(stateClass)

                                    state.classList.remove('d-none')
                                }
                                break
                            }
                            case 'remove': {
                                const index = turn[actor].actor
                                const objectTypeBeEffected = (actor < 0) ? 'you' : 'defense'
                                const skill = $(`.${objectTypeBeEffected}__state-${effect.name.replace(/ /g, '-')}-${index}`)

                                console.log(skill, ", objectTypeBeEffected: ", objectTypeBeEffected, ', effect.name: ', effect.name.replace(/ /g, '-'), ', index: ', index)
                                skill.classList.add('d-none')
                                break
                            }
                            default: {// damage/heal, it's display number
                                const skillType = effect.type
                                const index = turn[actor].actor
                                const objectTypeBeEffected = (index < 0) ? 'you' : 'defense'
                                
                                this.toggleNumber(skillType, effect, objectTypeBeEffected, index, 0)
                                
                                break
                            }
                        }
                        // timeout each effect
                        if ((i + 1) < turn[actor].effects.length) {
                            await this.timeout(effectTimeout)
                        }
                    }
                    // this.Timeout each actor on turn
                    await this.timeout(changeActorTimeout)
                }
                // this.Timeout each turn
                await this.timeout(changeTurnTimeout)
            }
        // } catch (e) {
        //     console.log('ERROR: ', e)
        // }
    }

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
    }

    toggleNumber(typeEffect, effect, who, objectIndex, indexSkill) {
        // Damage effect, [100, 10, ...]
        let type = typeEffect || 'heal'
        if (!effect[`${type}s`] && effect['damages'][0] < 0) {
            type = 'damage'
        }
        const effectNumbers = effect[this.getTypeEffect(type)]

        if (effectNumbers && effectNumbers.length > 0) {
            this.ToggleNumberAnimation(type, who, objectIndex, effectNumbers[indexSkill])
        }
    }

    ToggleNumberAnimation(type, who, index, number) {
        const i = Math.abs(index)
        const objectNumberDisplay = $(`.${who}__${type}-${i}`)

        objectNumberDisplay.innerText = `${number}`
        objectNumberDisplay.classList.remove('d-none')

        this.timeout(1500).then(() => objectNumberDisplay.classList.add('d-none'))
    }

    computedDamage(who, objectIndex, effect, index, skillName) {
        // const skillType = this.skills[skillName].type
        let type = 'heals'
        if (!effect[type]) {
            type = 'damages'
        }
        const hpBeChanged = effect[type][index]
        
        this.status[who][objectIndex].currentHp += new Number(hpBeChanged)

        this.handleHP(who, objectIndex)
    }

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
    }

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
    }

    animationTranslateSkill(skillClass, newLocation) {

    }

    timeout(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms)
        })
    }
}

export default ActionPlot
