const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startStopBtn.addEventListener('click', ()  => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    } else {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    
    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function pad(unit) {
        return (('0') + unit).length > 2 ? unit : '0' + unit;
    }
}