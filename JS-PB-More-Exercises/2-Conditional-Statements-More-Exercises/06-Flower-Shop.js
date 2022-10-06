function checkMoneyForGift([arg1, arg2, arg3, arg4, arg5]) {
    let countMagnolia = parseInt(arg1);
    let countHyacinth = parseInt(arg2);
    let countRose = parseInt(arg3);
    let countCactus = parseInt(arg4);
    let giftPrice = parseFloat(arg5);

    let income = countMagnolia * 3.25 + countHyacinth * 4 + countRose * 3.50 + countCactus * 8;
    income *= 0.95;

    if (income >= giftPrice) {
        console.log(`She is left with ${Math.floor(income - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - income)} leva.`);
    }
}