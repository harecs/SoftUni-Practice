function calculateCoinsForChange(arg) {
    let input = arg;
    let change = parseFloat(input) * 100;
    change = Math.round(change);
    let coinsForChange = 0;

    while (change > 0) {
        if (change >= 200) {
            coinsForChange++;
            change -= 200;
        } else if (change >= 100) {
            coinsForChange++;
            change -= 100;
        } else if (change >= 50) {
            coinsForChange++;
            change -= 50;
        } else if (change >= 20) {
            coinsForChange++;
            change -= 20;
        } else if (change >= 10) {
            coinsForChange++;
            change -= 10;
        } else if (change >= 5) {
            coinsForChange++;
            change -= 5;
        } else if (change >= 2) {
            coinsForChange++;
            change -= 2;
        } else if (change >= 1) {
            coinsForChange++;
            change -= 1;
        }

        
    }

    console.log(coinsForChange);
}