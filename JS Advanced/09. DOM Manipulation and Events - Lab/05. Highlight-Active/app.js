function focused() {
    let sectionElements = document.querySelectorAll('input[type="text"]');

    console.log(sectionElements);

    Array.from(sectionElements).forEach(ele => {
        ele.addEventListener('focus', e => {
            e.target.parentElement.classList.add('focused');
        });

        ele.addEventListener('blur', e => {
            e.target.parentElement.classList.remove('focused');
        })
    })
}