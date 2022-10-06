function calculateMoneyForRepainting([arg1, arg2, arg3, arg4]) {
    let nylon = parseInt(arg1);
    let paint = parseInt(arg2);
    let paintPlus = parseInt(arg3);
    let hours = parseInt(arg4);

    let priceMaterials = ((nylon + 2) * 1.50) + ((paint * 1.10) * 14.50) + (paintPlus * 5) + 0.40;
    let pricePainters = (priceMaterials * 0.30) * hours;
    let priceTotal = priceMaterials + pricePainters;

    console.log(priceTotal);
}