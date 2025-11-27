const userEmail = "";

// if (userEmail){
//     console.log("Truthy");    
// }else{
//     console.log("Falsy");
// }

//! falsy value
//~ false, 0, -0, BigIn 0n, "", Null, undefine, NaA

//! truthy value
//~ "0", "false", " ", [], {}, function(){}

//! How to check Array 
// if (userEmail.length === 0){
//     console.log("Array is Empty");
// }

//! How to check Object
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log(" Object is Empty");
// }

//!  important notes  check in browser console
//^ false == 0 => Ans -> true     
//^ false == "" => Ans -> true     
//^ 0 == ""  => Ans -> true    

//! Nullish coalescing Operator (??)

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
//~ console.log(val1);


//! Terniary Operator

//^ Syntax ==>  condition ? true : false

const iceCreamPrice = 200;
iceCreamPrice <=150 ? console.log("Price less than 150") : console.log("Price more than 150");


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar