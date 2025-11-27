const section = document.querySelector("section");
let clicked = false;
section.addEventListener("click", (e) => {
  section.classList.toggle("flip");
  if (!clicked) {
    clicked = true;
    document.getElementById("title").style.opacity = 0;
  }
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar