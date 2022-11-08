function calculateCarWashedPercentage(operations) {
    
    function cleanWithSoap(cleanedPercentage) {
        cleanedPercentage += 10;
        return cleanedPercentage;
    }

    function cleanWithWater(cleanedPercentage) {
        cleanedPercentage *= 1.20;
        return cleanedPercentage;
    }

    function cleanWithVacuumCleaner(cleanedPercentage) {
        cleanedPercentage *= 1.25;
        return cleanedPercentage;
    }

    function mud(cleanedPercentage) {
        cleanedPercentage *= 0.90;
        return cleanedPercentage;
    }

    let cleanedPercentage = 0;

    for (const operation of operations) {
        switch (operation) {
            case 'soap':
                cleanedPercentage = cleanWithSoap(cleanedPercentage);
                break;
            case 'water':
                cleanedPercentage = cleanWithWater(cleanedPercentage);
                break;
            case 'vacuum cleaner':
                cleanedPercentage = cleanWithVacuumCleaner(cleanedPercentage);
                break;
            case 'mud':
                cleanedPercentage = mud(cleanedPercentage);
                break;
        }
    }

    console.log(`The car is ${cleanedPercentage.toFixed(2)}% clean.`);
}