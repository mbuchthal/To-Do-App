
var newTask = document.getElementById("newtask");
var addButton = document.getElementById("addtaskbutton");
var incompleteTaskList = document.getElementById("incomplete-tasks");
var completeTaskList = document.getElementById("completed-tasks");

var createNewTask = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

var addTask = function() {
  var listItem = createNewTask(newTask.value);
  if (newTask.value !== "") {
    incompleteTaskList.appendChild(listItem);
    taskEvent(listItem, completeTask);
    newTask.value = "";
  }
};

var editTask = function() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var editButton = listItem.querySelector("button");
  if (listItem.classList.contains("edititem")) {
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
  } else {
    editInput.value = label.innerText;
    editButton.innerText = "Save";
  };
  listItem.classList.toggle("edititem");
};

var completeTask = function() {
  var listItem = this.parentNode;
  completeTaskList.appendChild(listItem);
  taskEvent(listItem, incompleteTask);
}

var incompleteTask = function() {
  var listItem = this.parentNode;
  incompleteTaskList.appendChild(listItem);
  taskEvent(listItem, completeTask);
}

var deleteTask = function() {
  console.log('task delete');
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var taskEvent = function(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click", addTask);
for (var i = 0; i < incompleteTaskList.children.length; i++) {
  taskEvent(incompleteTaskList.children[i], completeTask);
};
for (var i = 0; i < completeTaskList.children.length; i++) {
  taskEvent(completeTaskList.children[i], incompleteTask);
};
