let tab1 = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 3, 3, 1]];

let tab2 = [
    [1, 1, 1],
    ["-", "-", 1]];
let tabResult = [];

let formWidth = tab2[0].length;
let formHeight = tab2.length;
let count = 0;
let found = false;
let indexK = 0;

const findForm = () => {
    for (let i = 0; i < tab1.length; i++) {
        let tabCompare = [];

        console.log(tab1[i] + "Premiere boucle")

        for (let j = 0; j < tab1[i].length; j++) {
            found = false;

            for (let k = 0; k < formHeight; k++) {
                indexK = k;
                for (let l = 0; l < tab2[k].length; l++) {
                    console.log(tabCompare)
                    if (tab1[i][j] === tab2[k][l]) {
                        found = true;
                    }
                }

                if (found && formWidth === count) {

                    let nextLineOfTab1 = tab1[i + 1];
                    console.log(nextLineOfTab1)
                    let nextLineOfTab2 = tab2[indexK + 1];
                    console.log(nextLineOfTab2)

                    if (nextLineOfTab1 !== undefined) {
                        verifyNextLine(nextLineOfTab1, nextLineOfTab2, tabCompare, j);

                    }
                    console.log(tabCompare + " test retour");
                }
            }
            //console.log(indexesCompare)

            if (found) {
                count += 1;
                tabCompare.push(tab1[i][j]);
                console.log(tabCompare)
            } else {
                tabCompare.push('-');
                console.log(tabCompare);
            }
        }

        tabResult.push(tabCompare);
    }

    console.log(tabResult);

}

const verifyNextLine = (nextLineA, nextLineB, tabCompare, indexPosJ) => {
    let tempSecondJ = indexPosJ;
    console.log(indexPosJ + " JJJJJJJ")
    indexPosJ = indexPosJ - nextLineB.length;
    console.log(nextLineB.length + " index pos j")
    for (let i = 0; i < nextLineB.length; i++) {
        console.log(nextLineA[i + indexPosJ] + "verif en cours de TAB1 I J");
        console.log(nextLineB[i])
        if (nextLineA[i + indexPosJ] !== nextLineB[i] && nextLineB[i] !== "-") {
            count = 0;
            found = false;
            console.log(tabCompare + "  TABCOMPARE")
            tabCompare = resetTab(tabCompare, tempSecondJ);
            console.log("BRO")
        } else {
            console.log("LALA")

            found = true;
        }
    }
    if (found) {
        return found;
    } else {
        return tabCompare
    }
}

const resetTab = (array, indexJ) => {

    for (let i = 0; i < indexJ; i++) {
        array.splice(i, 1, "0");
    }
    console.log(array + " array")
    return array;
}


findForm();