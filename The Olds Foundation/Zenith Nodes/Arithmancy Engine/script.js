const sumDisplay = document.querySelector('.sum');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let expression = "";
let resultShown = false;

// Function to update the displays
function updateDisplays() {
  sumDisplay.textContent = expression;
  if (!resultShown) {
    resultDisplay.textContent = expression === "" ? "0" : "";
  }
}

// Function to evaluate the expression
function evaluateExpression(expr) {
  try {
    // Replacing the special characters with proper math operations
    expr = expr
      .replace(/×/g, '*')    // Multiplication
      .replace(/−/g, '-')    // Subtraction
      .replace(/÷/g, '/')   // Division
      .replace(/π/g, Math.PI) // Pi
      .replace(/e/g, Math.E)  // Euler's constant
      .replace(/√/g, 'Math.sqrt') // Square root
      .replace(/\^/g, '**')   // Exponentiation
      .replace(/log/g, 'Math.log10')  // Logarithm base 10
      .replace(/sin/g, 'Math.sin')    // Sine
      .replace(/cos/g, 'Math.cos')    // Cosine
      .replace(/tan/g, 'Math.tan')    // Tangent
      .replace(/\(/g, '(')      // Open parentheses
      .replace(/\)/g, ')');     // Close parentheses

    // Evaluating the expression using `eval`
    const result = eval(expr);

    // Returning the result if it's a valid number, else return "Error"
    return isNaN(result) || !isFinite(result) ? "Error" : result;
  } catch (e) {
    // If there's an error in eval, return "Error"
    console.error('Error during evaluation:', e);
    return "Error";
  }
}

// Event listeners for all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();

    if (value === 'AC') {
      // Reset the expression and result
      expression = "";
      resultShown = false;
      resultDisplay.textContent = "0";
      sumDisplay.textContent = "";
    } else if (value === 'C') {
      // Clear the entire expression
      expression = "";
      resultShown = false;
      resultDisplay.textContent = "0";
      sumDisplay.textContent = "";
    } else if (value === '=') {
      // Evaluate the expression when equals sign is pressed
      const result = evaluateExpression(expression);
      resultDisplay.textContent = result;
      resultShown = true;

      // Log the result to the console as well
      console.log('Result:', result);
    } else if (value === 'DEL') {
      // Delete the last character from the expression when DEL is clicked
      expression = expression.slice(0, -1);
      resultShown = false;
      updateDisplays();
    } else {
      // If the result has been shown, reset the expression for a new calculation
      if (resultShown) {
        expression = "";
        resultShown = false;
      }
      // Append the clicked button value to the expression
      expression += value;
    }

    if (!resultShown) {
      updateDisplays();
    }
  });
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar