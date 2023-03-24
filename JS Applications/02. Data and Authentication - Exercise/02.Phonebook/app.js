function attachEvents() {
    const _url = 'http://localhost:3030/jsonstore/phonebook';
    document.getElementById('btnLoad').addEventListener('click', loadPhonebook);
    document.getElementById('btnCreate').addEventListener('click', createPhonebookEntry);
    const phonebookUlElement = document.getElementById('phonebook');
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    async function loadPhonebook() {
        clearPhonebook();

        try {
            const res = await fetch(_url);
            const data = res.ok ? await res.json() : new Error();
            
            Object.values(data).forEach(o => displayPhonebookEntry(o));
        } catch (error) {
            console.error(error);
        }
    }

    function displayPhonebookEntry(infoObj) {
        const entryElement = document.createElement('li');
        entryElement.textContent = `${infoObj.person}: ${infoObj.phone}`;

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.setAttribute('id', infoObj._id);
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deletePhonebookEntry);

        entryElement.append(deleteButtonElement);
        phonebookUlElement.appendChild(entryElement);
    }

    function clearPhonebook() {
        if (phonebookUlElement.children) {
            Array.from(phonebookUlElement.children).forEach(child => child.remove());
        }
    }

    async function createPhonebookEntry() {
        const info = {
            person: personInputElement.value,
            phone: phoneInputElement.value
        };
        const options = {
            'method': 'post',
            'Content-type': 'application/json',
            'body': JSON.stringify(info)
        };

        try {
            await fetch(_url, options);
            await loadPhonebook();
        } catch (error) {
            console.error(error);
        }

        personInputElement.value = '';
        phoneInputElement.value = '';
    }

    async function deletePhonebookEntry(e) {
        const id = e.target.id;
        const options = { 'method': 'delete' };

        try {
            const res = await fetch(`${_url}/${id}`, options);
            res.ok ? await res.json() : new Error();
            await loadPhonebook();
        } catch (error) {
            console.error(error);
        }
    }
}

attachEvents();