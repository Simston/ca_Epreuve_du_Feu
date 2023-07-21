let tab1 = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 3, 3, 1]
];

let tab2 = [
    [1, 1],
    ["-", 1]
];

const findFormInTab = (board, boardForm) => {
    const result = []
    const boardFormCopy = boardForm;

    board.forEach((boardElements, boardElementsIndex) => {
        result.push([])
        const test2 = boardFormCopy[0]
        const test = []
        const result2 = []

        boardElements.forEach((boardElement, boardElementIndex) => {
            if (test2[0] === "-") {
                test2.shift()
                return result2.push("-");
            }

            if (!test2.length) {
                checkNextRow(board, boardFormCopy, boardElementsIndex, test)
                return result2.push("-");
            }

            if (boardElement === test2[0]) {
                test2.shift()
                result2.push(boardElement)
                return test.push(boardElementIndex)
            }

            result2.push("-")
        })

        result[boardElementsIndex].push(...result2)
    })

    console.log(result)
}

const checkNextRow = (board, boardForm, boardElementsIndex, findIndexes) => {
    const boardFormCopy = boardForm[1]
    findIndexes.forEach((findIndex, index) => {
        console.log(boardFormCopy[index], boardFormCopy)
        if (boardFormCopy[index] === "-") {
            return boardFormCopy.shift()
        }

        const boardElementToverify = board[boardElementsIndex + 1][findIndex]
        const formElement = boardForm[1][index]
        console.log(boardElementToverify, formElement)
    })
}

findFormInTab(tab1, tab2)