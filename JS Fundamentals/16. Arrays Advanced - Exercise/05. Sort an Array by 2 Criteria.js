function sortAnArrayByTwoCriteria(array) {
    
    function criteria(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else if (a.length == b.length) {
            if (a.toLocaleString() > b.toLocaleString()) {
                return 1;
            } else {
                return -1;
            }
        }
    }

    array.sort(criteria);
    console.log(array.join(`\n`));
}