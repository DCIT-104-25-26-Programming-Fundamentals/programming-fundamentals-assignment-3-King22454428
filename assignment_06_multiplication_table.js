const readlineSync = require('readline-sync');

// Part A: Print a single multiplication table
function printSingleTable(number) {
    if (number <= 0) {
        console.log('Error: Number must be positive.');
        return;
    }

    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// Part B: Print multiplication tables from 1 to N
function printTablesUpToN(n) {
    if (n <= 0) {
        console.log('Error: Number must be positive.');
        return;
    }

    for (let number = 1; number <= n; number++) {
        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        if (number < n) {
            console.log('---------------------------');
        }
    }
}

// Main function
function main() {
    // Part A
    const number = readlineSync.questionInt(
        'Enter a number for the single multiplication table: '
    );

    printSingleTable(number);

    // Part B
    const n = readlineSync.questionInt(
        '\nEnter N for tables from 1 to N: '
    );

    printTablesUpToN(n);
}

main();