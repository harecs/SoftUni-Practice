function carFactory(input) {
    let createCarFactoryFunctionality = function () {
        let cars = {};

        return {
            create: (name, inherit, parent) => cars[name] = inherit ? Object.create(cars[parent]) : {},
            set: (name, key, value) => cars[name][key] = value,
            print: name => {
                let output = [];

                for (const key in cars[name]) {
                    output.push(`${key}:${cars[name][key]}`);
                }

                console.log(output.join(','));
            }
        }
    }

    let carFunctonality = createCarFactoryFunctionality();

    input
        .map(x => x.split(' '))
        .forEach(([command, ...args]) => {
            carFunctonality[command].apply(null, args);
        });
}