function validatePoints(points) {
    
    let calculateDistanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    let x1 = points[0];
    let y1 = points[1];
    let x2 = points[2];
    let y2 = points[3];


    let firstPointsDistanceFromCenter = calculateDistanceBetweenPoints(x1, y1, 0, 0);
    let secondPointsDistanceFromCenter = calculateDistanceBetweenPoints(x2, y2, 0, 0);
    let distanceBetweenPoints = calculateDistanceBetweenPoints(x1, y1, x2, y2);

    if (firstPointsDistanceFromCenter % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondPointsDistanceFromCenter % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (distanceBetweenPoints % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}