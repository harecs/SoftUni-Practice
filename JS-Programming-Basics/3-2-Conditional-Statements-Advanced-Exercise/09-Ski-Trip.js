function calculateSkiTripPrice([arg1, arg2, arg3]) {
    let days = parseInt(arg1);
    let typeRoom = arg2.toLowerCase();
    let rating = arg3.toLowerCase();
    let nights = days - 1;
    let pricePerNight = 0;

    switch (typeRoom) {
        case "room for one person":
            pricePerNight = 18;
            break;
        case "apartment":
            pricePerNight = 25;
            if (nights < 10) {
                pricePerNight *= 0.70;
            } else if (nights >= 10 && nights <= 15) {
                pricePerNight *= 0.65;
            } else {
                pricePerNight *= 0.50;
            }
            break;
        case "president apartment":
            pricePerNight = 35;
            if (nights < 10) {
                pricePerNight *= 0.90;
            } else if (nights >= 10 && nights <= 15) {
                pricePerNight *= 0.85;
            } else {
                pricePerNight *= 0.80;
            }
            break;
    }

    switch (rating) {
        case "positive":
            pricePerNight *= 1.25;
            break;
        case "negative":
            pricePerNight *= 0.90;
    }

    let totalPrice = nights * pricePerNight;
    
    console.log(totalPrice.toFixed(2));
}