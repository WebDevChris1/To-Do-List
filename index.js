// Grab Elements
const toDoInput = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoContainer = document.getElementById("to-do-list-container-2");
const toDoList = document.getElementById("to-do-list");
const toDoLocalStorage = JSON.parse(localStorage.getItem("toDo"));
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");
const total = document.getElementById("total");
let toDoEntryNum = 0;
let toDoEntry = [];

// Local Storage
if (toDoLocalStorage) {
  toDoContainer.setAttribute("class", `box container-2`);
  deleteBtn.removeAttribute("style");
  toDoEntry = toDoLocalStorage;
  render(toDoEntry);
}

// Add a Task
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

// Delete All Tasks
deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  toDoList.textContent = "";
  toDoEntryNum = 0;
  toDoEntry = [];
  entryId = [];
  deleteBtn.setAttribute("style", "display: none");
  toDoContainer.removeAttribute("class");
  totalTaskCount(toDoEntry);
});

// Render Tasks
function render(items) {
  let listItems = [];
  let itemId = 1;
  for (let i = 0; i < items.length; i++) {
    listItems += `<li id="${itemId}">${items[i]}<button onClick="removeTask(${itemId})"><i class="fas fa-trash-alt"></i></button></li>`;
    toDoList.innerHTML = listItems;
    totalTaskCount(toDoEntry);
    itemId += 1;
  }
}

// Delete Individual Tasks
function removeTask(itemId) {
  let item = document.getElementById(itemId);
  toDoList.removeChild(item);
  let lisItems = document.getElementsByTagName("li");
  toDoEntry = [];
  for (var i = 0; i < lisItems.length; ++i) {
    toDoEntry.push(lisItems[i].textContent);
    localStorage.setItem("toDo", JSON.stringify(toDoEntry));
  }
  totalTaskCount(toDoEntry);
  if (toDoEntry.length === 0) {
    localStorage.clear();
    deleteBtn.setAttribute("style", "display: none");
    toDoContainer.removeAttribute("class");
  }
}

// Total Task Count
function totalTaskCount(entry) {
  let totalTask = "Total: " + entry.length;
  total.textContent = totalTask;
}
