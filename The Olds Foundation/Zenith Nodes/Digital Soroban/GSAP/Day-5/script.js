
let menu = document.querySelector("#nav i");
let cross = document.querySelector("#sidebar i");


let tl = gsap.timeline()
tl.to("#sidebar", {
    right:0,
    duration:0.5
})

tl.from("#sidebar h4", {
    x:270,
    duration:0.7,
    stagger:0.2,
    opacity:0
})
tl.from( "#sidebar i", {
    opacity:0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar