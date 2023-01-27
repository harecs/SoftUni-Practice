function sumTable() {
    let firstTable = document.getElementsByTagName('tbody')[0];
    let rowElements = firstTable.getElementsByTagName('tr');

    let sum = 0;

    for (let i = 1; i < rowElements.length - 1; i++) {
        sum += Number(rowElements[i].getElementsByTagName('td')[1].innerText);
    }

    rowElements[rowElements.length - 1].getElementsByTagName('td')[1].innerText = sum;
}