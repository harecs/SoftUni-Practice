function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', addDropdownOptions);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

    async function loadPosts() {
        const res = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const posts = res.ok ? await res.json() : new Error();

        return posts;
    }

    async function addDropdownOptions() {
        try {
            Array.from(document.getElementsByTagName('option'))
                .forEach(oldOpt => oldOpt.remove());
            const postsObj = await loadPosts();

            Object.keys(postsObj)
                .forEach(post => {
                    const optionElement = document.createElement('option');
                    optionElement.value = postsObj[post].id;
                    optionElement.textContent = postsObj[post].title;

                    document.getElementById('posts').appendChild(optionElement);
                });
        } catch (error) {
            console.error(error);
        }
    }

    async function displayPost() {
        try {
            const titleElement = document.getElementById('post-title');
            const postBodyElement = document.getElementById('post-body');

            const id = document.getElementById('posts').value;
            const res = await fetch(`http://localhost:3030/jsonstore/blog/posts/${id}`);
            const post = res.ok ? await res.json() : new Error();

            titleElement.textContent = post.title;
            postBodyElement.textContent = post.body;

            await displayComments(post.id);
        } catch (error) {
            console.error(error);
        }
    }

    async function displayComments(id) {
        const commentsSectionElement = document.getElementById('post-comments');
        Array.from(commentsSectionElement.children)
            .forEach(oldCommentEle => oldCommentEle.remove());

        const res = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        const allComments = res.ok ? await res.json() : new Error();

        console.log(id);
        console.log(allComments);

        const postComments =
            Object.values(allComments)
                .filter(obj => obj.postId == id);

        postComments.forEach(comment => {
            const commentElement = document.createElement('li');
            commentElement.textContent = comment.text

            commentsSectionElement.appendChild(commentElement);
        });

        console.log(postComments);
    }
}

attachEvents();