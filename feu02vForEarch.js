const tab1 = [
    [0, 0, 0, 0],
    [1, 1, 2, 2],
    [2, 3, 4, 1],
];

const tab2 = [
    ["-", 2],
    ["-", 1],
];

const firstElementInForm = (formBoard) => {
    let firstElement = null;

    formBoard.forEach((formRow) => {
        formRow.forEach((formCol) => {
            if (firstElement) return;

            if (formCol !== "-") {
                firstElement = formCol;
            }
        })
    })

    return firstElement;
}

const findFormInTab = (board, boardForm) => {
    let result = {
        startRow: null,
        startCol: null,
        form: []
    }

    const rowLengthBoard = board.length;
    const rowLengthBoardForm = boardForm.length;
    const colLengthBoardForm = boardForm?.[0]?.length;

    board.forEach((boardRow, rowId) => {
        result.form.push([]);

        boardRow.forEach((boardCol, colId) => {
            if (boardCol !== firstElementInForm(boardForm)) return;

            let isFormMatch = true;

            boardForm.forEach((formRow, formRowId) => {
                formRow.forEach((formCol, formColId) => {
                    const colLengthBoard = board[rowId].length;

                    const boardRowId = rowId + formRowId;
                    const boardColId = colId + formColId;

                    const isMatch = board?.[boardRowId]?.[boardColId] === formCol;
                    const isFormColSpace = formCol === "-"

                    if (
                        boardRowId >= rowLengthBoard ||
                        boardColId >= colLengthBoard ||
                        (!isMatch && !isFormColSpace)
                    ) {
                        isFormMatch = false
                    }
                })
            })

            if (isFormMatch) {
                result.startRow = rowId;
                result.startCol = colId;
            }
        })
    })

    if (result.startRow && result.startCol) {
        result.form = board.map((boardRow, boardRowId) => {
            return boardRow.map((_, boardColId) => {
                const formRowId = boardRowId - result.startRow;
                const formColId = boardColId - result.startCol;

                const isFormELement = formRowId >= 0 &&
                    formColId >= 0 &&
                    formRowId < rowLengthBoardForm &&
                    formColId < colLengthBoardForm

                if (isFormELement) {
                    return boardForm[formRowId][formColId];
                } else {
                    return '-'
                }
            })
        })
    }

    return result;
}

console.log(findFormInTab(tab1, tab2))