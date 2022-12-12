function piccolo(input) {
    
    let parkingLot = [];

    input.forEach(command => {
        let [direction, carNumber] = command.split(', ');

        if (direction == 'IN' && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction == 'OUT' && parkingLot.includes(carNumber)) {
            parkingLot = parkingLot.filter((cN) => cN !== carNumber);
        }
    });

    if (parkingLot.length > 0) {
        console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}