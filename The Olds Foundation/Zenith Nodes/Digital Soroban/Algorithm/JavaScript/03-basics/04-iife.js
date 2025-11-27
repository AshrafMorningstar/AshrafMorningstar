// Immediately Invoked Function Expressions (IIFE) 

//  Global scope ke pulation se problem hoti hai kaye baar  toh hus global scope ke jo varibales ya jo bhi waha declaration hai huske polution ko hatane ke liye  hamne IIFE ka use karte hai
 
(function chai(){    // this is named IIFE  qki iska name hai
    console.log('DB Connected');
})();           //semiColum is very Important for this function


(  () =>{          // ye simple IIFE hai qki iska name nhi hai
    console.log("DB Connected Two");
})();


//  ab hai same function mey ek parameter pass karenge 

( (name) => {
    console.log(` Hello Mr. ${name}`);
    
})("Vikram Kumar Pal");

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar