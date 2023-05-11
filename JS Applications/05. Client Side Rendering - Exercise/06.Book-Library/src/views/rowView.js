import { html } from '../../../node_modules/lit-html/lit-html.js';

export function rowTemplate(book) {
    return html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td book-id="${book._id}">
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>`;
}