function checkWorkingTime([arg1, arg2]) {
    let time = parseInt(arg1);
    let day = arg2.toLowerCase();
    
    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
            if (time >= 10 && time <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        default:
            console.log("closed");
            break;
    }
}