

class Shoggoth {

    constructor() {
        if(Shoggoth.instance) return Shoggoth.instance

        let shoggothElement = document.createElement('div')
        shoggothElement.style.backgroundColor = 'grey'
        document.appendElement(shoggothElement)
        
        Shoggoth.instance = this
    }
}