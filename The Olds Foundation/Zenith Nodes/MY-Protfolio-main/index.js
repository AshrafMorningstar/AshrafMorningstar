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

// this is Typing animation code

const texts = [
  "Full Stack Web Developer.",
  "Front-End Developer.",
  "Back-End Developer.",
  "Web Designer.",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".detail").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 200); // Pause before starting next sentence
  } else {
    setTimeout(type, 50); // Typing speed
  }
})();

// project section swipper js code 

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //  responsive code
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar