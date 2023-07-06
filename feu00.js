
const createSquare = (numberOfColumn, numberOfLine) => {
    const arrayOfResults = [];

    for(let i = 0; i < numberOfLine; i++){
        let saveStr = "";
        
        for(let j = 0; j < numberOfColumn ; j++){
            if(i === 0 || i === numberOfLine-1){
                if(j === 0 || j === numberOfColumn-1){
                    saveStr += 'o';
                }else{
                    saveStr += '-';
                }
            }else{
                if(j === 0 || j === numberOfColumn-1){
                    saveStr += '|';
                }else{
                    saveStr += ' ';
                }
            }
        }   
        arrayOfResults.push(saveStr);
    }
    console.log(arrayOfResults.join("\n"))
}

createSquare(15,4)