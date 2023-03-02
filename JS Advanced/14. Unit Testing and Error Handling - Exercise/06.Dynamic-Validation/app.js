function validate() {
    let inputElement = document.querySelector('#email');

    inputElement.addEventListener('change', e => {
        if (/[a-z]+@[a-z]+\.[a-z]+/g.test(e.target.value) == false) {
            e.target.setAttribute('class', 'error');
        } else {
            e.target.removeAttribute('class');
        }
    });
}