const fs = require('fs');
const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

function overlayForm(tab1, tab2) {
    let formWidth = tab2[0].length;
    let formHeight = tab2.length;
    let overlayPos = [-1, -1];

    // Trouver la position de superposition
    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab1[i].length; j++) {
            let matchFound = true;
            for (let k = 0; k < formHeight; k++) {
                for (let l = 0; l < formWidth; l++) {
                    const tab1Row = tab1[i + k];
                    const tab1Col = tab1Row[j + l];
                    const tab2Val = tab2[k][l];

                    if (tab2Val !== '-' && tab1Col !== tab2Val) {
                        matchFound = false;
                        break;
                    }
                }
                if (!matchFound) break;
            }
            if (matchFound) {
                overlayPos = [i, j];
                break;
            }
        }
        if (overlayPos[0] !== -1) break;
    }

    // Superposer tab2 sur tab1 et remplir les autres parties avec '-'
    let tabResult = [];
    for (let i = 0; i < tab1.length; i++) {
        let row = [];
        for (let j = 0; j < tab1[i].length; j++) {
            if (i >= overlayPos[0] && i < overlayPos[0] + formHeight && j >= overlayPos[1] && j < overlayPos[1] + formWidth) {
                const rowOffset = i - overlayPos[0];
                const colOffset = j - overlayPos[1];
                row.push(tab2[rowOffset][colOffset]);
            } else {
                row.push('-');
            }
        }
        tabResult.push(row);
    }
    return tabResult;
}

const readFileAndTransformToArrayData = (pathFile) => {
    try {
        const data = fs.readFileSync(pathFile, 'utf8');
        const linesArray = data.split(/\r?\n/);
        const charactersArray = linesArray.map(line => line.split("").map(char => (char === " " ? "-" : Number(char))));
        return charactersArray;
    } catch (err) {
        console.error(err);
    }
}

const hasMinArgsCount = myTools.checkArgumentCount(2, commandLineArgs)
if (!hasMinArgsCount) {
    console.log("Veuillez entrer 2 noms de fichiers.");
} else {
    // parsing
    let board = readFileAndTransformToArrayData("./" + commandLineArgs[2]);
    let formBoard = readFileAndTransformToArrayData("./" + commandLineArgs[3])
    console.log(overlayForm(board, formBoard));
}