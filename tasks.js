// Query for the submit button and input task field, and store them in variables
const submit = document.getElementById("submit");
const newTask = document.getElementById("task");
const taskList = document.getElementById("tasks"); // The unordered list where tasks will be added

// Disable the submit button by default
submit.disabled = true;

// Listen for input in the task field
newTask.addEventListener("input", () => {
  // Enable the submit button only if the input field is not empty
  submit.disabled = newTask.value.trim() === "";
});

// Listen for the form submission
document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Find the task the user just submitted (input value)
  const task = newTask.value.trim();
  if (task === "") return false; // Ignore if the input is empty

  // Create a list item for the new task
  const listItem = document.createElement("li");
  listItem.textContent = task;

  // Add the list item to the unordered list
  taskList.append(listItem);

  // Clear the input field and disable the submit button again
  newTask.value = "";
  submit.disabled = true;

  return false; // Prevent form submission
});
