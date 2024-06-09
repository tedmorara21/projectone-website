let h = 0;
let m = 0;
let s = 0;
let timeRem = 0;

let timeIntervalId;

let isPaused = true;

function addTime() {
    isPaused = true;

    h = document.querySelector('.input-hours').value;
    m = document.querySelector('.input-minutes').value;
    s = document.querySelector('.input-seconds').value;

    timeRem = (h * 3600) + (m * 60) + s;

    if (timeRem <= 0) {
        alert('Enter Valid time');
    } else {
        h = document.querySelector('.input-hours').value;
        m = document.querySelector('.input-minutes').value;
        s = document.querySelector('.input-seconds').value;

        h = Number(h);

        if (m < 0) {
            alert('Enter minutes over 0');
            return;
        } else if (m > 59) {
            alert('Enter minutes below 60');
            return;
        } else {
            m = Number(m);
        }

        if (s < 0) {
            alert('Enter seconds over 0');
            return;
        } else if (s > 59) {
            alert('Enter seconds below 60');
            return;
        } else {
            s = Number(s);
        }

        timeRem = (h * 3600) + (m * 60) + s;
        
        timeInWords = `${h} hours, ${m} minutes, ${s} seconds`;
    
        document.querySelector('.js-display-time')
            .innerHTML = timeInWords; 
    
        document.querySelector('.js-message')
            .innerHTML = 'Time has been added';
    
        setTimeout(function () {
            document.querySelector('.js-message')
            .innerHTML = '';
        }, 1500);
    }
}

function resetTime() {
    isPaused = true;

    document.querySelector('.js-display-time')
        .innerHTML = '';

    h = 0;
    m = 0;
    s = 0; 
    timeRem = 0;

    clearInterval(timeIntervalId);

    document.querySelector('.js-pause-button')
        .classList.add('pause-button');
    document.querySelector('.js-pause-button')
        .classList.remove('start-button');
    document.querySelector('.js-pause-button')
        .innerHTML = 'START';

    document.querySelector('.js-message')
        .innerHTML = 'Countdown has been reset';

    setTimeout(function () {
        document.querySelector('.js-message')
        .innerHTML = '';
    }, 1500)
}

function startTime() {
    isPaused = false;

    clearInterval(timeIntervalId);

        timeIntervalId = setInterval(function () {
            timeRem = timeRem - 1;
            finishCountdown();
    
            h = Math.floor(timeRem / 3600);
            m = Math.floor(((timeRem - (h * 3600))) / 60);
            s = timeRem - ((h * 3600) + (m * 60));
            timeInWords = `${h} hours, ${m} minutes, ${s} seconds`;
    
            document.querySelector('.js-display-time')
                .innerHTML = timeInWords;
        }, 1000);
    
        document.querySelector('.js-message')
            .innerHTML = 'Countdown has started';
    
        setTimeout(function () {
            document.querySelector('.js-message')
            .innerHTML = '';
        }, 1000)
    }

function pauseTime () {
    if (isPaused === false) {        
        isPaused = true;

        clearInterval(timeIntervalId);

        document.querySelector('.js-pause-button')
            .classList.add('start-button');
        document.querySelector('.js-pause-button')
            .classList.remove('pause-button');
        document.querySelector('.js-pause-button')
            .innerHTML = 'RESUME';

        document.querySelector('.js-message')
            .innerHTML = 'Countdown has been paused';
    } else if (isPaused === true) {
        document.querySelector('.js-pause-button')
            .classList.add('pause-button');
        document.querySelector('.js-pause-button')
            .classList.remove('start-button');
        document.querySelector('.js-pause-button')
            .innerHTML = 'PAUSE';
        startTime();
    }
}

function finishCountdown() {
    if (timeRem <= 0) {
        clearInterval(timeIntervalId);
        h = 0;
        m = 0;
        s = 0;
        timeRem = 0;
        timeInWords = `${0} hours, ${0} minutes, ${0} seconds`;
        alert('COUNTDOWN HAS FINISHED');
    }
}