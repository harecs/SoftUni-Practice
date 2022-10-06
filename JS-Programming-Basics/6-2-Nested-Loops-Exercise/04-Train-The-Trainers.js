function calculateGrades(params) {
    let jury = parseInt(params[0]);
    let index = 1;
    let currentProject = params[index];
    let finalGrade = 0;
    let projectsCount = 0;

    while (currentProject !== "Finish") {
        let currentGrade = 0;
        projectsCount++;

        for (let i = (index + 1); i <= (index + jury); i++) {
            currentGrade += parseFloat(params[i]);
        }

        currentGrade /= jury;
        finalGrade += currentGrade;

        console.log(`${currentProject} - ${currentGrade.toFixed(2)}.`);

        index += jury + 1;
        currentProject = params[index];
    }

    finalGrade /= projectsCount;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}