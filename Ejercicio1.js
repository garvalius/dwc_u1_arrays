// @ts-nocheck
let button1 = document.getElementById("Ejercicio_1_button");
button1.addEventListener("click", makeExercise);


function makeExercise() {
    const COLUMNS = 5;
    const ROWS = 3;

    print2DArray(makeArray(COLUMNS, ROWS));

    function makeArray(columns, rows) {
        let outputArray = Array.from(Array(rows), () => new Array(columns));
        for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
            for (let columnNumber = 0; columnNumber < columns; columnNumber++) {
                outputArray[rowNumber][columnNumber] = 'f' + (rowNumber + 1) + 'c' + (columnNumber + 1);
            }

        }

        return outputArray;
    }

    function print2DArray(inputArray) {
        inputArray.forEach(element => {
            let rowOutput = '';
            element.forEach(element => rowOutput += element + " | ");
            // Quitando el último separador
            console.log(rowOutput.slice(0, -1));
        }
        );

    }


}

