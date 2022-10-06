function checkFillingFuelPrice([arg1, arg2, arg3]) {
    let typeFuel = arg1.toLowerCase();
    let litresFuel = parseFloat(arg2);
    let promoCard = arg3.toLowerCase();
    let totalPrice = 0;

    let priceGasoline = 2.22;
    let priceDiesel = 2.33;
    let priceGas = 0.93;

    if (promoCard === "yes") {
        priceGasoline -= 0.18;
        priceDiesel -= 0.12;
        priceGas -= 0.08;
    }

    if (typeFuel === "gasoline") {
        totalPrice = litresFuel * priceGasoline;
    } else if (typeFuel === "diesel") {
        totalPrice = litresFuel * priceDiesel;
    } else if (typeFuel === "gas") {
        totalPrice = litresFuel * priceGas;
    }

    if (litresFuel >= 20 && litresFuel <= 25) {
        totalPrice *= 0.92;
    } else if  (litresFuel > 25) {
        totalPrice *= 0.90;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}