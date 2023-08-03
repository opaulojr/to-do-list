const taskTextInput = document.getElementById('task-text-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks-list');
const errorDiv = document.getElementById('error-message');

const storageTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(storageTasks));
}

function showErrorMessage(message) {
  errorDiv.innerText = message;
  errorDiv.style.display = 'block';
}

function clearErrorMessage() {
  errorDiv.innerHTML = '';
  errorDiv.style.display = '';
}

function validateInput(taskText) {
  if (!taskText) {
    showErrorMessage('Type something!');
    return false;
  }

  if (storageTasks.find((task) => task.text === taskText)) {
    showErrorMessage('This task already exists');
    return false;
  }

  return true;
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

  if (!validateInput(taskText)) return;

  storageTasks.push({ text: taskText });
  taskTextInput.value = '';
  clearErrorMessage();
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
