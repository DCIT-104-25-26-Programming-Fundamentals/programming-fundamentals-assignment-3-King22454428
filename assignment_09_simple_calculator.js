const readlineSync = require('readline-sync');

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    return a / b;
}

// Modulus
function modulus(a, b) {
    return a % b;
}

// Exponentiation
function exponentiate(a, b) {
    return a ** b;
}

// Display the calculator menu
function displayMenu() {
    console.log('\n============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

// Main function
function main() {
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt('Select an operation (1-7): ');

        if (choice === 7) {
            console.log('Goodbye!');
            break;
        }

        if (choice < 1 || choice > 7) {
            console.log('Error: Invalid menu choice. Please select 1-7.');
            continue;
        }

        const firstNumber = readlineSync.questionFloat(
            'Enter first number: '
        );

        const secondNumber = readlineSync.questionFloat(
            'Enter second number: '
        );

        let result;
        let operator;

        if (choice === 1) {
            result = add(firstNumber, secondNumber);
            operator = '+';
        } else if (choice === 2) {
            result = subtract(firstNumber, secondNumber);
            operator = '-';
        } else if (choice === 3) {
            result = multiply(firstNumber, secondNumber);
            operator = '*';
        } else if (choice === 4) {
            if (secondNumber === 0) {
                console.log('Error: Cannot divide by zero.');
                continue;
            }

            result = divide(firstNumber, secondNumber);
            operator = '/';
        } else if (choice === 5) {
            if (secondNumber === 0) {
                console.log('Error: Cannot calculate modulus with zero.');
                continue;
            }

            result = modulus(firstNumber, secondNumber);
            operator = '%';
        } else if (choice === 6) {
            result = exponentiate(firstNumber, secondNumber);
            operator = '**';
        }

        console.log(
            `Result: ${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`
        );

    } while (choice !== 7);
}

main();