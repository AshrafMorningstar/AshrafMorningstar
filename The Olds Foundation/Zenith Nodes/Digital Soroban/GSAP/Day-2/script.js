// this is timeline animation
// let tl = gsap.timeline()

// tl.from("#heading", {
//     opacity:1,
//     duration:1.2,
//     scale:0.2
// })
// tl.from(" #nav h1", {
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:1
// })
// tl.from("li", {
//     y:-30,
//     opacity:0,
//     duration:0.7,
//     stagger:0.3
// })


// tl.from("#page1 #box", {
//     scale:0,
//     duration:2,
//     delay:0.2,
//     rotate:360
// })
// tl.from("#page1 #box h1",{
//     scale:0,
//     duration:1.2,
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{                    // In this page i am using a new animation property called scrollTrigger
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 #box h1",{
//     opacity:0,
//     x:500,
//     duration:1,
//     delay:1,
//     scrollTrigger:{                       // In this page i am using a new animation property called scrollTrigger
//         trigger:"#page2 #box h1",
//         scroller:"body",
//         marker:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 #box h2",{
//     opacity:0,
//     x:-500,
//     duration:1,
//     delay:1,
//     scrollTrigger:{                     // In this page i am using a new animation property called scrollTrigger
//         trigger:"#page2 #box h2",
//         scroller:"body",
//         marker:true,
//         start:"top 50%"
//     }
// })

// gsap.from ("#page2 #box", {
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,                    // this property is new used for smooth animation
//         pin:true                   //  this property us new used for pin the element
//     }
// })


gsap.to("#page2 h1", {
   transform: "translateX(-150%)",
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin: true,
   }
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar