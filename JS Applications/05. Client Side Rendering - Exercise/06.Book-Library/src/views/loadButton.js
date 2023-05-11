import { html } from '../../../node_modules/lit-html/lit-html.js';
import { renderPage } from './renderPage.js';

export const buttonTemplate = html`<button id="loadBooks" @click=${onLoad}>LOAD ALL BOOKS</button>`;

async function onLoad() {
    renderPage();
}