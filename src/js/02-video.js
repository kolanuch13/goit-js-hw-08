import _ from 'lodash';
import Player from '../../node_modules/@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const callback = _.throttle(function () {
    player.getCurrentTime().then(value => {
        localStorage.setItem("videoplayer-current-time", value);
    });
}, 1000);

checkStorage();

function checkStorage() {
    if (localStorage.getItem("videoplayer-current-time") !== null) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    } else {
        player.setCurrentTime(0);
    }
}

player.on('timeupdate',
    callback
);
