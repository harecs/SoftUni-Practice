import { displayComments } from "./comments.js";

export async function onPostComment(e) {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData(formElement);
    const { postText, username } = Object.fromEntries(formData.entries());
    const postId = document.querySelector('.topic-name .normal h2').id;

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            postId,
            comment: postText,
            username,
            time: new Date()
        })
    };

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/', options);
        
        if (res.ok == false) {
            const error = await res.json();
            throw error;
        }

        await res.json();
    } catch (err) {
        console.error(err);
    }

    displayComments(postId);
    formElement.reset();

}