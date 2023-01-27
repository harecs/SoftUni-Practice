function solve() {
	let textWordsArray = document.getElementById('text').value.split(' ').map(word => word.toLowerCase());
	let namingConvention = document.getElementById('naming-convention').value;

	let output = '';

	if (namingConvention == 'Camel Case') {
		output = capitalize(textWordsArray, 1).join('');
	} else if (namingConvention == 'Pascal Case') {
		output = capitalize(textWordsArray, 0).join('');
	} else {
		output = 'Error!';
	}

	document.getElementById('result').innerText = output;

	function capitalize(wordsArray, startIndex) {
		for (let i = startIndex; i < wordsArray.length; i++) {
			let charArray = wordsArray[i].split('');
			charArray[0] = charArray[0].toUpperCase();
			wordsArray.splice(i, 1, charArray.join(''));
		}

		return wordsArray;
	}
}