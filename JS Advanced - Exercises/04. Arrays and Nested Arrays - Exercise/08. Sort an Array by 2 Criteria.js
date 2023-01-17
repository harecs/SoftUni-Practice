function sortByTwoCriteria(array) {
    let sortedArray = array.slice().sort(sortingFunction);

    console.log(sortedArray.join('\n'));

    function sortingFunction(a, b) {
        if (a.length - b.length > 0) {
            return 1;
        } else if (a.length - b.length == 0) {
            if (a.localeCompare(b) > 0) {
                return 1;
            } else if (a.localeCompare(b) == 0) {
                return 0;
            } else if (a.localeCompare(b) < 0) {
                return -1;
            } 
        } else if (a.length - b.length < 0) {
            return -1;
        }
    }
}