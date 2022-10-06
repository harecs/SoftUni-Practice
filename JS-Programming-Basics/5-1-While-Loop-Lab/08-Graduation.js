function checkGraduation(params) {
    let name = params[0];
    let year = 1;
    let averageGrade = 0.00;
    let currentGrade = parseFloat(params[year]);
    let poorGrades = 0;

    while (poorGrades < 1 && year <= 12) {
        currentGrade = parseFloat(params[year]);

        if (currentGrade < 4.00) {
            poorGrades++;
        }

        averageGrade += currentGrade;

        year++;
    }

    averageGrade /= 12;

    if (year === (12 + 1)) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year - 1} grade`);
    }
}