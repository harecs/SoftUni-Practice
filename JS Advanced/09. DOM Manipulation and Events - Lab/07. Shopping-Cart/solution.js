function solve() {
	let addButtonElements = document.getElementsByClassName('add-product');
	let checkoutButtonElement  = document.querySelector('.checkout');

	let addButtonElementsArray = Array.from(addButtonElements);

	addButtonElementsArray.forEach(element => element.addEventListener('click', addProductToCart));
	checkoutButtonElement.addEventListener('click', checkout);


	let shoppingCartSet = new Set();
	let shoppingCartTotalPrice = 0;

	function addProductToCart(e) {
		let outputElement = document.querySelector('.shopping-cart textarea');

		let productDetailsElement = e.currentTarget.parentElement.previousElementSibling;
		let productPriceElement = e.currentTarget.parentElement.nextElementSibling;

		let productName = productDetailsElement.querySelector('.product-title').textContent;
		let productPrice = Number(productPriceElement.textContent);

		shoppingCartSet.add(productName);
		shoppingCartTotalPrice += productPrice;

		outputElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
	}

	function checkout() {
		disableButtons(addButtonElementsArray);
		let productsOutput = Array.from(shoppingCartSet).join(', ');
		
		document.querySelector('.shopping-cart textarea').textContent += `You bought ${productsOutput} for ${shoppingCartTotalPrice.toFixed(2)}.`;

		document.querySelector('.checkout').removeEventListener('click', checkout);
	}

	function disableButtons(arrayOfButtonElements) {
		arrayOfButtonElements.forEach(element => element.removeEventListener('click', addProductToCart));
	}
}