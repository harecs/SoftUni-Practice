function calculateNeededMoney([arg1, arg2, arg3, arg4]) {
    let pens = parseInt(arg1);
    let markers = parseInt(arg2);
    let cleaners = parseInt(arg3);
    let discountPercentage = parseInt(arg4);

    let neededMoney = ((pens * 5.80) + (markers * 7.20) + (cleaners * 1.20)) * (1 - (discountPercentage / 100));
    console.log(neededMoney);
}