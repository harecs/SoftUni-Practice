function calculateWater([arg1, arg2, arg3, arg4]) {
    let length = parseInt(arg1) / 10;
    let width = parseInt(arg2) / 10;
    let height = parseInt(arg3) / 10;
    let percentage = parseFloat(arg4) / 100;
    let volume = length * width * height;
    let totalWaterLitres = (volume - volume * percentage);

    console.log(totalWaterLitres);
}