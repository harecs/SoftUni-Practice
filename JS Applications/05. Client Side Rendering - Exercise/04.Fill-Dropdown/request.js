export async function makeRequest(text) {
    try {
        const options = {
            method: text ? 'POST' : 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        if (text) {
            options.body = JSON.stringify({ text });
        }

        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', options);
        
        if (!response.ok || response.status == 204) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}