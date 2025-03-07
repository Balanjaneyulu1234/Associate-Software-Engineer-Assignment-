// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
