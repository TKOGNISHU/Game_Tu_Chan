import logger from './logger'

class ActionPlot {
    constructor(avatars, skysState, figures, skills, states, status, plot, round, locationSkill) {
        this.avatars = avatars
        this.skysState = skysState
        this.figures = figures
        this.skills = skills
        this.states = states
        this.status = status
        this.plot = plot
        this.round = round
        this.locationSkill = locationSkill
    }

    getTypeEffect(type) {
        return `${type}s`
    }

    findTypeEffect(effect) {
        let type = 'heal'
        if (!effect[`${type}s`] && effect['damages'][0] < 0) {
            type = 'damage'
        }

        return type
    }

    computedDamage(who, objectIndex, effect, index) {
        const _this = this
        let type = 'heals'
        if (!effect[type]) {
            type = 'damages'
        }
        const changes = {
            hp() {
                const hpBeChanged = effect[type][index]
                _this.status[who][objectIndex].currentHp += new Number(hpBeChanged)

                this.formatStatus('hp', 'currentHp')
                if (_this.status[who][objectIndex].currentHp <= 0) {
                    const objectDeath = $(_this.status[who][objectIndex].containerClass)
                    objectDeath.classList.add('d-none')
                }
            },
            mp() {
                const mpBeChanged = effect[type][index]
                _this.status[who][objectIndex].currentMp += new Number(mpBeChanged)

                this.formatStatus('mp', 'currentMp')
            },
            formatStatus(baseType, type) {
                const current = _this.status[who][objectIndex][type]
                if (current > _this.status[who][objectIndex][baseType]) {
                    _this.status[who][objectIndex][type] = _this.status[who][objectIndex][baseType]
                } else if (current <= 0) { _this.status[who][objectIndex][type] = 0 }
            }
        }
        const typeChanged = effect.type.replace('skill-', '').toLowerCase()
        if (typeChanged) {
            changes[typeChanged] && changes[typeChanged]()
        }
    }

