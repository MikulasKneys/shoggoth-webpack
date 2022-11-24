import Eye from './eye'

class EyeSpawner{

    constructor() {
        let spawnInterval = 1500
        let eyesTotal = 20
        this.eyesRemain = eyesTotal
        this.spawnInterval = spawnInterval
        this.eyesMaxCount = 20
        this.eyeId = 0
        this.eyes = []
        if(EyeSpawner.instance) return EyeSpawner.instance
        

        const spawnInvoker = () => {
            this.spawn()
        }

        this.spawnInterval = setInterval(spawnInvoker, spawnInterval)

        EyeSpawner.instance = this
    }

    getEyeDataToSpawn() {

    }

    spawn() {
        if(this.eyesRemain <= 0) return
        if(this.eyes.length > this.eyesMaxCount) {
            alert('lose')
            return
        }

        this.eyesRemain -= 1

        let blinkPeriodMin = 2000
        let blinkPeriod = blinkPeriodMin + Math.floor(Math.random() * 3000)
        let left = Math.random() * 95
        let top = Math.random() * 95 
        let sizeFactor = 1 - (Math.random() * 0.5)
        let width = 6 * sizeFactor
        let height = 6 * sizeFactor
        let blinkDuration = 200 + Math.floor(Math.random() * 500)
        let parentElement = document.getElementById('shoggoth')
        let eyeId = this.generateEyeId()
        let pokeInvoker = (eyeId) => {
            this.poke(eyeId)
        }
        let eye = new Eye({ parentElement, left, top, blinkPeriod, blinkDuration, width, height, eyeId, pokeToSpawner: pokeInvoker })
        this.eyes.push(eye)
        console.log(`SPAWN - eyesRemain: ${this.eyesRemain}, eye.length: ${this.eyes.length}`)
    }

    generateEyeId() {
        let eyeId = this.eyeId
        this.eyeId += 1
        return eyeId
    }

    poke(eyeId) {
        let eyeIndex = this.eyes.findIndex(eye => eye.eyeId === eyeId)
        this.eyes.splice(eyeIndex, 1)
        console.log(`POKE - eyeIndex: ${eyeIndex}, eyeId: ${eyeId} eye.length: ${this.eyes.length}`)
        if(this.eyes.length === 0 && this.eyesRemain <= 0) alert('win')
    }

    setSpawnInterval(value) {
        clearInterval(this.spawnInterval)
        this.spawnInterval = setInterval(value)
    }

    
}

new EyeSpawner()

export default EyeSpawner.instance