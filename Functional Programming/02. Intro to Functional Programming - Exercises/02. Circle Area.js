function wrap(radius) {
    function pi() {
        return Math.PI;
    }

    function area(r) {
        return (pi() * (r ** 2)).toFixed(3);
    }

    return area(radius);
}