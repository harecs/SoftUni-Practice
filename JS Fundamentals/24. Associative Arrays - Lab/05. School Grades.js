function printSchoolGrades(input) {

    let schoolGrades = {};

    for (const line of input) {
        let splittedLine = line.split(' ');

        let name = splittedLine.shift();
        let grades = splittedLine.map(Number);

        if (Object.keys(schoolGrades).includes(name)) {
            let currentGrades = schoolGrades[name];

            for (const grade of grades) {
                currentGrades.push(grade);
            }
        } else {
            schoolGrades[name] = grades;
        }
    }
    
    Object.keys(schoolGrades).forEach(name => {
        let averageGrade = 0;

        for (const grade of schoolGrades[name]) {
            averageGrade += grade;
        }

        averageGrade = (averageGrade / schoolGrades[name].length);

        schoolGrades[name] = averageGrade;
    });

    let sortedNames = Object.keys(schoolGrades).sort((a, b) => a.localeCompare(b));
    
    let sortedGrades = {};

    for (const name of sortedNames) {
        sortedGrades[name] = schoolGrades[name];
    }

    schoolGrades = sortedGrades

    for (const name in schoolGrades) {
        console.log(`${name}: ${schoolGrades[name].toFixed(2)}`);
    }
}