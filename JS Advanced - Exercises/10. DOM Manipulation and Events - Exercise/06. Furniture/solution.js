function solve() {
	let buttonElements = document.getElementsByTagName('button');
	let generateButtonElement = buttonElements[0];
	let buyButtonElement = buttonElements[1];

	generateButtonElement.addEventListener('click', onGenerateButtonClick);
	buyButtonElement.addEventListener('click', onBuyButtonClick);

	function onGenerateButtonClick(e) {
		let input = JSON.parse(e.target.parentElement.querySelector('textarea').value);

		for (const line of input) {
			let rowElement = document.createElement('tr');
			let imageElement = document.createElement('img');
			let nameElement = document.createElement('p');
			let priceElement = document.createElement('p');
			let decorationFactorElement = document.createElement('p');
			let checkboxElement = document.createElement('input');

			imageElement.setAttribute('src', line.img);
			nameElement.textContent = line.name;
			priceElement.textContent = line.price;
			decorationFactorElement.textContent = line.decFactor;
			checkboxElement.setAttribute('type', 'checkbox');

			let rowContentElements = [
				imageElement,
				nameElement,
				priceElement,
				decorationFactorElement,
				checkboxElement
			];

			for (const rowContent of rowContentElements) {
				let currentTd = document.createElement('td');
				currentTd.appendChild(rowContent);
				rowElement.appendChild(currentTd);
			}

			document.querySelector('.table tbody').appendChild(rowElement);
		}
	}

	function onBuyButtonClick(e) {
		let outputTextAreaElement = e.target.previousElementSibling;
		let checkedInputElements = document.querySelectorAll('input:checked');
		let boughtFurnitureNames = [];
		let totalPrice = 0;
		let totalDecorationFactor = 0;
		let averageDecorationFactor = 0;
		let output = '';

		for (const checkboxElement of checkedInputElements) {
			let furnitureRowElement = checkboxElement.parentElement.parentElement;
			let furnitureColumnElements = furnitureRowElement.children;

			let furnitureName = furnitureColumnElements[1].textContent;
			let furniturePrice = Number(furnitureColumnElements[2].textContent);
			let furnitureDecorationFactor = Number(furnitureColumnElements[3].textContent);

			boughtFurnitureNames.push(furnitureName);
			totalPrice += furniturePrice;
			totalDecorationFactor += furnitureDecorationFactor;
		}

		averageDecorationFactor = totalDecorationFactor / boughtFurnitureNames.length;

		output += `Bought furniture: ${boughtFurnitureNames.join(', ')}\n`;
		output += `Total price: ${totalPrice.toFixed(2)}\n`;
		output += `Average decoration factor: ${averageDecorationFactor}`;

		outputTextAreaElement.value = output;
	}
}