function calculateATP(args) {
    let n = parseInt(args[0]);
    let totalPoints = parseInt(args[1]);
    let seasonPoints = 0;
    let winningTournaments = 0;
    
    for (let i = 2; i <= n + 1; i++) {
        let currentTournament = args[i].toUpperCase();

        switch (currentTournament) {
            case "W":
                seasonPoints += 2000;
                winningTournaments++;
                break;
            case "F":
                seasonPoints += 1200;
                break;
            case "SF":
                seasonPoints += 720;
                break;
        }
    }

    totalPoints += seasonPoints;
    let averagePoints = seasonPoints / n;
    let winningPercentage = winningTournaments / n * 100;
    
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winningPercentage.toFixed(2)}%`);
}