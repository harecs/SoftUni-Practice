function checkMoneyForVacation(params) {
    let neededMoney = parseFloat(params[0]);
    let availableMoney = parseFloat(params[1]);
    let index = 2;
    let command = params[index];
    let moneyForCommand = params[index + 1];
    let spendCount = 0;
    let days = 0;

    while (index <= params.length) {
        command = params[index];
        moneyForCommand = parseFloat(params[index + 1]);
        days++;

        if (command === "spend") {
            availableMoney -= moneyForCommand;
            spendCount++;
            if (spendCount === 5) {
                break;
            }
        } else if (command === "save") {
            availableMoney += moneyForCommand;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        index += 2;
    }

    if (availableMoney >= neededMoney) {
        if (spendCount === 5) {
            console.log("You can't save the money.");
            console.log(days);
        } else {
            console.log(`You saved the money for ${days - 1} days.`);
        }
    }
}