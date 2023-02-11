import Effect from './Effect'

class Remove extends Effect {
    constructor(type, name = '', objects = []) {
        super(type)
        this.name = name
        this.objects = objects
    }
}

export default Remove
