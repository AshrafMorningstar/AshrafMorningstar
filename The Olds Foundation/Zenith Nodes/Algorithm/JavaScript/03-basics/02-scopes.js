var c = 300            // this is global scope 
let a = 300

if (true){
    let a = 10
    const b = 30                    // this is block scope
    var c = 40
    // console.log("Inner: ", a);
}


// console.log(a);
// console.log(b)
// console.log(c);


//  Nested Scope 

function One(){
    const username = "vikram Pal"

    function Two(){
        const Email = "Vikrampal038@gmail.com"
        // console.log(username);
    }
    // console.log(Email);
    

    // Two();
}
// One();


if(true){
    const username = "Vikram Pal"

    if(username === "Vikram Pal"){
        const Email = "   vikrampal038@gmail.com"
        // console.log(` UserName is ${username} and the Email is ${Email}`);
        // console.log(username + Email);
        
    }
    // console.log(Email);   // this is Error for practice
}
// console.log(username);   // this is also Error for practice

// +++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1                      // only declaration
}


const addTwo = function (num){               // declaration and variable 
    return num+2
}
console.log(addTwo(10));


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar