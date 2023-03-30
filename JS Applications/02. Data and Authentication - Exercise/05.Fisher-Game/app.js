attachEvents();
changeNavBar();

const mainElement = document.querySelector('body main');
const registerViewEle = document.getElementById('register-view');
const loginViewEle = document.getElementById('login-view');
const homeViewEle = document.getElementById('home-view');
const catchesEle = document.getElementById('catches');
const addButton = document.querySelector('.add');

registerViewEle.style.display = 'none';
loginViewEle.style.display = 'none';
homeViewEle.style.display = 'none';

mainElement.replaceChildren(homeViewEle);
homeViewEle.style.display = 'block';

function changeNavBar() {
    if (localStorage.key(1) === 'email') {
        document.querySelector('nav p span').textContent = localStorage.getItem('email');
        document.querySelector('nav div[id="guest"]').style.display = 'none';
        document.querySelector('nav div[id="user"]').style.display = 'inline';
        // document.querySelector('nav div[id="user"]').style.display = 'block';
    } else {
        document.querySelector('nav p span').textContent = 'guest';
        document.querySelector('nav div[id="user"]').style.display = 'none';
        document.querySelector('nav div[id="guest"]').style.display = 'inline';
        // document.querySelector('nav div[id="guest"]').style.display = 'block';
    }
}

function attachEvents() {
    document.querySelector('section form[id="register"] button').addEventListener('click', onRegister);
    document.querySelector('section form[id="login"] button').addEventListener('click', onLogin);
    document.querySelector('aside button').addEventListener('click', onLoad);

    document.querySelector('nav a[id="register"]').addEventListener('click', onRegisterNavButton);
    document.querySelector('nav a[id="login"]').addEventListener('click', onLoginNavButton);
    document.querySelector('nav a[id="logout"]').addEventListener('click', onLogout);
}

async function onRegister(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/users/register';

    const formData = new FormData(document.forms['register']);
    const { email, password, rePass } = Object.fromEntries(formData);

    if (email == '' || password == '' || rePass == '') {
        alert('All form fields must be completed');
    }

    if (password !== rePass) {
        alert(`Passwords don't match`);
    }

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password, rePass })
    }

    try {
        const res = await fetch(url, options);
        const data = res.ok ? await res.json() : new Error();

        console.log(data);

        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data._id);
        localStorage.setItem('token', data.accessToken);

        mainElement.replaceChildren(homeViewEle);
        homeViewEle.style.display = 'block';
        // window.location = './index.html'
        changeNavBar();
        addButton.removeAttribute('disabled');
    } catch (err) {
        console.error(err);
    }
}

async function onLogin(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/users/login';

    const formData = new FormData(document.forms['login']);
    const { email, password } = Object.fromEntries(formData);

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(url, options);
        const data = res.ok ? await res.json() : new Error();

        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data._id);
        localStorage.setItem('token', data.accessToken);

        // location = './index.html';
        mainElement.replaceChildren(homeViewEle);
        homeViewEle.style.display = 'block';
        changeNavBar();
        addButton.removeAttribute('disabled');
    } catch (err) {
        alert(err);
    }
}

async function onLogout() {
    const url = 'http://localhost:3030/users/logout';

    const options = {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
            'Content-type': 'application/json'
        }
    }

    try {
        const res = await fetch(url, options);

        if (res.status !== 204) {
            throw Error;
        }

        localStorage.clear();
        // location = './index.html';
        mainElement.replaceChildren(homeViewEle);
        homeViewEle.style.display = 'block';
        changeNavBar();
        addButton.setAttribute('disabled', true);
    } catch (err) {
        alert(err);
    }
}

async function onLoad() {
    catchesEle.innerHTML = '';

    try {
        const res = await fetch('http://localhost:3030/data/catches');
        const data = res.ok ? await res.json() : new Error();
        console.log(data);

        data.forEach(fishCatch => {
            catchesEle
                .innerHTML += `<div class="catch" owner="${fishCatch._ownerId}">
                                    <label>Angler</label>
                                    <input type="text" class="angler" value="${fishCatch.angler}" disabled>
                                    <label>Weight</label>
                                    <input type="text" class="weight" value="${fishCatch.weight}" disabled>
                                    <label>Species</label>
                                    <input type="text" class="species" value="${fishCatch.species}" disabled>
                                    <label>Location</label>
                                    <input type="text" class="location" value="${fishCatch.location}" disabled>
                                    <label>Bait</label>
                                    <input type="text" class="bait" value="${fishCatch.bait}" disabled>
                                    <label>Capture Time</label>
                                    <input type="number" class="captureTime" value="${fishCatch.captureTime}" disabled>
                                    <button class="update" data-id="${fishCatch._id}" disabled>Update</button>
                                    <button class="delete" data-id="${fishCatch._id}" disabled>Delete</button>
                                </div>`;

            if (localStorage.id === fishCatch._ownerId) {
                Array.from(document.querySelectorAll(`div[owner="${localStorage.id}"] input`))
                    .forEach(ele => ele.removeAttribute('disabled'));

                Array.from(document.querySelectorAll(`div[owner="${localStorage.id}"] button`))
                    .forEach(ele => ele.removeAttribute('disabled'));
            }
        });
    } catch (err) {
        console.error(err);
    }
}

function onRegisterNavButton() {
    mainElement.replaceChildren(registerViewEle);
    registerViewEle.style.display = 'block'
}

function onLoginNavButton() {
    mainElement.replaceChildren(loginViewEle);
    loginViewEle.style.display = 'block'
}