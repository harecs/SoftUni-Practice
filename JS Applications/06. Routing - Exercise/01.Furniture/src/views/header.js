import { html } from '../../node_modules/lit-html/lit-html.js';

export const headerTemplate = () => {
    if (sessionStorage.getItem('token')) {
        return html`<header>
                        <h1><a href="/">Furniture Store</a></h1>
                        <nav>
                            <a id="catalogLink" href="index.html" class="active">Dashboard</a>
                            <div id="user">
                                <a id="createLink" href="create.html">Create Furniture</a>
                                <a id="profileLink" href="my-furniture.html">My Publications</a>
                                <a id="logoutBtn" href="javascript:void(0)">Logout</a>
                            </div>
                        </nav>
                    </header>`;
    } else {
        return html`<header>
                        <h1><a href="/">Furniture Store</a></h1>
                        <nav>
                            <a id="catalogLink" href="index.html" class="active">Dashboard</a>
                            <div id="guest">
                                <a id="loginLink" href="login">Login</a>
                                <a id="registerLink" href="register">Register</a>
                            </div>
                        </nav>
                    </header>`;
    }
}