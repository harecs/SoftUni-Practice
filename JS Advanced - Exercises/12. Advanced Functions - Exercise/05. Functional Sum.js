function add(number) {
    let sum = 0;

    let innerAdd = (innerNumber) => {
        sum += innerNumber;
        return innerAdd;
    };

    innerAdd.toString = () => { return sum };

    return innerAdd(number);
}