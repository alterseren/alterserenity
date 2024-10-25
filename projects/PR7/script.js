document.addEventListener('DOMContentLoaded', loadTasks);

const inputField = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
        addTask(inputField.value);
        inputField.value = '';
    }
});

function addTask(taskText, date = new Date().toLocaleString(), completed = false) {
    const taskItem = document.createElement('li');
    if (completed) taskItem.classList.add('completed');

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} (${date})`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('click', completeTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X  ';
    deleteBtn.addEventListener('click', removeTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    saveTasks();
}

function completeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
    taskItem.querySelector('input[type="checkbox"]').remove();
    saveTasks();
}

function removeTask(event) {
    event.target.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(taskItem => {
        const taskText = taskItem.querySelector('span').textContent.split(' (')[0];
        const taskDate = taskItem.querySelector('span').textContent.split(' (')[1].slice(0, -1);
        const completed = taskItem.classList.contains('completed');
        tasks.push({ text: taskText, date: taskDate, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.date, task.completed));
}
