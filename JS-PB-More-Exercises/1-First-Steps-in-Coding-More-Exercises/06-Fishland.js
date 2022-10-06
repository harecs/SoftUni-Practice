function calculateFishPrice([arg1, arg2, arg3, arg4, arg5]) {
    let priceMackerel = parseFloat(arg1);
    let priceSprat = parseFloat(arg2);
    let priceBonito = priceMackerel * 1.60;
    let priceTrachurus = priceSprat * 1.80;
    let priceBivalvia = 7.50;

    let kgBonito = parseFloat(arg3);
    let kgTrachurus = parseFloat(arg4);
    let kgBivalvia = parseInt(arg5);

    let totalPrice = (priceBonito * kgBonito) + (priceTrachurus * kgTrachurus) + (priceBivalvia * kgBivalvia);

    console.log((Math.round(totalPrice * 1000) / 1000).toFixed(2));
}