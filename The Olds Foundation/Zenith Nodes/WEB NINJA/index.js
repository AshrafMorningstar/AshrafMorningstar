const navlinks = document.querySelector(".navLinks");

console.log(navlinks);

function toggleMenu() {
  navlinks.classList.toggle("show");
}

const navlist = document.querySelectorAll(".navLinks li a");
console.log(navlist);

navlist.forEach(function (element) {
  console.log(element);

  element.addEventListener("click", toggleMenu);
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar