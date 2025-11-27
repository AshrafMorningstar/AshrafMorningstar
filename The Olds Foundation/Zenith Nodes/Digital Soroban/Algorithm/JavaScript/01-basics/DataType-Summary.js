

//  # Primitive DataType

// There are 7 types of Primitive Type
 
// 1: String, 2: Number , 3: Boolean, 4: Null 5: Undefined, 6: Symbol, 7: BigInt


const score = 100    //*string datatype   #typeofval = number
const scoreValue = 100.3    //*number datatype    # typeofval = number

const isLoggedIN = false    //* boolean datatype    # typeofval = boolean
const outSideTemp = null     //*null datatype  # typeofval = object
let userEmail;     //*undefined datatype    # typeofval = undefined
 
const id = Symbol('123')      //* symbol datatype     # typeofval = symbol
const anotherID = Symbol('123')
// console.log(id === anotherID);

const bigNUmber = 1234567412332445n     //* BigInt datatype     # typeofval = bignit

// console.log(typeof bigNUmber);




// # Reference (Non-Primitive DataType)

// There are 3 main type of Reference DataType

// 1: Array, 2: Object 3: Functions

// 1: Array 
const friends = ["Ankit", "Ashraf", "Damini"];

// 2: Object

let myObj = {
    name: "vikram",
    age: 23,
    email: "vikrampal038@gmail.com"
}

// 3:Function

const myFunction = function() {
    console.log("Hello World")
}
myFunction();

console.log(typeof myFunction );
console.log(typeof myObj );
console.log(typeof friends);


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar