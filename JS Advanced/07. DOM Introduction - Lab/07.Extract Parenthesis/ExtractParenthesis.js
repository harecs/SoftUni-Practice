function extract(content) {
    let text = document.getElementById(content).innerText;
    console.log(text);

    let pattern = /\((?<content>[a-zA-Z0-9 ]+)\)/g;

    let matches = text.match(pattern);
    let contentsArray = [];

    matches.forEach(match => {
        contentsArray.push(match.slice(1, match.length - 1));
    })

    return contentsArray.join('; ');
}