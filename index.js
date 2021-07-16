const toDoInput = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoContainer = document.getElementById("to-do-list-container-2");
const toDoList = document.getElementById("to-do-list");
const toDoLocalStorage = JSON.parse(localStorage.getItem("toDo"));
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");
let toDoEntryNum = 0;
let toDoEntry = [];

if (toDoLocalStorage) {
  toDoContainer.setAttribute("class", `box container-2`);
  deleteBtn.removeAttribute("style");
  toDoEntry = toDoLocalStorage;
  render(toDoEntry);
}

addBtn.addEventListener("click", function () {
  toDoEntryNum += 1;
  if (toDoEntryNum > 0) {
    toDoContainer.setAttribute("class", `box container-2`);
    deleteBtn.removeAttribute("style");
  }
  toDoEntry.push(toDoInput.value);
  toDoInput.value = "";
  localStorage.setItem("toDo", JSON.stringify(toDoEntry));
  render(toDoEntry);
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  toDoList.textContent = "";
  toDoEntryNum = 0;
  toDoEntry = [];
  deleteBtn.setAttribute("style", "display: none");
  toDoContainer.removeAttribute("class");
});

function render(items) {
  let listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems += `<li>${items[i]}<i class="fas fa-trash-alt"></i></li>`;
    toDoList.innerHTML = listItems;
  }
}
