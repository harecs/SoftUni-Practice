function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
		let input = eval(document.getElementsByTagName('textarea')[0].value);
		
		let restaurants = {};

		for (const line of input) {
			let [restaurantName, workersTotalInfo] = line.split(' - ');
			let workersInfo = workersTotalInfo.split(', ');

			let workers = {};

			if (restaurants.hasOwnProperty(restaurantName) == false) {
				restaurants[restaurantName] = {
					workers: {},
					averageSalary: 0,
					bestSalary: 0
				};
			} else {
				workers = {};
				workers = restaurants[restaurantName].workers;
			}

			for (const info of workersInfo) {
				let [workerName, salary] = info.split(' ');

				workers[workerName] = Number(salary);
			}

			restaurants[restaurantName].workers = workers;

			let averageSalary = 0;
			let bestSalary = Number.MIN_SAFE_INTEGER;

			for (const salary of Object.values(restaurants[restaurantName].workers)) {
				averageSalary += salary;

				if (salary > bestSalary) {
					bestSalary = salary;
				}
			}

			averageSalary /= Object.entries(restaurants[restaurantName].workers).length;

			restaurants[restaurantName].averageSalary = averageSalary;
			restaurants[restaurantName].bestSalary = bestSalary;
		}

		let bestRestaurant = Object.keys(restaurants).sort((a, b) => restaurants[b].averageSalary - restaurants[a].averageSalary)[0];

		let bestRestaurantOutput = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].averageSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurant].bestSalary.toFixed(2)}`;
		let bestRestaurantsWorkersOutput = Object.keys(restaurants[bestRestaurant].workers)
		.sort((a, b) => restaurants[bestRestaurant].workers[b] - restaurants[bestRestaurant].workers[a])
		.map(worker => 	`Name: ${worker} With Salary: ${restaurants[bestRestaurant].workers[worker]}`)
		.join(' ');

		document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
		document.querySelector('#workers p').textContent = bestRestaurantsWorkersOutput;
	}
}