import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const allCatsElement = document.querySelector('#allCats');

function template(data) {
    return html`<ul>
        ${data.map(cat => html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click="${onButtonClick}">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`)}
    </ul>`
}

render(template(cats), allCatsElement);

function onButtonClick(e) {
    const buttonElement = e.target;

    if (buttonElement.textContent == 'Show status code') {
        buttonElement.textContent = 'Hide status code';
        buttonElement.nextElementSibling.style.display = 'block';
    } else if (buttonElement.textContent == 'Hide status code') {
        buttonElement.textContent = 'Show status code';
        buttonElement.nextElementSibling.style.display = 'none';
    }
}