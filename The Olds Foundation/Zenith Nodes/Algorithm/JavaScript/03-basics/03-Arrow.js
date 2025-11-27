// PreReplicate for function and this 

const user = {
    username: "Vikram Pal",
    Prise:999,

    welcomeMessage :function(){
        console.log(`Hello ${this.username} Welcome to My WebSite`);
        // console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Aayush Pal"
// user.welcomeMessage();
// console.log(this);

// function one(){
//     let username = "vikram kumar";
//     console.log(this.username);
    
// }
// one();

// const chai = function(){
//     let username = "vikram kumar";
//     console.log(this.username);
        
// }

const chai = () => {
    let username = "vikram kumar";
    console.log(this.username);
        
}
// chai();

// Basic Arrow Fucntion
// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }


// Implicit Arrow Function
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => {username:"Vikram pal"};   // agar apko is arrow function mey object is method mey use karoge toh output "undefine" aayega 
const addTwo = (num1, num2) =>( {username:"Vikram pal", price:999});   // You can use parentis for use object in arrow function than you will get right output.
console.log(addTwo(257, 5478));





//  import note Agar apne carli {} ye wale bracket lagaya to apko return likhana he padhega aur agar apne normal () ye wala bracket lagaya toh return nhi likhana hai ap direct run kar sakte hai  jadha karke ye wala method react mey use hoga 

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar