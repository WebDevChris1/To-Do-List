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

if (toDoLocalStorage) {
  toDoContainer.setAttribute("class", `box container-2`);
  deleteBtn.removeAttribute("style");
  toDoEntry = toDoLocalStorage;
  totalTaskCount(toDoEntry);
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
  entryId = [];
  deleteBtn.setAttribute("style", "display: none");
  toDoContainer.removeAttribute("class");
  totalTaskCount(toDoEntry);
});

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
  // if (toDoEntry > 1) {
  //   total.removeAttribute("style");
  // }
  if (toDoEntry.length === 0) {
    localStorage.clear();
    deleteBtn.setAttribute("style", "display: none");
    toDoContainer.removeAttribute("class");
    // total.setAttribute("style", "display: none");
  }
}

function totalTaskCount(entry) {
  let totalTask = "Total: " + entry.length;
  total.textContent = totalTask;
}
