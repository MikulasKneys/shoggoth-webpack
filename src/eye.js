
class Eye {

    constructor({ parentElement, left, top, blinkPeriod, blinkDuration, width, height, eyeId, pokeToSpawner }) {
        const blinkInvoker = () => {
            this.blink(eyeElement)
        }
        const pokeInvoker = (e) => {
            this.poke()
        }
        
        this.eyeId = eyeId
        this.pokeToSpawner = pokeToSpawner
        this.blinkPeriod = blinkPeriod
        this.blinkDuration = blinkDuration
        // console.log(`new eye #${eyeId}!`)
        let eyeElement = document.createElement('div')
        eyeElement.classList.add('eye','eye-opened')
        eyeElement.style.left = `${left}%`
        eyeElement.style.top = `${top}%`
        eyeElement.style.width = `${width}%`
        eyeElement.style.height = `${height}%`
        eyeElement.id = eyeId
        parentElement.append(eyeElement)
        this.eyeElement = document.getElementById(`${this.eyeId}`)
        this.eyeElement.addEventListener('click', pokeInvoker)
        this.blinkInterval = setInterval(blinkInvoker, this.blinkPeriod)
        
    }

    blink(eyeElement) {
        // console.log('blink')
        this.eyeElement.classList.remove('eye-opened')
        this.eyeElement.classList.add('eye-closed')
        this.state = 'closed'
        const openInvoker = () => {
            this.eyeElement.classList.remove('eye-closed')
            this.eyeElement.classList.add('eye-opened')
            this.state = 'opened'
        }
        setTimeout(openInvoker, this.blinkDuration)
    }

    poke() {
        if(this.state === 'opened') {
            this.eyeElement.remove()
            this.pokeToSpawner(this.eyeId)
            clearInterval(this.blinkInterval)
        }
    }

}

export default Eye