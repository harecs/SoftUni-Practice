function solve() {
	let sentences = document.getElementById('input').value.split('.').filter(x => x.length > 0);

	for (let i = 0; i < sentences.length; i += 3) {
		let paragraphElement = document.createElement('p');
		paragraphElement.innerText = sentences.slice(i, i + 3).join('.') + '.';
		
		document.getElementById('output').appendChild(paragraphElement);
	}
}