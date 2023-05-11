import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { buttonTemplate } from './views/loadButton.js';
import { tableTemplate } from './views/tableView.js';
import { addingTemplate } from './views/addView.js';

const addingForm = await addingTemplate();

render(html`${buttonTemplate}${tableTemplate()}${addingForm}`, document.querySelector('body'));