function checkIfMoneyAreEnough([arg1, arg2, arg3, arg4]) {
    let budget = parseFloat(arg1);
    let gpus = parseInt(arg2);
    let cpus = parseInt(arg3);
    let memory = parseInt(arg4);
    let gpusPrice = gpus * 250;
    let cpuPrice = gpusPrice * 0.35;
    let memoryPrice = gpusPrice * 0.10;
    let totalPrice = gpusPrice + cpuPrice * cpus + memoryPrice * memory;

    if (gpus > cpus) {
        totalPrice *= 0.85;
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}