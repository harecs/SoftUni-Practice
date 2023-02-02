function generateReport() {
    let inputElements = document.getElementsByTagName('input');
    let headers = Array.from(inputElements);

    let cellsElements = document.getElementsByTagName('tbody')[0].querySelectorAll('td');
    let output = [];

    console.log(headers);

    for (let i = 0; i < cellsElements.length; i += headers.length) {
        let resultObject = {};

        headers.forEach((header, j) => {
            if (header.checked) {
                resultObject[header.name] = cellsElements[i + j].innerText;
            }
        });

        output.push(resultObject);
    }

    document.getElementById('output').innerText = JSON.stringify(output);
}