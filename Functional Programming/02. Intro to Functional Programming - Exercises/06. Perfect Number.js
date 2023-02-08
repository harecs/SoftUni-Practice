function perfectNumber(number) {

    function checkIfPositiveInteger(num) {
        if (num % 1 == 0 && num > 0) {
            return num;
        }
    }

    function calculateAliquotSum(num) {
        let aliquotSum = 0;

        for (let i = 0; i < num; i++) {
            if (num % i == 0) {
                aliquotSum += i;
            }
        }

        return aliquotSum;
    }

    function checkIfNumberIsPerfect(num) {
        if (num == calculateAliquotSum(num)) {
            return 'It is a perfect number';
        } else {
            return 'It is not a perfect number';
        }
    }

    return checkIfNumberIsPerfect(checkIfPositiveInteger(number));
}