function addItem() {
	let menuElement = document.getElementById('menu');
	let optionElement = document.createElement('option');
	let textElement = document.querySelector('#newItemText');
	let valueElement = document.querySelector('#newItemValue');

	optionElement.textContent = textElement.value;
	optionElement.value = valueElement.value;

	menuElement.appendChild(optionElement);
	
	textElement.value = '';
	valueElement.value = '';
}