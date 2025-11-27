

// const tinderUser = new Object()    // this is Singleton object

const tinderUser = {}                // this is not singleton object

tinderUser.Id = "12345"
tinderUser.Name = "vikram pal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullName:{
        userFullName :{
            firstName:'Vikram',
            lastName: "Pal"
        },
        email: "vikrampal038@gmail.com",
        password: "Vikrampal038"
    }
}

// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName?.userFullName)     // About this we will discuss in future 
// console.log(regularUser.fullName.userFullName.firstName);    // To excess specific detail



const obj1 = { A: "1", B: "2"}
const obj2 = { E: "6", H: "8"}
const obj3 = { P: "2", N: "5"}

// console.log(obj1, obj2, obj3);       // normal way to excess the value
// const obj4 = Object.assign( {}, obj1, obj2, obj3)    // assign Operater to Excess the value
const obj4 = {...obj1, ...obj2, ...obj3}                // Spread Operater to Excess the value 
// console.log(obj4);


const users = [
    {
        Id: "1001",
        Email: "Vikrampal038@gmail.com",
    },
    {
        Id: "1002",
        Email: "Vikramkumar009@gmail.com"
    },
    {
        Id: 1003,
        Email: "Vikramyadav087@gmail.com"
    },

]

 users[2].Email
//  console.log(tinderUser); // To Excess the tinderUSer

// console.log(Object.keys(tinderUser));     // To Excess the Keys
// console.log(Object.values(tinderUser));   //  To Excess the Values
// console.log(Object.entries(tinderUser));  // To excess the entries
// console.log(tinderUser.hasOwnProperty("isLogged"));   // to know the particular property Exist or nor the answer is come in boolena datatype


const course = {
    CourseName: "JavaScript",
    Course_Fees: 1999,
    Course_Duration: " 1 Year",
    Course_Instructor: "Hitesh Chaudary"
}

// console.log(course.Course_Duration);      // This is Normal Way to Print

const {Course_Duration} = course    // This method used to print multiple time same obj print
// console.log(Course_Duration);

// In case mujhe ye name bhut badha lag rhaa hai toh mujhe husko chodta karna hai huske liye second method use hoga which is 

const {Course_Duration: Duration} = course   // Is method ko use karke ham apne log name ko short use kar sakte hai...
// console.log(Duration);


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar