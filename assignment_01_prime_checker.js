const readlineSync = require('readline-sync');

// Function to check if a number is prime
function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // Check if the number has any divisor other than 1 and itself
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Main function
function main() {
    const number = readlineSync.questionInt('Enter a number: ');

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

main();