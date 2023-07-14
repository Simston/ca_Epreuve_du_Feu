const userString = "4 + 21 * (1 - 2 / 2) + 38";

const evaluateExpression = (string) => {
    // String to Array for calculate
    let resultArray = string.match(/(-?\d+|\+|\*|\/|%|\(|\)|-)/g);

    // Firstly treatment of parentheses
    let i = -1;
    while ((i = resultArray.indexOf("(", i + 1)) >= 0) {
        let secondParenthesis = resultArray.indexOf(")", i + 1);
        // Calculate and replace the parentheses with the result.
        resultArray.splice(i, secondParenthesis - i + 1, calculate(resultArray.slice(i + 1, secondParenthesis)));
    }
    return calculate(resultArray);
};

const calculate = (arrayOfOperation) => {
    let i = 0;

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

console.log(evaluateExpression(userString));
