
let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
let imageDiv = document.getElementById("image")

main.addEventListener( "mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y:dets.y,
        duration:0.2
    })   
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale:4,
         backgroundColor:"transparent"
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"transparent"
    })
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar