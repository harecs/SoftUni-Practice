function colorize() {
    let contentRowsElements = document.getElementsByTagName('tr');
    
    for (let i = 1; i < contentRowsElements.length; i+=2) {
        const element = contentRowsElements[i];

        element.style.backgroundColor = 'teal';
    }
}