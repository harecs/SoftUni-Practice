import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { buttonTemplate } from './loadButton.js';
import { tableTemplate } from './tableView.js';
import { getAllBooks } from '../api/data.js';
import { rowTemplate } from './rowView.js';
import { addingTemplate } from './addView.js';
import { editTemplate } from './editView.js';

export async function renderPage(bookId) {
    const data = await getAllBooks();
    const rows = Object.values(data).map(book => rowTemplate(book));
    const table = tableTemplate(rows);

    const form =
        bookId
            ? await editTemplate(bookId)
            : await addingTemplate();

    render(html`${buttonTemplate}${table}${form}`, document.querySelector('body'));
}