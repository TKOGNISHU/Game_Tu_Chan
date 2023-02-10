import Effect from './Effect'

class Damage extends Effect {
    Damage(type, objects = [], damages = []) {
        super(type)
        this.objects = objects
        this.damages = damages
    }
}

export default Damage
