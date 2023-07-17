let tab1 = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 3, 3, 1]];
let tab2 = [[1, 1], [1]];
let tabResult = [];


let formWidth = tab2[0].length;
let formHeight = tab2.length;
let count = 0;

const findForm = () => {
    for (let i = 0; i < tab1.length; i++) {
        let tabCompare = [];

        console.log(tab1[i] + "Premiere boucle")

        for (let j = 0; j < tab1[i].length; j++) {
            let found = false;
            let indexesCompare = 0; // Utilisation d'un tableau pour stocker les index correspondants

            for (let k = 0; k < formHeight; k++) {
                for (let l = 0; l < tab2[k].length; l++) {
                    if (found && formWidth === count) {
                        console.log("TOTO")
                        console.log(count)
                        if (tab1[i + 1][l] === tab2[k][l]) {
                            console.log(tab1[i + 1][l] + "brolala");
                            count = 0;
                        } else {
                            found = false;
                        }
                    } else if (tab1[i][j] === tab2[k][l]) {
                        found = true;
                        indexesCompare = j; // Stocker l'index correspondant dans le tableau indexesCompare
                    }
                }
            }
            //console.log(indexesCompare)
            if (found) {
                tabCompare.push(tab1[i][j]);
                count += 1;
                console.log(tabCompare)
            } else {
                tabCompare.push('-');
            }
        }

        tabResult.push(tabCompare);
    }

    console.log(tabResult);

}
findForm();