function validatePassword(password) {
    
    function validateLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function validateContent(password) {
        let isValidContent = false;

        for (const char of password) {
            let isUpperCaseLetter = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
            let isLowerCaseLetter = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
            let isDigit = char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;

            if (isUpperCaseLetter || isLowerCaseLetter || isDigit) {
                isValidContent = true;
            } else {
                isValidContent = false;
                break;
            }
        }

        return isValidContent;
    }

    function validateDigits(password) {
        let digitsCounter = 0;

        for (const char of password) {
            let isDigit = char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
            
            if (isDigit) {
                digitsCounter++;
            }
        }

        if (digitsCounter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isValidLength = validateLength(password);
    let isValidContent = validateContent(password);
    let areValidDigits = validateDigits(password);

    if (!isValidLength || !isValidContent || !areValidDigits) {
        if (!isValidLength) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (!isValidContent) {
            console.log('Password must consist only of letters and digits');
        }

        if (!areValidDigits) {
            console.log('Password must have at least 2 digits');
        }
    } else {
        console.log('Password is valid');
    }
}