function validate() {
    let companyCheckboxElement = document.getElementById('company');
    let submitButtonElement = document.getElementById('submit');
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmedPasswordInputElement = document.getElementById('confirm-password');
    let companyNumberInputElement = document.getElementById('companyNumber');
    let validDivElement = document.getElementById('valid');

    companyCheckboxElement.addEventListener('change', e => {
        let companyFieldElement = document.getElementById('companyInfo');
        companyFieldElement.style.display = companyCheckboxElement.checked ? 'block' : 'none';
        removeBorders(true);
    });

    submitButtonElement.addEventListener('click', validateSubmittedData);

    function validateSubmittedData(e) {
        e.preventDefault();
        removeBorders();

        let isValid = true;
        let username = usernameInputElement.value;
        let email = emailInputElement.value;
        let password = passwordInputElement.value;
        let confirmedPassword = confirmedPasswordInputElement.value;
        let companyNumber = Number(companyNumberInputElement.value);
        // look at the passwords!!!

        if (/[a-zA-Z0-9]{3,20}/g.test(username) == false) {
            isValid = false;
            setElementInvalidStyle('username');
        }

        // /[a-z]+@[a-z]+\.[a-z]+/g
        // /\S+@\S+\.\S+/g
        // maybe not the best regex!!!
        if (/^.*@.*\..*$/g.test(email) == false) {
            isValid = false;
            setElementInvalidStyle('email');
        }

        if (/\w{5,15}/g.test(password) == false) {
            isValid = false;
            setElementInvalidStyle('password');
        }
        // look at the passwords(maybe if not the same to do in diffrent if statement)!!!


        if (/\w{5,15}/g.test(confirmedPassword) == false) {
            isValid = false;
            setElementInvalidStyle('confirm-password');
        }

        if (confirmedPassword !== password) {
            isValid = false;
            setElementInvalidStyle('password');
            setElementInvalidStyle('confirm-password');
        }

        if (companyCheckboxElement.checked) {
            removeBorders(true);

            if (companyNumber < 1000 || companyNumber > 9999) {
                isValid = false;
                setElementInvalidStyle('companyNumber');
            }
        }

        validDivElement.style.display = isValid ? 'block' : 'none';
    }

    function setElementInvalidStyle(elementId) {
        let element = document.getElementById(elementId);

        element.style.border = 'solid'
        element.style.borderColor = 'red';
    }

    function removeBorders(companyNumChecked = false) {
        if (companyNumChecked) {
            companyNumberInputElement.style.border = 'none';
            return;
        }

        usernameInputElement.style.border = 'none';
        emailInputElement.style.border = 'none';
        passwordInputElement.style.border = 'none';
        confirmedPasswordInputElement.style.border = 'none';
    }
}