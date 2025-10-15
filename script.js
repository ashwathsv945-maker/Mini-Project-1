// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  addTask(taskText);
  saveTask(taskText);
  taskInput.value = '';
});

// Add task to list (UI)
function addTask(text) {
  const li = document.createElement('li');
  li.innerHTML = `<span>${text}</span> <button class="delete-btn">Delete</button>`;
  taskList.appendChild(li);

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
    deleteTask(text);
  });
}

// Save to local storage
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load from local storage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task));
}

// Delete from local storage
function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
    }
