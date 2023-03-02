function printIndexDayOfWeek(dayOfWeek) {
    let index;

    switch (dayOfWeek.toLowerCase()) {
        case 'monday':
            index = 1;
            break;
        case 'tuesday':
            index = 2;
            break;
        case 'wednesday':
            index = 3;
            break;
        case 'thursday':
            index = 4;
            break;
        case 'friday':
            index = 5;
            break;
        case 'saturday':
            index = 6;
            break;
        case 'sunday':
            index = 7;
            break;
        default:
            index = 'error';
            break;
    }

    return index;
}