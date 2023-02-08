function booksShop(arrayOfObjects) {
    function checkIfAuthorIsAdded(author) {
        if (Object.keys(this).includes(author)) {
            return true;
        } else {
            return false;
        }
    }

    function sortAuthorsInfo() {
        sortAuthorsByNumberBooks.call(this);
        sortAuthorBooks.call(this);
    }

    function sortAuthorBooks() {
        Object.keys(this).forEach(key => {
            this[key].sort((a, b) => a.localeCompare(b));
        });
    }

    function sortAuthorsByNumberBooks() {
        Object.entries(this)
            .sort((a, b) => b[1].length - a[1].length)
            .reduce((acc, x) => {
                acc[x[0]] = x[1];
                return acc;
            }, {});
    }

    function createOutput() {
        let authorsInfoArray = [];

        for (const key in this) {
            authorsInfoArray.push(`${key} has ${this[key].length} books published in 2021 - ${this[key].join(', ')}`);
        }

        return authorsInfoArray.join('; ');
    }

    let authors = {};

    for (const obj of arrayOfObjects) {
        let authorName = obj.author;
        let bookTitle = obj.title;

        if (checkIfAuthorIsAdded.call(authors, authorName)) {

            authors[authorName].push(bookTitle);

        } else {
            authors[authorName] = [bookTitle];
        }
    }

    sortAuthorsInfo.call(authors);

    return createOutput.call(authors);
}