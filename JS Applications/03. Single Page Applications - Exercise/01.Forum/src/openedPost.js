import { displayComments } from "./comments.js";

export async function showPost(e) {
    const id = e.target.id;
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;

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

        displayComments(id);
    } catch (err) {
        console.error(err);
    }
}