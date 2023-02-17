function solve() {
    let columnElements = document.querySelectorAll('section');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        let task = document.getElementById('task').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;

        if (task && description && date) {
            let taskElement = document.createElement('article');
            let openTasksDivElement = columnElements[1].querySelector('div:nth-of-type(2)');

            let taskHeadingElement = document.createElement('h3');
            let descriptionElement = document.createElement('p');
            let dateElement = document.createElement('p');

            taskHeadingElement.textContent = task;
            descriptionElement.textContent = `Description: ${description}`;
            dateElement.textContent = `Due Date: ${date}`;
            
            let startButton = document.createElement('button', 'Start', 'green');

            taskElement.appendChild(taskHeadingElement);
            taskElement.appendChild(descriptionElement);
            taskElement.appendChild(dateElement);
            taskElement.appendChild(startButton);

            console.log(taskElement);

            openTasksDivElement.appendChild(taskElement);
        }
    }
}