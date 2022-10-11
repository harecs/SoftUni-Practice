function calculatePriceForVacantion(groupOfPeople, typeOfGroup, dayOfWeek) {
    let priceForDay = 0;
    let totalPrice = groupOfPeople;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                priceForDay = 8.45;
            } else if (dayOfWeek === "Saturday") {
                priceForDay = 9.80;
            } else if (dayOfWeek === "Sunday") {
                priceForDay = 10.46;
            }

            if (groupOfPeople >= 30) {
                priceForDay *= 0.85;
            }
            break;
        case "Business":
            if (dayOfWeek === "Friday") {
                priceForDay = 10.90;
            } else if (dayOfWeek === "Saturday") {
                priceForDay = 15.60;
            } else if (dayOfWeek === "Sunday") {
                priceForDay = 16;
            }

            if (groupOfPeople >= 100) {
                totalPrice -= 10;
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                priceForDay = 15;
            } else if (dayOfWeek === "Saturday") {
                priceForDay = 20;
            } else if (dayOfWeek === "Sunday") {
                priceForDay = 22.50;
            }

            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                priceForDay *= 0.95;
            }
            break;
    }

    totalPrice *= priceForDay;

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}