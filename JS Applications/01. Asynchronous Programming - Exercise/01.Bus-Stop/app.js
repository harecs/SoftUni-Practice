function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    busesElement.replaceChildren();

    fetch(url)
        .then(response => {
            if (response.status === 200 && stopId) {
                return response.json();
            } else {
                throw 'Error';
            }
        })
        .then(data => {           
            stopNameElement.textContent = data.name;
            Object.entries(data.buses).forEach(kvp => {
                const liElement = document.createElement('li');
                liElement.innerText = `Bus ${kvp[0]} arrives in ${kvp[1]} minutes`;

                busesElement.appendChild(liElement);
            });
        })
        .catch(() => {
            stopNameElement.innerText = 'Error';
        });
}