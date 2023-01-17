function printListOfNames(names) {
    let sortedNames = sortNames(names);

    names.forEach((name, index) => {
        console.log((index + 1) + '.' + name);
    });

    function sortNames(names) {
        return names.sort((a, b) => a.localeCompare(b));
    }
}