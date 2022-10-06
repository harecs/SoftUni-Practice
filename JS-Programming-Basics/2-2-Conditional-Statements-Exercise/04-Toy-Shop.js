function checkMoneyFromToys([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let tripPrice = parseFloat(arg1);
    let countPuzzles = parseInt(arg2);
    let countDolls = parseInt(arg3);
    let countBears = parseInt(arg4);
    let countMinions = parseInt(arg5);
    let countTrucks = parseInt(arg6);
    let totalCount = countPuzzles + countDolls + countBears + countMinions + countTrucks;
    let totalPrice = countPuzzles * 2.60 + countDolls * 3 + countBears * 4.10 + countMinions * 8.20 + countTrucks * 2;

    if (totalCount >= 50) {
        totalPrice *= 0.75;
    }

    totalPrice *= 0.90;

    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}