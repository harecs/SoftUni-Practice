function chooseVacationLocation([arg1, arg2]) {
    let budget = parseFloat(arg1);
    let season = arg2.toLowerCase();
    let location = "";
    let sleepingIn = "";
    let price = 0;

    switch (season) {
        case "summer":
            location = "Alaska";
            break;
        case "winter":
            location = "Morocco";
            break;
    }

    if (budget <= 1000) {
        sleepingIn = "Camp";
        switch (season) {
            case "summer":
                price = budget * 0.65;
                break;
            case "winter":
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        sleepingIn = "Hut";
        switch (season) {
            case "summer":
                price = budget * 0.80;
                break;
            case "winter":
                price = budget * 0.60;
                break;
        }
    } else {
        sleepingIn = "Hotel";
        price = budget * 0.90;
    }

    let output = `${location} - ${sleepingIn} - ${price.toFixed(2)}`;
    console.log(output);
}