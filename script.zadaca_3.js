let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

function onClickCreateTask() {
  let listElement = document.createElement("li");
  let inputElement = document.createElement("input");
  let checkBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let checkBtnIcon = document.createElement("i");
  let deleteBtnIcon = document.createElement("i");
  checkBtn.setAttribute("class", "bi bi-check-circle-fill complete");
  deleteBtn.setAttribute("class", "bi bi-x-circle-fill delete");

  inputElement.type = "text";
  inputElement.value = inputTask.value;
  inputElement.readOnly = true;

  if (inputTask.value.trim() === "") {
    return;
  }

  checkBtn.addEventListener("click", onClickComplete);
  deleteBtn.addEventListener("click", onClickDelete);

  taskList.appendChild(listElement);
  listElement.appendChild(inputElement);
  listElement.appendChild(checkBtn);
  checkBtn.innerHTML = "Done";
  listElement.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Trash";
  checkBtn.appendChild(checkBtnIcon);
  deleteBtn.appendChild(deleteBtnIcon);

  inputTask.value = "";
}

createBtn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement;
  listElement.classList.toggle("completed");
  console.log(listElement.classList);
}

function onClickDelete(event) {
  let listElement = event.target.parentElement;
  taskList.removeChild(listElement);
}
