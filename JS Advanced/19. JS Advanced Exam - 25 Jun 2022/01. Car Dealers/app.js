window.addEventListener("load", solve);

function solve() {
    let publishButtonElement = document.getElementById('publish');
    publishButtonElement.addEventListener('click', publishCar);

    function publishCar(e) {
        e.preventDefault();

        let carRowElement = document.createElement('tr');
        carRowElement.className = 'row';
        let buttonsCell = document.createElement('td');

        let carMakeTd = document.createElement('td');
        let modelTd = document.createElement('td');
        let yearTd = document.createElement('td');
        let fuelTd = document.createElement('td');
        let originalCostTd = document.createElement('td');
        let sellingPriceTd = document.createElement('td');

        let editButtonElement = document.createElement('button');
        editButtonElement.className = 'action-btn edit';
        editButtonElement.innerText = 'Edit';
        editButtonElement.addEventListener('click', editCar);

        let sellButtonElement = document.createElement('button');
        sellButtonElement.className = 'action-btn sell';
        sellButtonElement.innerText = 'Sell';
        sellButtonElement.addEventListener('click', sellCar);

        buttonsCell.appendChild(editButtonElement);
        buttonsCell.appendChild(sellButtonElement);


        carMakeTd.textContent = document.getElementById('make').value;
        modelTd.textContent = document.getElementById('model').value;
        yearTd.textContent = document.getElementById('year').value;
        fuelTd.textContent = document.getElementById('fuel').value;
        originalCostTd.textContent = document.getElementById('original-cost').value;
        sellingPriceTd.textContent = document.getElementById('selling-price').value;

        if (carMakeTd.textContent != '' &&
            modelTd.textContent != '' &&
            yearTd.textContent != '' &&
            fuelTd.textContent != '' &&
            originalCostTd.textContent != '' &&
            sellingPriceTd.textContent != '' &&
            Number(sellingPriceTd.textContent) >= Number(originalCostTd.textContent)) {
            carRowElement.appendChild(carMakeTd);
            carRowElement.appendChild(modelTd);
            carRowElement.appendChild(yearTd);
            carRowElement.appendChild(fuelTd);
            carRowElement.appendChild(originalCostTd);
            carRowElement.appendChild(sellingPriceTd);
            carRowElement.appendChild(buttonsCell);

            document.getElementById('table-body').appendChild(carRowElement);

            clearInputFields();
        }


    }

    function editCar(e) {
        let rowElement = e.target.parentElement.parentElement;
        document.getElementById('table-body').removeChild(rowElement);
        // maybe not working because of the fueltype!!!
        document.getElementById('make').value = rowElement.querySelector(':nth-child(1)').innerText;
        document.getElementById('model').value = rowElement.querySelector(':nth-child(2)').innerText;
        document.getElementById('year').value = rowElement.querySelector(':nth-child(3)').innerText;
        document.getElementById('fuel').value = rowElement.querySelector(':nth-child(4)').innerText;
        document.getElementById('original-cost').value = rowElement.querySelector(':nth-child(5)').innerText;
        document.getElementById('selling-price').value = rowElement.querySelector(':nth-child(6)').innerText;
    }

    function sellCar(e) {
        let carRowElement = e.target.parentElement.parentElement;
        document.getElementById('table-body').removeChild(carRowElement);

        let soldCarsListElement = document.getElementById('cars-list');
        let soldRowElement = document.createElement('li');
        soldRowElement.className = 'each-list';

        let carNamesElement = document.createElement('span');
        let yearElement = document.createElement('span');
        let profitFromCarElement = document.createElement('span');

        carNamesElement.innerText = `${carRowElement.querySelector(':nth-child(1)').innerText} ${carRowElement.querySelector(':nth-child(2)').innerText}`;
        yearElement.innerText = carRowElement.querySelector(':nth-child(3)').innerText;
        let profit = Number(carRowElement.querySelector(':nth-child(6)').innerText) - Number(carRowElement.querySelector(':nth-child(5)').innerText);
        profitFromCarElement.innerText = profit;

        soldRowElement.appendChild(carNamesElement);
        soldRowElement.appendChild(yearElement);
        soldRowElement.appendChild(profitFromCarElement);
        
        soldCarsListElement.appendChild(soldRowElement);

        updateTotalProfit(profit);
    }

    function clearInputFields() {
        document.getElementById('make').value = '';
        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('fuel').value = '';
        document.getElementById('original-cost').value = '';
        document.getElementById('selling-price').value = '';
    }

    function updateTotalProfit(inputProfit) {
        let totalProfitElement = document.getElementById('profit');
        let currentProfit = Number(totalProfitElement.innerText);
        let newProfit = currentProfit += inputProfit;

        totalProfitElement.innerText = newProfit.toFixed(2);
    }
}