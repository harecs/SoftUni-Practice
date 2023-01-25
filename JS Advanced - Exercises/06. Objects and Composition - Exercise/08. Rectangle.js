function rectangle(inputWidth, inputHeight, inputColor) {
    let colorPascalCase = inputColor.toLowerCase().split('');
    colorPascalCase[0] = colorPascalCase[0].toUpperCase();
    colorPascalCase = colorPascalCase.join('');

    let rectangleObj = {
        width: inputWidth,
        height: inputHeight,
        color: colorPascalCase,
        calcArea: function() {
            return this.width * this.height;
        }
    }

    return rectangleObj;
}