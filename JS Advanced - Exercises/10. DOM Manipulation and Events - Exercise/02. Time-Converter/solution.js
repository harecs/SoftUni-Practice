function attachEventsListeners() {
	let units = {
		days: 1,
		hours: 24,
		minutes: 1440,
		seconds: 86400
	}

	let buttonElements = document.querySelectorAll('input[type="button"]');

	for (const buttonElement of buttonElements) {
		buttonElement.addEventListener('click', convertMeasuringUnits);
	}

	function convertMeasuringUnits(e) {
		let timeValue = Number(e.target.previousElementSibling.value);
		let timeUnit = e.target.previousElementSibling.id;
		let timeInDays = convertToDays(timeValue, timeUnit);

		let convertedTime = {
			days: timeInDays,
			hours: timeInDays * units.hours,
			minutes: timeInDays * units.minutes,
			seconds: timeInDays * units.seconds
		}
		let inputFieldsElements = Array.from(document.querySelectorAll('input[type="text"]'));

		inputFieldsElements.forEach(element => {
			let timeType = element.id;

			element.value = convertedTime[timeType];
		});
	}

	function convertToDays(timeNumber, unit) {
		return Number(timeNumber) / units[unit];
	}
}