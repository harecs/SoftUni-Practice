function calculateTimeToWalk(steps, stepLength, speed) {
    let distance = (steps * stepLength) / 1000;
    let rawTime = distance / speed;
    let hours = rawTime / 1 - rawTime % 1;

    rawTime -= hours;
    let minutes = rawTime * 100 / 60;
    console.log(`${minutes}`);
}

calculateTimeToWalk(4000, 0.60, 5);
calculateTimeToWalk(2564, 0.70, 5.5);