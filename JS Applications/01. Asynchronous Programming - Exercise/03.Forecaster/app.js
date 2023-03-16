function attachEvents() {
    document.getElementById('submit')
        .addEventListener('click', displayForecasts);

    async function displayForecasts(e) {
        try {
            const [todaysForecast, threeDaysForecast] = await getWeatherInfo();
            removeOldForecasts();
            document.getElementById('forecast').style.display = 'block';

            const currentForecastElement = document.getElementById('current');
            const currentConditionsElement = createTodaysForecastInfoElement(todaysForecast);
            currentForecastElement.appendChild(currentConditionsElement);

            const upcomingForecastElement = document.getElementById('upcoming');
            const upcomingCoditionsElement = createUpcomingForecastsInfoElement(threeDaysForecast);
            upcomingForecastElement.appendChild(upcomingCoditionsElement);
        } catch (err) {
            let errorElement = document.createElement('div');
            errorElement.textContent = 'Error';
            let forecastSectionElement = document.getElementById('forecast');
            forecastSectionElement.appendChild(errorElement);
            document.getElementById('forecast').style.display = 'block';
        }
    }

    async function getWeatherInfo() {
        const locations = await getInfoFromUrl('http://localhost:3030/jsonstore/forecaster/locations');
        const locationCode = getLocationCode(locations);

        const todaysForecast =
            await getInfoFromUrl(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);
        const threeDaysForecast =
            await getInfoFromUrl(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);

        return [todaysForecast, threeDaysForecast];
    }

    async function getInfoFromUrl(url) {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw 'Error (getWeatherInfo response)';
            }

            return await res.json();
        } catch (err) {
            // !!! to do !!! 
            // maybe i can do it without trycatch here...
        }
    }

    function getLocationCode(locations) {
        const inputLocation = document.getElementById('location').value;

        return locations.find(x => (x.name == inputLocation && inputLocation)).code;
    }

    function removeOldForecasts() {
        const currentForecastElement = document.getElementById('current');
        const upcomingForecastElement = document.getElementById('upcoming');

        const oldTodaysForecastElement = document.getElementsByClassName('forecasts')[0];
        const oldUpcomingForecastElement = document.getElementsByClassName('forecast-info')[0];

        if (oldTodaysForecastElement || oldUpcomingForecastElement) {
            currentForecastElement.removeChild(oldTodaysForecastElement);
            upcomingForecastElement.removeChild(oldUpcomingForecastElement);
        }
    }

    function createTodaysForecastInfoElement(todaysForecast) {
        let currentConditionsElement = document.createElement('div');
        currentConditionsElement.className = 'forecasts';


        const conditionSymbolElement = document.createElement('span');
        conditionSymbolElement.className = 'condition symbol';
        conditionSymbolElement.textContent = getSymbol(todaysForecast);


        const locationNameElement = createForecastDataElement(todaysForecast.name);
        const degreesInfoElement = createForecastDataElement(`${todaysForecast.forecast.low}${String.fromCharCode(176)}/${todaysForecast.forecast.high}${String.fromCharCode(176)}`);
        const conditionElement = createForecastDataElement(todaysForecast.forecast.condition);

        appendChildrenTo(currentConditionsElement,
            conditionSymbolElement,
            locationNameElement,
            degreesInfoElement,
            conditionElement);

        return currentConditionsElement;
    }

    function createForecastDataElement(textContent) {
        const forecastDataElement = document.createElement('span');
        forecastDataElement.className = 'forecast-data';
        forecastDataElement.textContent = textContent;

        return forecastDataElement;
    }

    function createUpcomingForecastsInfoElement(upcomingThreeForecasts) {
        const upcomingForecastInfoElement = document.createElement('div');
        upcomingForecastInfoElement.className = 'forecast-info';
        let forecastElements = [];

        for (const forecast of upcomingThreeForecasts.forecast) {
            forecastElements.push(createUpcomingForecastElement(forecast));
        }

        appendChildrenTo(upcomingForecastInfoElement, ...forecastElements);

        return upcomingForecastInfoElement;
    }

    function createUpcomingForecastElement(forecastInfo) {
        const upcomingForecastElement = document.createElement('span');
        upcomingForecastElement.className = 'upcoming';

        let symbolElement = document.createElement('span');
        symbolElement.className = 'symbol';
        symbolElement.textContent = getSymbol(forecastInfo, true);

        const degreesInfoElement = createForecastDataElement(`${forecastInfo.low}${String.fromCharCode(176)}/${forecastInfo.high}${String.fromCharCode(176)}`);
        const conditionElement = createForecastDataElement(forecastInfo.condition);

        appendChildrenTo(upcomingForecastElement,
            symbolElement,
            degreesInfoElement,
            conditionElement);

        return upcomingForecastElement;
    }

    function getSymbol(forecastInfo, isUpcoming = false) {
        const condition = isUpcoming ? forecastInfo.condition : forecastInfo.forecast.condition;
        let symbol = '';

        switch (condition) {
            case 'Sunny':
                symbol = '\u2600';
                break;
            case 'Partly sunny':
                symbol = '\u26C5';
                break;
            case 'Overcast':
                symbol = '\u2601';
                break;
            case 'Rain':
                symbol = '\u2614';
                break;
        }

        return symbol;
    }

    function appendChildrenTo(node, ...children) {
        for (const child of children) {
            node.appendChild(child);
        }
    }
}

attachEvents();