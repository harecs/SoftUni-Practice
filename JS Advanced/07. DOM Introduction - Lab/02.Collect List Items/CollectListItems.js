function extractText() {
	let itemElements = document.getElementsByTagName('li');

	console.log(itemElements);

	for (const itemElement of itemElements) {
		let textAreaElement = document.getElementById('result');
		textAreaElement.innerHTML += itemElement.innerText + '\n';
	}
}