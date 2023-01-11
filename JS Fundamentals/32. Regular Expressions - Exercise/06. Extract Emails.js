function extractAndPrintEmails(input) {
    let text = ' ' + input + ' ';

    let pattern = /[ ][a-z0-9][a-z\d\.\-\_]+[a-z0-9]@[a-z\-]+\.[a-z\-\.]+[a-z]/g;
    emails = text.match(pattern);

    emails.forEach(email => console.log(email));
}