function addItem() {
    let listElement = document.querySelector('#items');

    let itemElement = document.createElement('li');
    itemElement.textContent = document.querySelector('#newItemText').value;
    
    let deleteButton = document.createElement('a');
    deleteButton.innerText = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', deleteItem);

    itemElement.appendChild(deleteButton);

    listElement.appendChild(itemElement)

    function deleteItem(e) {
        e.target.parentElement.remove();
    }
}