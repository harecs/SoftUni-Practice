function calculateBitcoinMining(shifts) {
    let boughtBitcoins = 0;
    let firstDayWithBitcoin = 0;
    let money = 0;

    let currentDay = 1;

    while (currentDay <= shifts.length) {
        let currentMinedGold = Number(shifts[currentDay - 1]);
        let todaysEarnedMoney = currentMinedGold * 67.51;

        if (currentDay % 3 === 0) {
            todaysEarnedMoney *= 0.70;
        }

        money += todaysEarnedMoney;

        if (money >= 11949.16) {
            while (money >= 11949.16) {
                boughtBitcoins++;
                money -= 11949.16;
    
                if (firstDayWithBitcoin === 0) {
                    firstDayWithBitcoin = currentDay;
                }   
            }
        }

        currentDay++;
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    
    if (firstDayWithBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayWithBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}