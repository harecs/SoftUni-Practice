function calculator() {
    let firstSelectorElement = null;
    let secondSelectorElement = null;
    let resultSelectorElement = null;

    return {
        init: (firstSelector, secondSelector, resultSelector) => {
            firstSelectorElement = document.querySelector(firstSelector);
            secondSelectorElement = document.querySelector(secondSelector);
            resultSelectorElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultSelectorElement.value = Number(firstSelectorElement.value) + Number(secondSelectorElement.value);
        },
        subtract: () => {
            resultSelectorElement.value = Number(firstSelectorElement.value) - Number(secondSelectorElement.value);
        }
    };
}