function printArgumentsInfo(...params) {
    let paramsCounts = {};

    params
        .forEach(param => {
            let typeOfParam = typeof param;

            paramsCounts[typeOfParam] =
                paramsCounts[typeOfParam]
                    ? paramsCounts[typeOfParam] += 1
                    : 1;

            console.log(`${typeOfParam}: ${param}`);
        });

    Object.keys(paramsCounts)
        .sort((a, b) => paramsCounts[b] - paramsCounts[a])
        .forEach(key => console.log(`${key} = ${paramsCounts[key]}`));
}