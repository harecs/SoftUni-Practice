function calculateFishBoatPrice([arg1, arg2, arg3]) {
    let budget = parseInt(arg1);
    let season = arg2.toLowerCase();
    let fishermen = parseInt(arg3);
    let price = 0;

    switch (season) {
        case "spring":
            price = 3000;
            break;
        case "summer":
        case "autumn":
            price = 4200;
            break;
        case "winter":
            price = 2600;
            break;
    }

    if (fishermen <= 6) {
        price *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        price *= 0.85;
    } else if (fishermen >= 12) {
        price *= 0.75;
    }

    if (fishermen % 2 === 0) {
        switch (season) {
            case "spring":
            case "summer":
            case "winter":
                price *= 0.95;
        }
    }

    let outputMoney = budget - price;
    let outputEnoughMoney = "Yes! You have " + outputMoney.toFixed(2) + " leva left.";
    let outputNotEnoughMoney = "Not enough money! You need " + (outputMoney * -1).toFixed(2) + " leva.";
    
    if (budget >= price) {
        console.log(outputEnoughMoney);
    } else {
        console.log(outputNotEnoughMoney);
    }
}