export async function displayComments(id) {
    const commentsElement = document.querySelector('#user-comment');
    commentsElement.innerHTML = '';

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/');

        if (res.ok == false) {
            const error = await res.json();
            throw error;
        }

        const data = await res.json();
        console.log(data);

        Object.values(data)
            .forEach(comment => {
                if (comment.postId === id) {
                    commentsElement.innerHTML +=
                        `<div class="topic-name-wrapper">
                            <div class="topic-name">
                                <p><strong>${comment.username}</strong> commented on <time>${comment.time}</time></p>
                                <div class="post-content">
                                    <p>${comment.comment}</p>
                                </div>
                            </div>
                        </div>`;
                }
            })
    } catch (err) {
        console.error(err);
    }
}