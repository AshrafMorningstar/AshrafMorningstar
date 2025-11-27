const Marval_Heroes = ["spiderMan", "IronMan", "Thor", "Hulk"];
const dc_Heroes= ["superman", "batman", "wonderman"];

Marval_Heroes.concat(dc_Heroes);

// console.log(Marval_Heroes);
// console.log(Marval_Heroes[4][2]);

// concat Operator
const allHeroes = Marval_Heroes.concat(dc_Heroes);
// console.log(allHeroes);


//  spread Operator
// concat Operator and spread Operator both are used to join the arrays but in the spread operator we can add the values in the array and in the concat operator we can not add the values in the array and comparing to concat the spread operator is faster and better and most used in the world.

const myHeroes = [...Marval_Heroes, ...dc_Heroes];
// console.log(myHeroes);



//  Flatten Operators
//to flatten the array its mean to remove the extra arrays in the array and all values add a one array.

const anotherArray = [1,2,3,4,5,[5,6,7,8,[8,9,4,6,10,[5,8,7,6]]]];
const new_anotherArray = anotherArray.flat(Infinity);
// console.log(new_anotherArray);

// console.log((Array.isArray("Vikram Pal")));  // output is because because this is not an array
// console.log(Array.isArray([1,2,3,4,5]));   // output is True because this is an array
// console.log((Array.from("Vikram Pal")));  
// console.log((Array.from({name: "Aayush Pal"})));  // interesting Array 


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // output is [100, 200, 300] because this is an array
// console.log(Array.of("Vikram Pal")); // output is ["Vikram Pal"] because this is an array





// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar