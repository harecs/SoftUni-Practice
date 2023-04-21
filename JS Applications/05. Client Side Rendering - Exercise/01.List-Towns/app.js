import { html, render } from '../node_modules/lit-html/lit-html.js';

const rootElement = document.querySelector('#root');

document.querySelector('#btnLoadTowns').addEventListener('click', e => {
    e.preventDefault();

    const towns = document.querySelector('#towns').value.split(', ');

    const template = (towns) => {
        return html`<ul>
                ${towns.map(town => html`<li>${town}</li>`)}
            </ul>`;
    };

    render(template(towns), rootElement);
})