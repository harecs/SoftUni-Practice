function calculateDistanceBetweenPoints(x1, y1, x2, y2) {
    let differenceX = x2 - x1;
    let differenceY = y2 -y1;
    let result = Math.sqrt(Math.pow(differenceX, 2) + (Math.pow(differenceY, 2)));

    console.log(result);
}