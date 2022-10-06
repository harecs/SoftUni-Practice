function calculateTicketPrice([input]) {
    let day = input.toLowerCase();

    switch (day) {
        case "monday":
        case "tuesday":
        case "friday":
            console.log(12);
            break;
        case "wednesday":
        case "thursday":
            console.log(14);
            break;
        case "saturday":
        case "sunday":
            console.log(16);
            break;
    }
}