function printValidHashTags(text) {
    let textArray = text.split(' ');

    for (const string of textArray) {
        if (string.length > 1 && string.startsWith('#')) {
            if (!includesNumber(string)) {
                console.log(string.substring(1));
            }
        }
    }

    function includesNumber(string) {
        let hasNum = false;

        let chars = string.split('');

        for (const char of chars) {
            if (!isNaN(char)) {
                hasNum = true;
                break;
            }
        }
        
        return hasNum;
    }
}