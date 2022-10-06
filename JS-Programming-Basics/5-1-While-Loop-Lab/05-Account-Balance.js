function editBalance(args) {
    let balance = 0;
    let index = 0;
    let balanceCommand = args[index];

    while (balanceCommand !== "NoMoreMoney") {
        balanceIncrease = parseFloat(balanceCommand);

        if (balanceIncrease < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            balance += balanceIncrease;
            index++;
            console.log(`Increase: ${balanceIncrease.toFixed(2)}`);
        }

        balanceCommand = args[index];
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}