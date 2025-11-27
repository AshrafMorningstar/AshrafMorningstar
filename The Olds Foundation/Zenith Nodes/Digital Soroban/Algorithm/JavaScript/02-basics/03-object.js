// Singleton
//object. create    this is also a one method for create obj method

//Object literals

// const mySym = Symbol("key1")    this is symbol method

const jsUser ={
    name: "vikram",
    age: 23,
    email: "vikrampal038@gmail.com",
    // [mySym]: "mykey1",       // mySym: "mykey1",   this is wrong method to define a symbol  //  [mySym]: "mykey1", this is write method 
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Friday"]
}

// console.log(jsUser.email);    // this is right but not a professional 
// console.log(jsUser["name"]);  // this is  right and professional method
// console.log(jsUser[mySym]);   // this is right method to assign a symbol method

jsUser.name = "Vikram pal";    // this is for change the value 
// console.log(jsUser["name"]);

// Object.freeze(jsUser);    // to freeze the value
// jsUser.email = "vikram038@gmail.com";     // to check the freeze method
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello User");
}
 
jsUser.greetingTwo = function(){
    console.log(`Helle Users My name is ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar