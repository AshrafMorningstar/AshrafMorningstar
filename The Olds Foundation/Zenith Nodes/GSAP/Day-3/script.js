
let path = `M 10 100 Q 500 100, 990 100`

let finalPath = `M 10 100 Q 500 100, 990 100`

let string =  document.querySelector("#string")


string.addEventListener("mousemove", function(dets){
    path =  `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d: path},
        duration: 0.3,
        ease:"power3.out"
    })
    
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration:0.8,
        ease: "elastic.out(1,0.3)"
    })

})


// string.addEventListener("mouseleave", function(){
//     console.log("leave");    
// })

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar