import Base from './Base'
import logger from './logger'

class Immortality extends Base {
    constructor({
        index, name, avatar, hp, mp, currentHP, currentMP, states
    }) {
        super()
        this.index = index
        this.indexABS = Math.abs(index)
        this.name = name
        this.avatar = avatar
        this.hp = hp
        this.mp = mp
        this.currentHp = currentHP
        this.currentMp = currentMP
        this.states = states

        this.skillName = 'Hoa Giang Kiếm Chỉ'

        this.who = (index < 0) ? 'you' : 'defense'

        this.container = `${this.who}-${this.indexABS}`
        this.containerClass = `.${this.who}-${this.indexABS}`

        this.normal = `${this.who}-${this.indexABS}-normal`
        this.normalClass = `.${this.normal}`

        this.chantingName = `${this.who}-${this.indexABS}-chanting` //${type ? `-${type}` : ''}
        this.chantingClass = `.${this.chantingName}` //${type ? `-${type}` : ''}

        this.chantingFinishName = `${this.who}-${this.indexABS}-chantingFinish`
        this.chantingFinishClass = `.${this.chantingFinishName}`

        this.skillName_name = `${this.who}__fight-skill-name-${this.indexABS}`
        this.skillName_nameClass = `.${this.who}__fight-skill-name-${this.indexABS}`

        this.numberHealEffect = `${this.who}__heal-${this.indexABS}`
        this.numberHealEffectClass = `.${this.who}__heal-${this.indexABS}`

        this.numberDamageEffect = `${this.who}__damage-${this.indexABS}`
        this.numberDamageEffectClass = `.${this.who}__damage-${this.indexABS}`
    }

    get heal() {
        return this.numberHealEffectClass
    }

    get damage() {
        return this.numberDamageEffectClass
    }

    async setState(states) {
        this.states = states
    }

    async chanting(timeout, type) {
        const _this = this
        const normal = $(this.normalClass)
        const chantingObject = $(this.chantingClass)

        normal.classList.toggle('d-none')
        chantingObject.classList.toggle('d-none')
        this.timeout(timeout).then(() => {
            chantingObject.classList.toggle('d-none')
            _this.chantingFinish()
        })
    }

    async chantingFinish() {
        const normal = $(this.normalClass)
        const chantingFinish = $(this.chantingFinishClass)
        chantingFinish.classList.toggle('d-none')
        this.timeout(1000).then(() => {
            normal.classList.toggle('d-none')
            chantingFinish.classList.toggle('d-none')
        })
    }
}

export default Immortality
