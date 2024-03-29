import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/ads'

const video = document.querySelector('video')

const config = {
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
}

const player = new MediaPlayer(config)

const playButton:HTMLElement = document.querySelector('#play')
const muteButton:HTMLElement = document.querySelector('#mute')

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .catch(error => console.log(error.message)) 
// }