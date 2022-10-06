function chooseSchoolCamp([arg1, arg2, arg3, arg4]) {
    let season = arg1.toLowerCase();
    let groupType = arg2.toLowerCase();
    let students = parseInt(arg3);
    let nights = parseInt(arg4);
    let sport = "";
    let pricePerNight = 0;
    let totalPrice = 0;

    if (season === "winter") {
        switch (groupType) {
            case "boys":
                pricePerNight = 9.60;
                sport = "Judo";
                break;
            case "girls":
                pricePerNight = 9.60;
                sport = "Gymnastics";
                break;
            case "mixed":
                pricePerNight = 10;
                sport = "Ski";
                break;
        }
    } else if (season === "spring") {
        switch (groupType) {
            case "boys":
                pricePerNight = 7.20;
                sport = "Tennis";
                break;
            case "girls":
                pricePerNight = 7.20;
                sport = "Athletics";
                break;
            case "mixed":
                pricePerNight = 9.50;
                sport = "Cycling";
                break;
        }
    } else if (season === "summer") {
        switch (groupType) {
            case "boys":
                pricePerNight = 15;
                sport = "Football";
                break;
            case "girls":
                pricePerNight = 15;
                sport = "Volleyball";
                break;
            case "mixed":
                pricePerNight = 20;
                sport = "Swimming";
                break;
        }
    }

    if (students >= 50) {
        pricePerNight *= 0.50;
    } else if (students >= 20 && students < 50) {
        pricePerNight *= 0.85;
    } else if (students >= 10 && students < 20) {
        pricePerNight *= 0.95;
    }

    totalPrice = students * (nights * pricePerNight);

    let output = `${sport} ${totalPrice.toFixed(2)} lv.`;
    console.log(output);
}