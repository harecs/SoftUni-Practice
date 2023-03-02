function notify(message) {
    let notificationDivElement = document.getElementById('notification');
    let notificationPElement = document.createElement('p');

    notificationPElement.innerText = message;
    notificationDivElement.addEventListener('click', e => {
        e.target.style.display = 'none';
        e.target.removeChild(notificationPElement);
    });

    notificationDivElement.appendChild(notificationPElement);
    notificationDivElement.style.display = 'block';
}