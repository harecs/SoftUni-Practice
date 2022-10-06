function calculateAreaAndPerimeterCircle(input) {
    let radius = parseFloat(input);
    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}