function calculateFlowersPrice([arg1, arg2, arg3]) {
    let typeFlowers = arg1.toLowerCase();
    let outputTypeFlowers = arg1;
    let countFlowers = parseInt(arg2);
    let budget = parseInt(arg3);
    let totalPrice = 0;

    switch (typeFlowers) {
        case "roses":
            totalPrice = countFlowers * 5;
            if (countFlowers > 80) {
                totalPrice *= 0.90;
            }
            break;
        case "dahlias":
            totalPrice = countFlowers * 3.80;
            if (countFlowers > 90) {
                totalPrice *= 0.85;
            }
            break;
        case "tulips":
            totalPrice = countFlowers * 2.80;
            if (countFlowers > 80) {
                totalPrice *= 0.85;
            }
            break;
        case "narcissus":
            totalPrice = countFlowers * 3;
            if (countFlowers < 120) {
                totalPrice *= 1.15;
            }
            break;
        case "gladiolus":
            totalPrice = countFlowers * 2.50;
            if (countFlowers < 80) {
                totalPrice *= 1.20;
            }
    }

    let outputMoney = budget - totalPrice;

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${outputTypeFlowers} and ${outputMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(outputMoney * -1).toFixed(2)} leva more.`);
    }
}