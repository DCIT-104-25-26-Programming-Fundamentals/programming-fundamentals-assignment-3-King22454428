const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, columns, name) {
    const matrix = [];

    console.log(`\nEnter elements for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row;

        while (true) {
            const input = readlineSync.question(`Enter row ${i + 1}: `);
            row = input.trim().split(/\s+/).map(Number);

            if (row.length !== columns || row.some(isNaN)) {
                console.log(`Error: Please enter exactly ${columns} numbers.`);
            } else {
                break;
            }
        }

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(6);
        }

        console.log(row);
    }
}

// Part A: Transpose a matrix
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < columns; j++) {
        const newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

// Part B: Add two matrices
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const newRow = [];

        for (let j = 0; j < columns; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(newRow);
    }

    return result;
}

// Part C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const newRow = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            newRow.push(sum);
        }

        result.push(newRow);
    }

    return result;
}

// Part A
function partA() {
    console.log('\n================================');
    console.log('PART A - Matrix Transpose');
    console.log('================================');

    const rows = readlineSync.questionInt('Enter number of rows: ');
    const columns = readlineSync.questionInt('Enter number of columns: ');

    if (rows <= 0 || columns <= 0) {
        console.log('Error: Matrix dimensions must be positive.');
        return;
    }

    const matrix = readMatrix(rows, columns, 'A');

    console.log('\nOriginal Matrix:');
    displayMatrix(matrix);

    const transpose = transposeMatrix(matrix);

    console.log('\nTransposed Matrix:');
    displayMatrix(transpose);
}

// Part B
function partB() {
    console.log('\n================================');
    console.log('PART B - Matrix Addition');
    console.log('================================');

    const rows = readlineSync.questionInt('Enter number of rows: ');
    const columns = readlineSync.questionInt('Enter number of columns: ');

    if (rows <= 0 || columns <= 0) {
        console.log('Error: Matrix dimensions must be positive.');
        return;
    }

    const matrixA = readMatrix(rows, columns, 'A');
    const matrixB = readMatrix(rows, columns, 'B');

    console.log('\nMatrix A:');
    displayMatrix(matrixA);

    console.log('\nMatrix B:');
    displayMatrix(matrixB);

    const result = addMatrices(matrixA, matrixB);

    console.log('\nResult of A + B:');
    displayMatrix(result);
}

// Part C
function partC() {
    console.log('\n================================');
    console.log('PART C - Matrix Multiplication');
    console.log('================================');

    const rowsA = readlineSync.questionInt(
        'Enter number of rows for Matrix A: '
    );

    const columnsA = readlineSync.questionInt(
        'Enter number of columns for Matrix A: '
    );

    const rowsB = readlineSync.questionInt(
        'Enter number of rows for Matrix B: '
    );

    const columnsB = readlineSync.questionInt(
        'Enter number of columns for Matrix B: '
    );

    if (rowsA <= 0 || columnsA <= 0 || rowsB <= 0 || columnsB <= 0) {
        console.log('Error: Matrix dimensions must be positive.');
        return;
    }

    if (columnsA !== rowsB) {
        console.log(
            'Error: Number of columns in Matrix A must equal number of rows in Matrix B.'
        );
        return;
    }

    const matrixA = readMatrix(rowsA, columnsA, 'A');
    const matrixB = readMatrix(rowsB, columnsB, 'B');

    console.log('\nMatrix A:');
    displayMatrix(matrixA);

    console.log('\nMatrix B:');
    displayMatrix(matrixB);

    const result = multiplyMatrices(matrixA, matrixB);

    console.log('\nResult of A x B:');
    displayMatrix(result);
}

// Main function
function main() {
    partA();
    partB();
    partC();
}

main();