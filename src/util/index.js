import logger from './logger'
export { logger }

// object
import Immortality from '@/util/Immortality.js'
import Skill from '@/util/Skill.js'
import Figure from '@/util/Figures.js'
import State from '@/util/State.js'
import ActionPlot from '@/util/ActionPlot.js'

// 
import chanting from '@/assets/img/nam-tu-si/Immortality-200-chanting-3pic.png'
import chantingFinish from '@/assets/img/nam-tu-si/Immortality-200-chantingFinish.png'
import magic_ring_normal from '@/assets/img/skills/normal/normal_first.png'
import normal_finally from '@/assets/img/skills/normal/normal_finally.png'
import heal_1s from '@/assets/img/skills/heal/Heal.png'
import fire from '@/assets/img/states/fire-500.png'

export default {}

// object
export { Immortality }
export { Skill }
export { Figure }
export { State }
export { ActionPlot }

// 
export { chanting }
export { chantingFinish }
export { magic_ring_normal }
export { normal_finally }
export { heal_1s }
export { fire }

function loadImage(obj, index, url, countLoaded) {
    const img = new Image()
    console.log(`Loading: ${url}`)
    img.onload = () => {
        console.log(url)
        // console.log(index)
        obj[index] = img.src
        if (countLoaded) {
            countLoaded.index += 1
        }
    }
    img.src = url
}
export { loadImage }
