const readlineSync = require('readline-sync');

// Part A: Print the first N Fibonacci terms
function printFibonacciTerms(n) {
    if (n <= 0) {
        console.log('Error: Number of terms must be positive.');
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = '';

    for (let i = 0; i < n; i++) {
        sequence += first;

        if (i < n - 1) {
            sequence += ' ';
        }

        const next = first + second;
        first = second;
        second = next;
    }

    console.log(`Fibonacci sequence: ${sequence}`);
}

// Part B: Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        const next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// Main function
function main() {
    // Part A
    const n = readlineSync.questionInt('How many terms? ');

    printFibonacciTerms(n);

    // Part B
    const number = readlineSync.questionInt('Enter a number to check: ');

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

main();