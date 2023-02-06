function encodeAndDecodeMessages() {
    let buttonElements = document.querySelectorAll('button');
    let textAreaElements = document.querySelectorAll('textarea');

    let encodeButttonElement = buttonElements[0];
    let decodeButtonElement = buttonElements[1];
    let decodedTextElement = textAreaElements[0];
    let encodedTextElement = textAreaElements[1];

    encodeButttonElement.addEventListener('click', encodeMessage);
    decodeButtonElement.addEventListener('click', decodeMessage);
    
    function encodeMessage() {
        let message = decodedTextElement.value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }

        encodedTextElement.value = encodedMessage;
        decodedTextElement.value = '';
    }

    function decodeMessage() {
        let message = encodedTextElement.value;
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            decodedMessage += String.fromCharCode(message[i].charCodeAt(0) - 1);
        }

        encodedTextElement.value = decodedMessage;
    }
}