function printDayOfWeek(numberOfDay) {
    const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (numberOfDay < 1 || numberOfDay > 7) {
        console.log('Invalid day!');
    } else {
        console.log(daysOfWeek[numberOfDay - 1]);
    }
}