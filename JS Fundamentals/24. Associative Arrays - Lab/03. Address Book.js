function printAddressBook(input) {
    let addressBook = createAddressBook(input);

    function createAddressBook(input) {
        let book = {};

        for (const line of input) {
            let [name, address] = line.split(':');

            book[name] = address;
        }

        return book;
    }

    function sortAddressBook(book) {
        let sortedNames = Object.keys(book).sort((a, b) => a.localeCompare(b));
        let sortedBook = {};

        for (const name of sortedNames) {
            sortedBook[name] = book[name];            
        }

        return sortedBook;
    }

    createAddressBook(input);
    addressBook = sortAddressBook(addressBook);

    Object.keys(addressBook).forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`);
    });
}