import Effect from './Effect'

class Remove extends Effect {
    Remove(type, name = '', objects = []) {
        super(type)
        this.name = name
        this.objects = objects
    }
}

export default Remove
