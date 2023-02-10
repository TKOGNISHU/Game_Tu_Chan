import Effect from './Effect'

class Heal extends Effect {
    Heal(type, objects = [], heals = []) {
        super(type)
        this.objects = objects
        this.heals = heals
    }
}

export default Heal
