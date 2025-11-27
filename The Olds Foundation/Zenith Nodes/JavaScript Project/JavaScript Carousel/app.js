/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

const carouselContainer = document.querySelector(".carouselContainer");  
const slides = document.querySelectorAll('.slides');  
const next = document.querySelector('#next');  
const prev = document.querySelector('#prev');  
let counter = 1 ;  
const size = slides[0].clientWidth;  
carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
next.addEventListener('click',()=>{  
  if (counter>=slides.length)return;  
  carouselContainer.style.transition = 'transform 0.4s ease-in-out';  
  counter++;  
  carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
});  
prev.addEventListener('click',()=>{  
  if (counter<=0)return;  
  carouselContainer.style.transition = 'transform 0.4s ease-in-out';  
  counter--;  
  carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
});  
carouselContainer.addEventListener('transitionend',()=>{  
  console.log(slides[counter]);  
  if(slides[counter].id ==='lastslide'){  
  carouselContainer.style.transition = 'none';  
  counter = slides.length - 2;      
  carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
  }  
});  
carouselContainer.addEventListener('transitionend',()=>{  
  console.log(slides[counter]);  
  if(slides[counter].id ==='firstslide'){  
  carouselContainer.style.transition = 'none';  
  counter = slides.length - counter;      
  carouselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
  }  
});  