function bestStudent(firstStudentArray) {
    let students = {};
    students[firstStudentArray[0]] = firstStudentArray[1];

    return function (secondStudentArray) {
        students[secondStudentArray[0]] = secondStudentArray[1];

        return function (thirdStudentArray) {
            students[thirdStudentArray[0]] = thirdStudentArray[1];

            let sortedStudents = Object.keys(students).sort((a, b) => students[b] - students[a]).reduce((acc, key) => {
                acc[key] = students[key];

                return acc;
            }, {});

            return Object.keys(sortedStudents)[0];
        }
    }
}

console.log(bestStudent(['Ivan', 80])(['Petar', 100])(['Yavor', 160]));
console.log(bestStudent(['Iva', 80])(['Magi', 70])(['Yana', 60]));
console.log();