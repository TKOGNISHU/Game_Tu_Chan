

class Skill {
    constructor({
        name = 'normal-heal',
        type = 'heal',
        amount = 2, // number of skill attend to defense same time
        style = 'width: 100px; background-size: auto; background-position-y: 100%;',
        animation = 'animation-100',
        startIs = 'object', // sky: from sky / you: from people action skill / object: immediacy from object be attacked, vd skill from earth, ect.
        delay = 0, // delay between (sky/figure) and action
        effects = {
            sky: '',
            figure: 'magic_ring_normal', // from you
            action: heal_1s, // animation from you -> object / immediately object
        },
        location
    }) {
        this.type = type
        this.name = name
        this.amount = amount
        this.style = style
        this.animation = animation
        this.startIs = startIs
        this.delay = delay
        this.location = location
        this.effects = {}

        this.effects.sky = effects.sky
        this.effects.figure = effects.figure
        this.effects.action = effects.action
    }
}

export default Skill
