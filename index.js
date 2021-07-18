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
  entryId = [];
  deleteBtn.setAttribute("style", "display: none");
  toDoContainer.removeAttribute("class");
});

function render(items) {
  let listItems = [];
  let itemId = 1;
  for (let i = 0; i < items.length; i++) {
    listItems += `<li id="${itemId}">${items[i]}<button onClick="removeTask(${itemId})"><i class="fas fa-trash-alt"></i></button></li>`;
    toDoList.innerHTML = listItems;
    itemId += 1;
  }
}

function removeTask(itemId) {
  let item = document.getElementById(itemId);
  toDoList.removeChild(item);
  let listItemIds = document.querySelectorAll("#to-do-list li[id]");
  let newToDoList = [];
  let newToDoEntry = [];
  for (let i = 0; i < listItemIds.length; i++) {
    newToDoList.push(listItemIds[i].id);
  }
  for (let i = 0; i < newToDoList.length; i++) {
    let listItemId = document.getElementById(+newToDoList[i]).value;
    newToDoEntry.push(listItemId);
  }
  toDoEntry = newToDoEntry;
  localStorage.setItem("toDo", JSON.stringify(toDoEntry));
}

// function removeTask(clicked_id) {
//   let btnId = clicked_id;
//   let listItemIds = document.querySelectorAll("#to-do-list li[class]");
//   let listItemId = [];
//   for (let i = 0; i < listItemIds.length; i++) {
//     listItemId.push(listItemIds[i].id);
//   }
//   for (let i = 0; i < listItemId.length; i++) {
//     let itemId = listItemId[i];
//     if (btnId === itemId) {
//       toDoEntry.splice(i, i);
//       let removeItemId = document.getElementByClass(+itemId);
//       removeItemId.remove();
//       console.log(toDoEntry);
//     }
//   }
// }
