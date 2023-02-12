class State {
    constructor({
        name = 'fire',
        type = 'damage', // damage/heal/'' ('' when effect decrease atk/... not hp or mp)
        amount = 1,
        effect = fire,
        style = '',
        animation = 'animation-100-04-2-infinite',
    }) {
        this.name = name
        this.type = type
        this.amount = amount
        this.effect = effect
        this.style = style
        this.animation = animation
    }
}

export default State
