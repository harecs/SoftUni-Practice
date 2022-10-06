function checkForNewRecord([arg1, arg2, arg3]) {
    let record = parseFloat(arg1);
    let distance = parseFloat(arg2);
    let timeForMeter = parseFloat(arg3);
    let slowDowns = Math.floor(distance / 15);
    let totalTime = distance * timeForMeter + slowDowns * 12.5;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}