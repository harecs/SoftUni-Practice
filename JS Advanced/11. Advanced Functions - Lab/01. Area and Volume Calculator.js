function area() {
	return Math.abs(this.x * this.y);
}

function vol() {
	return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
	let parsedData = JSON.parse(input);
	let outputArray = [];

	for (const data of parsedData) {
		let obj = {
			area: area.apply(data),
			volume: vol.apply(data)
		}

		outputArray.push(obj);
	}

	return outputArray;
}