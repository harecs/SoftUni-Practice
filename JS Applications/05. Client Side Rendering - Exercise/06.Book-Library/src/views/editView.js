import { html } from '../../../node_modules/lit-html/lit-html.js';
import { getBook, updateBook } from '../api/data.js';
import { renderPage } from './renderPage.js';

export async function editTemplate(bookId) {
    const book = await getBook(bookId);
    return html`
        <form id="edit-form">
            <input type="hidden" name="id">
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" value="${book.title}">
            <label>AUTHOR</label>
            <input type="text" name="author" value="${book.author}">
            <input type="submit" value="Save" @click=${onSave.bind(null, book._id)}>
        </form>`;
}

async function onSave(id, event) {
    event.preventDefault();
    const formElement = document.querySelector('#edit-form');
    const formData = new FormData(formElement);

    const {author, title} = Object.fromEntries(formData.entries());

    await updateBook(id, {author, title, _id: id});
    await renderPage();
}