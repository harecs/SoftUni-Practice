function solve() {
    const infoElement = document.getElementById('info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let currentStopName = '';
    let nextStopId = 'depot';

    // async function asyncDepart() {
    //     try {
    //         let res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);

    //         if (!res.ok) {
    //             throw 'Error';
    //         }

    //         let busStopData = await res.json();
    //         currentStopName = busStopData.name;
    //         infoElement.textContent = `Next stop ${currentStopName}`;

    //         changeButtonDisability();

    //         nextStopId = busStopData.next;
    //     } catch (err) {
    //         infoElement.textContent = 'Error';

    //         departButton.disabled = true;
    //         arriveButton.disabled = true;
    //     }
    // }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(res => res.ok ? res.json() : new Error('Error'))
            .then(processRequest)
            .catch(err => {
                infoElement.textContent = 'Error';

                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${currentStopName}`;

        changeButtonDisability();
    }

    function processRequest(busStopData) {
        currentStopName = busStopData.name;
        infoElement.textContent = `Next stop ${currentStopName}`;

        changeButtonDisability();

        nextStopId = busStopData.next;
    }

    function changeButtonDisability() {
        departButton.disabled = !departButton.disabled;
        arriveButton.disabled = !arriveButton.disabled;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();