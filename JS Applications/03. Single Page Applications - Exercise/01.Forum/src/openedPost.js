export async function showPost(e) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${e.target.id}`;

    try {
        const res = await fetch(url);

        if (res.ok == false) {
            const error = res.json();
            throw error;
        }

        const data = await res.json();

        document.querySelector('#homepage').style.display = 'none';
        document.querySelector('#opened-post').style.display = 'block';
        document.querySelector('.theme-name h2').textContent = data.title;
        document.querySelector('.comment .header p span').textContent = data.username;
        document.querySelector('.comment .header p time').textContent = data.time;
        document.querySelector('.comment .header .post-content').textContent = data.content;

    } catch (err) {
        console.error(err);
    }
}