function printResources(input) {
    let resources = {};

    for (let i = 0; i < input.length; i+=2) {
        if (resources[input[i]]) {
            let oldCount = Number(resources[input[i]]);
            let newCount = oldCount + Number(input[i + 1]);
            resources[input[i]] = newCount;
        } else {
            resources[input[i]] = Number(input[i + 1]);
        }

    }

    Object.keys(resources).forEach((resource) => {
        console.log(`${resource} -> ${resources[resource]}`);
    });
}