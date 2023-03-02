function Person(firstName, lastName) {
    let person = { firstName, lastName };

    Object.defineProperty(person, 'fullName', {
        get() { return `${this.firstName} ${this.lastName}`; },
        set(input) {
            let [first, last] = input.split(' ');

            this.firstName = last ? first : this.firstName;
            this.lastName = last ? last : this.lastName;
        }
    });

    return person;
}