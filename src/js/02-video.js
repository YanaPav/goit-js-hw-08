
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(player)

player.on('timeupdate', throttle(onPlayVideo, 1000));
    
function onPlayVideo(e) {
    console.log(e.seconds)
    localStorage.setItem("videoplayer-current-time", e.seconds);
}

const savedTime = localStorage.getItem("videoplayer-current-time") || 0
console.log(savedTime)

player.setCurrentTime(savedTime)

window.addEventListener('load', (e) => player.play())