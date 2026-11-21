const form = document.getElementById("tasks__form");

// добавление задачи
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textOfTask = document.getElementById("task__input").value.trim();

  if (!textOfTask) {
    alert("Введите, пожалуйста, название новой задачи");
    return;
  }

  let taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.innerHTML = `
    <div class="task__title">
    ${textOfTask}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;

  document.getElementById("tasks__list").appendChild(taskEl);
  document.getElementById("task__input").value = "";
});

// удаление задачи
const tasksContainer = document.querySelector(".tasks__list");

tasksContainer.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".task__remove");
  if (!removeBtn) return; // клик не по кнопке удаления

  e.preventDefault(); // отменяем переход по ссылке (href="#")

  const task = removeBtn.closest(".task");
  if (task) {
    task.remove(); // удаляем весь блок задачи
  }
});
