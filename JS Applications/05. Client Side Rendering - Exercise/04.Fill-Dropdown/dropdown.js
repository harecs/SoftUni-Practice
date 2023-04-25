import { makeRequest } from './request.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

await fillDropdown();
document.querySelector('#add').addEventListener('click', addMenuOption);

async function fillDropdown() {
    const menuOptions = await makeRequest();
    const template = data => html`${Object.values(data).map(x => html`<option value="${x._id}">${x.text}</option>`)}`;
    render(template(menuOptions), document.querySelector('#menu'));
}

async function addMenuOption(e) {
    e.preventDefault();
    const inputFieldEle = document.querySelector('#item-text');

    const inputText = inputFieldEle.value;
    await makeRequest(inputText);
    await fillDropdown();
    inputFieldEle.value = '';
}