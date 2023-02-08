function sortArray(numericArray, chosenOrder) {

    function chooseOrderFunction(order) {
        if (order == 'asc') {
            return function (array) {
                return array.slice().sort((a, b) => a - b);
            }
        } else if (order == 'desc') {
            return function (array) {
                return array.slice().sort((a, b) => b - a);
            }
        }
    }

    let sortInChosenOrderFunction = chooseOrderFunction(chosenOrder);

    return sortInChosenOrderFunction(numericArray);
}