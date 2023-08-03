const taskTextInput = document.getElementById('task-text-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks-list');

const storageTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(storageTasks));
}

function renderTasks() {
  tasksList.innerHTML = '';

  storageTasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;

    tasksList.appendChild(taskElement);
  });
}

function createTask() {
  const taskText = taskTextInput.value.trim();

  storageTasks.push({ text: taskText });
  taskTextInput.value = '';
  updateLocalStorage();
  renderTasks();
}

taskTextInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') createTask();
});

addTaskBtn.addEventListener('click', createTask);

window.addEventListener('load', () => {
  taskTextInput.value = '';
  renderTasks();
});
