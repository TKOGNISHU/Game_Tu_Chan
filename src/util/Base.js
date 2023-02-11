class Base {
    timeout(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms)
        })
    }
}

export default Base
