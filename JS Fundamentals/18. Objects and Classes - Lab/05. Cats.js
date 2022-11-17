function cats(catsNamesAndAges) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of catsNamesAndAges) {
        cat = cat.split(' ');
        let catName = cat.shift();
        let catAge = cat.shift();

        let objectCat = new Cat(catName, catAge);
        objectCat.meow();
    }
}