    computedConsume(who, objectIndex, consume) {
        const _this = this
        const changes = {
            hp() {
                const hpBeChanged = consume.value
                _this.status[who][objectIndex].currentHp += new Number(hpBeChanged)

                this.formatStatus('hp', 'currentHp')
                if (_this.status[who][objectIndex].currentHp <= 0) {
                    const objectDeath = $(_this.status[who][objectIndex].containerClass)
                    objectDeath.classList.add('d-none')
                }
            },
            mp() {
                const mpBeChanged = consume.value
                _this.status[who][objectIndex].currentMp += new Number(mpBeChanged)

                this.formatStatus('mp', 'currentMp')
            },
            formatStatus(baseType, type) {
                const current = _this.status[who][objectIndex][type]
                if (current > _this.status[who][objectIndex][baseType]) {
                    _this.status[who][objectIndex][type] = _this.status[who][objectIndex][baseType]
                } else if (current <= 0) { _this.status[who][objectIndex][type] = 0 }
            }
        }
        const typeChanged = consume.type.toLowerCase()
        if (typeChanged) {
            changes[typeChanged] && changes[typeChanged]()
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
                    turn[actor]?.consumes?.forEach((consume, index) => {
                        this.computedConsume(actor, Math.abs(turn[actor].actor), consume)
                    })
                    // every effect only one actor who is effecting
                    // effect on a turn
                    for(let i = 0; i < turn[actor].effects.length; i++) {
                        let effect = turn[actor].effects[i]
                        if(/skill-/g.test(effect.type)) {
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

                            // display skill's name
                            this.status[actor][Math.abs(turn[actor].actor)].skillName = skillName
                            $(this.status[actor][Math.abs(turn[actor].actor)].skillName_nameClass).classList.remove('d-none')
                            this.timeout(1500).then(() => $(this.status[actor][Math.abs(turn[actor].actor)].skillName_nameClass).classList.add('d-none'))

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
        
                                ///////////////////////// Có vẻ có vấn đề ///////////////////
                                // attacking
                                await this.timeout(0).then(async () => {
                                    if (this.skills[skillName].startIs == 'enemy') {
                                        $(presentSkillClass).classList.remove('d-none')
                                    }
                                    // this.setLocalSkillWithObject(actor, presentSkillClass, defense, this.skills[skillName].location)
                                    this.setLocalSkillToObject(presentSkillClass, objectTypeBeEffected, defense, this.skills[skillName].location)
                                })

                                // Display number animation
                                this.toggleNumber('', effect, objectTypeBeEffected, objectIndex, i)

                                // Computed damage
                                this.computedDamage(objectTypeBeEffected, objectIndex, effect, i, skillName)
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
                        } else {
                            switch (effect.type) {
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
                                    const skill = $(`.${objectTypeBeEffected}__state-${effect.name.replace(/ /g, '-')}-${Math.abs(index)}`)
                                    skill.classList.add('d-none')
                                    // console.group('--------')
                                    // console.log(skill)
                                    // console.log("%c objectTypeBeEffected: ", 'color: yellow;', objectTypeBeEffected)
                                    // console.log('%c effect.name: ', 'color: yellow;', effect.name.replace(/ /g, '-'))
                                    // console.log('%c index: ', 'color: yellow;', index)
                                    // console.groupEnd
                                    break
                                }
                                default: {// damage/heal, it's display number
                                    let type = this.findTypeEffect(effect)
                                    for (let i = 0; i < effect.objects.length; i++) {
                                        const objectTypeBeEffected = (effect.objects[i] < 0) ? 'you' : 'defense'
        
                                        this.toggleNumber(type, effect, objectTypeBeEffected, effect.objects[i], i)
                                    }
    
                                    break
                                }
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
                this.round.index += 1
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
            this.setLocalSkillWithObject(who, figureClass, `.${who}-${actorIndex}`, this.skills[skillName].location)
            $(figureClass).classList.remove('d-none')
            // Flip horizontally
            if (who == 'defense') {
                $(figureClass).classList.add('flip-horizontal')
                $(figureClass).classList.add('left-100')
            }
        }
        // Display skills
        // console.log(this.skills[skillName].startIs)
        if (this.skills[skillName].startIs == 'you') {
            for(let i = 0; i < objects.length; i++) {
                $(`${skillClass}-${i + 1}`).classList.remove('d-none')
                this.setLocalSkillWithObject(who, `${skillClass}-${i+1}`, `.${who}-${actorIndex}`, this.skills[skillName].location)
                if (who == 'defense') {
                    $(`${skillClass}-${i+1}`).classList.add('flip-horizontal')
                }
            }
        }
        if (this.skills[skillName].startIs == 'object') {
            for(let i = 0; i < objects.length; i++) {
                $(`${skillClass}-${i + 1}`).classList.remove('d-none')
                this.setLocalSkillWithObject(who, `${skillClass}-${i+1}`, `.${who}-${actorIndex}`, this.skills[skillName].location)
                if (who == 'defense') {
                    $(`${skillClass}-${i+1}`).classList.add('flip-horizontal')
                }
            }
        }
    }

    toggleNumber(typeEffect, effect, who, objectIndex, indexSkill) {
        // Damage effect, [100, 10, ...]
        let type = typeEffect || this.findTypeEffect(effect)
        const effectNumbers = effect[this.getTypeEffect(type)]

        if (effectNumbers && effectNumbers.length > 0) {
            this.ToggleNumberAnimation(type, who, objectIndex, effectNumbers[indexSkill])
        }
    }

    ToggleNumberAnimation(type, who, index, number) {
        const i = Math.abs(index)
        const objectNumberDisplay = $(this.status[who][i][type])

        objectNumberDisplay.innerText = `${number}`
        objectNumberDisplay.classList.remove('d-none')

        this.timeout(1500).then(() => objectNumberDisplay.classList.add('d-none'))
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

    async setLocalSkillWithObject(who, yourSkill, object, location) {//(who, yourSkill, object)
        const skill = $(yourSkill)
        const sign = (who == 'you') ? 1 : -1
        location = location || 'middle'
        console.log(this.locationSkill, location)
        // Local rect on viewport
        const skillRect = skill.getBoundingClientRect()
        const defense = $(object).getBoundingClientRect()
        // 
        let x =   defense.x
                    + defense.width / 2
                    - skillRect.width / 2
                    - (-this.locationSkill[location]) * sign
        const y =   defense.y

        skill.style.translate = `${x}px ${y}px`
    }

    async setLocalSkillToObject(yourSkill, object, objectClass, location) {//(who, yourSkill, object)
        const skill = $(yourSkill)
        const sign = (object == 'you') ? 1 : -1
        location = location || 'middle'
        console.log(this.locationSkill, location)
        // Local rect on viewport
        const skillRect = skill.getBoundingClientRect()
        const defense = $(objectClass).getBoundingClientRect()
        // 
        let x =   defense.x
                    + defense.width / 2
                    - skillRect.width / 2
                    - (-this.locationSkill[location]) * sign
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
