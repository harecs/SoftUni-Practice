const host = 'http://localhost:3030';

async function api(method, url, data) {
    const options = { method };
    
    if (method == 'POST' || method == 'PUT') {
        options.headers = { 'Content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(host + url, options);
        
        if (!res.ok) {
            const error = await res.json();
            throw error;
        }

        return res.json();
    } catch (err) {
        console.error(err);
    }
}

const get = api.bind(null, 'GET');
const post = api.bind(null, 'POST');
const put = api.bind(null, 'PUT');
const del = api.bind(null, 'DELETE');

export { get, post, put, del as delete };