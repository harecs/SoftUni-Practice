async function attachEvents() {
    const _url = 'http://localhost:3030/jsonstore/collections/students';
    document.getElementById('submit').addEventListener('click', addStudent);
    const tableBodyElement = document.getElementsByTagName('tbody')[0];
    refreshTable(false);

    const firstNameInputElement = document.querySelector('input[name="firstName"]');
    const lastNameInputElement = document.querySelector('input[name="lastName"]');
    const facultyNumberInputElement = document.querySelector('input[name="facultyNumber"]');
    const gradeInputElement = document.querySelector('input[name="grade"]');

    async function addStudent(e) {
        e.preventDefault();

        const firstName = firstNameInputElement.value;
        const lastName = lastNameInputElement.value;
        const facultyNumber = facultyNumberInputElement.value;
        const grade = gradeInputElement.value;

        if (firstName != '' && lastName != '' && facultyNumber != '' && grade != '') {
            try {
                const studentInfo = {
                    firstName,
                    lastName,
                    facultyNumber,
                    grade
                };
                const options = {
                    'method': 'post',
                    'ContentType': 'application/json',
                    'body': JSON.stringify(studentInfo)
                }

                const res = await fetch(_url, options);
                res.ok ? await res.json() : new Error();

                clearInputFields();
                refreshTable();
            } catch (error) {
                console.error(error);
            }
        }
    }

    function clearInputFields() {
        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        facultyNumberInputElement.value = '';
        gradeInputElement.value = '';
    }

    function refreshTable(isOnSubmit = true) {
        if (isOnSubmit) {
            const oldTbodyRows = document.querySelectorAll('tbody tr');
            oldTbodyRows.forEach(row => row.remove());
        }

        try {
            const xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'http://localhost:3030/jsonstore/collections/students', false);
            xhttp.send();

            if (xhttp.responseText.length !== 0) {
                const studentsInfo = JSON.parse(xhttp.responseText);
                Object.values(studentsInfo).forEach(info => addTableRowForStudent(info));
            }
        } catch (error) {
            console.error(error);
        }

    }

    function addTableRowForStudent(infoObj) {
        const rowElement = document.createElement('tr');
        const firstNameElement = createTdInfoElement(infoObj.firstName);
        const lastNameElement = createTdInfoElement(infoObj.lastName);
        const facultyNumberElement = createTdInfoElement(infoObj.facultyNumber);
        const gradeElement = createTdInfoElement(infoObj.grade);

        rowElement.append(firstNameElement, lastNameElement, facultyNumberElement, gradeElement);
        tableBodyElement.appendChild(rowElement);
    }

    function createTdInfoElement(info) {
        const tdElement = document.createElement('td');
        tdElement.textContent = info;

        return tdElement;
    }
}

attachEvents();