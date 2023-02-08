function distance(min) {

    function result(min) {
        return formula(187, minToHours(min)).toFixed(2);
    }

    function minToHours(min) {
        return min / 60;
    }

    function formula(speed, hours) {
        return speed * hours;
    }

    return result(min);
}