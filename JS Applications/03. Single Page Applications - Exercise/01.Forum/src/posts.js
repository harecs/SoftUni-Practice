import { showPost } from "./openedPost.js";

const postsElement = document.querySelector('.container .topic-title');

export async function showPosts() {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    postsElement.style.display = 'block';

    try {
        const res = await fetch(url);

        if (res.ok == false) {
            const error = await res.json();
            throw error;
        }

        const data = await res.json();
        postsElement.innerHTML = '';

        Object.values(data).forEach(info => {
            postsElement.innerHTML += `<div class="topic-container">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a class="normal">
                        <h2 id="${info._id}">${info.title}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <time>${info.time}</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${info.username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        });

        document.querySelectorAll('.topic-container a h2')
            .forEach(ele => ele.addEventListener('click', showPost));
    } catch (err) {
        console.error(err);
    }
}

export function hidePosts() {
    postsElement.style.display = 'none';
}