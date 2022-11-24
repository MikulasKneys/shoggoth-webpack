import Eye from "./eye";
import './styles/index.css'
import behold from './assets/shoggoth.jpg'
import axios from 'axios'
import eyeSpawner from './eyeSpawner'

document.getElementById('shoggoth').requestFullscreen({navigationUI: 'hide'})

let config = {
    headers: {
        Accept: 'application/json'
    }
}

// axios.get('https://icanhazdadjoke.com', config).then(res => {
//     document.getElementById('joke').innerHTML = res.data.joke
// })

// let shoggoth = document.getElementById('shoggothImg')
// shoggoth.src = behold
