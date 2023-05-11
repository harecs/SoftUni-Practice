import { html } from '../../../node_modules/lit-html/lit-html.js';
import { deleteBook } from '../api/data.js';
import { renderPage } from './renderPage.js';

export const tableTemplate = (rows = null) => {
    return html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody @click=${onTbodyClick}>
            ${rows}
        </tbody>
    </table>`;
}

async function onTbodyClick(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName == 'BUTTON') {
        const bookId = clickedElement.parentElement.getAttribute('book-id');
        
        if (clickedElement.textContent == 'Edit') {
            renderPage(bookId);
        } else if (clickedElement.textContent == 'Delete') {
            await deleteBook(bookId);
            renderPage();
        }
    }
}