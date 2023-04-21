import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const template = (data) => html`<ul>${data.map(town => html`<li>${town}</li>`)}</ul>`;
render(template(towns), document.querySelector('#towns'));

document.querySelector('article button').addEventListener('click', onSearch);

function onSearch(e) {
    const searchText = e.target.previousElementSibling.value;

    document.querySelectorAll('li').forEach(ele => {
        if (ele.textContent.includes(searchText)) {
            ele.classList.add('active');
        } else {
            ele.classList.remove('active');
        }
    });

    const matchesCount = document.querySelectorAll('.active').length;
    
    document.querySelector('#result').textContent = `${matchesCount} matches found`;
}