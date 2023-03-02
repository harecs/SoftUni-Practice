function calculateTimeToWalk(steps, stepLength, speedKmPH) {
    let distance = (steps * stepLength);
    let speedMPS = speedKmPH / 3.6;
    let totalSeconds = distance / speedMPS;
    let restMinutes = Math.floor(distance / 500);

    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;

    let minutes = Math.floor(totalSeconds / 60);
    totalSeconds -= minutes * 60;
    minutes += restMinutes;

    let seconds = Math.round(totalSeconds);

    let hoursText = hours < 10 ? `0${hours}` : hours;
    let minutesText = minutes < 10 ? `0${minutes}` : minutes;
    let secondsText = seconds < 10 ? `0${seconds}` : seconds;
    
    console.log(`${hoursText}:${minutesText}:${secondsText}`);
}