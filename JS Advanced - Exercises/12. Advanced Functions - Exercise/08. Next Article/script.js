function getArticleGenerator(inputArticles) {
    let articles = inputArticles.slice();

    return function () {
        if (articles.length > 0) {
            let nextArticle = document.createElement('article');
            nextArticle.innerText = articles.shift();
            document.querySelector('#content').appendChild(nextArticle);
        }
    }
}