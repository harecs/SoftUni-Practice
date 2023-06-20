import page from '../node_modules/page/page.mjs';
import { render, html } from '../node_modules/lit-html/lit-html.js';
import { headerTemplate } from './views/header.js';
import { registerView } from './views/register.js';

page(decorateContext);
page('/index.html', '/');
page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('*', renderNotFound);

page.start();

function decorateContext(ctx, next) {
    ctx.render = customRender;

    next();
}

function renderHome(ctx) {
    ctx.render(html`<h1>Catalog Dashboard...</h1>`);
}

function renderLogin(ctx) {
    ctx.render(html`<h2>haahah</h2>`);
}

function renderRegister(ctx) {
    ctx.render(html`${registerView()}`);
}

function renderNotFound(ctx) {
    ctx.render(html`<h1>Not found...</h1>`);
}

function customRender(template) {
    render(html`${headerTemplate()}<main>${template}</main>`, document.querySelector('body'));
}