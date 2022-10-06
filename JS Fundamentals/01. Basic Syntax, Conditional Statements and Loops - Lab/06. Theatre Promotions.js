function checkTicketPrice(typeOfDay, age) {
    let kidsTicketPrice = 0;
    let adultsTicketPrice = 0;
    let pensionersTicketPrice = 0;
    
    switch (typeOfDay) {
        case "Weekday":
            kidsTicketPrice = 12;
            adultsTicketPrice = 18;
            pensionersTicketPrice = 12;
            break;
        case "Weekend":
            kidsTicketPrice = 15;
            adultsTicketPrice = 20;
            pensionersTicketPrice = 15;
            break;
        case "Holiday":
            kidsTicketPrice = 5;
            adultsTicketPrice = 12;
            pensionersTicketPrice = 10;
            break;
    }

    if (age >= 0 && age <= 18) {
        console.log(`${kidsTicketPrice}$`);
    } else if (age > 18 && age <= 64) {
        console.log(`${adultsTicketPrice}$`);
    } else if (age > 64 && age <= 122) {
        console.log(`${pensionersTicketPrice}$`);
    } else {
        console.log("Error!");
    }
}