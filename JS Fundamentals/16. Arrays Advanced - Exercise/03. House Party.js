function houseParty(answers) {
    let goingPeople = [];

    for (let i = 0; i < answers.length; i++) {
        let currentAnswer = answers[i].split(' ');

        if (currentAnswer.length == 3) {
            if (goingPeople.includes(currentAnswer[0])) {
                console.log(`${currentAnswer[0]} is already in the list!`);
            } else {
                goingPeople.push(currentAnswer[0]);
            }
        } else if (currentAnswer.length == 4) {
            if (goingPeople.includes(currentAnswer[0])) {
                let sortedPeople = [];

                for (let j = 0; j < goingPeople.length; j++) {
                    if (goingPeople[j] != currentAnswer[0]) {
                        sortedPeople.push(goingPeople[j]);
                    }
                }

                goingPeople = sortedPeople;
            } else {
                console.log(`${currentAnswer[0]} is not in the list!`);
            }
        }
    }

    for (const person of goingPeople) {
        console.log(person);
    }
}