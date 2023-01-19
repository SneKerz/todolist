'use strict';

const addTask = document.getElementById(`addTask`);
const taskText = document.querySelector(`.taskText`);
const addCan = document.querySelector(`.addcan`);
const add = document.querySelector(`.add`);
const cancel = document.querySelector(`.cancel`);
const textBox = document.querySelector(`.textbox`);
const tasklisted = document.querySelector(`.tasks`);
const days = document.querySelector(`#days`);
const toweek = document.querySelector(`.toweek`);
const del = document.querySelector(`.delete`);
console.log(del);
let positionCounter = 0;

// function selectDisplay() {}

class task {
  constructor(position, name, date, id) {
    this.position = position;
    this.name = name;
    this.date = date;
    this.id = id;
  }
}
console.log(tasklisted);
const tasks = [];

function createTaskBox() {
  let x = document.createElement(`li`);
  x.setAttribute(`id`, `li_${tasks.length}`);
  x.innerHTML = `<p class="listed">${
    tasks[tasks.length - 1].name
  }</p><div class = "delete" onclick="deleteTask(parentNode.id)">X</div>`;
  document.querySelector(`.tasks`).appendChild(x);
  document.querySelector(`#li_${positionCounter}`);
}

function addTaskDisplay() {
  addTask.style.display = `none`;
  taskText.style.display = `flex`;
  addCan.style.display = `flex`;
}

function revertDisplay() {
  addTask.style.display = `flex`;
  taskText.style.display = `none`;
  addCan.style.display = `none`;
}

function saveTask() {
  positionCounter++;

  tasks.push(
    new task(
      `${positionCounter}`,
      `${textBox.value}`,
      ``,
      `li_${positionCounter + 1}`
    )
  );
  console.log(tasks);
  createTaskBox();

  revertDisplay();
}

function deleteTask(e) {
  function findE(x) {
    return x.id === e;
  }
  tasks.splice(Number(find(findE).position), 1);
  document.querySelector(`#${e}`).remove();
}

function changePage(e) {
  document.querySelector(`.${e}`).style.display = 'flex';
}

days.addEventListener(`click`, e => {
  changePage(`today`);
});

addTask.addEventListener(`click`, e => {
  addTask.addEventListener(`click`, addTaskDisplay());
});
add.addEventListener(`click`, e => {
  saveTask();
});

cancel.addEventListener(`click`, e => {
  revertDisplay();
});

// del.addEventListener(`click`, e => {
//   console.log(e.target.parentNode.id);
// });

let a = [1, 2, 3, 4, 5];
console.log(a);
a.splice(3, 1);
console.log(a);

console.log(days);
console.log(document.querySelector(`.selectors`));
