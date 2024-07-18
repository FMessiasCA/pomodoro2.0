const playButton = document.querySelector('#playButton');
const countDown = document.querySelector('h1');

const myTimeout = setTimeout(start, 3000);

playButton.addEventListener('click', countDownStart);

function start() {
    let time = 45;

    while (time !== 0) {
        time = --time;
        console.log(time)
    }
}

function countDownStart(event) {
    start();
    /* countDown.innerText = time; */
}