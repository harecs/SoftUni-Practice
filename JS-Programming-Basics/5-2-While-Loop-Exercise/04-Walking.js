function checkWalkingSteps(params) {
    let totalSteps = 0;
    let goalDiff = 0;
    let index = 0;
    let input = parseInt(params[index]);
    let goingHome = false;

    while (index < params.length) {
        input = params[index];
        if (input !== "Going home") {
            let walkSteps = parseInt(params[index]);
            totalSteps += walkSteps;
            index++;
        } else {
            goingHome = true;
            index++;
            break;
        }
    }

    if (goingHome) {
        totalSteps += parseInt(params[index]);
    }

    goalDiff = totalSteps - 10000;

    if (goalDiff < 0) {
        console.log(`${-goalDiff} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${goalDiff} steps over the goal!`);
    }
}