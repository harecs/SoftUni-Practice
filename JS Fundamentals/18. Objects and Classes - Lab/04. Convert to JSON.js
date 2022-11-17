function convertPersonToJSON(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let personInJSON = JSON.stringify(person);
    console.log(personInJSON);
}