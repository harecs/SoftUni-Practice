function checkIfMoneyAreEnough([arg1, arg2, arg3]) {
    let budget = parseFloat(arg1);
    let statists = parseInt(arg2);
    let priceClothes = parseFloat(arg3);
    let neededMoneyForClothes = statists * priceClothes;
    budget *= 0.90;
    if (statists > 150) {
        neededMoneyForClothes *= 0.90;
    }

    if (neededMoneyForClothes > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(neededMoneyForClothes - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - neededMoneyForClothes).toFixed(2)} leva left.`);
    }
}