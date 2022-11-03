function calculateBagsTax([arg1, arg2, arg3, arg4]) {
    let priceBig = parseFloat(arg1);
    let kgBags = parseFloat(arg2);
    let daysToTrip = parseInt(arg3);
    let bagsCount = parseInt(arg4);
    
    let priceMid = priceBig * 0.50;
    let priceSmall = priceBig * 0.20;

    let totalPrice = 0;

    if (kgBags < 10) {
        totalPrice = bagsCount * priceSmall;
    } else if (kgBags >= 10 && kgBags <= 20) {
        totalPrice = bagsCount * priceMid;
    } else if (kgBags > 20) {
        totalPrice = bagsCount * priceBig;
    }

    if (daysToTrip > 30) {
        totalPrice *= 1.10;
    } else if (daysToTrip >= 7 && daysToTrip <= 30) {
        totalPrice *= 1.15;
    } else if (daysToTrip < 7) {
        totalPrice *= 1.40;
    }

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

calculateBagsTax(["30",
"18",
"15",
"2"]);
calculateBagsTax(["25.50",
"5",
"36",
"6"]);
calculateBagsTax(["63.80",
"23",
"3",
"1"]);