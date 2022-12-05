function calculateNeededTime(input) {
    let firstWorker = Number(input[0]);
    let secondWorker = Number(input[1]);
    let thirdWorker = Number(input[2]);
    let workersEfficiency = firstWorker + secondWorker + thirdWorker;
    let studentsCount = Number(input[3]);
    let neededHours = 0;
    let workedHoursCount = 0;

    while (studentsCount > 0) {
        studentsCount -= workersEfficiency;
        neededHours++;
        workedHoursCount++;

        if (studentsCount <= 0) {
            break;
        }

        if (workedHoursCount % 3 == 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);
}

calculateNeededTime(['5','6','4','20']);
calculateNeededTime(['1','2','3','45']);
calculateNeededTime(['3','2','5','40']);