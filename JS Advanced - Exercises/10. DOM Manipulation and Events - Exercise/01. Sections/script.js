function create(words) {
	let sectionElements = [];
	let contentElement = document.getElementById('content');

	for (const word of words) {
		let sectionElement = document.createElement('div');

		let paragraphElement = document.createElement('p');
		paragraphElement.textContent = word;
		paragraphElement.style.display = 'none';

		sectionElement.appendChild(paragraphElement);
		sectionElement.addEventListener('click', e => e.target.children[0].style.display = 'block');

		sectionElements.push(sectionElement);
	}

	sectionElements.forEach(sectionElement => {
		contentElement.appendChild(sectionElement);
	});
}