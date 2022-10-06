function checkExamPreparation(params) {
    let poorGradesLimit = parseInt(params[0]);
    let poorGradesCount = 0;
    let index = 1;
    let command = params[index];
    let grade = 0;
    let averageGrade = 0;
    let problemsCount = 0;
    let lastProblemName = "";
    let poorPerformance = false;

    while (command !== "Enough") {
        grade = parseInt(params[index + 1]);
        averageGrade += grade;
        problemsCount++;
        lastProblemName = command;

        if (grade <= 4) {
            poorGradesCount++;

            if (poorGradesCount === poorGradesLimit) {
                poorPerformance = true;
                break;
            }
        }

        index += 2;
        command = params[index];
    }

    if (poorPerformance) {
        console.log(`You need a break, ${poorGradesCount} poor grades.`);
    } else {
        console.log(`Average score: ${(averageGrade / problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblemName}`);
    }
}