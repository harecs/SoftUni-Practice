function attachEventsListeners() {
	document.getElementById('convert').addEventListener('click', onConvertButtonClick);

	function onConvertButtonClick(e) {
		let unitsInMeters = {
			km: 1000,
			m: 1,
			cm: 0.01,
			mm: 0.001,
			mi: 1609.34,
			yrd: 0.9144,
			ft: 0.3048,
			in: 0.0254
		}

		let inputDistance = Number(e.target.parentElement.querySelector('#inputDistance').value);
		let unitToConvertFrom = e.target.parentElement.querySelector('#inputUnits').value;
		let unitToConvertTo = e.target.parentElement.parentElement.querySelector('#outputUnits').value;
		let outputFieldElement = e.target.parentElement.parentElement.querySelector('#outputDistance');

		let inputDistanceInMeters = inputDistance * unitsInMeters[unitToConvertFrom];
		let convetedDistance = inputDistanceInMeters / unitsInMeters[unitToConvertTo];

		outputFieldElement.value = convetedDistance;
	}

}