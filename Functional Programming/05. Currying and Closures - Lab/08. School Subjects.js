function schoolSubject(firstSubject) {
    return function (secondSubject, thirdSubject) {
        return [firstSubject, secondSubject, thirdSubject]
            .sort((a, b) => a.localeCompare(b))
            .join(', ');
    }
}

console.log(schoolSubject('Math')('PE', 'English'));
console.log(schoolSubject('Biology')('History', 'Geography'));