function solve() {
	let generateButtonElement = document.querySelector('#exercise button');

	generateButtonElement.addEventListener('click', onGenerateButtonClick);

	function onGenerateButtonClick(e) {
		let input = JSON.parse(e.target.parentElement.querySelector('textarea').value);
		let rowElement = document.createElement('tr');
		let imageElement = document.createElement('img');
		let nameElement = document.createElement('p');
		let priceElement = document.createElement('p');
		let decorationFactorElement = document.createElement('p');
		let checkboxElement = document.createElement('input');

		imageElement.setAttribute('src', input.img);
		nameElement.textContent = input.name;
		priceElement.textContent = input.price;
		decorationFactorElement.textContent = input.decFactor;
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