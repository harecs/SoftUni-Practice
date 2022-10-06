function printTravelingProgress(params) {
    let lineIndex = 0;
    let destination = params[lineIndex];
    
    
    while (destination !== "End") {
        destination = params[lineIndex];
        lineIndex++;
        let neededMoney = parseInt(params[lineIndex]);
        lineIndex++;
        let savingMoney = parseInt(params[lineIndex]);

        while (neededMoney > 0) {
            savingMoney = parseInt(params[lineIndex]);
            neededMoney -= savingMoney;
            lineIndex++;
            if (neededMoney <= 0) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}