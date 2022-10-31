function findCommonElements(firstArray, secondArray) {
     let commonElements = [];


     for (const currentElement of firstArray) {
        for (let i = 0; i < secondArray.length; i++) {
            let stringFromSecondArray = secondArray[i];

            if (currentElement === stringFromSecondArray) {
                commonElements.push(currentElement);
            }
        }
     }

     for (const element of commonElements) {
        console.log(element);
     }
}