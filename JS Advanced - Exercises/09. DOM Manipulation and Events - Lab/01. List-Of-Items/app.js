function addItem() {
    let listElement = document.querySelector('#items');
    let newElement = document.createElement('li');
    newElement.textContent = document.getElementById('newItemText').value;

    listElement.appendChild(newElement);
}