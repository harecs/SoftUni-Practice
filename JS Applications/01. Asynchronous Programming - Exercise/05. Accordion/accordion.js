function solution() {
    window.addEventListener('load', getTitles);

    const mainElement = document.getElementById('main');

    async function getTitles() {
        try {
            const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
            const data = res.ok ? await res.json() : new Error();

            data.forEach(articleInfoObj => {
                createArticleElement(articleInfoObj);
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function createArticleElement(infoObj) {
        let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${infoObj._id}`);
        let data = res.ok ? await res.json() : new Error();

        const articleEle = document.createElement('div');
        articleEle.className = 'accordion';

        const headElement = document.createElement('div');
        headElement.className = 'head';
        const titleElement = document.createElement('span');
        titleElement.textContent = data.title;
        const buttonElement = document.createElement('button');
        buttonElement.className = 'button';
        buttonElement.classList.add('id');
        buttonElement.id = data._id;
        buttonElement.textContent = 'More';


        const extraElement = document.createElement('div');
        extraElement.className = 'extra';
        extraElement.style.display = 'none';
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = data.content;

        buttonElement.addEventListener('click', e => {
            const id = e.target.id;
            const extraEle = document.querySelector(`[id="${id}"]`).parentElement.nextSibling;

            extraEle.style.display =
                extraEle.style.display == 'none'
                    ? 'block'
                    : 'none';

            e.target.textContent =
                e.target.textContent == 'More'
                    ? 'Less'
                    : 'More';
        });

        appendChildrenTo(headElement, titleElement, buttonElement);
        appendChildrenTo(extraElement, paragraphElement);
        appendChildrenTo(articleEle, headElement, extraElement);

        addArticleElement(articleEle);
    }

    function addArticleElement(articleEle) {
        mainElement.appendChild(articleEle);
    }

    function appendChildrenTo(node, ...children) {
        children.forEach(child => node.appendChild(child));
    }
}

solution();