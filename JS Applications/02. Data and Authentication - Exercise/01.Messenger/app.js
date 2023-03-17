function attachEvents() {
    const _url = 'http://localhost:3030/jsonstore/messenger';
    const messagesElement = document.getElementById('messages');
    refreshMessages();

    document.getElementById('controls').addEventListener('click', onAction);

    function onAction(e) {
        if (e.target.id == 'submit') {
            submitMessage();
        } else if (e.target.id == 'refresh') {
            refreshMessages();
        }
    }

    async function submitMessage() {
        const author = document.querySelector("input[name='author']").value;
        const message = document.querySelector("input[name='content']").value;

        if (author == '' || message == '') {
            return alert('Name and message are required');
        }

        try {
            const options = {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ author, content: message })
            };

            const res = await fetch(_url, options);
            const data = res.ok ? await res.json() : new Error();

            await refreshMessages();
        } catch (error) {
            console.error(error);
        }
    }

    async function refreshMessages() {
        try {
            const res = await fetch(_url);
            const data = res.ok ? await res.json() : new Error();
            let formattedMessages = '';

            let messagesArray = Array.from(Object.values(data));

            messagesArray.forEach((message, i) => {
                if (i == messagesArray.length - 1) {
                    formattedMessages += `${message.author}: ${message.content}`;
                } else {
                    formattedMessages += `${message.author}: ${message.content}\n`;
                }
            });

            formattedMessages.trim();

            messagesElement.textContent = formattedMessages;
        } catch (error) {
            console.error(error);
        }
    }
}

attachEvents();