function calculateNeededHoursPerDay([arg1, arg2, arg3]) {
    let pagesTotal = parseInt(arg1);
    let pagesPerHour = parseInt(arg2);
    let days = parseInt(arg3);
    let pagesPerDay = (pagesTotal / pagesPerHour) / days;

    console.log(pagesPerDay);
}