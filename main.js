const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
  addTask();
});

function addTask() {
  let input = document.querySelector('#userInput');
  let list = document.querySelector('#list');

  if(input.value.trim() !== "") {
    list.innerHTML += `
      <li>${input.value}</li>
    `;

    input.value = "";
  }
}