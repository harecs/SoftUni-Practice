function checkNominee(args) {
    let actorName = args[0];
    let academyPoints = parseFloat(args[1]);
    let n = parseInt(args[2]);
    let totalPoints = academyPoints;
    let nominee = false;
    
    for (let i = 3; i <= n * 2 + 2; i+=2) {
        let evaluationName = args[i];
        let evaluationPoints = parseFloat(args[i+1]);
        totalPoints += ((evaluationName.length * evaluationPoints) / 2);

        if (totalPoints > 1250.5) {
            nominee = true;
            break;
        }
    }

    if (nominee) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
}