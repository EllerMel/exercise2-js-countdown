var secondsCountDown = 0;
var minutes = 0;
var seconds = 0;
var display = document.getElementById('time');
var timer;
var currentTime = 0;

function inputTime() {
    secondsCountDown = prompt("Please enter a countdown amount in seconds", "");
    currentTime = secondsCountDown;
    timer = setInterval(tickTimer, 1000);
    tickTimer();
};

function tickTimer() {
    if (currentTime < 60) {
        countdown = "00:" + getSeconds(currentTime);
        console.log(countdown);
        display.innerHTML = countdown;
    }
    else {
        countdown = getMinutes(currentTime) + ":" + getSeconds(currentTime);
        console.log(countdown);
        display.innerHTML = countdown;
    }
    if (currentTime == 0) {
        clearInterval(timer);
    }
    currentTime--;
}

function getMinutes(time) {
    minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes;
}

function getSeconds(time) {
    seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return seconds;
}