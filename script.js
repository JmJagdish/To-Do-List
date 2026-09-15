let addTask = document.getElementById("task");
let addBtn = document.getElementById("addBtn");
let displayTask = document.getElementById("taskList");

// Get tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add button
addBtn.addEventListener("click", addData);

// Allow Enter key to add task
addTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addData();
  }
});

// ==========================
// ADD TASK
// ==========================

function addData() {
  // Don't add empty task
  if (addTask.value.trim() === "") {
    return;
  }

  // Create new task
  let newTask = {
    id: Date.now(),
    text: addTask.value.trim(),
    completed: false,
  };

  // Add task to array
  tasks.push(newTask);

  // Save to Local Storage
  saveTasks();

  // Display tasks
  displayTasks();

  // Clear input
  addTask.value = "";
}

function updateScrollHint() {
  let scrollHint = document.querySelector(".scroll-hint");

  if (displayTask.scrollHeight > displayTask.clientHeight) {
    scrollHint.style.display = "flex";
  } else {
    scrollHint.style.display = "none";
  }
}

// ==========================
// DISPLAY TASKS
// ==========================

function displayTasks() {
  // Clear existing tasks
  displayTask.innerHTML = "";

  // Loop through tasks
  tasks.forEach((item) => {
    // Create elements
    let task = document.createElement("div");

    let taskLeft = document.createElement("div");

    let checkbox = document.createElement("input");

    let taskText = document.createElement("p");

    let deleteBtn = document.createElement("button");

    // Add classes
    task.classList.add("task");

    taskLeft.classList.add("task-left");

    deleteBtn.classList.add("delete-btn");

    // Configure checkbox
    checkbox.type = "checkbox";

    // ⭐ Restore saved checkbox state
    checkbox.checked = item.completed;

    // Task text
    taskText.innerText = item.text;

    // Delete icon
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    // Build structure
    taskLeft.append(checkbox, taskText);

    task.append(taskLeft, deleteBtn);

    // Add task to page
    displayTask.append(task);

    // ==========================
    // CHECKBOX
    // ==========================

    checkbox.addEventListener("change", () => {
      // Update completed status
      item.completed = checkbox.checked;

      // Save updated task
      saveTasks();
    });

    // ==========================
    // DELETE
    // ==========================

    deleteBtn.addEventListener("click", () => {
      // Remove selected task
      tasks = tasks.filter((taskItem) => {
        return taskItem.id !== item.id;
      });

      // Save updated array
      saveTasks();

      // Refresh task list
      displayTasks();
    });
  });

  updateScrollHint();
}

// ==========================
// SAVE TASKS
// ==========================

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ==========================
// LOAD TASKS ON PAGE LOAD
// ==========================

displayTasks();
