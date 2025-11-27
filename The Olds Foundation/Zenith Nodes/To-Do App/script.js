
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const textError = document.getElementById("textError");
const listContainer = document.getElementById("list_container");
const taskCount = document.getElementById("taskCount");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

// 👉 Add task when Enter is pressed in the input
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

function addTask() {
  if (taskInput.value.trim() === "") {
    textError.innerHTML = "You Must Write Something";
    setTimeout(() => {
    textError.innerHTML = "";
    }, 2000);
    return;

  } else {
    const li = document.createElement("li");
    li.className = "flex items-center  justify-between bg-[#284038] px-4 py-2 rounded border-y-4 border-gray-400";

    li.innerHTML = `
      <div class="flex items-center gap-2 w-full">
        <input type="checkbox" class="checkbox w-5 h-5" onchange="toggleDone(this)">
        <span class="task-text text-white text-2xl font-bold break-all flex-grow">${taskInput.value}</span>
      </div>
      <div class="flex gap-2 text-white">
        <button class=" text-2xl" onclick="editTask(this)" title="Edit">✎</button>
        <button class=" text-xl" onclick="removeTask(this)" title="Delete">✖</button>
      </div>
    `;

    listContainer.appendChild(li);
    taskInput.value = "";
    saveData();
    updateCount();
  }
  textError.innerHTML = "";
}

function toggleDone(checkbox) {
  const text = checkbox.closest("li").querySelector(".task-text");
  if (checkbox.checked) {
    text.classList.add("line-through", "text-gray-400");
  } else {
    text.classList.remove("line-through", "text-gray-400");
  }
  updateCount();
  saveData();
}

function removeTask(button) {
  button.closest("li").remove();
  updateCount();
  saveData();
}

// ✅ Updated edit function with inline editing + Enter support
function editTask(button) {
    const li = button.closest("li");
    const span = li.querySelector(".task-text");
  
    span.contentEditable = true;
    span.focus();
  
    // Move cursor to the end of text
    const range = document.createRange();
    range.selectNodeContents(span);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  
    // Save on blur
    span.addEventListener("blur", () => {
      span.contentEditable = false;
      saveData();
    }, { once: true });
  
    // ✅ Save on Enter without allowing newline
    span.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();       // prevent new line
        span.blur();              // trigger blur to save
      }
    });
  }
  
function removeChecked() {
  document.querySelectorAll("#list_container input[type='checkbox']:checked").forEach((cb) => {
    cb.closest("li").remove();
  });
  updateCount();
  saveData();
}

function updateCount() {
  const total = listContainer.querySelectorAll("li").length;
  const checked = listContainer.querySelectorAll("input[type='checkbox']:checked").length;
  taskCount.textContent = `${checked} of ${total} tasks done`;

  const taskFooter = document.getElementById("taskFooter");

  if (total > 0) {
    taskFooter.classList.remove("hidden");
  } else {
    taskFooter.classList.add("hidden");
  }
}

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadData() {
  const data = localStorage.getItem("tasks");
  if (data) {
    listContainer.innerHTML = data;

    // Re-attach toggle event
    listContainer.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", () => {
        toggleDone(cb);
      });
    });
  }
  updateCount();
}

loadData();

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar