const _url = 'http://localhost:3030/users/register';

document.querySelector('nav div[id="user"]').style.display = 'none';

document.querySelector('section form button').addEventListener('click', onRegister);

async function onRegister(e) {
    e.preventDefault();

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
        const res = await fetch(_url, options);
        const data = res.ok ? await res.json() : new Error();

        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data._id);

        location = './index.html'
    } catch (err) {
        console.error(err);
    }
}