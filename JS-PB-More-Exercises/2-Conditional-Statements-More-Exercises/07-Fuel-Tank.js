function checkFuelTank([arg1, arg2]) {
    let typeFuel = arg1.toLowerCase();
    let litresFuel = parseFloat(arg2);

    if (typeFuel === "diesel") {
        if (litresFuel >= 25) {
            console.log(`You have enough ${typeFuel}.`);
        } else {
            console.log(`Fill your tank with ${typeFuel}!`);
        }
    } else if (typeFuel === "gasoline") {
        if (litresFuel >= 25) {
            console.log(`You have enough ${typeFuel}.`);
        } else {
            console.log(`Fill your tank with ${typeFuel}!`);
        }
    } else if (typeFuel === "gas") {
        if (litresFuel >= 25) {
            console.log(`You have enough ${typeFuel}.`);
        } else {
            console.log(`Fill your tank with ${typeFuel}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}