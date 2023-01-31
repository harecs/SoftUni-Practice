function search() {
	const searchedText = document.getElementById('searchText').value;
	const townsElements = Array.from(document.getElementById('towns').children);
	let totalMatches = 0;

	for (let townElement of townsElements) {
		if (townElement.textContent.includes(searchedText)) {
			townElement.style.fontWeight = 'bold';
			townElement.style.textDecoration = 'underline';

			totalMatches++;
		}
	}

	document.getElementById('result').textContent = `${totalMatches.toString()} matches found`;
}