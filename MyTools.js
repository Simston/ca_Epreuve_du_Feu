class MyTools {
  /**
   * Checks the number of expected arguments.
   * @param {number} expectedCountNumber - The expected number of arguments (integer).
   * @param {any[]} args - Arguments array to check.
   * @returns {boolean} - Returns true if the number of arguments matches, otherwise false.
   */
  checkArgumentCount(expectedCountNumber, args) {

    const ignoreInArray = 2;
    const countArgs = args.length - ignoreInArray;

    return expectedCountNumber === countArgs;
  }

  /**
  * Checks the minimum number of expected arguments.
  * @param {number} expectedCountNumber - The expected number of arguments (integer).
  * @param {any[]} args - Arguments array to check.
  * @returns {boolean} - Returns true if the number of expected args >=, otherwise false.
  */
  checkMinArgumentCount(expectedMinCountNumber, args) {

    const ignoreInArray = 2;
    const countArgs = args.length - ignoreInArray;

    return expectedMinCountNumber <= countArgs;
  }
  /**
     * Get the arguments Array without indesirable informations
     * @param {any[]} args - Arguments array to check.
     * @returns {[]} - Returns final array
     */
  getArgumentsIntoArray = args => {
    let inputArray = [];

    for (let i = 2; i < args.length; i++) {
      inputArray.push(args[i]);
    }

    return inputArray;
  }
  /**
   * Converts the arguments into an array of integers.
   * @param {Array} args - The arguments passed to the function.
   * @returns {Array|null} - The array of integers, or null if an argument is not a number.
   */
  getArgumentsIntoIntegerArray = args => {
    let inputArray = [];

    for (let i = 2; i < args.length; i++) {
      if (isNaN(parseInt(args[i]))) {
        return null;
      } else {
        inputArray.push(parseInt(args[i]));
      }
    }
    return inputArray;
  }

  /**
   * Checks if the character string does not contain numbers and special characters.
   * @param {string} string - The string to check.
   * @returns {boolean} - Returns true if the character string does not contain special characters and numbers.
   */
  isStringValid(string) {
    const specialCharsAndNumbers = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let specialCharsAndNumbersLength = specialCharsAndNumbers.length;
    let stringLength = string.length;

    for (let i = 0; i < stringLength; i++) {
      for (let y = 0; y < specialCharsAndNumbersLength; y++) {
        if (string[i] === specialCharsAndNumbers[y]) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Checks if the character string does not contain numbers.
   * @param {string} string - The string to check.
   * @returns {boolean} - Returns true if the character string does not contain numbers.
   */
  stringWithoutNumber(string) {
    const specialCharsAndNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let specialCharsAndNumbersLength = specialCharsAndNumbers.length;
    let stringLength = string.length;

    for (let i = 0; i < stringLength; i++) {
      for (let y = 0; y < specialCharsAndNumbersLength; y++) {
        if (string[i] === specialCharsAndNumbers[y]) {
          return false;
        }
      }
    }

    return true;
  }

  /**
    * Checks if the character string does not contain char and special characters.
    * @param {string} string - The string to check.
    * @returns {boolean} - Returns true if the character string does not contain special characters and chars.
    */
  isStringCountainOnlyNumbers(string) {
    const specialCharsAndNumbers = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let specialCharsAndNumbersLength = specialCharsAndNumbers.length;
    let stringLength = string.length;

    for (let i = 0; i < stringLength; i++) {
      for (let y = 0; y < specialCharsAndNumbersLength; y++) {
        if (string[i] === specialCharsAndNumbers[y]) {
          return false;
        }
      }
      for (let c = 0; c < capitalLetters.length; c++) {
        if (string[i] === capitalLetters[c] || string[i] === lowercaseLetters[c]) {
          return false;
        }
      }
    }
    return true;
  }
}

// Export de la classe pour une utilisation externe   
module.exports = MyTools;