function printBuildingPlan([arg1, arg2]) {
    let floors = parseInt(arg1);
    let rooms = parseInt(arg2);
    let output = "";
    
    for (let roomNumber = 0; roomNumber < rooms; roomNumber++) {
        output += `L${floors}${roomNumber} `;
    }

    console.log(output);
    output = "";
    floors--;

    for (let floorNumber = floors; floorNumber >= 1; floorNumber--) {
        if (floorNumber % 2 === 0) {
            for (let roomNumber = 0; roomNumber < rooms; roomNumber++) {
                output += `O${floorNumber}${roomNumber} `;
            }
        } else {
            for (let roomNumber = 0; roomNumber < rooms; roomNumber++) {
                output += `A${floorNumber}${roomNumber} `;
            }
        }

        console.log(output);
        output = "";
    }
}