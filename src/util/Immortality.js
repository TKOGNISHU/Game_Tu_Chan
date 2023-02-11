import Base from './Base'

class Immortality extends Base {
    constructor(avatar = 'monk', hp = 99999, mp = 99999, currentHp = 0, currentMp = 0, states = []) {
        this.avatar = avatar
        this.hp = hp
        this.mp = mp
        this.currentHp = currentHp
        this.currentMp = currentMp
        this.states = states
    }

    async chanting(who, index, time, type) {
        const _this = this
        const chantingClass = `.${who}-${index}-chanting${type ?? `-${type}`}`
        const normal = $(`.${who}-${index}-normal`)
        const chanting = $(chantingClass)

        normal.classList.toggle('d-none')
        chanting.classList.toggle('d-none')
        timeout(time).then(() => {
            chanting.classList.toggle('d-none')
            _this.chantingFinish(who, index)
        })
    }

    async chantingFinish(who, index) {
        const normal = $(`.${who}-${index}-normal`)
        const chantingFinish = $(`.${who}-${index}-chantingFinish`)

        chantingFinish.classList.toggle('d-none')
        timeout(1000).then(() => {
            normal.classList.toggle('d-none')
            chantingFinish.classList.toggle('d-none')
        })
    }
}

export default Immortality
