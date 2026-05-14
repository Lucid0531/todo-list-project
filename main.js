const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTask();
console.log(tasks);

// Add task and render list using DOM
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const todoInput = document.querySelector('#todo-input');
  const dateInput = document.querySelector('#date-input');

  tasks.push({
    id: self.crypto.randomUUID(),
    text: todoInput.value,
    date: dateInput.value 
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoInput.value = "";
  dateInput.value = "";
  renderTask();
}

function renderTask() {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';
  
  tasks.forEach((task) => {
    todoList.innerHTML += `
      <p>${task.text}</p>
      <p>${task.date}</p>
      <button id="delete-btn" data-id="${task.id}">Delete</button>
    `;
  });
}

document.querySelectorAll('#delete-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
      let i = 0;
      tasks.forEach((task) => {
        if(button.dataset.id === task.id) {
          tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          renderTask();
        }
        i++;
      });
    });
  });