//Function to pick a random choice
let pickRandomChoice = () => {
    const choicesInput = document.getElementById("choices");
    const resultElement = document.getElementById("result");
  
    //Get the choices from input field and split them into an array
    const choices = choicesInput.value.split(",").map((choice) => choice.trim());
  
    //Check if there are choicecs to pick from
    if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
      resultElement.textContent = "Please Enter Choices";
    }
  
    //Generate a random Index
    const randomIndex = Math.floor(Math.random() * choices.length);
  
    //Display the randomly selected choice
    const randomChoice = choices[randomIndex];
    resultElement.textContent = `Random Choice: ${randomChoice}`;
  };
  
  const pickButton = document.getElementById("pickButton");
  //Add an event listener to the button
  pickButton.addEventListener("click", pickRandomChoice);

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar