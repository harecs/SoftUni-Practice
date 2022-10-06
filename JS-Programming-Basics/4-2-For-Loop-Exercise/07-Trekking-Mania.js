function checkTrekkingPercentage(args) {
    let n = parseInt(args[0]);
    let pSmaller = 0.0;
    let pSmall = 0.0;
    let pBig = 0.0;
    let pBigger = 0.0;
    let pBiggest = 0.0;
    let totalPeople = 0;

    for (let i = 1; i <= n; i++) {
        let people = parseInt(args[i]);
        totalPeople += people;

        if (people <= 5) {
            pSmaller += people;
        } else if (people >= 6 && people <= 12) {
            pSmall += people;
        } else if (people >= 13 && people <= 25) {
            pBig += people;
        } else if (people >= 26 && people <= 40) {
            pBigger += people;
        } else if (people >= 41) {
            pBiggest += people;
        }
    }

    pSmaller = (pSmaller / totalPeople) * 100;
    pSmall = (pSmall / totalPeople) * 100;
    pBig = (pBig / totalPeople) * 100;
    pBigger = (pBigger / totalPeople) * 100;
    pBiggest = (pBiggest / totalPeople) * 100;

    console.log(`${pSmaller.toFixed(2)}%`);
    console.log(`${pSmall.toFixed(2)}%`);
    console.log(`${pBig.toFixed(2)}%`);
    console.log(`${pBigger.toFixed(2)}%`);
    console.log(`${pBiggest.toFixed(2)}%`);
}