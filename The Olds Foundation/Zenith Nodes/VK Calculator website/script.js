// Initialize display
const displayResult = document.getElementById('displayResult');
displayResult.value = '0';

// Maximum input length to prevent overflow
const MAX_INPUT_LENGTH = 20;

// Initialize parentheses counter
let parenthesesCount = 0;

function func(value) {
    if (displayResult.value === 'Error') {
        clearDisplay();
    }

    // Handle special cases for mathematical functions
    if (value.startsWith('Math.')) {
        if (displayResult.value === '0') {
            displayResult.value = value;
        } else {
            displayResult.value += value;
        }
        if (value.endsWith('(')) {
            parenthesesCount++;
        }
        return;
    }

    // Prevent multiple decimal points in a number
    if (value === '.' && displayResult.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }

    // Handle input length limit
    if (displayResult.value.length >= MAX_INPUT_LENGTH) {
        return;
    }

    if (displayResult.value === '0' && value !== '.') {
        displayResult.value = value;
    } else {
        displayResult.value += value;
    }
}

function clearDisplay() {
    displayResult.value = '0';
    parenthesesCount = 0;
}

function deleteLast() {
    if (displayResult.value === 'Error') {
        clearDisplay();
        return;
    }

    if (displayResult.value.length > 1) {
        // Update parentheses count if deleting a parenthesis
        if (displayResult.value.endsWith('(')) {
            parenthesesCount--;
        } else if (displayResult.value.endsWith(')')) {
            parenthesesCount++;
        }
        displayResult.value = displayResult.value.slice(0, -1);
    } else {
        displayResult.value = '0';
    }
}

function calculate() {
    try {
        // Add missing closing parentheses
        let expression = displayResult.value;
        while (parenthesesCount > 0) {
            expression += ')';
            parenthesesCount--;
        }

        // Replace × with * and ÷ with /
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        // Validate expression
        if (!/^[0-9+\-*/(). Math\w]+$/.test(expression)) {
            throw new Error('Invalid characters in expression');
        }

        // Calculate and format result
        let result = eval(expression);

        // Handle division by zero
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }

        // Format the result
        if (Number.isInteger(result)) {
            displayResult.value = result.toString();
        } else {
            displayResult.value = parseFloat(result.toFixed(8)).toString();
        }
    } catch (e) {
        displayResult.value = 'Error';
        setTimeout(clearDisplay, 2000);
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Prevent default behavior for calculator keys
    if (key.match(/[\d+\-*/.=Enter]/) || key === 'Backspace' || key === 'Escape') {
        event.preventDefault();
    }

    // Number keys and operators
    if (key.match(/[\d.]/)) {
        func(key);
    } else if (key.match(/[+\-*\/]/)) {
        func(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});  

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar