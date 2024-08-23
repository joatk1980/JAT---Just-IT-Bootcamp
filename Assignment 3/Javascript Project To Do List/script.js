document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#task-form");
  const taskInput = document.querySelector("#task-input");
  const taskList = document.querySelector("#task-list");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = "";
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
    taskList.appendChild(li);

    li.querySelector(".complete-btn").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      taskList.removeChild(li);
    });
  }
});
