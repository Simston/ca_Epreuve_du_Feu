const fs = require('fs');
const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const requireNumber = 9;

function sudokySolve(arr) {
    let count = 0;

    while (containsDot(arr)) {
        console.log("tour", count++)
        rowVerification(arr);
        colVerification(arr);
        squareVerification(arr)
    }
    console.log(arr.join('\n'));
}
function containsDot(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '.') {
                return true;
            }
        }
    }
    return false;
}

function squareVerification(arr) {
    let square = [];
    let missingIdx = [];

    // Parcourir les 3 groupes principaux de carrés verticalement
    for (let rowOffset = 0; rowOffset < 9; rowOffset += 3) {
        // Parcourir les 3 groupes principaux de carrés horizontalement
        for (let colOffset = 0; colOffset < 9; colOffset += 3) {
            square = [];
            missingIdx = [];

            // Parcourir l'intérieur de chaque carré
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Utilisez l'offset pour obtenir la valeur correcte à partir de arr
                    if (arr[i + rowOffset][j + colOffset] === '.') {
                        missingIdx.push(i + rowOffset, j + colOffset);
                    } else {
                        square.push(arr[i + rowOffset][j + colOffset]);
                    }
                }
            }
            if (square.length === (requireNumber - 1)) verifyLine(arr, square, missingIdx);
        }
    }
}

function colVerification(arr) {
    let col = [];
    let missingIdx = [];

    for (let j = 0; j < arr[0].length; j++) {
        col = [];
        missingIdx = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][j] === '.') missingIdx.push(i, j);
            else col.push(arr[i][j]);
        }
        if (col.length === (requireNumber - 1)) verifyLine(arr, col, missingIdx);
    }
}

function rowVerification(arr) {
    let line = [];
    let missingIdx = [];

    for (let i = 0; i < arr.length; i++) {
        line = [];
        missingIdx = [];

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '.') missingIdx.push(i, j);
            else line.push(arr[i][j]);
        }
        if (line.length === (requireNumber - 1)) verifyLine(arr, line, missingIdx);
    }
}

function verifyLine(arr, line, missingIdx) {
    let missNumber = findMissingNumber(line);
    arr[missingIdx[0]].splice(missingIdx[1], 1, missNumber)
    return arr;
}

function findMissingNumber(array) {
    array.sort((a, b) => a - b);
    if (array[0] === 2) return 1;
    else if (array[array.length - 1] === 8) return 9;

    for (let i = 0; i < array.length; i++) {
        if ((array[i + 1] - array[i]) > 1) return array[i] + 1;
    }
}

const readFileAndTransformToArrayData = (pathFile) => {
    try {
        const data = fs.readFileSync(pathFile, 'utf8');
        const linesArray = data.split(/\r?\n/);
        const charactersArray = linesArray.map(line => line.split("").map(char => (char === "." ? "." : Number(char))));
        return charactersArray;
    } catch (err) {
        console.error(err);
    }
}
const fileArray = readFileAndTransformToArrayData('s.txt')



sudokySolve(fileArray);