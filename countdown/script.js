const getTimeRemaining = (endTime) => {
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor(( t / 1000 ) % 60);
    let minutes = Math.floor(( t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t/ (1000 * 60 * 60 * 24));

    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }
}

const initialClock = (id, endTime) => {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    const updateClock = () => {
        let t = getTimeRemaining(endTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0){
            clearInterval(timeInterval)
        }
    }
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
}