const items = document.querySelector(".items");
const componentItems = document.querySelector(".component .items");
const emptyText = document.querySelector(".empty-text");
const emptyBtn = document.querySelector(".empty-cart");

items.addEventListener("click", (e) => {
  if (emptyText !== null) {
    emptyText.setAttribute("hidden", true);
  }

  if (e.target.matches(".item")) {
    const item = e.target.cloneNode(true);
    componentItems.append(item);
  }
});

componentItems.addEventListener("click", (e) => {
  if (e.target.matches(".item")) {
    e.target.remove();
  }
  if (componentItems.children.length < 1) {
    emptyText.removeAttribute("hidden");
  }
});

emptyBtn.addEventListener("click", (e) => {
  while (componentItems.lastElementChild) {
    componentItems.removeChild(componentItems.lastElementChild);
  }
  emptyText.removeAttribute("hidden");
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar