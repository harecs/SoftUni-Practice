function manifactureCar(order) {
    let car = {};
    let wheelSize = Math.round(order.wheelsize);

    car.model = order.model;

    if (order.power > 0 && order.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if (order.power > 90 && order.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };
    } else if (order.power > 120) {
        car.engine = {
            power: 200,
            volume: 3500
        };
    }

    car.carriage = {
        type: order.carriage,
        color: order.color
    };

    if (wheelSize % 2 == 0) {
        wheelSize--;
    }

    car.wheels = (wheelSize + ' ').repeat(4).trim().split(' ').map(Number);

    return car;
}