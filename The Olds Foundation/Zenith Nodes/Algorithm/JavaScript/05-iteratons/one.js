//! For Loop

//!  Exmaple of For Loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 Is THe Best Number");
//     }
//     console.log(element);
// }


for (let i = 0; i <=5; i++) {
    // console.log(` Outer layer is ${i} ==>`);
    for (let j = 0; j <=10; j++) {
    // console.log(` Inner layer is ${j} and Outer layer is ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);   // top print table in shortcut way
    
    }    
}

//! lets play with Array
let myArray = ["vikram", "Aayushh", "Ashraf", "Irfan"];
    // console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//! Importance of key value 
//^ Break and Continue
//~ for loop for Break
for (let index = 1; index <= 20; index++) {
    if( index == 5){
        // console.log("Detected Number of 5");
        break;
    }
    // console.log(` Value if I is ${index}`);
  
}

//~ for loop for Continue
for (let index = 1; index <= 20; index++) {
    if( index == 5){
        // console.log("Detected Number of 5");
        continue;
    }
    // console.log(` Value if I is ${index}`);
  
}


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar