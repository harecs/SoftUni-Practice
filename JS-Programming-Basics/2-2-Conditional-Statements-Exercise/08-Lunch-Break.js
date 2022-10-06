function checkIfTimeIsEnough([arg1, arg2, arg3]) {
    let serialName = arg1.toString();
    let episodeTime = parseInt(arg2);
    let breakTime = parseInt(arg3);
    let eatTime = breakTime * 0.125;
    let relaxTime = breakTime * 0.25;
    breakTime = breakTime - eatTime - relaxTime;

    if (breakTime > episodeTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(breakTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - breakTime)} more minutes.`)
    }
}