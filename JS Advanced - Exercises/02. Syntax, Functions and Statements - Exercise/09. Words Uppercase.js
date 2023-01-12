function printWordsUppercase(input) {
    console.log(input.match(/\w+/g).map(x => x.toUpperCase()).join(', '));
}