document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("input-value");
    const outputValue = document.getElementById("output-value");
  
    inputValue.addEventListener("input", function () {
      const inputText = inputValue.value;
      const characterCount = inputText.length;
      outputValue.innerText = characterCount < 10 ? "0" + characterCount : characterCount;
    });
  });
  

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar