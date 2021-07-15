const toDoInput = document.getElementById("to-do-input");
const toDoBtn = document.getElementById("to-do-btn");
const toDoContainer = document.getElementById("to-do-list-container-2");
const toDoList = document.getElementById("to-do-list");
const toDoFromLocalStorage = JSON.parse(localStorage.getItem("toDo"));
const deleteBtn = document.getElementById("delete-btn");
let toDoEntryNum = 0;

// localStorage.clear();

// if (toDoFromLocalStorage) {
//   toDoContainer.setAttribute("class", `box container-2`);
//   myToDo = toDoFromLocalStorage;
//   render(myToDo);
// }

toDoBtn.addEventListener("click", function () {
  let toDoEntry = [];
  toDoEntryNum += 1;
  if (toDoEntryNum > 0) {
    toDoContainer.setAttribute("class", `box container-2`);
    deleteBtn.removeAttribute("style");
  }
  toDoEntry.push(toDoInput.value);
  localStorage.setItem("toDo", JSON.stringify(toDoEntry));
  toDoInput.value = "";
  toDoList.innerHTML += `
  <li>${toDoEntryNum}. ${toDoEntry}<i class="fas fa-trash-alt"></i></li>
    `;
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  toDoList.textContent = "";
  toDoEntryNum = 0;
  deleteBtn.setAttribute("style", "display: none");
  if (toDoEntryNum === 0) {
    toDoContainer.removeAttribute("class");
  }
});

// function render(items) {
//   let listItems = [];
//   for (let i = 0; i < items.length; i++) {
//     listItems += `<li>${toDoEntryNum}. ${items[i]}<i class="fas fa-trash-alt"></i></li>`;
//     toDoList.innerHTML += listItems;
//   }
// }
