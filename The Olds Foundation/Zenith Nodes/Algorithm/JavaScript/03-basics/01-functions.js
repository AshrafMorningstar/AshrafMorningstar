// Example of Functions 

function sayName (){
    console.log("V");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("m");
    console.log("V"); 
}

// sayName();

// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(154, 675);   // Normal way  
// addTwoNumbers(154, "675");    // string type
// addTwoNumbers(154, null);    // null type


function addTwoNumbers (num1, num2) {
    // let result = ( num1 + num2)
    // return result


    return (num1 + num2)
}

const result = addTwoNumbers( 548, 544)
// console.log("Result: " + result);


function loginUserMessage (username = "kishan") {
    // if(username === undefined)       // method one
        if(!username){              // method two
        console.log("Please enter the user name");
        return
    }
    
        return` ${username} just logged In`
}
// console.log(loginUserMessage("Vikram"));       // output:  Vikram just logged In
// console.log(loginUserMessage(""));       // output:   just logged In
// console.log(loginUserMessage());              // output:  undefined


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 500, 900,2000));



// object function example
const user ={
    username: "vikram Pal",
    Price: 2500
}

function handleObject(anyObject){
    console.log(`The Username is ${anyObject.username} and Price is ${anyObject.Price}`);   
}

// handleObject(user);
// handleObject({                        // You Can pass the value directly like this 
//     username: "Aayush Pal",
//     Price: 3500
// })

// Array function Exmaple

const myArray = [200, 5000, 800, 1000, 3000]

function returnMyArray (getArray){
    return getArray[3];
}

// console.log(returnMyArray(myArray));
// console.log(returnMyArray([500,300, 1000, 600, 400]));    // direct print the value 

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar