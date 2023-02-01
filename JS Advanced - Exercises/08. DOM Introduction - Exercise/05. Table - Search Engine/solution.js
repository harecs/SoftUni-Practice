function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
		clearPreviousSearch();

		let rowsElements = Array.from(document.getElementsByTagName('tr'));
		rowsElements.splice(0, 2);

		let searchedText = document.getElementById('searchField').value;
		
		for (let rowElement of rowsElements) {
			if (searchedText && rowElement.innerText.includes(searchedText)) {
				rowElement.className = 'select';
			}
		}

		document.getElementById('searchField').value = '';

		function clearPreviousSearch() {
			let rowsElements = Array.from(document.getElementsByTagName('tr'));

			for (let rowElement of rowsElements) {
				rowElement.className = '';
			}
		}
    }
}