function findBestPlayer(params) {
    let index = 0;
    let name = params[index];
    let goals = parseInt(params[index+1]);
    let bestName = name;
    let bestGoals = goals;
// gleday &&
    while (name !== "END") {
        if (goals > bestGoals) {
            bestGoals = goals;
            bestName = name;
        }

        if (bestGoals >= 10) {
            break;
        }
        index += 2
        name = params[index];
        goals = parseInt(params[index+1]);
    }

    console.log(`${bestName} is the best player!`);

    if (bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

findBestPlayer(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);
findBestPlayer(["Silva",
"5",
"Harry Kane",
"10"]);
findBestPlayer(["Petrov",
"2",
"Drogba",
"11"]);
findBestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"]);
findBestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);