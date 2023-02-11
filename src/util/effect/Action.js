import Effect from './Effect'

class Action extends Effect {
    constructor(type, name = '', objects = []) {
        super(type)
        this.name = name
        this.objects = objects
    }
}

export default Action
