class Figure {
    constructor({
        name = 'magic_ring_normal',
        effect = magic_ring_normal,
        style = 'width: 100px; margin-top: -150px;',
        animation = '',
    }) {
        this.name = name
        this.effect = effect
        this.style = style
        this.animation = animation
    }
}

export default Figure
