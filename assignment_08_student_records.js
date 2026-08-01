const readlineSync = require('readline-sync');

// Add a student
function addStudent(students) {
    const name = readlineSync.question('Student name: ');
    const id = readlineSync.questionInt('Student ID: ');
    const numberOfScores = readlineSync.questionInt('How many scores? ');

    if (name.trim() === '') {
        console.log('Error: Student name cannot be empty.');
        return;
    }

    if (numberOfScores <= 0) {
        console.log('Error: Number of scores must be positive.');
        return;
    }

    const scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// Calculate the average score
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Display all students
function displayAllStudents(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('\nStudent Records:');
    console.log('------------------------------------------------------------');

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(', ')}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log('------------------------------------------------------------');
    }
}

// Calculate average for a specific student
function calculateStudentAverage(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    const id = readlineSync.questionInt('Enter student ID: ');

    let foundStudent = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent === null) {
        console.log('Error: Student ID not found.');
        return;
    }

    const average = calculateAverage(foundStudent.scores);

    console.log(
        `${foundStudent.name}'s average score: ${average.toFixed(2)}`
    );
}

// Display the menu
function displayMenu() {
    console.log('\n================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

// Main function
function main() {
    const students = [];
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt('Enter your choice (1-4): ');

        if (choice === 1) {
            addStudent(students);
        } else if (choice === 2) {
            displayAllStudents(students);
        } else if (choice === 3) {
            calculateStudentAverage(students);
        } else if (choice === 4) {
            console.log('Goodbye!');
        } else {
            console.log('Error: Invalid choice. Please select 1-4.');
        }

    } while (choice !== 4);
}

main();