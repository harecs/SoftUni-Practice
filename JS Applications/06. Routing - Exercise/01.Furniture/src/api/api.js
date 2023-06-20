const host = 'http://localhost:3030';

async function api(method, url, data) {
    const options = { method };
    const token = sessionStorage.getItem('token');

    if (token) {
        options['X-Authorization'] = token;
    }

    if ((method == 'POST' || method == 'PUT') && data) {
        options.headers = { 'Content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url);

        if (!response.ok || response.status == 204) {
            const error = response.json();
            throw error;
        }

        const data = response.json();

        if (!token) {
            sessionStorage.setItem('token', data.accessToken);
            sessionStorage.setItem('userId', data._id);
        } else { // maybe without the else
            return data;
        }
    } catch (err) {
        console.error(err);
    }
}

const get = api.bind(null, 'GET');
const post = api.bind(null, 'POST');
const put = api.bind(null, 'PUT');
const del = api.bind(null, 'DELETE');

export { get, post, put, del as delete };