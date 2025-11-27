// Screen element reference
const screen = document.getElementById('displayResult');
screen.value = '0';

// Limit for input length
const INPUT_LIMIT = 20;

// Counter for open parentheses
let openParentheses = 0;

function handleInput(input) {
    if (screen.value === 'Error') {
        resetScreen();
    }

    // Handle special cases for math functions
    if (typeof input === 'string' && input.startsWith('Math.')) {
        if (screen.value === '0') {
            screen.value = input;
        } else {
            screen.value += input;
        }
        if (input.endsWith('(')) {
            openParentheses++;
        }
        return;
    }

    // Prevent multiple decimal points in a number
    if (input === '.' && screen.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }

    // Enforce input length limit
    if (screen.value.length >= INPUT_LIMIT) {
        return;
    }

    if (screen.value === '0' && input !== '.') {
        screen.value = input;
    } else {
        screen.value += input;
    }
}

function resetScreen() {
    screen.value = '0';
    openParentheses = 0;
}

function removeLastChar() {
    if (screen.value === 'Error') {
        resetScreen();
        return;
    }

    if (screen.value.length > 1) {
        // Adjust parentheses counter when removing parentheses
        if (screen.value.endsWith('(')) {
            openParentheses--;
        } else if (screen.value.endsWith(')')) {
            openParentheses++;
        }
        screen.value = screen.value.slice(0, -1);
    } else {
        screen.value = '0';
    }
}

function evaluateExpression() {
    try {
        // Auto-close any unclosed parentheses
        let expr = screen.value;
        while (openParentheses > 0) {
            expr += ')';
            openParentheses--;
        }

        // Replace symbols for multiplication and division
        expr = expr.replace(/×/g, '*').replace(/÷/g, '/');

        // Validate the expression
        if (!/^[0-9+\-*/(). Math\w]+$/.test(expr)) {
            throw new Error('Invalid input');
        }

        // Evaluate and format the result
        let result = eval(expr);

        // Handle division by zero
        if (!isFinite(result)) {
            throw new Error('Cannot divide by zero');
        }

        // Format the result
        if (Number.isInteger(result)) {
            screen.value = result.toString();
        } else {
            screen.value = parseFloat(result.toFixed(8)).toString();
        }
    } catch (err) {
        screen.value = 'Error';
        setTimeout(resetScreen, 2000);
    }
}

// Add keyboard functionality
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Prevent default actions for calculator keys
    if (key.match(/[\d+\-*/.=Enter]/) || key === 'Backspace' || key === 'Escape') {
        e.preventDefault();
    }

    // Handle input keys
    if (key.match(/[\d.]/)) {
        handleInput(key);
    } else if (key.match(/[+\-*\/]/)) {
        handleInput(key);
    } else if (key === 'Enter' || key === '=') {
        evaluateExpression();
    } else if (key === 'Backspace') {
        removeLastChar();
    } else if (key === 'Escape') {
        resetScreen();
    }
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar