const readlineSync = require('readline-sync');

// Function to determine the student's grade
function getGrade(score) {
    // Check if the score is outside the valid range
    if (score < 0 || score > 100) {
        return null;
    }

    // Determine the grade
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// Main function
function main() {
    const score = readlineSync.questionFloat('Enter student score (0-100): ');

    const grade = getGrade(score);

    if (grade === null) {
        console.log('Error: Score must be between 0 and 100.');
    } else {
        console.log(`Grade: ${grade}`);
    }
}

main();