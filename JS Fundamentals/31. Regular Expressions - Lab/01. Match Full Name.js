function matchFullNames(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let fullNames = input.match(pattern);

    console.log(fullNames.join(' '));
}