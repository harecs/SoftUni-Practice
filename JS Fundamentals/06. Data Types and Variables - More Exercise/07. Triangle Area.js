function calculateTriangleArea(firstSide, secondSide, thirdSide) {
    let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
    let triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) * (semiPerimeter - secondSide) * (semiPerimeter - thirdSide));
    console.log(triangleArea);
}