function chooseCarForRent([arg1, arg2]) {
    let budget = parseFloat(arg1);
    let season = arg2.toLowerCase();
    let carClass = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        carClass = "Economy class";

        switch (season) {
            case "summer":
                carType = "Cabrio";
                price = budget * 0.35;
                break;
            case "winter":
                carType = "Jeep";
                price = budget * 0.65;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class";

        switch (season) {
            case "summer":
                carType = "Cabrio";
                price = budget * 0.45;
                break;
            case "winter":
                carType = "Jeep";
                price = budget * 0.80;
                break;
        }
    } else if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        price = budget * 0.90;
    }

     console.log(carClass);
     console.log(carType + " - " + price.toFixed(2));
}