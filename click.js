let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");




let createTask = function(task) {
    let listItem = document. createElement('li');
    let checkbox = document. createElement('input');
    let label = document. createElement('label');
    label.innerText = task;
    checkbox.type = 'checkbox';



    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault ();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    bindInCompleteItems(listItem, completeTask);
}
let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input [type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem);
    bindInCompleteItems(listItem,deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem,checkboxclick) {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxclick;
}

let bindCompleteItems = function(taskItem,deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

form.addEventListener('submit', addTask);