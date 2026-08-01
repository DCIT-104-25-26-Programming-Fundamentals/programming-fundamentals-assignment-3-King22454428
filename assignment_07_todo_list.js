const readlineSync = require('readline-sync');

// Add a task
function addTask(tasks) {
    const task = readlineSync.question('Enter task: ');

    if (task.trim() === '') {
        console.log('Error: Task cannot be empty.');
        return;
    }

    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// View all tasks
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log('Your task list is empty.');
        return;
    }

    console.log('\nYour Tasks:');

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Delete a task
function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log('There are no tasks to delete.');
        return;
    }

    viewTasks(tasks);

    const taskNumber = readlineSync.questionInt(
        'Enter task number to delete: '
    );

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log('Error: Invalid task number.');
        return;
    }

    const deletedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${deletedTask}" has been removed.`);
}

// Display the menu
function displayMenu() {
    console.log('\n============================');
    console.log('     TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');
}

// Main function
function main() {
    const tasks = [];
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt('Enter your choice (1-4): ');

        if (choice === 1) {
            addTask(tasks);
        } else if (choice === 2) {
            viewTasks(tasks);
        } else if (choice === 3) {
            deleteTask(tasks);
        } else if (choice === 4) {
            console.log('Goodbye!');
        } else {
            console.log('Error: Invalid choice. Please select 1-4.');
        }

    } while (choice !== 4);
}

main();