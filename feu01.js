const userString = "4 + 21 * (2 * 2 / 2) + (38)";

const evaluateExpression = (string) => {
    let resultArray = string.match(/[\d.]+|\+|\*|-|\/|%|\(|\)/g);
    firstTreatment(resultArray);
};

// Traitement dans un premier temps des Parenthèses faire le calcul
// et renvoyer le resultat pour remplacer les parethèses par le resultat calculer
const firstTreatment = (array) => {
    //let indexParenthesis = [];
    let i = -1;
    let cutIndex = 0;
    let extractOperation = [];

    while ((i = array.indexOf("(", i + 1)) >= 0) {
        //indexParenthesis.push(i);
        let secondParenthesis = array.indexOf(")", i + 1);
        extractOperation.push(array.slice(i + 1, secondParenthesis));
        //Faire le calcul ici a la place operation
        calculate(array.slice(i + 1, secondParenthesis));
        array.splice(i, secondParenthesis - i + 1, "operation");
        //indexParenthesis.push(array.indexOf(")", i+1));
    }
    //console.log(indexParenthesis)
    //console.log(extractOperation)
    //console.log(array)
};

const calculate = (arrayOfOperation) => {
    console.log(arrayOfOperation);

    while (arrayOfOperation.length > 1) {
        for (let i = 0; i < arrayOfOperation.length; i++) {
            switch (arrayOfOperation[i]) {
                case "*":
                    let multiply =
                        Number(arrayOfOperation[i - 1]) * Number(arrayOfOperation[i + 1]);
                    arrayOfOperation.splice(i - 1, 3, multiply.toString());
                    break;
                case "/":
                    let divide =
                        Number(arrayOfOperation[i - 1]) / Number(arrayOfOperation[i + 1]);
                    arrayOfOperation.splice(i - 1, 3, divide.toString());
                    break;
                case "%":
                    let modulo =
                        Number(arrayOfOperation[i - 1]) % Number(arrayOfOperation[i + 1]);
                    arrayOfOperation.splice(i - 1, 3, modulo.toString());
                    break;
            }
        }
    }
    console.log(arrayOfOperation);
};

evaluateExpression(userString);
