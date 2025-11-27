const main = document.querySelector("main");

document.querySelector(".scroller").addEventListener("scrollsnapchange", (event) => {
  main.dataset.activeIndex = Math.round(event.target.scrollLeft / main.getBoundingClientRect().width);
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar