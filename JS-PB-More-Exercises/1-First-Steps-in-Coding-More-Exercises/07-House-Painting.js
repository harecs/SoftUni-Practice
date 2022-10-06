function calculateNeededPaint([arg1, arg2, arg3]) {
    let x = parseFloat(arg1);
    let y = parseFloat(arg2);
    let h = parseFloat(arg3);

    let neededPaintGreen = ((x * x) + ((x * x) - (1.2 * 2)) + (((x * y) - (1.5 * 1.5)) * 2)) / 3.4;
    let neededPaintRed = (((x * y) * 2) + ((x * h) / 2) * 2)  / 4.3;

    console.log(neededPaintGreen.toFixed(2));
    console.log(neededPaintRed.toFixed(2));
}