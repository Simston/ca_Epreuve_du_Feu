const userString = "-4 + 21 * (3 - 2 * 6) + 38";

const evaluateExpression = (string) => {
    // Remplacer les nombres négatifs par une forme reconnaissable
    let resultArray = string.match(/[\d.]+|\+|\*|-|\/|%|\(|\)/g);
    resultArray = fixNegativeNumbers(resultArray);
    firstTreatment(resultArray);
};

const fixNegativeNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "-" && (i === 0 || isOperator(array[i - 1]))) {
            array.splice(i, 2, "-" + array[i + 1]);
        }
    }
    return array;
};

const isOperator = (str) => {
    return ["+", "*", "/", "%", "(", ")"].includes(str);
};


// Traitement dans un premier temps des Parenthèses faire le calcul
// et renvoyer le resultat pour remplacer les parethèses par le resultat calculer
const firstTreatment = (array) => {
    //let indexParenthesis = [];
    let i = -1;
    let extractOperation = [];

    while ((i = array.indexOf("(", i + 1)) >= 0) {
        //indexParenthesis.push(i);
        let secondParenthesis = array.indexOf(")", i + 1);
        extractOperation.push(array.slice(i + 1, secondParenthesis));
        //Faire le calcul ici a la place operation
        
        array.splice(i, secondParenthesis - i + 1, calculate(array.slice(i + 1, secondParenthesis)));

        
        //indexParenthesis.push(array.indexOf(")", i+1));
    }
    //console.log(indexParenthesis)
    //console.log(extractOperation)
    console.log(calculate(array))
};

const calculate = (arrayOfOperation) => {
    console.log(arrayOfOperation);
    let i =0;

    while (arrayOfOperation.length > 1) {
        for (i = 0; i < arrayOfOperation.length; i++) {
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

        for (i = 0; i < arrayOfOperation.length; i++) {
            switch (arrayOfOperation[i]) {
                case "+":
                    let add =
                        Number(arrayOfOperation[i - 1]) + Number(arrayOfOperation[i + 1]);
                    arrayOfOperation.splice(i - 1, 3, add.toString());
                    break;
                case "-":
                    let sous =
                        Number(arrayOfOperation[i - 1]) - Number(arrayOfOperation[i + 1]);
                    arrayOfOperation.splice(i - 1, 3, sous.toString());
                    break;
        }
    }
}
    return arrayOfOperation[0];
};

evaluateExpression(userString);