let timeBegan = null; // Начался ли отсчет?
let timeStopped = null; // В какое время остановился таймер?
let stoppedDuration = 0; // Сколько длилась остановка таймера
let startInterval = null; // Для того, чтобы остановить таймер
let flag = false; // Чтобы контролировать начало/остановку таймера

const timerContainer = document.querySelector('.time');

timerContainer.addEventListener('click', function() {
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
})

timerContainer.addEventListener('dblclick', function() {
    timerContainer.innerHTML = '00:00:00';
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    flag = false;
    clearInterval(startInterval);
})

function startTimer() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);   
}

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getMinutes();
    let seconds = timeElapsed.getSeconds();
    let ms = timeElapsed.getMilliseconds();

    ms = Math.floor(ms / 10);

    timerContainer.innerHTML = 
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (ms < 10 ? '0' + ms : ms);
}