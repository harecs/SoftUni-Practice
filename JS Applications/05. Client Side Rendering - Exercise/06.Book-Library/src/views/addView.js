import { html } from '../../../node_modules/lit-html/lit-html.js';
import { createBook } from '../api/data.js';
import { renderPage } from './renderPage.js';

export async function addingTemplate() {
    return html`
        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Submit" @click=${onSubmit}>
        </form>`;
}

async function onSubmit(event) {
    event.preventDefault();
    const formElement = document.querySelector('#add-form');
    const formData = new FormData(formElement);

    const { author, title } = Object.fromEntries(formData.entries());

    if (!author || !title) {
        return;
    }

    await createBook({ author, title });
    renderPage();
}