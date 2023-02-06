function lockedProfile() {
	let buttonElements = document.querySelectorAll('.profile button');

	for (const buttonElement of buttonElements) {
		buttonElement.addEventListener('click', onMoreLessButton);
	}

	function onMoreLessButton(e) {
		let buttonClickedElement = e.target;
		let buttonText = buttonClickedElement.innerText;

		let profileElement = buttonClickedElement.parentElement;

		let isProfileUnlocked = profileElement.querySelector('input[value="unlock"]').checked;

		if (isProfileUnlocked) {
			
			if (buttonText == 'Show more') {
				profileElement.querySelector('div').style.display = 'block';
				buttonClickedElement.innerText = 'Hide it';
			} else if (buttonText == 'Hide it') {
				profileElement.querySelector('div').style.display = 'none';
				buttonClickedElement.innerText = 'Show more';
			}
		}
	}
}