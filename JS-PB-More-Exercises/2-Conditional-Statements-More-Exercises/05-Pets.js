function checkIfTheFoodIsEnough([arg1, arg2, arg3, arg4, arg5]) {
    let days = parseInt(arg1);
    let foodKg = parseInt(arg2);
    let eatingDogKg = parseFloat(arg3);
    let eatingCatKg = parseFloat(arg4);
    let eatingTurtleGrams = parseFloat(arg5);

    let totalEatenFoodGrams = days * ((eatingDogKg + eatingCatKg) * 1000 + eatingTurtleGrams);
    let foodGrams = foodKg * 1000;

    if (foodGrams >= totalEatenFoodGrams) {
        console.log(`${Math.floor((foodGrams - totalEatenFoodGrams) / 1000)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil((totalEatenFoodGrams - foodGrams) / 1000)} more kilos of food are needed.`);
    }
}