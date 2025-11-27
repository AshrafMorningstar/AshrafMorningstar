 
 // 4 pillars of DOM

 // 1) Selecting of an Elements ...
 // 2) Changing HTML
 // 3) Changing CSS
 // 4) Event Listener 
 
 
//   let A = document.querySelector("h1") // to select a elements 
//     console.log(A);


// let B = document.querySelector("h1")      // Change HTML
//     B.innerHTML = "HellO World";

// let C = document.querySelector("h1")   // change CSS
// C.style.color = "red";
// C.style.backgroundColor = "black"     // works only camelCase 



// let D = document.querySelector("h1")
// let button = document.querySelector("button")

// button.addEventListener("click", function (){
//     D.style.color = "red";
//     D.style.backgroundColor = "Green";
//     D.style.fontSize = "50px";
// })


let bulb =  document.querySelector("#bulb");
let btn = document.querySelector("#btn")
let display = document.querySelector("#display")

let action = 0
btn.addEventListener("click", function(){
    if(action == 0 ){
        bulb.style.backgroundColor = "Green";
        bulb.style.borderColor = "purple"
        display.textContent = " Bulb Is On"
        btn.innerHTML = "ON";
        action = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        bulb.style.borderColor = "white"
        display.textContent = " Bulb Is Of"
        btn.innerHTML = "OF";
        action = 0;
    }
})


let Name = document.querySelectorAll("h2")

Name.forEach(function(e){
    console.log(e); 
})


let box =  document.getElementById("box")   // this method use  fro Id name element
 
// let box1 =  document.getElementsByClassName("box") // this method use for class name element

box.textContent = "Vikram pal";   // this is use form change text in the element
box.innerHTML = " <h1> Hello World</h1>"    //  this is use form change element 

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar