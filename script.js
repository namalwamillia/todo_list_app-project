

// Function to add a new task
function addTask() {
  // Get the task input value
  const taskInput = document.getElementById("taskInput").value;

  // Check if the task input is empty
  if (taskInput === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item element
  const listItem = document.createElement("li");
  listItem.textContent = taskInput;

  // Create a span element to hold the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskInput;
  listItem.appendChild(taskSpan);

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.backgroundColor = "#93b78f"; 
  editButton.style.color = "white";
  editButton.onclick = function() {
    editTask(taskSpan);
  };
  listItem.appendChild(editButton);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "#f8d4c3"; 
  deleteButton.style.color = "white";
  deleteButton.onclick = function() {
    deleteTask(listItem);
  };
  listItem.appendChild(deleteButton);
  

  // Append the list item to the task list
  const taskList = document.getElementById("taskList");
  taskList.appendChild(listItem);

  // Clear the task input field
  document.getElementById("taskInput").value = "";
}

// Function to edit a task
function editTask(taskSpan) {
  const newTask = prompt("Enter the new task:", taskSpan.textContent);
  if (newTask) {
    taskSpan.textContent = newTask;
  }
}

// Function to delete a task
function deleteTask(listItem) {
  listItem.parentNode.removeChild(listItem);
}
