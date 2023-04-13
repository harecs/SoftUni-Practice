import { showPosts } from "./posts.js";

export function showNewTopicElement() {
    document.querySelector('main').style.display = 'block';
}

export function hideNewTopicElement() {
    document.querySelector('main').style.display = 'none';
}

export async function onPost(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    const formData = new FormData(document.querySelector('#new-topic-form'));

    const { topicName, username, postText } = Object.fromEntries(formData.entries());

    if (topicName == '' || username == '' || postText == '') {
        return alert('All field must be completed');
    }

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            title: topicName,
            username, 
            content: postText,
            time: new Date()
        })
    };

    try {
        const res = await fetch(url, options);

        if (res.status !== 200) {
            const error = await res.json();
            throw error;
        }

        // const data = await res.json();
        await res.json();

        clearNewTopicForm();
        showPosts();
    } catch (err) {
        console.error(err);
    }
}

export function clearNewTopicForm(e) {
    if (e) {
        e.preventDefault();
    }

    document.querySelector('#new-topic-form').reset();
}