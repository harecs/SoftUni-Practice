import { html, render } from '../node_modules/lit-html/lit-html.js';

const bodyElement = document.querySelector('body');

render(html`<button id="loadBooks">LOAD ALL BOOKS</button>`, bodyElement);
document.querySelector('#loadBooks').addEventListener('click', loadAllBooks);





async function loadAllBooks() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/books');

        if (!res.ok) {
            const error = await res.json();
            throw error;
        }

        const data = await res.json();
    } catch (err) {
        console.error(err);
    }
}