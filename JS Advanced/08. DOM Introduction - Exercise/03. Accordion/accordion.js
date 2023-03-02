function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let extraElement = document.getElementById('extra');

    if (extraElement.style.display == 'none') {
        extraElement.style.display = 'block';
        buttonElement.innerText = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.innerText = 'More';
    }
}