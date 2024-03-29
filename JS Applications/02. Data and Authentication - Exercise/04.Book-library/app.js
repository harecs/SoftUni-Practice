// 75/100 in judge but working better than app-100.js (In this version loading books after they are loaded doesn't work)

attachEvents();

function attachEvents() {
    const _url = 'http://localhost:3030/jsonstore/collections/books';
    let idForEdit = '';

    document.getElementById('loadBooks').addEventListener('click', onLoadBooks);
    const formButton = document.getElementById('submitBtn');
    formButton.addEventListener('click', onFormButtonClick);
    const tbodyElement = document.querySelector('tbody');
    const formTitleElement = document.getElementsByTagName('h3')[0];
    const titleFieldElement = document.querySelector('input[name="title"]');
    const authorFieldElement = document.querySelector('input[name="author"]');
    tbodyElement.addEventListener('click', onTbodyClick);

    async function onFormButtonClick(e) {
        e.preventDefault();

        const title = document.querySelector('input[name="title"]').value;
        const author = document.querySelector('input[name="author"]').value;

        try {
            if (title != '' && author != '') {

                if (e.target.textContent === 'Submit') {
                    await submitBook(title, author);
                    clearInputFields();
                } else if (e.target.textContent === 'Save') {
                    await editBook(title, author);
                    formButton.textContent = 'Submit';
                    clearInputFields();
                }
            } else {
                alert('All fields must be filled');
            }
        } catch (error) {
            console.error(error);
        }


    }

    function clearInputFields() {
        titleFieldElement.value = '';
        authorFieldElement.value = '';
    }

    async function onLoadBooks() {
        clearOldBooks();

        try {
            const res = await fetch(_url);
            // const data = res.status === 200 ? await res.json() : new Error();
            const data = res.ok ? await res.json() : new Error();
            Object.values(data).forEach(bookInfo => addBookRow(bookInfo));
        } catch (error) {
            console.error(error);
        }
    }

    function addBookRow(book) {
        const rowElement = document.createElement('tr');

        const titleElement = createTdElement(book.title);
        const authorElement = createTdElement(book.author);
        const buttonsElement = createTdElement(book, true);

        rowElement.append(titleElement, authorElement, buttonsElement);
        tbodyElement.appendChild(rowElement);
    }

    function createTdElement(info, isForButtons = false) {
        const tdElement = document.createElement('td');

        if (isForButtons) {
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            tdElement.setAttribute('id', info._id);

            tdElement.append(editButton, deleteButton);
        } else {
            tdElement.textContent = info;
        }

        return tdElement;
    }

    function clearOldBooks() {
        Array.from(tbodyElement.children).forEach(child => child.remove());
    }

    async function submitBook(title, author) {
        try {
            const options = {
                'method': 'POST',
                'Content-type': 'application/json',
                'body': JSON.stringify({ title, author })
            };

            const res = await fetch(_url, options);
            const data = res.ok ? await res.json() : new Error();
            await onLoadBooks()
            // addBookRow({ title, author, id: data._id });
        } catch (error) {
            console.error(error);
        }
    }

    async function editBook(title, author) {
        const trElement = document.getElementById(idForEdit).parentElement;

        const options = {
            'method': 'PUT',
            'Content-type': 'application/json',
            'body': JSON.stringify({ title, author, id: idForEdit })
        }

        const res = await fetch(`${_url}/${idForEdit}`, options);
        const data = res.ok ? await res.json() : new Error();

        await onLoadBooks();
        // trElement.querySelector('td:nth-child(1)').textContent = title;
        // trElement.querySelector('td:nth-child(2)').textContent = author;
    }

    async function onTbodyClick(e) {
        if (e.target.textContent === 'Delete') {
            try {
                const res = await fetch(`${_url}/${e.target.id}`, { method: 'DELETE' });
                res.ok ? await res.json() : new Error();
                e.target.parentElement.parentElement.remove();
            } catch (error) {
                console.error(error);
            }
        } else if (e.target.textContent === 'Edit') {
            formTitleElement.textContent = 'Edit FORM';

            const currentRowElement = e.target.parentElement.parentElement;
            titleFieldElement.value = currentRowElement.querySelector('td:nth-child(1)').textContent;
            authorFieldElement.value = currentRowElement.querySelector('td:nth-child(2)').textContent;
            idForEdit = e.target.parentElement.id;

            formButton.textContent = 'Save';
        }
    }
}