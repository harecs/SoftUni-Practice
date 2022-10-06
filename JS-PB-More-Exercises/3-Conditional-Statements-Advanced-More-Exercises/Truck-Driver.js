function calculateTruckDriverIncome([arg1, arg2]) {
    let season = arg1.toLowerCase();
    let kilometersPerMonth = parseFloat(arg2);
    let kilometersPerSeason = kilometersPerMonth * 4;
    let incomePerKilometer = 0;
    
    if (kilometersPerMonth <= 5000) {
        switch (season) {
            case "spring":
            case "autumn":
                incomePerKilometer = 0.75;
                break;
            case "summer":
                incomePerKilometer = 0.90;
                break;
            case "winter":
                incomePerKilometer = 1.05;
                break;
        }
    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <=10000) {
        switch (season) {
            case "spring":
            case "autumn":
                incomePerKilometer = 0.95;
                break;
            case "summer":
                incomePerKilometer = 1.10;
                break;
            case "winter":
                incomePerKilometer = 1.25;
                break;
        }
    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        incomePerKilometer = 1.45;
    }

    let totalIncomeAfterTax = (kilometersPerSeason * incomePerKilometer) * 0.90;

    console.log(totalIncomeAfterTax.toFixed(2));
}