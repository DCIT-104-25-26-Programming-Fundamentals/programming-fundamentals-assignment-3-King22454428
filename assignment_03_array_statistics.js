const readlineSync = require('readline-sync');

// Function to calculate the sum
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate the average
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Function to find the maximum value
function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

// Function to find the minimum value
function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

// Main function
function main() {
    const n = readlineSync.questionInt('How many numbers? ');

    // Check that N is positive
    if (n <= 0) {
        console.log('Error: Number of values must be positive.');
        return;
    }

    const numbers = [];

    // Read numbers from the user
    for (let i = 0; i < n; i++) {
        const number = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(number);
    }

    // Calculate results
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const maximum = findMaximum(numbers);
    const minimum = findMinimum(numbers);

    // Display results
    console.log('\nResults:');
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${maximum}`);
    console.log(`Minimum: ${minimum}`);
}

main();