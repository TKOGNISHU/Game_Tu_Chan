import Effect from './Effect'

class Heal extends Effect {
    constructor(type, objects = [], heals = []) {
        super(type)
        this.objects = objects
        this.heals = heals
    }
}

export default Heal
