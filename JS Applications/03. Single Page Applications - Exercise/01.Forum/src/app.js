import { onPost, clearNewTopicForm } from "./newTopic.js";
import { showPosts } from "./posts.js";
import { onPostComment } from "./newComment.js";

document.querySelector('nav a').addEventListener('click', e => {
    document.querySelector('#homepage').style.display = 'block';
    document.querySelector('#opened-post').style.display = 'none';
})

document.querySelector('#opened-post').style.display = 'none';
document.querySelector('#post').addEventListener('click', onPost);
document.querySelector('#cancel').addEventListener('click', clearNewTopicForm);
document.querySelector('.comment-form').addEventListener('submit', onPostComment);

showPosts();