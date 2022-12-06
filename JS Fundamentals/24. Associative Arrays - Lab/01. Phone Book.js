function phoneBook(input) {
    let contacts = {};
    
    for (const line of input) {
        let [name, number] = line.split(' ');

        contacts[name] = number;
    }

    Object.keys(contacts).forEach(key => {
        console.log(`${key} -> ${contacts[key]}`);
    });
}