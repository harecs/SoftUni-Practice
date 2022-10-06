function findBook(params) {
    let favouriteBook = params[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookName = params[index];

    while (nextBookName !== "No More Books") {
        if (nextBookName === favouriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = params[index];
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}