
function logger(...message) {
    console.group()
    for(let i = 0; i < message.length; i++) {
        console.log(`%c${message[i]}: `, 'color: blue;', message[++i])
    }
    console.groupEnd()
}

export default logger
